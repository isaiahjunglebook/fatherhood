import { stubProvider } from "./stub";

export interface SubscribePayload {
  email: string;
  archetype?: string;
  lifeStage?: string;
  code?: string;
}

export interface EmailProvider {
  name: string;
  subscribe(payload: SubscribePayload): Promise<{ ok: boolean }>;
}

/**
 * Swap providers via env with zero UI changes: implement EmailProvider
 * (e.g. resend.ts, kit.ts), then branch on EMAIL_PROVIDER here.
 */
export function getEmailProvider(): EmailProvider {
  switch (process.env.EMAIL_PROVIDER) {
    // case "resend": return resendProvider;
    // case "kit":    return kitProvider;
    default:
      return stubProvider;
  }
}
