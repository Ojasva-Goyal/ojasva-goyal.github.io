export async function getSubscriptionErrorMessage(response: Response): Promise<string> {
  const fallback = response.status === 429
    ? "Too many subscription requests. Please try again in an hour."
    : `Subscription request failed (HTTP ${response.status}). Please try again later.`;

  try {
    const body: unknown = await response.json();
    if (typeof body === 'object' && body !== null &&
      'error' in body && typeof body.error === 'string' &&
      body.error.trim().length > 0 && body.error.length <= 300) {
      return body.error;
    }
  } catch {
    console.error('Unable to read subscription error response', { status: response.status });
  }
  return fallback;
}
