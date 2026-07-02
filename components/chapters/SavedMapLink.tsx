"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { lastResultsSnapshot, subscribeToProgress } from "@/lib/progress";

const serverSnapshot = () => null;

/** Renders a return link to the reader's saved readiness map, if one exists. */
export function SavedMapLink() {
  const raw = useSyncExternalStore(
    subscribeToProgress,
    lastResultsSnapshot,
    serverSnapshot
  );
  const url = raw && raw.startsWith("/results") ? raw : null;
  if (!url) return null;

  return (
    <p className="mt-4 text-sm">
      <Link
        href={url}
        className="font-semibold text-terracotta-deep transition-colors hover:text-terracotta"
      >
        Already took it? Return to your readiness map →
      </Link>
    </p>
  );
}
