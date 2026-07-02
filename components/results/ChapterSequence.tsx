import Link from "next/link";
import { chapterBySlug } from "@/content/chapters";
import type { ChapterSlug } from "@/lib/quiz/types";

export function ChapterSequence({ sequence }: { sequence: ChapterSlug[] }) {
  return (
    <ol className="space-y-3">
      {sequence.map((slug, i) => {
        const chapter = chapterBySlug.get(slug)!;
        return (
          <li key={slug}>
            <Link
              href={`/chapters/${slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-line bg-white/60 p-4 transition-colors hover:border-terracotta"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-lg font-semibold ${
                  i === 0 ? "bg-terracotta text-bone" : "bg-bone-deep text-ink-soft"
                }`}
              >
                {i + 1}
              </span>
              <span>
                <span className="block font-serif text-lg font-semibold text-ink group-hover:text-terracotta-deep">
                  {chapter.title}
                  {i === 0 && (
                    <span className="ml-2 align-middle text-xs font-sans font-semibold uppercase tracking-wide text-terracotta">
                      Start here
                    </span>
                  )}
                </span>
                <span className="mt-0.5 block text-sm leading-snug text-ink-faint">
                  Chapter {chapter.number} · {chapter.stage}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
