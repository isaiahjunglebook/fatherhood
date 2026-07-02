"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { ChapterGlyph } from "./ChapterGlyph";
import { chapters } from "@/content/chapters";
import {
  parseReadChapters,
  readChaptersSnapshot,
  subscribeToProgress,
} from "@/lib/progress";

const ROMANS = ["I", "II", "III", "IV", "V", "VI"];

function sentence(fragment: string): string {
  const s = fragment.charAt(0).toUpperCase() + fragment.slice(1);
  return /[.!?]$/.test(s) ? s : `${s}.`;
}

const serverSnapshot = () => null;

/**
 * The Path — six chapter panels along a vertical spine that draws itself as
 * the reader scrolls. Nodes light when their chapter enters the viewport.
 * With prefers-reduced-motion the spine renders fully drawn, every node lit,
 * and panels appear without animation.
 */
export function PathJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  const readRaw = useSyncExternalStore(
    subscribeToProgress,
    readChaptersSnapshot,
    serverSnapshot
  );
  const read = useMemo(() => parseReadChapters(readRaw), [readRaw]);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    const panels = Array.from(
      container.querySelectorAll<HTMLElement>("[data-path-panel]")
    );
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      line.style.strokeDashoffset = "0";
      for (const panel of panels) panel.setAttribute("data-lit", "true");
      return;
    }

    // Pre-hide only the panels still below the fold — anything already on
    // screen at hydration never flashes.
    for (const panel of panels) {
      if (panel.getBoundingClientRect().top > window.innerHeight) {
        panel
          .querySelector<HTMLElement>(".path-panel-body")
          ?.setAttribute("data-hidden", "true");
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-lit", "true");
          entry.target
            .querySelector<HTMLElement>(".path-panel-body")
            ?.removeAttribute("data-hidden");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -18% 0px" }
    );
    for (const panel of panels) observer.observe(panel);

    // Draw the spine to match how far down the path the reader has traveled.
    let raf = 0;
    const draw = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.85 - rect.top) / rect.height)
      );
      line.style.strokeDashoffset = String(1 - progress);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-6 top-0 h-full w-0.5 -translate-x-1/2 md:left-10"
        width="2"
        preserveAspectRatio="none"
        viewBox="0 0 2 100"
      >
        <line x1="1" y1="0" x2="1" y2="100" stroke="var(--color-line)" strokeWidth="2" />
        <line
          ref={lineRef}
          x1="1"
          y1="0"
          x2="1"
          y2="100"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
          stroke="var(--color-terracotta)"
          strokeWidth="2"
        />
      </svg>

      <ol>
        {chapters.map((c, i) => (
          <li
            key={c.slug}
            data-path-panel
            className="relative flex min-h-[75vh] flex-col justify-center py-14"
          >
            <span className="path-node absolute left-6 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-line bg-bone md:left-10" />
            <div className="path-panel-body pl-14 md:pl-24">
              <ChapterGlyph
                glyph={c.path.glyph}
                className="h-[72px] w-[72px] text-terracotta"
              />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                {ROMANS[i]} · {c.stage}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                {c.title}
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{c.tagline}</p>

              <dl className="mt-7 max-w-md space-y-4 border-l-2 border-terracotta/25 pl-5">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                    You arrive
                  </dt>
                  <dd className="mt-1 font-serif text-lg italic leading-snug text-ink">
                    {sentence(c.path.arrive)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                    You leave
                  </dt>
                  <dd className="mt-1 font-serif text-lg italic leading-snug text-ink">
                    {sentence(c.path.leave)}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 flex items-center gap-3">
                <Link
                  href={`/chapters/${c.slug}`}
                  className="font-semibold text-terracotta-deep transition-colors hover:text-terracotta"
                >
                  Enter chapter →
                </Link>
                {read.includes(c.slug) && (
                  <span className="text-xs font-medium text-ink-faint">Opened ✓</span>
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
