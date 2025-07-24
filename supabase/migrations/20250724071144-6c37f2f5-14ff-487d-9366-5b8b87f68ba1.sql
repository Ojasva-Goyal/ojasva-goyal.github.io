-- Create newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed'))
);

-- Enable RLS
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insertions (for newsletter signup)
CREATE POLICY "Allow public to insert newsletter subscriptions"
ON public.newsletter_subscriptions
FOR INSERT
WITH CHECK (true);

-- Create policy to allow reading for admin purposes (optional)
CREATE POLICY "Allow public to read newsletter subscriptions"
ON public.newsletter_subscriptions
FOR SELECT
USING (true);

-- Create index for better performance
CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_subscriptions_created_at ON public.newsletter_subscriptions(created_at DESC);