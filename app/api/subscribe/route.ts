import { NextResponse } from "next/server";
import { getEmailProvider } from "@/lib/email/provider";

// Deliberately permissive — the mail provider is the real validator.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot filled = bot. Pretend success so it learns nothing.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.slice(0, 64) : undefined);
  const result = await getEmailProvider().subscribe({
    email,
    archetype: str(body.archetype),
    lifeStage: str(body.lifeStage),
    code: str(body.code),
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "provider_error" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
