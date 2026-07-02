/**
 * Deterministic engine verification — run with: npx tsx scripts/verify-engine.ts
 * Exercises all 5 archetypes, all 4 life-stage entry chapters, malformed-code
 * rejection, and every possible answer combination (insight/sequence sanity).
 */
import { decodeAnswers, encodeAnswers } from "../lib/quiz/encode";
import { computeResults } from "../lib/results/engine";
import { questions } from "../content/quiz";

const cases: Array<{ code: string; archetype: string; entry: string }> = [
  { code: "v1-20000000000", archetype: "steady-hand", entry: "the-pregnancy" },
  { code: "v1-04333323223", archetype: "groundbreaker", entry: "the-man" },
  { code: "v1-20100102121", archetype: "seeker", entry: "the-pregnancy" },
  { code: "v1-13011012202", archetype: "anchor", entry: "conception" },
  { code: "v1-32122120010", archetype: "architect", entry: "the-arrival" },
];

let failures = 0;

for (const c of cases) {
  const answers = decodeAnswers(c.code);
  if (!answers) {
    console.log(`FAIL decode ${c.code}`);
    failures++;
    continue;
  }
  const r = computeResults(answers)!;
  const ok = r.archetypeId === c.archetype && r.sequence[0] === c.entry;
  if (!ok) failures++;
  console.log(
    `${ok ? "PASS" : "FAIL"} ${c.code} → ${r.archetypeId} entry=${r.sequence[0]} scores=${JSON.stringify(r.scores)}\n     insights=[${r.insights.map((i) => i.id).join(", ")}]\n     sequence=${r.sequence.join(" → ")}`
  );
}

const bad = ["v2-20000000000", "v1-2000000000", "v1-99999999999", "garbage", "", "v1-", "v1-2000000000a"];
for (const b of bad) {
  if (decodeAnswers(b) !== null) {
    console.log(`FAIL malformed accepted: "${b}"`);
    failures++;
  }
}

if (encodeAnswers([2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) !== "v1-20000000000") {
  console.log("FAIL encode roundtrip");
  failures++;
}

// Exhaustive: every answer combination yields a valid result with ≥2 insights.
const counts = questions.map((q) => q.options.length);
let checked = 0;
function walk(prefix: number[], qi: number) {
  if (qi === counts.length) {
    const r = computeResults(prefix);
    if (!r || r.insights.length < 2 || r.sequence.length !== 6 || new Set(r.sequence).size !== 6) {
      console.log(`FAIL combo ${prefix.join("")}`);
      failures++;
    }
    checked++;
    return;
  }
  for (let o = 0; o < counts[qi]; o++) walk([...prefix, o], qi + 1);
}
walk([], 0);
console.log(`exhaustive combos checked: ${checked}`);

console.log(failures === 0 ? "ALL PASS" : `${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
