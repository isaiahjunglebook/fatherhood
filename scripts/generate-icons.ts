/**
 * Renders the PWA icon set from one HTML template using the pre-installed
 * Chromium. Run once (and re-run if the brand mark changes):
 *   NODE_PATH=/opt/node22/lib/node_modules npx tsx scripts/generate-icons.ts
 *
 * Outputs:
 *   public/icons/icon-192.png           — manifest icon (purpose: any)
 *   public/icons/icon-512.png           — manifest icon (purpose: any)
 *   public/icons/icon-maskable-512.png  — content inside the maskable safe zone
 *   app/apple-icon.png                  — 180×180 apple-touch-icon (Next convention)
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

/**
 * The IF monogram tile. `scale` shrinks the mark toward the center for
 * maskable icons, whose outer ~10% may be cropped by the launcher mask.
 */
function template(size: number, scale: number): string {
  const rule = Math.round(size * 0.09 * scale);
  const font = Math.round(size * 0.5 * scale);
  return `<!doctype html><html><head><meta charset="utf-8">
<style>
  * { margin: 0; }
  body {
    width: ${size}px; height: ${size}px; background: #1B1A17;
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .rule { position: absolute; top: 0; left: 0; right: 0; height: ${rule}px; background: #B85C38; }
  .mark {
    font-family: Georgia, 'Times New Roman', serif; font-weight: 700;
    font-size: ${font}px; color: #F6F2EA; letter-spacing: ${Math.round(size * 0.01)}px;
    margin-top: ${Math.round(rule / 2)}px;
  }
</style></head><body>
  <div class="rule"></div>
  <div class="mark">IF</div>
</body></html>`;
}

async function main() {
  const { chromium } = loadPlaywright();
  mkdirSync("public/icons", { recursive: true });

  const targets: Array<{ path: string; size: number; scale: number }> = [
    { path: "public/icons/icon-192.png", size: 192, scale: 1 },
    { path: "public/icons/icon-512.png", size: 512, scale: 1 },
    { path: "public/icons/icon-maskable-512.png", size: 512, scale: 0.72 },
    { path: "app/apple-icon.png", size: 180, scale: 1 },
  ];

  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const t of targets) {
    await page.setViewportSize({ width: t.size, height: t.size });
    await page.setContent(template(t.size, t.scale), { waitUntil: "networkidle" });
    await page.screenshot({ path: t.path });
    console.log(`✓ ${t.path}`);
  }
  await browser.close();
}

main();
