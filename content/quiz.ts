import type { Question } from "@/lib/quiz/types";

/**
 * Fixed question IDs — the URL answer code is one digit per question in this
 * order, so reordering or removing questions requires bumping CODE_VERSION
 * in lib/quiz/encode.ts. Copy is freely editable.
 */
export const questions: Question[] = [
  {
    id: "life-stage",
    prompt: "Where are you on the road?",
    options: [
      {
        id: "single",
        label: "Kids aren't on the calendar yet — I want to get ahead of it",
        lifeStage: "single",
      },
      {
        id: "trying",
        label: "We're trying, or planning to try soon",
        lifeStage: "trying",
      },
      {
        id: "expecting",
        label: "We're expecting",
        lifeStage: "expecting",
      },
      {
        id: "new-dad",
        label: "I'm already a father (ages 0–7)",
        lifeStage: "newDad",
      },
    ],
  },
  {
    id: "biggest-fear",
    prompt: "When you picture yourself as a father, which fear shows up first?",
    help: "There's no wrong answer. Naming it is the work.",
    options: [
      {
        id: "repeating",
        label: "Repeating my own father's mistakes",
        scores: { selfAwareness: 1 },
        flags: ["fear:repeating"],
      },
      {
        id: "losing-self",
        label: "Losing myself — my freedom, my edge, my identity",
        scores: { selfAwareness: 1 },
        flags: ["fear:losing-self"],
      },
      {
        id: "provider",
        label: "Not being able to provide the way I should",
        scores: { selfAwareness: 1 },
        flags: ["fear:provider"],
      },
      {
        id: "relationship",
        label: "My relationship not surviving it",
        scores: { selfAwareness: 1 },
        flags: ["fear:relationship"],
      },
      {
        id: "none",
        label: "Honestly? I don't feel fear about it",
        flags: ["fear:none"],
      },
    ],
  },
  {
    id: "relationship-state",
    prompt: "How would you describe your relationship right now?",
    options: [
      {
        id: "team",
        label: "Solid — we operate like a team",
        scores: { relationship: 3 },
      },
      {
        id: "avoids-hard",
        label: "Good, but the hard conversations are rare",
        scores: { relationship: 2 },
        flags: ["rel:avoids-hard"],
      },
      {
        id: "strained",
        label: "Strained — there's tension we haven't resolved",
        scores: { relationship: 1 },
        flags: ["rel:strained"],
      },
      {
        id: "single",
        label: "I'm single / not with a partner right now",
        scores: { relationship: 1 },
        flags: ["partner:none"],
      },
    ],
  },
  {
    id: "own-father",
    prompt: "What did your own father hand you?",
    help: "The model you inherited is the one you'll run on under pressure — unless you examine it.",
    options: [
      {
        id: "model",
        label: "A model I want to live up to",
        scores: { selfAwareness: 3 },
        flags: ["father:present"],
      },
      {
        id: "mixed",
        label: "A mixed bag — some to keep, some to leave behind",
        scores: { selfAwareness: 2 },
        flags: ["father:mixed"],
      },
      {
        id: "counter",
        label: "Mostly a picture of what not to do",
        scores: { selfAwareness: 1 },
        flags: ["father:counter"],
      },
      {
        id: "absent",
        label: "Nothing — he wasn't around",
        scores: { selfAwareness: 1 },
        flags: ["father:absent"],
      },
    ],
  },
  {
    id: "emotional-regulation",
    prompt: "When anger or stress hits you hard, what actually happens?",
    options: [
      {
        id: "settle",
        label: "I can name what I'm feeling and settle myself",
        scores: { selfAwareness: 3 },
      },
      {
        id: "working",
        label: "It's a work in progress — and I'm actively working on it",
        scores: { selfAwareness: 2 },
        flags: ["reg:working"],
      },
      {
        id: "suppress",
        label: "I shove it down and push through",
        scores: { selfAwareness: 1 },
        flags: ["reg:suppress"],
      },
      {
        id: "leaks",
        label: "It leaks — snapping, going cold, checking out",
        scores: { selfAwareness: 1 },
        flags: ["reg:leaks"],
      },
    ],
  },
  {
    id: "partner-communication",
    prompt: "Could you say to your partner, tonight: “I'm scared about this”?",
    options: [
      {
        id: "yes",
        label: "Yes — we already talk like that",
        scores: { relationship: 3 },
      },
      {
        id: "awkward",
        label: "Probably, but it would feel like walking uphill",
        scores: { relationship: 2 },
        flags: ["comm:awkward"],
      },
      {
        id: "closed",
        label: "No — I keep that kind of thing to myself",
        scores: { relationship: 0 },
        flags: ["comm:closed"],
      },
      {
        id: "na",
        label: "No partner right now",
        scores: { relationship: 1 },
        flags: ["partner:none"],
      },
    ],
  },
  {
    id: "inner-work",
    prompt: "Have you ever worked on yourself on purpose — therapy, a men's group, journaling, coaching?",
    options: [
      {
        id: "consistent",
        label: "Yes, consistently — it's part of my life",
        scores: { selfAwareness: 3 },
      },
      {
        id: "dabbled",
        label: "I've dabbled",
        scores: { selfAwareness: 1 },
        flags: ["work:dabbled"],
      },
      {
        id: "open",
        label: "Never, but I'm open to it",
        scores: { selfAwareness: 1 },
        flags: ["work:open"],
      },
      {
        id: "resistant",
        label: "Not my thing",
        scores: { selfAwareness: 0 },
        flags: ["work:resistant"],
      },
    ],
  },
  {
    id: "baby-knowledge",
    prompt: "Babies: sleep, crying, feeding, soothing. How much do you actually know?",
    options: [
      {
        id: "homework",
        label: "A lot — I've done real homework or have hands-on experience",
        scores: { knowledge: 3 },
      },
      {
        id: "basics",
        label: "The basics",
        scores: { knowledge: 2 },
      },
      {
        id: "little",
        label: "Almost nothing",
        scores: { knowledge: 0 },
        flags: ["know:blank"],
      },
      {
        id: "wing-it",
        label: "I'll figure it out when it happens",
        scores: { knowledge: 0 },
        flags: ["know:wing-it"],
      },
    ],
  },
  {
    id: "pregnancy-knowledge",
    prompt: "Pregnancy and birth: could you name what happens each trimester — and what your job is in the delivery room?",
    options: [
      {
        id: "solid",
        label: "Yes, solidly",
        scores: { knowledge: 3 },
      },
      {
        id: "roughly",
        label: "Roughly",
        scores: { knowledge: 2 },
      },
      {
        id: "not-really",
        label: "Not really",
        scores: { knowledge: 0 },
        flags: ["know:pregnancy-blank"],
      },
      {
        id: "her-department",
        label: "I've assumed that's her department",
        scores: { knowledge: 0 },
        flags: ["know:her-department"],
      },
    ],
  },
  {
    id: "support-system",
    prompt: "Who's in your corner — men you could actually call at a low moment?",
    options: [
      {
        id: "circle",
        label: "A real circle — men I can be honest with",
        scores: { relationship: 3 },
      },
      {
        id: "one-or-two",
        label: "One or two",
        scores: { relationship: 2 },
      },
      {
        id: "shallow",
        label: "Plenty of friends, but we don't go there",
        scores: { relationship: 1 },
        flags: ["support:shallow"],
      },
      {
        id: "none",
        label: "Honestly — no one",
        scores: { relationship: 0 },
        flags: ["support:none"],
      },
    ],
  },
  {
    id: "confidence",
    prompt: "Gut check. How ready do you feel — today?",
    options: [
      {
        id: "ready",
        label: "Ready. I just want the map",
        scores: { selfAwareness: 1, knowledge: 1 },
        flags: ["conf:ready"],
      },
      {
        id: "excited",
        label: "Excited, but underprepared",
        scores: { selfAwareness: 1 },
        flags: ["conf:excited"],
      },
      {
        id: "anxious",
        label: "More anxious than excited",
        flags: ["conf:anxious"],
      },
      {
        id: "avoidant",
        label: "Truthfully, I've been avoiding thinking about it",
        flags: ["conf:avoidant"],
      },
    ],
  },
];
