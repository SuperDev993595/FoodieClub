import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { dashboardData } from './data/dashboard'
import './App.css'

const COLORS = {
  skeptical: '#94a3b8',
  neutral: '#cbd5e1',
  positive: '#3b82f6',
}

function trendClass(t?: 'up' | 'down' | 'neutral') {
  if (t === 'up') return 'trend trend-up'
  if (t === 'down') return 'trend trend-down'
  return 'trend trend-neutral'
}

function trendLabel(t?: 'up' | 'down' | 'neutral') {
  if (t === 'up') return '↑'
  if (t === 'down') return '↓'
  return '→'
}

function statusBadge(status: string) {
  const c =
    status === 'complete'
      ? 'badge badge-complete'
      : status === 'live'
        ? 'badge badge-live'
        : 'badge badge-scheduled'
  return <span className={c}>{status}</span>
}

export default function App() {
  const { meta, kpis, sentiment, campaigns, watchlist } = dashboardData
  const pilotCampaign = campaigns.find((c) => c.highlight && c.threadSnapshot)

  const chartData = sentiment.map((s) => ({
    name: s.period,
    Skeptical: s.skeptical,
    Neutral: s.neutral,
    Positive: s.positive,
  }))

  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">Pilot results (mock stakeholder view)</p>
        <h1>{meta.client}</h1>
        <p className="subtitle">{meta.pilotLabel}</p>
        <div className="meta-row">
          <span>As of {meta.asOf}</span>
          <span>Week 1 of 4 · Campaign 1 complete</span>
        </div>
      </header>

      <section className="section" aria-label="Key metrics">
        <div className="kpi-grid">
          {kpis.map((k) => (
            <article key={k.id} className="kpi-card">
              <p className="kpi-label">{k.label}</p>
              <p className="kpi-value">
                {k.value}
                <span className={trendClass(k.trend)} title="Directional trend">
                  {trendLabel(k.trend)}
                </span>
              </p>
              {k.sub ? <p className="kpi-sub">{k.sub}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Sentiment mix (keyword cluster)</h2>
        <p className="section-note">
          Baseline sampled from Reddit threads matching “legit / scam / too good
          to be true” for local discount apps. Post window includes Campaign 1
          (San Francisco) and organic follow-ups.
        </p>
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={chartData}
              margin={{ top: 12, right: 16, left: 0, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: 'var(--muted)' }}
                interval={0}
                height={48}
              />
              <YAxis
                tickFormatter={(v) => `${v}%`}
                domain={[0, 100]}
                tick={{ fontSize: 11, fill: 'var(--muted)' }}
              />
              <Tooltip
                formatter={(value, name) => [
                  `${value ?? 0}%`,
                  String(name),
                ]}
                contentStyle={{
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  fontSize: 12,
                }}
              />
              <Bar
                dataKey="Skeptical"
                stackId="a"
                fill={COLORS.skeptical}
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="Neutral"
                stackId="a"
                fill={COLORS.neutral}
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="Positive"
                stackId="a"
                fill={COLORS.positive}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="legend" aria-hidden>
          <span>
            <i style={{ background: COLORS.skeptical }} /> Skeptical
          </span>
          <span>
            <i style={{ background: COLORS.neutral }} /> Neutral
          </span>
          <span>
            <i style={{ background: COLORS.positive }} /> Positive / proof
          </span>
        </div>
      </section>

      <section className="section">
        <h2>Campaigns</h2>
        <p className="section-note">
          First live thread addressed the core objection (“too good to be true”)
          with peer detail and a clear explanation of quieter-period inventory.
        </p>
        {pilotCampaign?.threadSnapshot ? (
          <div className="thread-snapshot" role="region" aria-label="Pilot thread snapshot">
            <strong>Pilot thread (Campaign 1)</strong>
            <span>
              {pilotCampaign.threadSnapshot.upvotes} upvotes ·{' '}
              {pilotCampaign.threadSnapshot.commentCount} comments
              {pilotCampaign.threadSnapshot.bookmarks != null
                ? ` · ${pilotCampaign.threadSnapshot.bookmarks} saves`
                : ''}{' '}
              (modeled)
            </span>
          </div>
        ) : null}
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Market</th>
                <th>Subreddit</th>
                <th>Keyword / theme</th>
                <th>Status</th>
                <th>Date</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id} className={c.highlight ? 'highlight' : undefined}>
                  <td>{c.market}</td>
                  <td>{c.subreddit}</td>
                  <td>{c.keywordTheme}</td>
                  <td>{statusBadge(c.status)}</td>
                  <td>{c.postDate}</td>
                  <td>{c.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Watchlist</h2>
        <ul className="watchlist">
          {watchlist.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </section>

      <p className="disclaimer">{meta.disclaimer}</p>
    </div>
  )
}
