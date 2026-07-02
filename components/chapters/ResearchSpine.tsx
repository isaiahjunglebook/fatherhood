import Link from "next/link";
import type { Citation } from "@/lib/quiz/types";

export function ResearchSpine({ research }: { research: readonly Citation[] }) {
  return (
    <section className="rounded-2xl bg-bone-deep/60 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
        The research spine
      </p>
      <ul className="mt-4 space-y-5">
        {research.map((r) => (
          <li key={r.source}>
            <p className="text-[15px] leading-relaxed text-ink">{r.finding}</p>
            <p className="mt-1 text-xs text-ink-faint">{r.source}</p>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-ink-faint">
        Full source list on{" "}
        <Link href="/method" className="underline underline-offset-2 hover:text-ink">
          the method page
        </Link>
        .
      </p>
    </section>
  );
}
