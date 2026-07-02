import { questions } from "@/content/quiz";
import { chapters, entryChapter } from "@/content/chapters";
import { insightRules } from "@/content/insights";
import type {
  ArchetypeId,
  Dimension,
  InsightContext,
  LifeStage,
  QuizResult,
  Scores,
} from "@/lib/quiz/types";

const DIMENSIONS: Dimension[] = ["selfAwareness", "relationship", "knowledge"];

/** Archetype thresholds — the two tuning knobs. */
const STEADY_HAND_FLOOR = 70;
const GROUNDBREAKER_CEILING = 40;

/** Tie-break priority when dimensions score equal. */
const DIMENSION_PRIORITY: Dimension[] = ["selfAwareness", "relationship", "knowledge"];

const DIMENSION_ARCHETYPE: Record<Dimension, ArchetypeId> = {
  selfAwareness: "seeker",
  relationship: "anchor",
  knowledge: "architect",
};

/** Max attainable raw score per dimension, derived from the quiz config so
 * copy/scoring edits never break normalization. */
const maxScores: Scores = (() => {
  const max: Scores = { selfAwareness: 0, relationship: 0, knowledge: 0 };
  for (const q of questions) {
    for (const d of DIMENSIONS) {
      max[d] += Math.max(0, ...q.options.map((o) => o.scores?.[d] ?? 0));
    }
  }
  return max;
})();

/**
 * Pure and deterministic: the same answer indexes always produce the same
 * result, so a shared /results URL reproduces exactly.
 */
export function computeResults(answers: number[]): QuizResult | null {
  if (answers.length !== questions.length) return null;

  const raw: Scores = { selfAwareness: 0, relationship: 0, knowledge: 0 };
  const flags = new Set<string>();
  let lifeStage: LifeStage | null = null;

  for (let i = 0; i < questions.length; i++) {
    const option = questions[i].options[answers[i]];
    if (!option) return null;
    if (option.lifeStage) lifeStage = option.lifeStage;
    for (const flag of option.flags ?? []) flags.add(flag);
    for (const d of DIMENSIONS) raw[d] += option.scores?.[d] ?? 0;
  }
  if (!lifeStage) return null;

  const scores: Scores = { selfAwareness: 0, relationship: 0, knowledge: 0 };
  for (const d of DIMENSIONS) {
    scores[d] = maxScores[d] === 0 ? 0 : Math.round((raw[d] / maxScores[d]) * 100);
  }

  const ranked = [...DIMENSION_PRIORITY].sort((a, b) => scores[b] - scores[a]);
  const highest = ranked[0];
  const lowest = ranked[ranked.length - 1];

  let archetypeId: ArchetypeId;
  if (DIMENSIONS.every((d) => scores[d] >= STEADY_HAND_FLOOR)) {
    archetypeId = "steady-hand";
  } else if (DIMENSIONS.every((d) => scores[d] <= GROUNDBREAKER_CEILING)) {
    archetypeId = "groundbreaker";
  } else {
    archetypeId = DIMENSION_ARCHETYPE[highest];
  }

  const entry = entryChapter[lifeStage];
  const rest = chapters
    .filter((c) => c.slug !== entry)
    .map((c) => ({
      slug: c.slug,
      need: (100 - scores[c.dimension]) * c.lifeStageRelevance[lifeStage],
      number: c.number,
    }))
    // Stable tie-break on chapter number keeps results deterministic.
    .sort((a, b) => b.need - a.need || a.number - b.number);
  const sequence = [entry, ...rest.map((r) => r.slug)];

  const ctx: InsightContext = { scores, lifeStage, flags, lowest };
  const insights = [];
  const usedGroups = new Set<string>();
  for (const rule of insightRules) {
    if (insights.length >= 3) break;
    if (usedGroups.has(rule.group)) continue;
    if (rule.when(ctx)) {
      insights.push({ id: rule.id, title: rule.title, body: rule.body });
      usedGroups.add(rule.group);
    }
  }

  // Backstop: never fewer than two insights — top up with per-dimension
  // fallbacks, weakest dimension first.
  if (insights.length < 2) {
    for (let i = ranked.length - 1; i >= 0 && insights.length < 2; i--) {
      const rule = insightRules.find((r) => r.id === `fallback-${ranked[i]}`);
      if (rule && !insights.some((x) => x.id === rule.id)) {
        insights.push({ id: rule.id, title: rule.title, body: rule.body });
      }
    }
  }

  return { scores, lifeStage, archetypeId, sequence, insights };
}
