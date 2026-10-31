-- Run only against a disposable database after applying both newsletter migrations.
BEGIN;

TRUNCATE public.newsletter_subscriptions, private.newsletter_rate_limit;
INSERT INTO public.newsletter_subscriptions (email, status)
VALUES ('Existing@Example.com', 'unsubscribed');

SET LOCAL ROLE anon;
DO $test$
BEGIN
  BEGIN
    PERFORM * FROM public.newsletter_subscriptions;
    RAISE EXCEPTION 'Anonymous SELECT should be denied';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
  BEGIN
    INSERT INTO public.newsletter_subscriptions (email) VALUES ('attacker@example.com');
    RAISE EXCEPTION 'Anonymous INSERT should be denied';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
  BEGIN
    UPDATE public.newsletter_subscriptions SET status = 'active';
    RAISE EXCEPTION 'Anonymous UPDATE should be denied';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
  BEGIN
    DELETE FROM public.newsletter_subscriptions;
    RAISE EXCEPTION 'Anonymous DELETE should be denied';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
  BEGIN
    PERFORM public.subscribe_newsletter('attacker@example.com');
    RAISE EXCEPTION 'Anonymous RPC should be denied';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
  BEGIN
    PERFORM * FROM private.newsletter_rate_limit;
    RAISE EXCEPTION 'Anonymous rate-limit access should be denied';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
END;
$test$;

SET LOCAL ROLE authenticated;
DO $test$
BEGIN
  BEGIN
    PERFORM * FROM public.newsletter_subscriptions;
    RAISE EXCEPTION 'Authenticated SELECT should be denied';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
  BEGIN
    INSERT INTO public.newsletter_subscriptions (email) VALUES ('attacker@example.com');
    RAISE EXCEPTION 'Authenticated INSERT should be denied';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
  BEGIN
    PERFORM public.subscribe_newsletter('attacker@example.com');
    RAISE EXCEPTION 'Authenticated RPC should be denied';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
END;
$test$;

SET LOCAL ROLE service_role;
DO $test$
BEGIN
  IF public.subscribe_newsletter(' User@Example.com ') IS DISTINCT FROM true
    OR public.subscribe_newsletter('user@example.com') IS DISTINCT FROM true
    OR public.subscribe_newsletter('existing@example.com') IS DISTINCT FROM true THEN
    RAISE EXCEPTION 'Valid and duplicate requests must return the same success value';
  END IF;
  BEGIN
    PERFORM public.subscribe_newsletter(NULL);
    RAISE EXCEPTION 'NULL email should be denied';
  EXCEPTION WHEN invalid_parameter_value THEN NULL;
  END;
  BEGIN
    PERFORM public.subscribe_newsletter('invalid');
    RAISE EXCEPTION 'Invalid email should be denied';
  EXCEPTION WHEN invalid_parameter_value THEN NULL;
  END;
  BEGIN
    PERFORM public.subscribe_newsletter(repeat('a', 243) || '@example.com');
    RAISE EXCEPTION '255-byte email should be denied';
  EXCEPTION WHEN invalid_parameter_value THEN NULL;
  END;
  IF public.subscribe_newsletter(repeat('a', 242) || '@example.com') IS DISTINCT FROM true THEN
    RAISE EXCEPTION '254-byte email should be accepted';
  END IF;
END;
$test$;

RESET ROLE;
DO $test$
BEGIN
  IF (SELECT count(*) FROM public.newsletter_subscriptions) <> 3
    OR (SELECT status FROM public.newsletter_subscriptions WHERE email = 'Existing@Example.com') <> 'unsubscribed'
    OR NOT EXISTS (SELECT 1 FROM public.newsletter_subscriptions WHERE email = 'user@example.com') THEN
    RAISE EXCEPTION 'Normalization, deduplication or unsubscribe preservation failed';
  END IF;
  BEGIN
    INSERT INTO public.newsletter_subscriptions (email) VALUES ('invalid');
    RAISE EXCEPTION 'Database constraint should reject malformed emails';
  EXCEPTION WHEN check_violation THEN NULL;
  END;
END;
$test$;

TRUNCATE public.newsletter_subscriptions, private.newsletter_rate_limit;
SET LOCAL ROLE service_role;
DO $test$
BEGIN
  FOR i IN 1..100 LOOP
    IF public.subscribe_newsletter('user' || i || '@example.com') IS DISTINCT FROM true THEN
      RAISE EXCEPTION 'Request % should be allowed', i;
    END IF;
  END LOOP;
  IF public.subscribe_newsletter('user101@example.com') IS DISTINCT FROM false
    OR public.subscribe_newsletter('user1@example.com') IS DISTINCT FROM false THEN
    RAISE EXCEPTION 'Both new and duplicate requests must be denied at the cap';
  END IF;
END;
$test$;

RESET ROLE;
DO $test$
BEGIN
  IF (SELECT count(*) FROM public.newsletter_subscriptions) <> 100
    OR (SELECT attempts FROM private.newsletter_rate_limit) <> 100
    OR (SELECT count(*) FROM private.newsletter_rate_limit) <> 1 THEN
    RAISE EXCEPTION 'Rate limit must bound both writes and limiter storage';
  END IF;
END;
$test$;
UPDATE private.newsletter_rate_limit SET window_started_at = now() - INTERVAL '1 hour 1 second';
SET LOCAL ROLE service_role;
DO $test$
BEGIN
  IF public.subscribe_newsletter('after-reset@example.com') IS DISTINCT FROM true THEN
    RAISE EXCEPTION 'Expired window should permit signup again';
  END IF;
END;
$test$;

RESET ROLE;
DO $test$
BEGIN
  IF (SELECT attempts FROM private.newsletter_rate_limit) <> 1 THEN
    RAISE EXCEPTION 'Expired window should reset attempts to one';
  END IF;
END;
$test$;
ROLLBACK;
