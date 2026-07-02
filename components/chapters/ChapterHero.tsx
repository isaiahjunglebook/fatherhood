import { Container } from "@/components/layout/Container";
import type { Chapter } from "@/lib/quiz/types";

export function ChapterHero({ chapter }: { chapter: Chapter }) {
  return (
    <section className="border-b border-line bg-ink text-bone">
      <Container className="py-14 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          Chapter {chapter.number} · {chapter.stage}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {chapter.title}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-bone/70">
          {chapter.tagline}
        </p>
      </Container>
    </section>
  );
}
