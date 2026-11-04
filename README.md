# Webpulse Network Services — website

Next.js 16 (App Router, Cache Components) + Sanity (Studio embedded at `/studio`).

## Run locally

```bash
npm install
npm run dev
```

Without Sanity env vars the site renders the built-in seed content (`src/content/seed.ts`), so the frontend works before the CMS is connected.

## Connect Sanity (one-time)

1. `npx sanity@latest init --env .env.local` in this folder. Log in, create a project (dataset `production`), and say **no** to adding config files/templates (they already exist here), to MCP/skills setup and to creating a git commit.
2. Check `.env.local` has `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`. Compare with `.env.example`.
3. In sanity.io/manage → API → CORS origins, add `http://localhost:3000` (with credentials), plus the production domain later.
4. Load the default content: `npx sanity exec scripts/seed.ts --with-user-token`. Only run this once: it overwrites the site settings and home page.
5. Restart `npm run dev` and open `/studio`.

### Publishing updates (production)

Pages are cached for up to 1 hour. To make edits appear immediately, add a Sanity webhook:

- URL: `https://<domain>/api/revalidate`, trigger on create/update/delete, projection `{_type}`
- Secret: the same value as `SANITY_REVALIDATE_SECRET` in the host's env vars

## Content model

- **Site settings** (single document): company details, offices, nav, header button, footer links, optional logo.
- **Pages** (`page`): title, slug (home page = `home`), SEO fields, and a **sections** array that editors can add to, remove from and reorder. Section types: Hero, Intro + metrics, About, Practices, Services grid, Values, Projects carousel, Compliance grid, FAQ.
- Headlines use `*asterisks*` to mark the highlighted (grey or blue) words.
- Any section photo left empty renders a labelled placeholder.

## Stock images

Placeholder photos in `public/images/stock/`, all from Unsplash. Each was checked on its photo page as "Free to use under the Unsplash License" (no Unsplash+ images), which allows commercial use without attribution. None show people or third-party branding. `scripts/seed.ts` uploads them to Sanity.

| File | Photographer | Source |
|---|---|---|
| hero-server-racks.jpg | Taylor Vick | unsplash.com/photos/M5tzZtFCOfs |
| about-patch-panel.jpg | Yuriy Vertikov | unsplash.com/photos/c-lSQecD9oI |
| about-network-cables.jpg | Jordan Harrison | unsplash.com/photos/40XgDxBfYXM |
| practices-laptop-desk.jpg | Andrew Neel | unsplash.com/photos/cckf4TsHAuw |
| project-server-rack.jpg | Domaintechnik | unsplash.com/photos/VHmBX7FnXw0 |
| project-web-code-laptop.jpg | Arnold Francisca | unsplash.com/photos/f77Bh3inUpE |
| project-computer-lab.jpg | RUT MIIT | unsplash.com/photos/Y6hwl3U1oiU |
| project-software-code.jpg | Chris Ried | unsplash.com/photos/ieic5Tq8YMk |
| project-print-swatches.jpg | Markus Spiske | unsplash.com/photos/ehZtYEEbXG4 |

The project carousel sits under "Selected Work", so these stock photos read as Webpulse's own projects. Replace them with real project photos before launch.

## Decisions (and why)

- **Sanity over headless WordPress.** It's hosted on Sanity's free tier, so there's no PHP server or plugin updates to maintain for a small client, and it's one repo with one deploy.
- **Plain CSS (`src/styles/site.css`) instead of Tailwind.** It's ported 1:1 from the approved static prototype. A precision pass at 1440px matched all 33 measured elements exactly.
- **Inline section arrays, not separate service/FAQ documents.** Simpler for editors with a single page. Promote them to documents if they get their own pages later.
- **Seed fallback when Sanity isn't configured.** This lets the frontend be built and reviewed before the CMS exists. Once a project ID is set, the CMS is the only source of content (a missing home page returns 404, not stale seed content).
- **Compliance section shows issuer and document names only.** The source certificates and the 2025 audited accounts contain a TIN and revenue figures, so none of that is published. Copies are offered "on request".
- **`agentRules: false` in `next.config.ts`.** This stops `next dev` from generating an `AGENTS.md` in the repo.
