"use client";

import type { Question } from "@/lib/quiz/types";
import { AnswerButton } from "./AnswerButton";

export function QuestionCard({
  question,
  selected,
  onSelect,
}: {
  question: Question;
  selected: number | undefined;
  onSelect: (optionIndex: number) => void;
}) {
  return (
    <div className="animate-rise">
      <h2 className="font-serif text-2xl font-semibold leading-tight text-ink sm:text-3xl">
        {question.prompt}
      </h2>
      {question.help && <p className="mt-2 text-sm text-ink-faint">{question.help}</p>}
      <div className="mt-6 space-y-3">
        {question.options.map((option, i) => (
          <AnswerButton
            key={option.id}
            label={option.label}
            selected={selected === i}
            onSelect={() => onSelect(i)}
          />
        ))}
      </div>
    </div>
  );
}
