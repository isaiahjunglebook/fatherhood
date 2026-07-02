/**
 * Renders the 9 static OG images (1200×630) from one HTML template using the
 * pre-installed Chromium. Run once (and re-run on copy changes):
 *   NODE_PATH=/opt/node22/lib/node_modules npx tsx scripts/generate-og.ts
 */
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
import { chapters } from "../content/chapters";
import { site } from "../content/site";

const require = createRequire(import.meta.url);
function loadPlaywright() {
  try {
    return require("playwright");
  } catch {
    return createRequire("/opt/node22/lib/node_modules/x.js")("playwright");
  }
}

function template(eyebrow: string, title: string, sub: string): string {
  return `<!doctype html><html><head><meta charset="utf-8">
<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: #1B1A17; color: #F6F2EA;
    font-family: Georgia, 'Times New Roman', serif;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 72px 80px; position: relative; overflow: hidden;
  }
  .rule { position: absolute; top: 0; left: 0; right: 0; height: 10px; background: #B85C38; }
  .eyebrow {
    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; font-weight: 600;
    letter-spacing: 5px; text-transform: uppercase; color: #B85C38;
  }
  h1 { font-size: ${title.length > 34 ? 72 : 84}px; line-height: 1.05; font-weight: 600; max-width: 1000px; margin-top: 24px; }
  .sub {
    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 30px; line-height: 1.4;
    color: rgba(246,242,234,0.72); max-width: 900px; margin-top: 28px;
  }
  .brand {
    display: flex; align-items: center; gap: 18px;
    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 26px; color: rgba(246,242,234,0.6);
  }
  .mark {
    width: 44px; height: 44px; border-radius: 10px; background: #B85C38; color: #F6F2EA;
    display: flex; align-items: center; justify-content: center;
    font-family: Georgia, serif; font-size: 24px; font-weight: 700;
  }
</style></head>
<body>
  <div class="rule"></div>
  <div>
    <div class="eyebrow">${eyebrow}</div>
    <h1>${title}</h1>
    <div class="sub">${sub}</div>
  </div>
  <div class="brand"><div class="mark">IF</div>${site.name.toUpperCase()}</div>
</body></html>`;
}

const images: Array<{ file: string; eyebrow: string; title: string; sub: string }> = [
  {
    file: "default",
    eyebrow: "For men becoming fathers",
    title: "Fatherhood is something you prepare for.",
    sub: "A research-backed path from the man you are now through your child's seventh year.",
  },
  {
    file: "quiz",
    eyebrow: "The readiness quiz",
    title: "How ready are you — actually?",
    sub: "11 questions · 3 minutes · your readiness across three dimensions, your archetype, and your personal chapter map.",
  },
  {
    file: "results",
    eyebrow: "The readiness map",
    title: "Your map is ready.",
    sub: "Your archetype, your scores, and your six-chapter sequence — built from your answers.",
  },
  ...chapters.map((c) => ({
    file: `chapter-${c.slug}`,
    eyebrow: `Chapter ${c.number} · ${c.stage}`,
    title: c.title,
    sub: c.tagline,
  })),
];

(async () => {
  const { chromium } = loadPlaywright();
  mkdirSync("public/og", { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  for (const img of images) {
    await page.setContent(template(img.eyebrow, img.title, img.sub), {
      waitUntil: "networkidle",
    });
    await page.screenshot({ path: `public/og/${img.file}.png` });
    console.log(`wrote public/og/${img.file}.png`);
  }
  await browser.close();
})();
