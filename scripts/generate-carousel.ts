/**
 * Renders the 10-slide Instagram launch carousel (1080×1350 PNGs) from one
 * HTML template system, using the brand tokens from the site. Re-run on copy
 * changes:
 *   NODE_PATH=/opt/node22/lib/node_modules npx tsx scripts/generate-carousel.ts
 */
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";

const require = createRequire(import.meta.url);
function loadPlaywright() {
  try {
    return require("playwright");
  } catch {
    return createRequire("/opt/node22/lib/node_modules/x.js")("playwright");
  }
}

const HANDLE = "@theinitiatedfather";

const css = `
  * { margin: 0; box-sizing: border-box; }
  :root {
    --ink: #1B1A17; --ink-soft: #3a3833; --faint: #6b675e;
    --bone: #F6F2EA; --bone-deep: #EDE6D8;
    --terra: #B85C38; --terra-deep: #9A4A2C; --line: #ddd5c6;
  }
  body {
    width: 1080px; height: 1350px; overflow: hidden; position: relative;
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    display: flex; flex-direction: column;
  }
  body.bone { background: var(--bone); color: var(--ink); }
  body.ink { background: var(--ink); color: var(--bone); }
  .rule { position: absolute; top: 0; left: 0; right: 0; height: 14px; background: var(--terra); }
  .frame { flex: 1; display: flex; flex-direction: column; padding: 96px 88px 72px; }
  .top { display: flex; justify-content: space-between; align-items: baseline; }
  .eyebrow {
    font-size: 25px; font-weight: 700; letter-spacing: 6px; text-transform: uppercase;
    color: var(--terra);
  }
  .counter { font-size: 24px; font-weight: 600; letter-spacing: 2px; }
  body.bone .counter { color: var(--faint); }
  body.ink .counter { color: rgba(246,242,234,0.45); }
  .content { flex: 1; display: flex; flex-direction: column; justify-content: center; }
  h1 {
    font-family: 'Fraunces', Georgia, serif; font-weight: 600;
    letter-spacing: -0.5px;
  }
  .footer {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 24px; font-weight: 600; letter-spacing: 1px;
  }
  body.bone .footer { color: var(--faint); }
  body.ink .footer { color: rgba(246,242,234,0.55); }
  .brand { display: flex; align-items: center; gap: 16px; }
  .mark {
    width: 52px; height: 52px; border-radius: 12px; background: var(--terra); color: var(--bone);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Fraunces', Georgia, serif; font-size: 26px; font-weight: 700;
  }
  /* shared bits */
  .accent { color: var(--terra); }
  .sub { font-size: 33px; line-height: 1.5; font-weight: 450; }
  body.bone .sub { color: var(--ink-soft); }
  body.ink .sub { color: rgba(246,242,234,0.75); }
  .foot-note { font-size: 25px; }
  body.bone .foot-note { color: var(--faint); }
  body.ink .foot-note { color: rgba(246,242,234,0.5); }
  .swipe {
    display: inline-flex; align-items: center; gap: 14px; font-size: 27px; font-weight: 600;
    color: var(--terra); letter-spacing: 1px;
  }
`;

interface Slide {
  bg: "ink" | "bone";
  eyebrow: string;
  body: string;
}

