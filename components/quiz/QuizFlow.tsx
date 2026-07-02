"use client";

import { useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/content/quiz";
import { encodeAnswers } from "@/lib/quiz/encode";
import { QuestionCard } from "./QuestionCard";
import { QuizProgress } from "./QuizProgress";

const STORAGE_KEY = "tif_quiz_v1";

interface State {
  index: number;
  /** Sparse until complete: answers[i] is the chosen option index for question i. */
  answers: (number | undefined)[];
}

type Action =
  | { type: "answer"; option: number }
  | { type: "back" }
  | { type: "hydrate"; state: State };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "answer": {
      const answers = [...state.answers];
      answers[state.index] = action.option;
      return { answers, index: Math.min(state.index + 1, questions.length - 1) };
    }
    case "back":
      return { ...state, index: Math.max(0, state.index - 1) };
    case "hydrate":
      return action.state;
  }
}

const initialState: State = { index: 0, answers: [] };

export function QuizFlow() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Resume a mid-quiz refresh from the sessionStorage mirror.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as State;
      if (
        typeof saved.index === "number" &&
        Array.isArray(saved.answers) &&
        saved.index >= 0 &&
        saved.index < questions.length
      ) {
        dispatch({ type: "hydrate", state: saved });
      }
    } catch {
      // Corrupt mirror — start fresh.
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        // Storage unavailable (private mode) — quiz still works, just no resume.
      }
    }
  }, [state]);

  const question = questions[state.index];
  const isLast = state.index === questions.length - 1;

  function handleSelect(option: number) {
    if (isLast) {
      const answers = [...state.answers];
      answers[state.index] = option;
      if (answers.length === questions.length && answers.every((a) => a !== undefined)) {
        try {
          sessionStorage.removeItem(STORAGE_KEY);
        } catch {}
        router.push(`/results?a=${encodeAnswers(answers as number[])}`);
        return;
      }
      // Skipped questions somehow — send them back to the first gap.
      const gap = answers.findIndex((a) => a === undefined);
      dispatch({ type: "hydrate", state: { index: gap === -1 ? 0 : gap, answers } });
      return;
    }
    dispatch({ type: "answer", option });
  }

  return (
    <div>
      <QuizProgress current={state.index} total={questions.length} />
      {/* key forces a remount per question so the rise animation replays */}
      <div key={question.id} className="mt-8">
        <QuestionCard
          question={question}
          selected={state.answers[state.index]}
          onSelect={handleSelect}
        />
      </div>
      <div className="mt-8 flex min-h-11 items-center">
        {state.index > 0 && (
          <button
            type="button"
            onClick={() => dispatch({ type: "back" })}
            className="min-h-11 cursor-pointer px-2 text-sm text-ink-faint transition-colors hover:text-ink"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
