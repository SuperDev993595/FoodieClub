# FoodieClub Pilot — Implementation Guide (Mock Scenario)

This document explains **how to implement** the deliverables from the project brief: client Slack comms, a results dashboard with dummy data, and stakeholder-ready narrative. It is a guide only; swap in real metrics when you have them.

**Reference implementation:** a Vite + React dashboard with dummy data and deploy notes lives in [`dashboard/`](./dashboard/README.md).

---

## 1. What you are actually building

| Piece | Purpose |
|--------|---------|
| **Slack message #1** | Reassure after week one; set expectations; show you are leading, not just reporting. |
| **Slack message #2 + link** | Deliver “proof” in one place; make renewal feel rational. |
| **Dashboard (web app)** | A single URL stakeholders open: before/after sentiment, campaign snapshot, directional outcomes. Dummy data is fine for the exercise. |
| **Next-steps narrative** | Metrics that matter, renewal actions, CEO check-in script. |

---

## 2. Tech stack options (pick one)

- **Fastest:** Vite + React + TypeScript, deploy to **Vercel** or **Netlify** (free tier, public URL for the client).
- **Even simpler:** Single `index.html` + CSS + a little vanilla JS charting (Chart.js) if you want zero build tooling.
- **If you already use Next.js:** App Router page with static dummy JSON in `/data`.

**Must-have for the brief:** a **public or shareable link**. After deploy, test in an incognito window.

---

## 3. Dashboard — what to code (minimal but credible)

**Layout (top to bottom):**

1. **Header:** Client name (FoodieClub — mock), pilot period, “as of [date]”.
2. **Executive strip (3–4 KPI cards):** e.g. estimated impressions, thread engagement, sentiment shift (before vs after), branded mention velocity. Use clear labels: “directional / modeled” if using dummy data.
3. **Before / after sentiment:** Simple bar or line chart — baseline (made up) vs post-campaign window. One sentence under the chart explaining what moved.
4. **Campaign table:** Rows = campaigns; columns = subreddit, keyword/theme, status (live / scheduled), post date, key outcome (upvotes, comments, saves if you fake them consistently).
5. **Highlight the first campaign:** Mark it “Pilot — Week 1” and include 1–2 bullets (theme addressed, tone of discussion).
6. **Footnote:** Methodology in plain English (listening on Reddit, manual review, modeled reach — whatever you fake, be internally consistent).

**Dummy data rules:**

- Invent a **baseline** (e.g. “mixed / skeptical” share of comments) and a **post** window that shows improvement.
- Tie numbers to the **story** (legitimacy, off-peak tradeoff, card-in-app confusion).
- Do not use real competitor or client confidential numbers.

**Design:**

- Lots of whitespace, one accent color, readable fonts (system UI or Inter).
- Mobile-friendly grid (stakeholders open links on phones).

---

## 4. Slack communication pattern

**Message 1 (report request):**

- Acknowledge timing (1 week in).
- **Outcome framing:** what we set out to do (shift “scam?” searches toward balanced discussion).
- **What’s done:** first thread live + narrative of early signal (without overclaiming).
- **What’s next:** remaining scheduled posts, what you’re watching.
- **Ask:** one clarifying question if needed (e.g. priority cities), or confirm EOM review.

**Message 2 (dashboard link):**

- Short context: “here’s the live snapshot.”
- **Link** to the deployed dashboard.
- 2–3 bullets: what improved, what is still noisy, what you’ll optimize next.
- **Explicit caveat** if data is modeled: transparency builds trust.

Tone: calm, advisory, not defensive. **Lead** the client; don’t dump metrics without interpretation.

---

## 5. Files / repo structure (suggested)

```
foodieclub-pilot-dashboard/
  src/
    App.tsx
    components/   # KpiCard, SentimentChart, CampaignTable
    data/
      dashboard.json   # all dummy metrics — easy to edit
  public/
  package.json
  README.md          # how to run locally + deploy
```

Keeping metrics in `dashboard.json` makes it easy to refresh the story without touching layout code.

---

## 6. Deployment checklist

- [ ] `npm run build` passes
- [ ] Environment: no API keys needed for static dummy data
- [ ] Public URL works without login
- [ ] Link pasted into Slack opens correctly on mobile
- [ ] Date and campaign labels match what you told the client in writing

---

## 7. What “success” looks like for this exercise

The evaluator cares about **customer leadership**, **clarity**, **judgment** (few right metrics), and **proactive** flags — not chart junk. The dashboard supports a **renewal conversation**, not a data science thesis.

---

## 8. Optional stretch (only if time)

- Export **one-page PDF** from the same content (print stylesheet or `window.print()`).
- Add a **“Risks / watchlist”** row (e.g. platform policy, thread quality) to show maturity.
