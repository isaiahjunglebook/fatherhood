import type { Archetype, ArchetypeId } from "@/lib/quiz/types";

export const archetypes: Record<ArchetypeId, Archetype> = {
  "steady-hand": {
    id: "steady-hand",
    name: "The Steady Hand",
    essence:
      "You've done real work on all three fronts — self, relationship, and knowledge. Your task now isn't building readiness. It's refusing to coast on it.",
    description: [
      "You're in rare territory. Most men arrive at fatherhood strong in one area and blind in another; your scores say you've built on all three fronts — you know yourself, your relationship can carry weight, and you've done the homework. That doesn't mean you're finished. It means your risk is different: complacency.",
      "The Steady Hand's failure mode is quiet. Because nothing is obviously broken, nothing gets maintained — and fatherhood applies pressure precisely where maintenance stopped. Your path through the chapters is about depth, not repair: taking what's solid and making it unshakeable before a newborn stress-tests all of it at 3 a.m.",
    ],
    strengths: [
      "Self-awareness that holds under pressure, not just in calm",
      "A relationship with real load-bearing capacity",
      "Enough knowledge to act instead of freeze",
    ],
    watchouts: [
      "Coasting — strength that isn't maintained erodes exactly when it's needed",
      "Becoming the man everyone leans on while no one asks how he's doing",
      "Mistaking preparation for control; babies don't read the plan",
    ],
  },
  groundbreaker: {
    id: "groundbreaker",
    name: "The Groundbreaker",
    essence:
      "You're starting from open ground on every front — which means nothing to unlearn, and the steepest growth curve of any archetype ahead of you.",
    description: [
      "Your scores are low across the board, and here's what that actually means: you told the truth. Most men inflate. The ones who admit they're starting from scratch are the ones who move fastest, because they skip the expensive step of defending an image.",
      "The Groundbreaker builds without a blueprint — maybe your own father didn't leave one worth keeping, maybe nobody ever showed you how men prepare for this. So the path starts at the foundation: the man himself, then the relationship, then the knowledge. In that order, one honest rep at a time. Men who start exactly where you are and work the sequence become the fathers other men quietly study.",
    ],
    strengths: [
      "Honesty about where you stand — the rarest starting asset",
      "No inherited playbook to unlearn; you get to build it clean",
      "Maximum room to grow, with a clear sequence to grow along",
    ],
    watchouts: [
      "Overwhelm — trying to fix everything at once instead of in sequence",
      "Going it alone; groundbreaking without support becomes drift",
      "Letting shame about the starting point delay the start",
    ],
  },
  seeker: {
    id: "seeker",
    name: "The Seeker",
    essence:
      "Your inner work is your strongest front — you know your own machinery. The map ahead turns that awareness outward, toward your partner and the practical craft.",
    description: [
      "Self-awareness is your leading edge. You've looked at where you came from, you can name what you feel, and you've probably done deliberate work most men avoid. That's the hardest dimension to build and you've already built it.",
      "The Seeker's trap is staying in the inner world because it's home turf. Insight that never becomes action — a hard conversation started, a skill practiced, a bottle prepped — is just sophisticated stalling. Your sequence leans into the fronts you've under-built, using the awareness you already have as the engine.",
    ],
    strengths: [
      "You can name what's happening inside you before it runs you",
      "Comfort with discomfort — you don't flinch from hard questions",
      "The inherited-model work is underway, not waiting",
    ],
    watchouts: [
      "Endless reflection as a substitute for action",
      "Assuming your partner knows your inner world because you do",
      "Under-investing in unglamorous practical knowledge",
    ],
  },
  anchor: {
    id: "anchor",
    name: "The Anchor",
    essence:
      "Your relationship is your strongest front — real partnership, real support. The map ahead deepens the man inside the partnership and arms him with the craft.",
    description: [
      "Connection is your leading edge. Your partnership can hold hard conversations, and you have people in your corner — which matters more than almost anything, because the couple's bond is the load-bearing wall of early parenthood and yours is already reinforced.",
      "The Anchor's trap is outsourcing the inner life to the relationship — feeling steady because things are good between you, without a self that stays steady when things aren't. A newborn will strain even a strong bond. Your sequence builds the man and the knowledge so the relationship isn't carrying all the weight alone.",
    ],
    strengths: [
      "A partnership that can say hard things out loud",
      "Real support — you're not attempting this solo",
      "Steadiness that others can moor to",
    ],
    watchouts: [
      "Borrowing your stability from the relationship instead of owning it",
      "Keeping the peace instead of telling the truth",
      "Letting 'we're good' postpone the homework only you can do",
    ],
  },
  architect: {
    id: "architect",
    name: "The Architect",
    essence:
      "Knowledge is your strongest front — you learn, plan, and prepare. The map ahead builds what the manual can't teach: the man, and the bond.",
    description: [
      "Preparation is your leading edge. You do the homework — you'll know the sleep science, the birth plan, the car-seat specs. When other men freeze from not knowing what to do, you'll act. That competence is real and your child will benefit from it.",
      "The Architect's trap is believing the manual is the mission. Fatherhood's hardest moments aren't information problems — they're a crying baby who won't be debugged, a partner who needs presence rather than solutions, a surge of anger with your own father's voice in it. Your sequence deliberately trains the fronts a book can't cover, so your knowledge sits on a foundation instead of a fault line.",
    ],
    strengths: [
      "You act on knowledge instead of freezing without it",
      "Systems thinking — you'll build routines that actually hold",
      "Discipline to prepare while others procrastinate",
    ],
    watchouts: [
      "Solving feelings like they're problems — your partner will notice",
      "Control as a comfort strategy; babies are ungovernable",
      "Skipping the inner work because it doesn't have a syllabus",
    ],
  },
};

export const archetypeOrder: ArchetypeId[] = [
  "steady-hand",
  "groundbreaker",
  "seeker",
  "anchor",
  "architect",
];
