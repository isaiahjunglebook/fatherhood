import Link from "next/link";
import { Container } from "@/components/layout/Container";

const stats = [
  {
    figure: "2 in 3",
    text: "couples see relationship satisfaction drop hard within three years of a first baby — and the couples who don't are identifiable beforehand.",
    source: "Gottman Institute longitudinal research",
  },
  {
    figure: "1 in 10",
    text: "fathers experiences depression around a birth, peaking three to six months in — almost always unscreened and unnamed.",
    source: "Paulson & Bazemore, JAMA meta-analysis",
  },
  {
    figure: "~0 hrs",
    text: "of structured preparation the average man receives for the biggest role of his life. That's the gap this exists to close.",
    source: "The premise",
  },
];

export function ResearchStrip() {
  return (
    <section className="border-b border-line bg-bone-deep/40">
      <Container className="py-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.figure}>
              <p className="font-serif text-3xl font-semibold text-terracotta">{s.figure}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              <p className="mt-2 text-xs text-ink-faint">{s.source}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-faint">
          Every claim in the program traces to published research.{" "}
          <Link href="/method" className="underline underline-offset-2 hover:text-ink">
            See the method and sources →
          </Link>
        </p>
      </Container>
    </section>
  );
}
