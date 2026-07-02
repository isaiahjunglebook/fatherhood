export type Dimension = "selfAwareness" | "relationship" | "knowledge";

export type LifeStage = "single" | "trying" | "expecting" | "newDad";

export type Scores = Record<Dimension, number>;

export interface AnswerOption {
  id: string;
  label: string;
  /** Points contributed per dimension (0–3). Omitted = no score contribution. */
  scores?: Partial<Scores>;
  /** Only set on the life-stage question. */
  lifeStage?: LifeStage;
  /** Semantic flags (e.g. "father:absent") so insight rules match meaning, not option ids. */
  flags?: string[];
}

export interface Question {
  id: string;
  prompt: string;
  help?: string;
  options: AnswerOption[];
}

export type ArchetypeId =
  | "steady-hand"
  | "groundbreaker"
  | "seeker"
  | "anchor"
  | "architect";

export interface Archetype {
  id: ArchetypeId;
  name: string;
  /** One-line essence, shown free above the email gate. */
  essence: string;
  description: string[];
  strengths: string[];
  watchouts: string[];
}

export type ChapterSlug =
  | "the-man"
  | "conception"
  | "the-pregnancy"
  | "the-arrival"
  | "the-bond"
  | "the-guide";

export interface Citation {
  finding: string;
  source: string;
}

export type GlyphId =
  | "man"
  | "conception"
  | "pregnancy"
  | "arrival"
  | "bond"
  | "guide";

/** The chapter's presence on The Path (/chapters): its mark and transformation. */
export interface ChapterPath {
  glyph: GlyphId;
  /** "You arrive" line — who the man is walking in. Lowercase fragment. */
  arrive: string;
  /** "You leave" line — who he is walking out. Lowercase fragment. */
  leave: string;
}

export interface Chapter {
  slug: ChapterSlug;
  number: number;
  title: string;
  stage: string;
  tagline: string;
  path: ChapterPath;
  dimension: Dimension;
  /** Weight per life stage used when ordering the personalized sequence. */
  lifeStageRelevance: Record<LifeStage, number>;
  overview: string[];
  whoItsFor: string[];
  lesson: {
    title: string;
    /** Trusted HTML authored in content/ — rendered inside .prose-tif. */
    html: string;
  };
  research: Citation[];
}

export interface Insight {
  id: string;
  title: string;
  body: string;
}

export interface InsightContext {
  scores: Scores;
  lifeStage: LifeStage;
  flags: Set<string>;
  lowest: Dimension;
}

export interface InsightRule extends Insight {
  /** Max one insight per group makes it into a result. */
  group: string;
  when: (ctx: InsightContext) => boolean;
}

export interface QuizResult {
  scores: Scores;
  lifeStage: LifeStage;
  archetypeId: ArchetypeId;
  /** All six chapters, personalized order — entry chapter first. */
  sequence: ChapterSlug[];
  insights: Insight[];
}
