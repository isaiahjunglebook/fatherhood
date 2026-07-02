"use client";

import { useState } from "react";

export function EmailGate({
  onUnlock,
  meta,
}: {
  onUnlock: () => void;
  meta: { archetype: string; lifeStage: string; code: string };
}) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const honeypot = (
      e.currentTarget.elements.namedItem("website") as HTMLInputElement | null
    )?.value;
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: honeypot, ...meta }),
      });
      if (res.ok) {
        onUnlock();
        return;
      }
      setError(
        res.status === 400
          ? "That email doesn't look right — check it and try again."
          : "Something went wrong — try again."
      );
    } catch {
      setError("Something went wrong — try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-2xl border-2 border-terracotta bg-white/70 p-6 sm:p-8">
      <h2 className="font-serif text-2xl font-semibold leading-tight text-ink">
        Unlock your full readiness map
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
        Your three-dimension scores, your personalized six-chapter sequence, your
        specific blind spots — plus the free starter guide (PDF).
      </p>
      <form onSubmit={handleSubmit} className="mt-5">
        <label htmlFor="gate-email" className="sr-only">
          Email address
        </label>
        <input
          id="gate-email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-h-12 rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:border-terracotta focus:outline-none"
        />
        {/* Honeypot — humans never see or fill this. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-px w-px opacity-0"
        />
        {error && (
          <p role="alert" className="mt-2 text-sm font-medium text-terracotta-deep">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={busy}
          className="mt-3 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-bone transition-colors hover:bg-terracotta-deep disabled:opacity-60"
        >
          {busy ? "Unlocking…" : "Get your full map + the free starter guide"}
        </button>
      </form>
      <p className="mt-3 text-xs text-ink-faint">
        No spam, no selling your address. Unsubscribe anytime.
      </p>
    </section>
  );
}
