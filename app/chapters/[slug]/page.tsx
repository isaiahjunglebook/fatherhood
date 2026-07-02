import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ChapterHero } from "@/components/chapters/ChapterHero";
import { ChapterReadTracker } from "@/components/chapters/ChapterReadTracker";
import { WhoItsFor } from "@/components/chapters/WhoItsFor";
import { LessonBody } from "@/components/chapters/LessonBody";
import { ResearchSpine } from "@/components/chapters/ResearchSpine";
import { chapters, chapterBySlug } from "@/content/chapters";
import { site } from "@/content/site";
import type { ChapterSlug } from "@/lib/quiz/types";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return chapters.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = chapterBySlug.get(slug as ChapterSlug);
  if (!chapter) return {};
  return {
    title: `Chapter ${chapter.number}: ${chapter.title}`,
    description: chapter.tagline,
    openGraph: {
      images: [{ url: `/og/chapter-${chapter.slug}.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function ChapterPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const chapter = chapterBySlug.get(slug as ChapterSlug);
  if (!chapter) notFound();

  const next = chapters.find((c) => c.number === (chapter.number % chapters.length) + 1)!;

  return (
    <>
      <ChapterReadTracker slug={chapter.slug} />
      <ChapterHero chapter={chapter} />
      <Container className="py-12">
        <div className="space-y-5">
          {chapter.overview.map((p) => (
            <p key={p.slice(0, 32)} className="text-[17px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <WhoItsFor items={chapter.whoItsFor} />
        </div>

        <div className="mt-14">
          <LessonBody chapter={chapter} />
        </div>

        <div className="mt-14">
          <ResearchSpine research={chapter.research} />
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-white/60 p-6 text-center">
          <p className="font-serif text-xl font-semibold text-ink">
            Where should <em>you</em> start?
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
            The quiz builds your personal chapter order — and unlocks the free
            starter guide.
          </p>
          <div className="mt-5">
            <Button href="/quiz" className="w-full sm:w-auto">
              {site.cta.quiz}
            </Button>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-sm">
          <Link href="/chapters" className="text-ink-faint hover:text-ink">
            ← All chapters
          </Link>
          <Link
            href={`/chapters/${next.slug}`}
            className="font-semibold text-terracotta-deep hover:text-terracotta"
          >
            Chapter {next.number}: {next.title} →
          </Link>
        </div>
      </Container>
    </>
  );
}
