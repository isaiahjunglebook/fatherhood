/**
 * Composes ebook-src/ebook.html from the six chapter first-lessons (single
 * source of truth: content/chapters.ts) and prints it to
 * public/ebook/the-initiated-father-starter.pdf with the pre-installed
 * Chromium. Re-run on content changes:
 *   NODE_PATH=/opt/node22/lib/node_modules npx tsx scripts/generate-ebook.ts
 */
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
import { chapters } from "../content/chapters";
import { site } from "../content/site";
import { method } from "../content/method";

const require = createRequire(import.meta.url);
function loadPlaywright() {
  try {
    return require("playwright");
  } catch {
    return createRequire("/opt/node22/lib/node_modules/x.js")("playwright");
  }
}

const css = `
  :root { --ink: #1B1A17; --bone: #F6F2EA; --terra: #B85C38; --faint: #6b675e; }
  * { margin: 0; box-sizing: border-box; }
  @page { size: 6.5in 9.5in; margin: 0; }
  body { font-family: 'Helvetica Neue', Arial, sans-serif; color: var(--ink); }
  .page { page-break-after: always; padding: 0.85in 0.8in; min-height: 9.5in; background: var(--bone); }
  .cover {
    background: var(--ink); color: var(--bone); display: flex; flex-direction: column;
    justify-content: space-between; border-top: 14px solid var(--terra);
  }
  .cover .eyebrow { margin-top: 1.4in; }
  .cover h1 { font-family: Georgia, serif; font-size: 46px; line-height: 1.1; font-weight: 600; margin-top: 18px; }
  .cover .sub { font-size: 15px; line-height: 1.6; color: rgba(246,242,234,0.7); margin-top: 20px; max-width: 4.6in; }
  .cover .brand { font-size: 13px; letter-spacing: 3px; color: rgba(246,242,234,0.55); }
  .eyebrow {
    font-size: 11px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--terra);
  }
  h2.title { font-family: Georgia, serif; font-size: 27px; line-height: 1.15; font-weight: 600; margin: 10px 0 6px; }
  .stage { font-size: 12px; color: var(--faint); margin-bottom: 18px; }
  .lesson { font-size: 12.5px; line-height: 1.68; color: #3a3833; }
  .lesson p { margin-bottom: 10px; }
  .lesson h3 { font-family: Georgia, serif; font-size: 16px; color: var(--ink); margin: 16px 0 6px; }
  .lesson strong { color: var(--ink); }
  .lesson ul, .lesson ol { margin: 10px 0 10px 20px; }
  .lesson li { margin-bottom: 6px; }
  .lesson blockquote {
    border-left: 3px solid var(--terra); padding-left: 12px; margin: 14px 0;
    font-family: Georgia, serif; font-style: italic; color: var(--ink); font-size: 14px;
  }
  .footer-note { font-size: 10px; color: var(--faint); margin-top: 22px; border-top: 1px solid #ddd5c6; padding-top: 10px; }
  .intro p, .closing p { font-size: 13px; line-height: 1.7; color: #3a3833; margin-bottom: 12px; }
  .dim { margin: 14px 0; }
  .dim b { font-family: Georgia, serif; font-size: 15px; color: var(--ink); display: block; margin-bottom: 3px; }
  .dim p { font-size: 12px; }
  .resources li { font-size: 12.5px; margin-bottom: 6px; }
  .cta {
    background: var(--ink); color: var(--bone); border-radius: 12px; padding: 18px 20px; margin-top: 24px;
  }
  .cta b { font-family: Georgia, serif; font-size: 16px; }
  .cta p { color: rgba(246,242,234,0.75); font-size: 12px; margin-top: 6px; }
  .cta .url { color: var(--terra); font-weight: 700; }
`;

const chapterPages = chapters
  .map(
    (c) => `
  <section class="page">
    <div class="eyebrow">Chapter ${c.number} · ${c.stage}</div>
    <h2 class="title">${c.title}: ${c.lesson.title.replace("First lesson: ", "")}</h2>
    <div class="stage">${c.tagline}</div>
    <div class="lesson">${c.lesson.html}</div>
    <div class="footer-note">Research behind this lesson: ${c.research
      .map((r) => r.source)
      .join(" · ")} — full citations at ${site.url.replace("https://", "")}/method</div>
  </section>`
  )
  .join("\n");

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>${site.ebookTitle}</title><style>${css}</style></head>
<body>

<section class="page cover">
  <div>
    <div class="eyebrow">The starter guide</div>
    <h1>The Initiated Father</h1>
    <div class="sub">The first lessons from all six chapters — the inherited model, the 90-day runway, the trimester map, the first ten weeks, play, and emotion coaching. Research-backed, written for men.</div>
  </div>
  <div class="brand">THE INITIATED FATHER · ${site.url.replace("https://", "").toUpperCase()}</div>
</section>

<section class="page intro">
  <div class="eyebrow">Read this first</div>
  <h2 class="title">How to use this guide</h2>
  <p>This is the free starter guide for The Initiated Father — the opening lesson from each of the six chapters, in life order. You don't need to read it front to back. If you took the readiness quiz, start with your entry chapter and follow your sequence; if you haven't, three minutes at <b>${site.url.replace("https://", "")}/quiz</b> gets you a personal map.</p>
  <p>The program measures and trains three capacities:</p>
  ${method.dimensions
    .map((d) => `<div class="dim"><b>${d.name}</b><p>${d.body}</p></div>`)
    .join("")}
  <p>Every claim here traces to published research — the load-bearing sources are footnoted on each lesson and listed in full on the method page. This guide is education, not medical or mental-health treatment.</p>
</section>

${chapterPages}

<section class="page closing">
  <div class="eyebrow">Where this goes next</div>
  <h2 class="title">The initiated move</h2>
  <p>Six lessons are a start, not a finish. Each chapter of the full program goes deeper — the exercises, the conversations scripts, the checklists, and the research spine behind all of it.</p>
  <p><b>If you're struggling</b> — rage that scares you, numbness that won't lift, thoughts of harming yourself or anyone else — that's beyond any guide, and asking for help is the initiated move:</p>
  <ul class="resources">
    ${method.disclaimer.resources.map((r) => `<li>${r}</li>`).join("")}
  </ul>
  <div class="cta">
    <b>Get your personal map</b>
    <p>Eleven questions. Your archetype, your scores across the three dimensions, and your chapter sequence — free at <span class="url">${site.url.replace("https://", "")}/quiz</span></p>
  </div>
  <p class="footer-note">© The Initiated Father. You're welcome to share this PDF with a man who needs it.</p>
</section>

</body></html>`;

(async () => {
  mkdirSync("ebook-src", { recursive: true });
  mkdirSync("public/ebook", { recursive: true });
  writeFileSync("ebook-src/ebook.html", html);
  console.log("wrote ebook-src/ebook.html");

  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.pdf({
    path: "public/ebook/the-initiated-father-starter.pdf",
    width: "6.5in",
    height: "9.5in",
    printBackground: true,
  });
  await browser.close();
  console.log("wrote public/ebook/the-initiated-father-starter.pdf");
})();
