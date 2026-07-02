import type { InsightRule } from "@/lib/quiz/types";

/**
 * Ordered rule list — the engine takes the first 3 matches, max one per
 * group. The three lowest-dimension fallbacks at the end guarantee at
 * least two insights for any answer set.
 */
export const insightRules: InsightRule[] = [
  {
    id: "father-absent",
    group: "father",
    title: "You're building without a blueprint — that's harder, and freer",
    body: "You didn't get a father to copy, which means you also didn't get one to unlearn. The research on 'earned security' is on your side: men who make deliberate sense of an absent father parent just as securely as men who had present ones. Chapter 1 exists for exactly this work.",
    when: (ctx) => ctx.flags.has("father:absent"),
  },
  {
    id: "father-counter",
    group: "father",
    title: "'Not like him' is a compass, not a destination",
    body: "Knowing what you won't repeat is real information — but a father who only knows what he's against ends up improvising under pressure, and improvisation defaults to the old model. The work in Chapter 1 turns your counter-example into an actual specification of who you'll be instead.",
    when: (ctx) => ctx.flags.has("father:counter"),
  },
  {
    id: "fear-repeating",
    group: "fear",
    title: "The fear of becoming him is already protecting you",
    body: "Men who name the fear of repeating their father's mistakes almost never repeat them wholesale — the danger lives in what stays unexamined. Your fear is doing its job. Now give it a method: the inherited-model audit in Chapter 1 is where that fear gets converted into a plan.",
    when: (ctx) => ctx.flags.has("fear:repeating"),
  },
  {
    id: "fear-losing-self",
    group: "fear",
    title: "You won't lose yourself — you'll lose the unexamined version",
    body: "The fear of disappearing into fatherhood is usually a fear of drifting into it passively. Men who choose the role deliberately — who decide what stays, what goes, and what gets built — report identity expansion, not loss. The difference is initiation versus accident. That's the premise of this whole path.",
    when: (ctx) => ctx.flags.has("fear:losing-self"),
  },
  {
    id: "fear-none-low-knowledge",
    group: "fear",
    title: "No fear plus little knowledge is worth a second look",
    body: "Calm is an asset when it's built on preparation. When it precedes preparation, it's usually distance — the event isn't real yet. That's normal, especially early. But the men who struggle hardest in year one are the ones surprised by it. Let the chapters make it real on your schedule, before the birth does it on its own.",
    when: (ctx) => ctx.flags.has("fear:none") && ctx.scores.knowledge < 50,
  },
  {
    id: "reg-leaks",
    group: "regulation",
    title: "The leak under pressure is the first thing to fix",
    body: "Snapping, going cold, checking out — you named the pattern, which most men never do. Here's the stake: a baby raises the pressure and removes the recovery time, and a child's nervous system learns to read yours before it learns words. Regulation is a trainable skill, and it's the core of Chapter 1.",
    when: (ctx) => ctx.flags.has("reg:leaks"),
  },
  {
    id: "reg-suppress",
    group: "regulation",
    title: "Shoving it down works — until the container is full",
    body: "Suppression is a strategy with a shelf life, and sleep deprivation is what ends it. The first year of fatherhood reliably finds the bottom of the tank. Learning to name and discharge pressure before it stores up isn't soft — it's maintenance on the machine your family will depend on.",
    when: (ctx) => ctx.flags.has("reg:suppress"),
  },
  {
    id: "comm-closed",
    group: "communication",
    title: "The closed channel is your single highest-leverage fix",
    body: "You keep the hard stuff to yourself. In the transition to parenthood, that habit is the strongest predictor of the couple drifting into resentment — the research on new parents is blunt about it. One honest sentence to your partner this week ('some of this scares me') does more for your readiness than any amount of reading.",
    when: (ctx) => ctx.flags.has("comm:closed"),
  },
  {
    id: "rel-strained",
    group: "communication",
    title: "Fix the foundation before the load doubles",
    body: "You called the relationship strained. A baby is not a reset button — the research says the opposite: whatever tension exists gets amplified by sleep loss and negotiation load. The months before a baby (or the calm stretches after) are the window for repair, and Chapter 2's partnership work is built for it.",
    when: (ctx) => ctx.flags.has("rel:strained"),
  },
  {
    id: "rel-avoids-hard",
    group: "communication",
    title: "'Good but we avoid the hard talks' is the quiet risk profile",
    body: "Couples who feel solid but rarely go into the hard topics get hit hardest by the transition — the unspoken expectations about roles, money, and family surface all at once, mid-sleep-deprivation. The four conversations in Chapter 2 are the pressure test to run while the stakes are still low.",
    when: (ctx) => ctx.flags.has("rel:avoids-hard"),
  },
  {
    id: "support-none",
    group: "support",
    title: "Zero men in your corner is the loneliest way to do this",
    body: "About one father in ten hits real depression in the first year, and isolation is its best friend. You don't need a men's circle by Friday — you need one honest conversation with one man you respect. Fatherhood run entirely solo isn't stoicism; it's a single point of failure.",
    when: (ctx) => ctx.flags.has("support:none"),
  },
  {
    id: "support-shallow",
    group: "support",
    title: "You have friends — now you need one who goes deep",
    body: "Banter-level friendship evaporates exactly when fatherhood gets heavy, because the heavy stuff can't be said in that register. Pick the one friend most likely to handle a real conversation and have it. Most men discover the other guy was waiting for someone to go first.",
    when: (ctx) => ctx.flags.has("support:shallow"),
  },
  {
    id: "know-wing-it",
    group: "knowledge",
    title: "'I'll figure it out when it happens' has a failure mode",
    body: "Some of fatherhood can be winged. The first weeks can't — the crying curve, safe sleep, and your delivery-room job are things you either know at 3 a.m. or you don't, and the cost of not knowing lands on the two people you're there to protect. Two hours with Chapters 3 and 4 closes most of the gap.",
    when: (ctx) => ctx.flags.has("know:wing-it") || ctx.flags.has("know:blank"),
  },
  {
    id: "know-her-department",
    group: "knowledge",
    title: "'Her department' is a myth that costs fathers the first year",
    body: "The pregnancy is in her body; the pregnancy is not her department. Father involvement during it moves birth outcomes, her health, and your own bond years later — the data is unambiguous. Chapter 3 is the trimester map written for your seat, not hers.",
    when: (ctx) => ctx.flags.has("know:her-department"),
  },
  {
    id: "conf-avoidant",
    group: "confidence",
    title: "The avoidance is information",
    body: "Not thinking about it is a strategy for managing a feeling — usually fear wearing a disguise. The event doesn't wait for readiness; it converts avoidance into panic on its own schedule. You just did the non-avoidant thing by taking this quiz. Keep that thread: read your entry chapter this week.",
    when: (ctx) => ctx.flags.has("conf:avoidant"),
  },
  {
    id: "conf-anxious-prepared",
    group: "confidence",
    title: "Your anxiety is miscalibrated — the data says you're further along than you feel",
    body: "You report more anxiety than excitement, but your scores are solid across the board. That combination usually means high standards, not low readiness. Anxiety at your level of preparation is the signal of a man taking it seriously — let the chapters convert it into specific, finishable work.",
    when: (ctx) =>
      ctx.flags.has("conf:anxious") &&
      ctx.scores.selfAwareness >= 55 &&
      ctx.scores.knowledge >= 55,
  },
  {
    id: "work-resistant",
    group: "innerwork",
    title: "You don't need therapy to do the work — you need a method",
    body: "Deliberate self-work isn't your thing; fair. But the inherited-model audit isn't couch talk — it's a thirty-minute written exercise with a concrete output, closer to a pre-mission checklist than a feelings circle. Chapter 1 gives you the version built for men who'd rather do than discuss.",
    when: (ctx) => ctx.flags.has("work:resistant"),
  },
  // ——— Fallbacks: one per dimension; the engine also uses these directly to
  // guarantee every result carries at least two insights ———
  {
    id: "fallback-selfAwareness",
    group: "fallback",
    title: "The man is on your map",
    body: "Self-awareness is one of your weaker fronts — the patterns you inherited and how you run under pressure are the least-examined part of your readiness. It's the highest-leverage place to invest, and it's why your sequence weights Chapter 1's work.",
    when: (ctx) => ctx.lowest === "selfAwareness",
  },
  {
    id: "fallback-relationship",
    group: "fallback",
    title: "The partnership is on your map",
    body: "The relationship dimension is one of your weaker fronts — and it's the load-bearing wall of early parenthood. The couples who thrive after a baby are distinguishable beforehand by exactly the habits your sequence prioritizes: hard conversations had early, support built before it's needed.",
    when: (ctx) => ctx.lowest === "relationship",
  },
  {
    id: "fallback-knowledge",
    group: "fallback",
    title: "The craft is on your map",
    body: "Knowledge is one of your weaker fronts — the concrete mechanics of pregnancy, birth, and the first year. Good news: it's the fastest dimension to raise. A few focused hours in your first two chapters moves you from spectator to operator.",
    when: (ctx) => ctx.lowest === "knowledge",
  },
];
