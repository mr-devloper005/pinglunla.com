import type { CSSProperties } from 'react'
import type { TaskKey } from '@/lib/site-config'

export type TaskTheme = {
  kicker: string
  note: string
  dark: boolean
  fontDisplay: string
  fontBody: string
  bg: string
  surface: string
  raised: string
  text: string
  muted: string
  line: string
  accent: string
  accentSoft: string
  onAccent: string
  glow: string
  radius: string
}

const DISPLAY = "'Baloo 2', 'Trebuchet MS', sans-serif"
const BODY = "'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

const base = {
  dark: false,
  fontDisplay: DISPLAY,
  fontBody: BODY,
  bg: '#f8fbff',
  surface: '#ffffff',
  raised: '#eef6ff',
  text: '#1c2740',
  muted: '#667895',
  line: 'rgba(19, 78, 142, 0.12)',
  accent: '#ff4400',
  accentSoft: 'rgba(255, 179, 63, 0.18)',
  onAccent: '#ffffff',
  glow: 'rgba(29,140,235,0.14)',
  radius: '1.75rem',
} satisfies Omit<TaskTheme, 'kicker' | 'note'>

export const taskThemes: Record<TaskKey, TaskTheme> = {
  article: { ...base, kicker: 'Journal', note: 'Editorial reading with generous whitespace and image-led highlights.' },
  listing: { ...base, kicker: 'Directory', note: 'Useful business discovery with polished cards and direct actions.' },
  classified: { ...base, kicker: 'Noticeboard', note: 'Quick listings arranged with stronger prices and action cues.' },
  image: { ...base, kicker: 'Showcase', note: 'Visual browsing first, with gallery-like pacing and cleaner detail views.' },
  sbm: { ...base, kicker: 'Collection', note: 'Saved resources presented like a curated inspiration shelf.' },
  pdf: { ...base, kicker: 'Library', note: 'Documents framed like polished resources, not plain file dumps.' },
  profile: { ...base, kicker: 'Profiles', note: 'Identity-first presentation with portraits, trust cues, and soft editorial framing.' },
}

export function getTaskTheme(task: TaskKey): TaskTheme {
  return taskThemes[task] || taskThemes.article
}

export function taskThemeStyle(task: TaskKey): CSSProperties {
  const t = getTaskTheme(task)
  return {
    '--tk-bg': t.bg,
    '--tk-surface': t.surface,
    '--tk-raised': t.raised,
    '--tk-text': t.text,
    '--tk-muted': t.muted,
    '--tk-line': t.line,
    '--tk-accent': t.accent,
    '--tk-accent-soft': t.accentSoft,
    '--tk-on-accent': t.onAccent,
    '--tk-glow': t.glow,
    '--tk-radius': t.radius,
    '--slot4-accent': t.accent,
    '--slot4-accent-fill': t.accent,
    '--editable-font-display': t.fontDisplay,
    '--editable-font-body': t.fontBody,
    fontFamily: t.fontBody,
  } as CSSProperties
}
