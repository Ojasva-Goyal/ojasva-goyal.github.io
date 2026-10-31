import { createHandler } from "./handler.ts";

function assertEquals(actual: unknown, expected: unknown) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function request(body: unknown) {
  return new Request("https://example.com/subscribe-newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

Deno.test("normalizes addresses and returns a generic, non-cacheable response", async () => {
  const emails: string[] = [];
  const handler = createHandler(async (email) => {
    emails.push(email);
    return true;
  });
  const first = await handler(request({ email: " User@Example.com " }));
  const duplicate = await handler(request({ email: "user@example.com" }));
  assertEquals(emails, ["user@example.com", "user@example.com"]);
  assertEquals(first.status, 200);
  assertEquals(duplicate.status, 200);
  assertEquals(first.headers.get("cache-control"), "no-store");
  assertEquals(await first.json(), await duplicate.json());
});

Deno.test("rejects non-string, malformed, and oversized email values without storage", async () => {
  let calls = 0;
  const handler = createHandler(async () => {
    calls++;
    return true;
  });
  for (const body of [
    null, [], {}, { email: null }, { email: 42 }, { email: ["user@example.com"] },
    { email: "" }, { email: "invalid" }, { email: "user name@example.com" },
    { email: "user@@example.com" }, { email: "user@example.com\nanother@example.com" },
    { email: `${"a".repeat(243)}@example.com` },
    { email: `${"é".repeat(122)}@example.com` },
  ]) {
    const response = await handler(request(body));
    assertEquals(response.status, 400);
    await response.body?.cancel();
  }
  assertEquals(calls, 0);
});

Deno.test("accepts the 254-byte email boundary", async () => {
  let calls = 0;
  const handler = createHandler(async () => {
    calls++;
    return true;
  });
  const response = await handler(request({ email: `${"a".repeat(242)}@example.com` }));
  assertEquals(response.status, 200);
  await response.body?.cancel();
  assertEquals(calls, 1);
});

Deno.test("handles CORS and rejects unsupported methods and content types", async () => {
  let calls = 0;
  const handler = createHandler(async () => {
    calls++;
    return true;
  });
  for (const [method, status] of [["OPTIONS", 204], ["GET", 405], ["DELETE", 405]] as const) {
    const response = await handler(new Request("https://example.com", { method }));
    assertEquals(response.status, status);
    assertEquals(response.headers.get("access-control-allow-origin"), "*");
    await response.body?.cancel();
  }
  const response = await handler(new Request("https://example.com", {
    method: "POST", body: "{}",
  }));
  assertEquals(response.status, 415);
  await response.body?.cancel();
  assertEquals(calls, 0);
});

Deno.test("rejects missing and malformed JSON bodies", async () => {
  const handler = createHandler(async () => {
    throw new Error("Storage must not run");
  });
  for (const body of [undefined, "{invalid"]) {
    const response = await handler(new Request("https://example.com", {
      method: "POST", headers: { "Content-Type": "application/json" }, body,
    }));
    assertEquals(response.status, 400);
    await response.body?.cancel();
  }
});

Deno.test("enforces the 1024-byte body boundary regardless of Content-Length", async () => {
  let calls = 0;
  const handler = createHandler(async () => {
    calls++;
    return true;
  });
  const body = JSON.stringify({ email: "user@example.com" });
  for (const size of [1024, 1025]) {
    const response = await handler(new Request("https://example.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Content-Length": "1" },
      body: body.padEnd(size),
    }));
    assertEquals(response.status, size === 1024 ? 200 : 413);
    await response.body?.cancel();
  }
  assertEquals(calls, 1);
});

Deno.test("counts bytes across chunks and cancels oversized streams", async () => {
  let cancelled = false;
  let calls = 0;
  const handler = createHandler(async () => {
    calls++;
    return true;
  });
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(new Uint8Array(700));
      controller.enqueue(new Uint8Array(325));
    },
    cancel() { cancelled = true; },
  });
  const response = await handler(new Request("https://example.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: stream,
  }));
  assertEquals(response.status, 413);
  await response.body?.cancel();
  assertEquals(cancelled, true);
  assertEquals(calls, 0);
});

Deno.test("returns an explicit retry response when the shared cap is reached", async () => {
  const response = await createHandler(async () => false)(request({ email: "user@example.com" }));
  assertEquals(response.status, 429);
  assertEquals(response.headers.get("retry-after"), "3600");
  assertEquals(await response.json(), {
    error: "Too many subscription requests. Please try again in an hour.",
  });
});

Deno.test("storage failures are errors, and neither logs nor responses expose PII", async () => {
  const logs: unknown[][] = [];
  const originalError = console.error;
  console.error = (...args: unknown[]) => { logs.push(args); };
  try {
    const response = await createHandler(async () => {
      throw new Error("Database error containing private@example.com");
    })(request({ email: "user@example.com" }));
    assertEquals(response.status, 500);
    assertEquals(await response.json(), { error: "Failed to subscribe. Please try again later." });
    assertEquals(logs, [["Newsletter subscription storage failed"]]);
  } finally {
    console.error = originalError;
  }
});
