const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const maxBodyBytes = 1024;
const successResponse = {
  success: true,
  message: "Your subscription request has been received.",
  redirect_url: "https://medium.com/@ojasvagoyal9",
};

type Subscribe = (email: string) => Promise<boolean>;

function json(body: object, status = 200, headers: HeadersInit = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

export function createHandler(subscribe: Subscribe) {
  return async (req: Request): Promise<Response> => {
    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    if (req.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, { Allow: "POST, OPTIONS" });
    }
    if (req.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
      return json({ error: "Content-Type must be application/json" }, 415);
    }
    if (!req.body) {
      return json({ error: "Email is required" }, 400);
    }

    let payload: unknown;
    const reader = req.body.getReader();
    try {
      const chunks: Uint8Array[] = [];
      let size = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > maxBodyBytes) {
          await reader.cancel();
          return json({ error: "Request body is too large" }, 413);
        }
        chunks.push(value);
      }
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.byteLength;
      }
      payload = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
    } catch {
      return json({ error: "Invalid JSON request body" }, 400);
    } finally {
      reader.releaseLock();
    }

    if (typeof payload !== "object" || payload === null ||
      !("email" in payload) || typeof payload.email !== "string") {
      return json({ error: "Email must be a string" }, 400);
    }
    const email = payload.email.trim().toLowerCase();
    if (new TextEncoder().encode(email).byteLength > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(email)) {
      return json({ error: "Invalid email format" }, 400);
    }

    try {
      if (!await subscribe(email)) {
        return json(
          { error: "Too many subscription requests. Please try again in an hour." },
          429,
          { "Retry-After": "3600" },
        );
      }
      return json(successResponse);
    } catch {
      // Do not log database messages or request bodies: they may contain addresses.
      console.error("Newsletter subscription storage failed");
      return json({ error: "Failed to subscribe. Please try again later." }, 500);
    }
  };
}
