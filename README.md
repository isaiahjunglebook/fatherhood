# The Initiated Father

A research-backed preparation path for men becoming fathers — a readiness
quiz, six chapters, and a personal chapter sequence. Built as an
**installable web app**: members save it to their home screen and come back
to it as they work through the chapters.

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · TypeScript.

## Getting started

```bash
npm install
npm run dev        # develop
npm run build      # production build
npm start          # serve the production build
npm run lint       # eslint
```

## App / PWA architecture

The site is a Progressive Web App, deliberately structured so it can grow
into a store-distributed iOS app later:

- **`app/manifest.ts`** — web app manifest (standalone display, icons,
  app shortcuts to `/chapters` and `/quiz`). Served at `/manifest.webmanifest`.
- **`public/icons/` + `app/apple-icon.png`** — PNG icon set rendered from the
  brand mark by `scripts/generate-icons.ts` (re-run it if the mark changes).
- **`public/sw.js`** — service worker. Pages are network-first with a cache
  fallback, so chapters a member has opened stay readable offline; unknown
  pages fall back to `/offline`. Hashed build assets are cache-first.
  `next.config.ts` serves it with `Cache-Control: no-store` so updates roll
  out immediately. Bump `VERSION` in `sw.js` on breaking cache changes.
- **`components/layout/BottomNav.tsx`** — fixed bottom tab bar on mobile
  (Home / Chapters / Quiz / Method), hidden on `md+` where the header nav
  takes over.
- **`components/pwa/InstallPrompt.tsx`** — dismissible "add to home screen"
  banner: one-tap install on Chromium, share-sheet instructions on iOS.
- **`lib/progress.ts` + `app/chapters/page.tsx`** — device-local member
  progress (chapters opened, last quiz result) in `localStorage`, shown on
  the chapters hub. No accounts yet; the storage keys are versioned so a
  future account system can migrate them.

## Roadmap to a native iOS app

The current shape keeps that door open cheaply:

1. **Now (this repo):** installable PWA — home-screen icon, standalone
   display, offline chapters, local progress.
2. **Next:** accounts + server-side progress (replaces `lib/progress.ts`
   storage), web push re-engagement (see the Next.js PWA guide's VAPID
   setup — `docs` in `node_modules/next/dist/docs/01-app/02-guides/progressive-web-apps.md`).
3. **Store distribution:** wrap the same deployment with a thin native shell
   (e.g. Capacitor) or ship it as a PWA-backed App Store build once
   accounts exist. All content and logic stay in this codebase.

## Content & scripts

- Chapter, quiz, archetype, and method copy live in `content/`.
- `scripts/generate-og.ts` renders the OG images; `scripts/generate-ebook.ts`
  builds the starter-guide PDF; `scripts/generate-icons.ts` renders the icon
  set. All use the pre-installed Chromium via Playwright:
  `NODE_PATH=/opt/node22/lib/node_modules npx tsx scripts/<name>.ts`