const slides: Slide[] = [
  // 01 — hook
  {
    bg: "ink",
    eyebrow: "For men becoming fathers",
    body: `
      <h1 style="font-size:88px; line-height:1.08;">Fatherhood is not something that happens to you.<br><span class="accent">It&rsquo;s something you prepare for.</span></h1>
      <div class="sub" style="margin-top:44px;">What that preparation actually looks like &mdash; in 10 slides.</div>
      <div class="swipe" style="margin-top:56px;">Swipe <span style="font-size:34px; line-height:1;">&rarr;</span></div>
    `,
  },
  // 02 — the gap
  {
    bg: "bone",
    eyebrow: "The gap",
    body: `
      <h1 style="font-size:68px; line-height:1.12;">She gets nine months of preparation.<br><span class="accent">You get a joke about sleep.</span></h1>
      <div class="sub" style="margin-top:40px;">Books, appointments, apps, other mothers &mdash; the world preps women for parenthood everywhere it can. Men get a hospital tour and a stroller review.</div>
      <div class="sub" style="margin-top:28px;">Then everyone acts surprised when new fathers feel like spectators in their own families.</div>
    `,
  },
  // 03 — the stakes
  {
    bg: "bone",
    eyebrow: "The stakes",
    body: `
      <div style="border-bottom:2px solid var(--line); padding-bottom:44px;">
        <div style="font-family:'Fraunces',Georgia,serif; font-size:110px; font-weight:600; color:var(--terra); line-height:1;">2 in 3</div>
        <div class="sub" style="margin-top:18px;">couples see relationship satisfaction drop hard within three years of a first baby.</div>
        <div class="foot-note" style="margin-top:10px;">Gottman Institute, longitudinal research</div>
      </div>
      <div style="padding-top:44px;">
        <div style="font-family:'Fraunces',Georgia,serif; font-size:110px; font-weight:600; color:var(--terra); line-height:1;">1 in 10</div>
        <div class="sub" style="margin-top:18px;">fathers develops depression around a birth &mdash; peaking at months 3&ndash;6, almost never screened.</div>
        <div class="foot-note" style="margin-top:10px;">Paulson &amp; Bazemore, JAMA meta-analysis</div>
      </div>
      <div style="margin-top:52px; font-size:29px; font-weight:600; color:var(--ink);">Neither number is destiny. Both respond to preparation.</div>
    `,
  },
  // 04 — the old idea
  {
    bg: "ink",
    eyebrow: "The old idea",
    body: `
      <h1 style="font-size:64px; line-height:1.22;">&ldquo;Most cultures in history treated becoming a father as an <span class="accent">initiation</span> &mdash; something a man was deliberately prepared for by other men.</h1>
      <h1 style="font-size:64px; line-height:1.22; margin-top:28px;">Then, quietly, we stopped.&rdquo;</h1>
      <div class="sub" style="margin-top:48px;">Nothing replaced it. That&rsquo;s the gap this page exists to close.</div>
    `,
  },
  // 05 — what this is
  {
    bg: "bone",
    eyebrow: "What this is",
    body: `
      <h1 style="font-size:84px; line-height:1.05;">The Initiated<br>Father</h1>
      <div class="sub" style="margin-top:40px;">A research-backed preparation path for men &mdash; from the man you are today through your child&rsquo;s seventh year.</div>
      <div style="margin-top:48px; display:flex; flex-direction:column; gap:20px;">
        <div style="display:flex; gap:18px; align-items:baseline;"><span style="color:var(--terra); font-size:30px;">&mdash;</span><span class="sub"><b style="color:var(--ink);">Honest assessment.</b> No participation trophies.</span></div>
        <div style="display:flex; gap:18px; align-items:baseline;"><span style="color:var(--terra); font-size:30px;">&mdash;</span><span class="sub"><b style="color:var(--ink);">A personal map.</b> Ordered by where you actually stand.</span></div>
        <div style="display:flex; gap:18px; align-items:baseline;"><span style="color:var(--terra); font-size:30px;">&mdash;</span><span class="sub"><b style="color:var(--ink);">Research, not vibes.</b> Every lesson cites its sources.</span></div>
      </div>
      <div class="foot-note" style="margin-top:48px;">No pastels. No drill-sergeant cosplay. No shame.</div>
    `,
  },
  // 06 — three dimensions
  {
    bg: "bone",
    eyebrow: "The method",
    body: `
      <h1 style="font-size:60px; line-height:1.15;">Readiness isn&rsquo;t a personality trait. It&rsquo;s three <span class="accent">trainable capacities.</span></h1>
      <div style="margin-top:56px; display:flex; flex-direction:column; gap:0;">
        <div style="border-top:2px solid var(--line); padding:32px 0; display:flex; gap:28px;">
          <div style="font-family:'Fraunces',Georgia,serif; font-size:44px; color:var(--terra); font-weight:600;">1</div>
          <div><div style="font-family:'Fraunces',Georgia,serif; font-size:40px; font-weight:600;">Self-awareness</div>
          <div class="sub" style="font-size:29px; margin-top:8px;">The model of fatherhood you inherited &mdash; and how you run under pressure.</div></div>
        </div>
        <div style="border-top:2px solid var(--line); padding:32px 0; display:flex; gap:28px;">
          <div style="font-family:'Fraunces',Georgia,serif; font-size:44px; color:var(--terra); font-weight:600;">2</div>
          <div><div style="font-family:'Fraunces',Georgia,serif; font-size:40px; font-weight:600;">Partnership</div>
          <div class="sub" style="font-size:29px; margin-top:8px;">The load-bearing wall of early parenthood.</div></div>
        </div>
        <div style="border-top:2px solid var(--line); border-bottom:2px solid var(--line); padding:32px 0; display:flex; gap:28px;">
          <div style="font-family:'Fraunces',Georgia,serif; font-size:44px; color:var(--terra); font-weight:600;">3</div>
          <div><div style="font-family:'Fraunces',Georgia,serif; font-size:40px; font-weight:600;">Knowledge</div>
          <div class="sub" style="font-size:29px; margin-top:8px;">Pregnancy, birth, the first years &mdash; the craft.</div></div>
        </div>
      </div>
    `,
  },
  // 07 — six chapters
  {
    bg: "bone",
    eyebrow: "The path",
    body: `
      <h1 style="font-size:58px; line-height:1.15;">Six chapters, from the man to the father</h1>
      <div style="margin-top:48px; display:flex; flex-direction:column; gap:26px;">
        ${[
          ["01", "The Man", "before everything"],
          ["02", "Conception", "deciding &amp; trying"],
          ["03", "The Pregnancy", "nine months"],
          ["04", "The Arrival", "birth to age one"],
          ["05", "The Bond", "ages one to three"],
          ["06", "The Guide", "ages four to seven"],
        ]
          .map(
            ([n, t, s]) => `
          <div style="display:flex; align-items:baseline; gap:26px;">
            <span style="font-size:27px; font-weight:700; color:var(--terra); letter-spacing:2px;">${n}</span>
            <span style="font-family:'Fraunces',Georgia,serif; font-size:44px; font-weight:600;">${t}</span>
            <span style="flex:1; border-bottom:2px dotted var(--line); transform:translateY(-8px);"></span>
            <span class="foot-note" style="font-size:27px;">${s}</span>
          </div>`
          )
          .join("")}
      </div>
      <div class="sub" style="margin-top:52px;">You don&rsquo;t read them in order. <b style="color:var(--ink);">The quiz orders them for where you are.</b></div>
    `,
  },
  // 08 — the tool to keep
  {
    bg: "bone",
    eyebrow: "A tool to keep · from Chapter 1",
    body: `
      <div style="border:4px solid var(--terra); border-radius:28px; padding:64px 56px; background:#fff9f0;">
        <h1 style="font-size:58px; line-height:1.25;">&ldquo;When my child is fifteen and describes me to a friend, I want the sentence to be <span style="border-bottom:5px solid var(--terra); white-space:nowrap;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&thinsp;.&rdquo;</h1>
      </div>
      <div class="sub" style="margin-top:48px;">Write the sentence down. That&rsquo;s your specification &mdash; everything else is engineering toward it.</div>
      <div style="margin-top:40px; font-size:27px; font-weight:700; color:var(--terra); letter-spacing:2px; text-transform:uppercase;">Save this slide. Fill in the blank tonight.</div>
    `,
  },
  // 09 — how it works
  {
    bg: "bone",
    eyebrow: "Where to start",
    body: `
      <h1 style="font-size:66px; line-height:1.12;">Three minutes.<br>Eleven questions.<br><span class="accent">Your map.</span></h1>
      <div style="margin-top:56px; display:flex; flex-direction:column; gap:32px;">
        <div style="display:flex; gap:26px; align-items:flex-start;">
          <div style="min-width:56px; height:56px; border-radius:50%; background:var(--terra); color:var(--bone); display:flex; align-items:center; justify-content:center; font-family:'Fraunces',Georgia,serif; font-size:30px; font-weight:600;">1</div>
          <div class="sub" style="padding-top:6px;">Take the free readiness quiz</div>
        </div>
        <div style="display:flex; gap:26px; align-items:flex-start;">
          <div style="min-width:56px; height:56px; border-radius:50%; background:var(--terra); color:var(--bone); display:flex; align-items:center; justify-content:center; font-family:'Fraunces',Georgia,serif; font-size:30px; font-weight:600;">2</div>
          <div class="sub" style="padding-top:6px;">Get your father archetype + your scores across the three dimensions</div>
        </div>
        <div style="display:flex; gap:26px; align-items:flex-start;">
          <div style="min-width:56px; height:56px; border-radius:50%; background:var(--terra); color:var(--bone); display:flex; align-items:center; justify-content:center; font-family:'Fraunces',Georgia,serif; font-size:30px; font-weight:600;">3</div>
          <div class="sub" style="padding-top:6px;">Follow your personal chapter sequence &mdash; and grab the free starter guide (PDF)</div>
        </div>
      </div>
    `,
  },
  // 10 — CTA / pinned explainer
  {
    bg: "ink",
    eyebrow: "The Initiated Father",
    body: `
      <h1 style="font-size:78px; line-height:1.1;">Find out where you actually stand.</h1>
      <div class="sub" style="margin-top:40px;">This page exists to close the preparation gap &mdash; research-backed fatherhood, written for men. Follow along, and start with the quiz.</div>
      <div style="margin-top:64px; display:inline-flex;">
        <div style="background:var(--terra); color:var(--bone); border-radius:999px; padding:30px 54px; font-size:33px; font-weight:700; letter-spacing:0.5px;">Take the readiness quiz &rarr; link in bio</div>
      </div>
      <div class="foot-note" style="margin-top:56px;">Free &middot; 3 minutes &middot; comes with the starter guide</div>
    `,
  },
];

