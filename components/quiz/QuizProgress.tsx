"use client";

import { ProgressBar } from "@/components/ui/ProgressBar";

export function QuizProgress({ current, total }: { current: number; total: number }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between text-xs text-ink-faint">
        <span>
          Question {current + 1} of {total}
        </span>
        <span>{Math.round((current / total) * 100)}%</span>
      </div>
      <ProgressBar value={(current / total) * 100} label="Quiz progress" />
    </div>
  );
}
