import { createFileRoute } from "@tanstack/react-router";

const UPSTREAM = "https://portfolioapi-bte0.onrender.com/chat";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, { status: 204, headers: CORS_HEADERS }),

      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => ({}));
          const question = String((body as any)?.question ?? "").trim();
          const top_k = Number((body as any)?.top_k ?? 4);

          if (question.length < 3) {
            return new Response(
              JSON.stringify({
                error: "Question must be at least 3 characters.",
              }),
              {
                status: 400,
                headers: {
                  "Content-Type": "application/json",
                  ...CORS_HEADERS,
                },
              },
            );
          }

          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 60000);

          const upstream = await fetch(UPSTREAM, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ question, top_k }),
            signal: controller.signal,
          });
          clearTimeout(timeoutId);

          const text = await upstream.text();
          return new Response(text, {
            status: upstream.status,
            headers: {
              "Content-Type":
                upstream.headers.get("content-type") ?? "application/json",
              ...CORS_HEADERS,
            },
          });
        } catch (err) {
          console.error("[api/chat] proxy error:", err);
          return new Response(
            JSON.stringify({
              error: "Upstream request failed",
              detail: err instanceof Error ? err.message : String(err),
            }),
            {
              status: 502,
              headers: {
                "Content-Type": "application/json",
                ...CORS_HEADERS,
              },
            },
          );
        }
      },
    },
  },
});
