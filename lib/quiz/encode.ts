import { questions } from "@/content/quiz";

/**
 * Answers travel as a compact URL code: `v1-` followed by one digit per
 * question (the chosen option's index, in question order). Bump the version
 * prefix if question order/count or option order ever changes.
 */
export const CODE_VERSION = "v1";

export function encodeAnswers(answers: number[]): string {
  return `${CODE_VERSION}-${answers.join("")}`;
}

/** Returns the answer indexes, or null for anything malformed or stale. */
export function decodeAnswers(code: string | null | undefined): number[] | null {
  if (!code) return null;
  const [version, digits] = code.split("-");
  if (version !== CODE_VERSION || !digits) return null;
  if (digits.length !== questions.length) return null;
  const answers: number[] = [];
  for (let i = 0; i < digits.length; i++) {
    const idx = digits.charCodeAt(i) - 48;
    if (idx < 0 || idx > 9 || idx >= questions[i].options.length) return null;
    answers.push(idx);
  }
  return answers;
}
