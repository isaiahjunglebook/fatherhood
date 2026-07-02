import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { chapters } from "@/content/chapters";

export function ChapterGrid() {
  return (
    <section className="border-b border-line">
      <Container className="py-16">
        <SectionHeading
          eyebrow="The path"
          title="Six chapters, from the man to the father"
        />
        <p className="mt-3 max-w-xl text-ink-soft">
          The quiz orders them for you — your entry point depends on where you are,
          and the sequence depends on where you&rsquo;re strongest and weakest.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {chapters.map((c) => (
            <Link
              key={c.slug}
              href={`/chapters/${c.slug}`}
              className="group rounded-2xl border border-line bg-white/60 p-5 transition-colors hover:border-terracotta"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-faint">
                Chapter {c.number} · {c.stage}
              </p>
              <p className="mt-2 font-serif text-xl font-semibold text-ink group-hover:text-terracotta-deep">
                {c.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.tagline}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
