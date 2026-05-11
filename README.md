# Microlines Website

Hero website for Microlines — window blinds and folding doors. Static catalogue + quote-request lead capture.

## Stack

- [Astro 5](https://astro.build) (hybrid output) + [Tailwind v4](https://tailwindcss.com)
- React adapter installed (no islands shipped in v1 — reserved for deferred interactive features)
- Content via Astro Content Collections (Markdown / JSON in `src/content/`)
- Native HTML forms post to Astro endpoints under `src/pages/api/`
- Deploy target: Cloudflare Pages

## Quickstart

```sh
npm install
cp .env.example .env
npm run dev
```

Visit http://localhost:4321.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the built site |
| `npm run typecheck` | Run `astro check` |
| `npm run lint` | ESLint |
| `npm run format` | Prettier write |

## Project layout

See `src/` — `components/` (static Astro), `islands/` (deferred React islands), `content/` (collections), `layouts/`, `lib/`, `pages/`, `styles/`.

## Lead capture

Forms post to `src/pages/api/quote.ts` and `src/pages/api/lead.ts`. The transport is pluggable via `LEAD_TRANSPORT`:

- `console` (default in dev) — prints the lead to the terminal
- `resend` — sends an HTML email (set `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`)
- `sheet` — POSTs to a Google Apps Script webhook (`SHEET_WEBHOOK_URL`)

## Deferred features

Configurator, room visualizer, "help me choose" quiz, and before/after slider live under `src/islands/` (currently empty). Content schemas already capture the data they will need (product `tags`, `availableFabrics`, `gallery.beforeImage`/`afterImage`).
