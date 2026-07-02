import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "You're offline",
  robots: { index: false },
};

export default function OfflinePage() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        No connection
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-ink">
        You&apos;re offline right now
      </h1>
      <p className="mx-auto mt-4 max-w-sm text-ink-soft">
        Chapters you&apos;ve already opened are saved on this device and still
        readable. Anything new needs a connection.
      </p>
      <div className="mt-8">
        <Link
          href="/chapters"
          className="inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-bone transition-colors hover:bg-terracotta-deep"
        >
          Go to your chapters
        </Link>
      </div>
    </Container>
  );
}