function page(slide: Slide, index: number): string {
  const n = String(index + 1).padStart(2, "0");
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Inter:wght@400..700&display=block" rel="stylesheet">
<style>${css}</style></head>
<body class="${slide.bg}">
  <div class="rule"></div>
  <div class="frame">
    <div class="top">
      <div class="eyebrow">${slide.eyebrow}</div>
      <div class="counter">${n}&thinsp;/&thinsp;10</div>
    </div>
    <div class="content">${slide.body}</div>
    <div class="footer">
      <div class="brand"><div class="mark">IF</div>THE INITIATED FATHER</div>
      <div>${HANDLE}</div>
    </div>
  </div>
</body></html>`;
}

(async () => {
  const { chromium } = loadPlaywright();
  mkdirSync("marketing/carousel", { recursive: true });
  const browser = await chromium.launch();
  const pg = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 1,
  });
  for (let i = 0; i < slides.length; i++) {
    await pg.setContent(page(slides[i], i), { waitUntil: "networkidle" });
    await pg.evaluate(() => (document as unknown as { fonts: { ready: Promise<void> } }).fonts.ready);
    const file = `marketing/carousel/slide-${String(i + 1).padStart(2, "0")}.png`;
    await pg.screenshot({ path: file });
    console.log(`wrote ${file}`);
  }
  await browser.close();
})();
