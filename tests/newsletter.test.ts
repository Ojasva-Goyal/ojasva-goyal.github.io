import { getSubscriptionErrorMessage } from "../src/lib/newsletter.ts";

function assertEquals(actual: unknown, expected: unknown) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

Deno.test("displays descriptive function errors for validation, limits and storage failures", async () => {
  for (const [status, error] of [
    [400, "Invalid email format"],
    [413, "Request body is too large"],
    [429, "Too many subscription requests. Please try again in an hour."],
    [500, "Failed to subscribe. Please try again later."],
  ] as const) {
    const response = Response.json({ error }, { status });
    assertEquals(await getSubscriptionErrorMessage(response), error);
  }
});

Deno.test("shows HTTP status for gateway errors without a recognized error field", async () => {
  for (const status of [401, 403, 404, 503]) {
    const response = Response.json({ code: status, message: "Gateway failure" }, { status });
    assertEquals(
      await getSubscriptionErrorMessage(response),
      `Subscription request failed (HTTP ${status}). Please try again later.`,
    );
  }
});

Deno.test("rejects unrecognized, empty and excessively long error messages", async () => {
  for (const body of [
    null, [], {}, { error: 400 }, { error: {} }, { error: ["bad request"] },
    { error: "" }, { error: "   " }, { error: "x".repeat(301) },
  ]) {
    assertEquals(
      await getSubscriptionErrorMessage(Response.json(body, { status: 400 })),
      "Subscription request failed (HTTP 400). Please try again later.",
    );
  }
  const boundary = "x".repeat(300);
  assertEquals(
    await getSubscriptionErrorMessage(Response.json({ error: boundary }, { status: 400 })),
    boundary,
  );
});

Deno.test("retains a helpful rate-limit message for an unrecognized JSON response", async () => {
  assertEquals(
    await getSubscriptionErrorMessage(Response.json({}, { status: 429 })),
    "Too many subscription requests. Please try again in an hour.",
  );
});

Deno.test("malformed responses produce status-specific errors and privacy-safe diagnostics", async () => {
  const logs: unknown[][] = [];
  const originalError = console.error;
  console.error = (...args: unknown[]) => { logs.push(args); };
  try {
    assertEquals(
      await getSubscriptionErrorMessage(new Response("Not JSON", { status: 503 })),
      "Subscription request failed (HTTP 503). Please try again later.",
    );
    assertEquals(
      await getSubscriptionErrorMessage(new Response("Not JSON", { status: 429 })),
      "Too many subscription requests. Please try again in an hour.",
    );
    assertEquals(logs, [
      ["Unable to read subscription error response", { status: 503 }],
      ["Unable to read subscription error response", { status: 429 }],
    ]);
  } finally {
    console.error = originalError;
  }
});
