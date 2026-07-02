import type { EmailProvider } from "./provider";

/** v1 provider: log the capture so it's visible in Vercel function logs. */
export const stubProvider: EmailProvider = {
  name: "stub",
  async subscribe(payload) {
    console.log("[subscribe]", JSON.stringify(payload));
    return { ok: true };
  },
};
