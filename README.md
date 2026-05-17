# DaemonCraft · Submission Hub

Public landing page for the Gemma 4 Good Hackathon (Entregable 4 of [`../entregables/entregables_blueprint.md`](../entregables/entregables_blueprint.md)).

Based on the [`entregable_4_website_ai_handoff.md`](../entregables/entregable_4_website_ai_handoff.md) spec.

## Stack

- Astro 5 + Tailwind + React
- Allay-vibe palette (cyan `#00D9FF`, holodeck gold `#FFB800`, indigo `#2D1B4E`, pearl `#E8E8ED`)
- Minecraft accents (grass green, torch warm) for problem/results sections
- Inline SVG architecture diagram (no extra deps)
- Pure HTML video embeds (any provider via iframe URL)

## Run

```bash
cd web-submission
npm install
npm run dev
# open http://localhost:8772
```

Build static for hosting (Netlify / Vercel / GitHub Pages / Hostinger):

```bash
npm run build
# output → dist/
```

## How to plug in the real URLs

Single source of truth: [`src/data/submission.js`](src/data/submission.js).

| Field | What to put |
|---|---|
| `video_principal_url` | YouTube/Vimeo **embed URL** (e.g. `https://www.youtube.com/embed/XXXX`) |
| `video_largo_url` | Idem for the uncut session video |
| `repo_public_url` | Public GitHub URL of the DaemonCraft repo |
| `kaggle_article_url` | Final Kaggle write-up URL |
| `cover_image` … `architecture_diagram` | Paths under `/public` (drop the captures from Mariano there) |

If a video URL is empty, the placeholder block is shown — never a broken iframe.

## Sections (12, mirrors handoff §5)

1. Hero · 2. Problem · 3. What the demo shows · 4. Main video
5. Architecture · 6. Why Gemma 4 · 7. Results · 8. Limits
9. Full session · 10. Gallery · 11. Links · 12. Footer

## Pending captures from Mariano

- `gameplay-1.png` — bot following / accompanying the player
- `gameplay-2.png` — bot doing an embodied task (mine → gather → return)
- `dashboard.png` — observability panel with active plan + state
- `technical.png` — Ollama serving Gemma 4 + a clean tool-call response
- (optional) better `cover.png` than the SVG placeholder

Drop them into `public/` and update the paths in `src/data/submission.js`.
The SVG fallbacks already in `public/placeholders/` keep the layout intact while the real assets are pending.

## Branding rule (locked)

Allay vibe — NOT acero-azul corporativo. See AlterMundi auto-memory: `project_daemoncraft_branding_allay.md`.
