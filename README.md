# FoodieClub — Pilot results dashboard (demo)

Static React dashboard with **dummy data** for stakeholder review. Replace `src/data/dashboard.ts` with real metrics or an API when available.

## Run locally

```bash
cd dashboard
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: test production build locally
```

## Deploy (public link for Slack)

**Vercel**

1. Push this repo to GitHub (or use Vercel CLI).
2. Import project → root directory: `dashboard` (or monorepo subfolder).
3. Build command: `npm run build`, output: `dist`.
4. Copy the production URL into your Slack message.

**Netlify**

- Base directory: `dashboard`
- Build: `npm run build`
- Publish: `dashboard/dist`

**Cloudflare Pages** — same build/output as above.

## Slack copy

**Scenario-accurate verbatim messages** (both client prompts) live in the repo root: [`../CLIENT_SLACK.md`](../CLIENT_SLACK.md). Replace the placeholder URL with your production link.

**Short templates (same intent):**

**Message 1 — after week one (no link yet)**

> Hey — thanks for flagging. We’re one week into the pilot: objective is to make “is FoodieClub legit?” threads easier for people to resolve with real detail (how the discount works, off-peak inventory, card-in-app) instead of leaving only skepticism at the top of search.  
> First SF thread is live; we’re seeing constructive back-and-forth and the brand account landed the quieter-hours model clearly. Three more posts are scheduled through month-end; I’ll send a snapshot dashboard link with the next update so you can share internally without digging through Reddit.

**Message 2 — with dashboard**

> Here’s the live results snapshot (modeled reach + sentiment shift vs our pre-pilot baseline — full methodology on page): **[YOUR_DEPLOYED_URL]**  
> TL;DR: Campaign 1 moved the sentiment mix in the right direction on the “legit / too good to be true” cluster; we’re watching mod/community feedback and keeping venue-count messaging aligned with what you’ve approved. Next two weeks we double down on proof-heavy replies in LA + SD before the statewide wrap. Happy to walk through on a quick call if useful.

Adjust dates and URLs to match your deployment.
