import type { ChapterSlug } from "@/lib/quiz/types";

/**
 * Device-local member progress (no accounts yet). Stored in localStorage so a
 * father who installs the app can leave and pick up where he left off.
 */
const READ_KEY = "tif-chapters-read-v1";
const RESULTS_KEY = "tif-last-results-v1";

function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Private mode / storage denied — progress just isn't remembered.
  }
}

export function getReadChapters(): ChapterSlug[] {
  return parseReadChapters(safeGet(READ_KEY));
}

export function parseReadChapters(raw: string | null): ChapterSlug[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/* useSyncExternalStore adapters — snapshots are primitives, so repeated reads
   are reference-stable and the store re-renders only on real change. */
export function subscribeToProgress(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

export function readChaptersSnapshot(): string | null {
  return safeGet(READ_KEY);
}

export function lastResultsSnapshot(): string | null {
  return safeGet(RESULTS_KEY);
}

export function markChapterRead(slug: ChapterSlug) {
  const read = getReadChapters();
  if (read.includes(slug)) return;
  safeSet(READ_KEY, JSON.stringify([...read, slug]));
}

export function saveLastResultsUrl(url: string) {
  if (url.startsWith("/results")) safeSet(RESULTS_KEY, url);
}
