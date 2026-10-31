BEGIN;

DROP POLICY IF EXISTS "Allow public to read newsletter subscriptions"
  ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Allow public to insert newsletter subscriptions"
  ON public.newsletter_subscriptions;

REVOKE ALL ON public.newsletter_subscriptions FROM PUBLIC, anon, authenticated;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Enforce new writes without deleting or rewriting existing subscriber records.
ALTER TABLE public.newsletter_subscriptions
  ADD CONSTRAINT newsletter_email_format CHECK (
    octet_length(email) <= 254
    AND email = btrim(email)
    AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  ) NOT VALID;

CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;

CREATE TABLE private.newsletter_rate_limit (
  id BOOLEAN PRIMARY KEY DEFAULT true CHECK (id),
  window_started_at TIMESTAMPTZ NOT NULL,
  attempts INTEGER NOT NULL CHECK (attempts BETWEEN 1 AND 100)
);
ALTER TABLE private.newsletter_rate_limit ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.newsletter_rate_limit FROM PUBLIC, anon, authenticated;

CREATE FUNCTION public.subscribe_newsletter(p_email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_email TEXT := pg_catalog.lower(pg_catalog.btrim(p_email));
  v_now TIMESTAMPTZ := pg_catalog.clock_timestamp();
  v_attempts INTEGER;
BEGIN
  IF v_email IS NULL OR pg_catalog.octet_length(v_email) > 254
    OR v_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' THEN
    RAISE EXCEPTION 'Invalid email format' USING ERRCODE = '22023';
  END IF;

  -- One bounded row and an atomic update share the cap across all function instances.
  INSERT INTO private.newsletter_rate_limit AS limiter (id, window_started_at, attempts)
  VALUES (true, v_now, 1)
  ON CONFLICT (id) DO UPDATE
    SET window_started_at = CASE
          WHEN limiter.window_started_at <= v_now - INTERVAL '1 hour'
          THEN v_now ELSE limiter.window_started_at END,
        attempts = CASE
          WHEN limiter.window_started_at <= v_now - INTERVAL '1 hour'
          THEN 1 ELSE limiter.attempts + 1 END
    WHERE limiter.window_started_at <= v_now - INTERVAL '1 hour'
      OR limiter.attempts < 100
  RETURNING attempts INTO v_attempts;

  IF v_attempts IS NULL THEN
    RETURN false;
  END IF;

  -- Preserve existing unsubscribed records and handle historical mixed-case emails.
  IF NOT EXISTS (
    SELECT 1 FROM public.newsletter_subscriptions
    WHERE pg_catalog.lower(pg_catalog.btrim(email)) = v_email
  ) THEN
    INSERT INTO public.newsletter_subscriptions (email) VALUES (v_email)
    ON CONFLICT (email) DO NOTHING;
  END IF;

  RETURN true;
END;
$$;

REVOKE ALL ON FUNCTION public.subscribe_newsletter(TEXT) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.subscribe_newsletter(TEXT) TO service_role;

COMMIT;
