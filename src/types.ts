export interface Kpi {
  id: string
  label: string
  value: string
  sub?: string
  trend?: 'up' | 'down' | 'neutral'
}

export interface SentimentSlice {
  period: string
  skeptical: number
  neutral: number
  positive: number
}

/** Modeled engagement on the Reddit thread (demo). */
export interface ThreadSnapshot {
  upvotes: number
  commentCount: number
  bookmarks?: number
}

export interface Campaign {
  id: string
  market: string
  subreddit: string
  keywordTheme: string
  status: 'live' | 'scheduled' | 'complete'
  postDate: string
  summary: string
  highlight?: boolean
  /** Present for the completed pilot thread — stakeholder proof. */
  threadSnapshot?: ThreadSnapshot
}

export interface DashboardData {
  meta: {
    client: string
    pilotLabel: string
    asOf: string
    disclaimer: string
  }
  kpis: Kpi[]
  sentiment: SentimentSlice[]
  campaigns: Campaign[]
  watchlist: string[]
}
