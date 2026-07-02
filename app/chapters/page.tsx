import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { PathJourney } from "@/components/chapters/PathJourney";
import { SavedMapLink } from "@/components/chapters/SavedMapLink";
import { site } from "@/content/site";

const heroSubhead =
  "Most cultures prepared men for fatherhood deliberately — an initiation, staged, witnessed, in order. This is that path, rebuilt on modern research. Six chapters. One becoming.";

export const metadata: Metadata = {
  title: { absolute: `The Path — Six Chapters | ${site.name}` },
  description: heroSubhead,
  openGraph: {
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
  },
};

export default function ChaptersPage() {
  return (
    <>
      {/* Full viewport height on desktop; natural (generous) height on mobile
          so the scroll cue stays visible above the fold */}
      <section className="flex flex-col border-b border-line md:min-h-[calc(100svh-3.5rem)]">
        <Container className="my-auto pb-12 pt-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            The path
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl">
            Six thresholds between the man you are and the father you become.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {heroSubhead}
          </p>
        </Container>
        <Container className="pb-8">
          <p aria-hidden="true" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Begin ↓
          </p>
        </Container>
      </section>

      <Container>
        <PathJourney />
      </Container>

      <section>
        <Container className="pb-16 pt-4 text-center sm:pb-20">
          <p className="font-serif text-xl italic text-ink-soft">
            The path is the same for every man. The entry point isn&rsquo;t.
          </p>
          <h2 className="mx-auto mt-10 max-w-md font-serif text-3xl font-semibold leading-tight text-ink">
            Six thresholds. The quiz tells you which one you&rsquo;re standing at.
          </h2>
          <div className="mt-7">
            <Button href="/quiz" className="w-full sm:w-auto">
              {site.cta.quiz}
            </Button>
            <p className="mt-3 text-sm text-ink-faint">{site.cta.quizSub}</p>
            <SavedMapLink />
          </div>
        </Container>
      </section>
    </>
  );
}
