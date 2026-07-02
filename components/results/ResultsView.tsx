"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { decodeAnswers } from "@/lib/quiz/encode";
import { computeResults } from "@/lib/results/engine";
import { archetypes } from "@/content/archetypes";
import { chapterBySlug } from "@/content/chapters";
import { site } from "@/content/site";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ArchetypeCard } from "./ArchetypeCard";
import { ChapterSequence } from "./ChapterSequence";
import { InsightList } from "./InsightList";
import { EmailGate } from "./EmailGate";

const UNLOCK_KEY = "tif_unlocked";

const dimensionLabels: Record<string, string> = {
  selfAwareness: "Self-awareness",
  relationship: "Partnership",
  knowledge: "Knowledge",
};

export function ResultsView() {
  const router = useRouter();
  const code = useSearchParams().get("a");

  const result = useMemo(() => {
    const answers = decodeAnswers(code);
    return answers ? computeResults(answers) : null;
  }, [code]);

  // null = still checking localStorage (avoids a gate flash for returning visitors)
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    if (!result) {
      router.replace("/quiz");
      return;
    }
    try {
      setUnlocked(localStorage.getItem(UNLOCK_KEY) === "1");
    } catch {
      setUnlocked(false);
    }
  }, [result, router]);

  if (!result) return null;

  const archetype = archetypes[result.archetypeId];
  const entry = chapterBySlug.get(result.sequence[0])!;

  function unlock() {
    try {
      localStorage.setItem(UNLOCK_KEY, "1");
    } catch {}
    setUnlocked(true);
  }

  return (
    <div className="space-y-6">
      <ArchetypeCard archetype={archetype} />

      <section className="rounded-2xl border border-line bg-white/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
          Your entry point
        </p>
        <Link
          href={`/chapters/${entry.slug}`}
          className="mt-1 block font-serif text-xl font-semibold text-ink hover:text-terracotta-deep"
        >
          Chapter {entry.number}: {entry.title} →
        </Link>
        <p className="mt-1 text-sm text-ink-soft">{entry.tagline}</p>
      </section>

      {unlocked === false && (
        <EmailGate
          onUnlock={unlock}
          meta={{
            archetype: result.archetypeId,
            lifeStage: result.lifeStage,
            code: code ?? "",
          }}
        />
      )}

      {unlocked && (
        <div className="animate-rise space-y-10 pt-2">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">
              Your three dimensions
            </h2>
            <div className="mt-5 space-y-5">
              {(Object.keys(dimensionLabels) as (keyof typeof result.scores)[]).map(
                (d) => (
                  <div key={d}>
                    <div className="mb-1.5 flex items-baseline justify-between text-sm">
                      <span className="font-semibold text-ink">{dimensionLabels[d]}</span>
                      <span className="text-ink-faint">{result.scores[d]}/100</span>
                    </div>
                    <ProgressBar value={result.scores[d]} label={dimensionLabels[d]} />
                  </div>
                )
              )}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">
              What the data says about you, specifically
            </h2>
            <div className="mt-5">
              <InsightList insights={result.insights} />
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-ink">
              Your chapter sequence
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              All six chapters, ordered for your life stage and your scores.
            </p>
            <div className="mt-5">
              <ChapterSequence sequence={result.sequence} />
            </div>
          </section>

          <section className="rounded-2xl bg-ink p-6 text-center text-bone">
            <h2 className="font-serif text-2xl font-semibold">
              The starter guide is yours
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-bone/70">
              The first lessons from all six chapters, in one printable PDF.
            </p>
            <a
              href={site.ebookPath}
              download
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 py-3 font-semibold text-bone transition-colors hover:bg-terracotta-deep"
            >
              Download the starter guide (PDF)
            </a>
          </section>

          <p className="text-center text-xs text-ink-faint">
            This page&rsquo;s link reproduces your exact result — share it with your
            partner.
          </p>
        </div>
      )}
    </div>
  );
}
