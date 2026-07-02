"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { chapters } from "@/content/chapters";
import {
  lastResultsSnapshot,
  parseReadChapters,
  readChaptersSnapshot,
  subscribeToProgress,
} from "@/lib/progress";

const serverSnapshot = () => null;

export function ChapterHub() {
  const readRaw = useSyncExternalStore(subscribeToProgress, readChaptersSnapshot, serverSnapshot);
  const resultsRaw = useSyncExternalStore(subscribeToProgress, lastResultsSnapshot, serverSnapshot);

  const read = useMemo(() => parseReadChapters(readRaw), [readRaw]);
  const resultsUrl = resultsRaw && resultsRaw.startsWith("/results") ? resultsRaw : null;
  const pct = (read.length / chapters.length) * 100;

  return (
    <div>
      {read.length > 0 && (
        <div className="mb-8 rounded-2xl border border-line bg-white/60 p-5 animate-fade">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-semibold text-ink">Your progress</p>
            <p className="text-xs text-ink-faint">
              {read.length} of {chapters.length} chapters opened
            </p>
          </div>
          <div className="mt-3">
            <ProgressBar value={pct} label="Chapters opened" />
          </div>
          {resultsUrl && (
            <Link
              href={resultsUrl}
              className="mt-3 inline-block text-sm font-semibold text-terracotta-deep hover:text-terracotta"
            >
              View your readiness map →
            </Link>
          )}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {chapters.map((c) => {
          const isRead = read.includes(c.slug);
          return (
            <Link
              key={c.slug}
              href={`/chapters/${c.slug}`}
              className="group relative rounded-2xl border border-line bg-white/60 p-5 transition-colors hover:border-terracotta"
            >
              {isRead && (
                <span
                  className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-terracotta text-bone"
                  title="Opened"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                  <span className="sr-only">Opened</span>
                </span>
              )}
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-faint">
                Chapter {c.number} · {c.stage}
              </p>
              <p className="mt-2 pr-8 font-serif text-xl font-semibold text-ink group-hover:text-terracotta-deep">
                {c.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.tagline}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
