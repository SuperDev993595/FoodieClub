import type { DashboardData } from '../types'

/** Mock data for stakeholder demo — replace with API or CMS in production. */
export const dashboardData: DashboardData = {
  meta: {
    client: 'FoodieClub',
    pilotLabel: 'Reddit discovery & sentiment pilot',
    asOf: 'April 14, 2026',
    disclaimer:
      'Figures are modeled from Reddit thread sampling, reach estimates, and directional install attribution for this pilot demo. Not audited financials.',
  },
  kpis: [
    {
      id: 'reach',
      label: 'Est. thread impressions',
      value: '38.4k',
      sub: 'combined views on target posts (7d)',
      trend: 'up',
    },
    {
      id: 'engagement',
      label: 'Constructive replies',
      value: '127',
      sub: 'comments with venue/card detail or neutral Q&A',
      trend: 'up',
    },
    {
      id: 'sentiment',
      label: 'Positive + neutral share',
      value: '59%',
      sub: 'vs 38% baseline (same keyword cluster)',
      trend: 'up',
    },
    {
      id: 'branded',
      label: 'Official clarifications',
      value: '3',
      sub: 'u/foodieclub threads with model explanation',
      trend: 'neutral',
    },
    {
      id: 'signups',
      label: 'Directional new installs',
      value: '~840',
      sub: 'attributed app sessions from Reddit referrers + branded search (7d; week 1 — noisy, not a forecast)',
      trend: 'up',
    },
  ],
  sentiment: [
    {
      period: 'Baseline (pre-pilot)',
      skeptical: 62,
      neutral: 24,
      positive: 14,
    },
    {
      period: 'After Campaign 1 (7d)',
      skeptical: 41,
      neutral: 35,
      positive: 24,
    },
  ],
  campaigns: [
    {
      id: 'c1',
      market: 'San Francisco Bay Area',
      subreddit: 'r/san_francisco',
      keywordTheme: 'is foodieclub legit san francisco',
      status: 'complete',
      postDate: 'Apr 8, 2026',
      summary:
        'Skeptic-led OP; peer validation + brand reply on off-peak model & digital card.',
      highlight: true,
      threadSnapshot: {
        upvotes: 186,
        commentCount: 54,
        bookmarks: 42,
      },
    },
    {
      id: 'c2',
      market: 'Los Angeles',
      subreddit: 'r/AskLosAngeles',
      keywordTheme: 'foodieclub discount app reviews',
      status: 'scheduled',
      postDate: 'Apr 18, 2026',
      summary: 'Queued — emphasis on venue density + payment flow.',
    },
    {
      id: 'c3',
      market: 'San Diego',
      subreddit: 'r/sandiego',
      keywordTheme: 'restaurant discount apps legit',
      status: 'scheduled',
      postDate: 'Apr 22, 2026',
      summary: 'Queued — tie to local dinner off-peak narrative.',
    },
    {
      id: 'c4',
      market: 'Statewide (CA)',
      subreddit: 'r/orangecounty + r/Sacramento',
      keywordTheme: 'foodieclub california venues',
      status: 'scheduled',
      postDate: 'Apr 28, 2026',
      summary: 'Dual post — scale proof points without spamming identical copy.',
    },
  ],
  watchlist: [
    'Monitor mod feedback in r/san_francisco; adjust tone if community flags promotional overlap.',
    'Track duplicate “scam?” threads — consolidate proof points in one sticky-style reply pattern.',
    'Align venue count messaging with founder-approved numbers before Campaign 2.',
  ],
}
