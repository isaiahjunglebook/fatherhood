"use client";

import { useEffect } from "react";
import { markChapterRead } from "@/lib/progress";
import type { ChapterSlug } from "@/lib/quiz/types";

export function ChapterReadTracker({ slug }: { slug: ChapterSlug }) {
  useEffect(() => {
    markChapterRead(slug);
  }, [slug]);

  return null;
}
