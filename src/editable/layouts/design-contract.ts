import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#fff9f4',
  '--slot4-page-text': '#1a2233',
  '--slot4-panel-bg': '#eef6ff',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#61708a',
  '--slot4-soft-muted-text': '#8ea0bc',
  '--slot4-accent': '#ff4400',
  '--slot4-accent-fill': '#ff4400',
  '--slot4-accent-soft': 'rgba(255, 179, 63, 0.18)',
  '--slot4-on-accent': '#ffffff',
  '--slot4-dark-bg': '#134e8e',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#dfeefe',
  '--slot4-cream': '#fff4e7',
  '--slot4-warm': '#fff8f0',
  '--slot4-lavender': '#f2f8ff',
  '--slot4-gray': '#f6f8fc',
  '--slot4-body-gradient':
    'radial-gradient(circle at top right, rgba(19,78,142,0.10), transparent 32%), radial-gradient(circle at 10% 70%, rgba(255,179,63,0.16), transparent 30%), linear-gradient(180deg, #fffaf6 0%, #f8fbff 46%, #ffffff 100%)',
  '--editable-page-bg': '#fff9f4',
  '--editable-page-text': '#1a2233',
  '--editable-container': '1500px',
  '--editable-border': 'rgba(19, 78, 142, 0.12)',
  '--editable-nav-bg': 'rgba(255,255,255,0.9)',
  '--editable-nav-text': '#22324f',
  '--editable-nav-active': '#1d8ceb',
  '--editable-nav-active-text': '#ffffff',
  '--editable-cta-bg': 'linear-gradient(135deg, #1d8ceb 0%, #2e9cff 100%)',
  '--editable-cta-text': '#ffffff',
  '--editable-search-bg': '#ffffff',
  '--editable-footer-bg': '#f5faff',
  '--editable-footer-text': '#22324f',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent)]',
  onAccentText: 'text-[var(--slot4-on-accent)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[var(--editable-border)]',
  darkBorder: 'border-white/20',
  shadow: 'shadow-[0_18px_50px_rgba(19,78,142,0.08)]',
  shadowStrong: 'shadow-[0_35px_90px_rgba(19,78,142,0.18)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(19,78,142,0.78))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-14 sm:py-18 lg:py-24',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[220px] shrink-0 snap-start sm:w-[250px]',
  },
  type: {
    eyebrow: 'text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--slot4-accent)]',
    heroTitle: 'text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-[4.35rem]',
    sectionTitle: 'text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-[3rem]',
    body: 'text-base leading-8',
  },
  surface: {
    card: `rounded-[28px] border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-[28px] border ${editablePalette.border} ${editablePalette.panelBg}`,
    dark: `rounded-[32px] ${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary:
      'inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#1d8ceb_0%,#2e9cff_100%)] px-6 py-3.5 text-sm font-bold tracking-[0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(29,140,235,0.26)]',
    secondary:
      'inline-flex items-center justify-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-6 py-3.5 text-sm font-bold tracking-[0.01em] text-[var(--slot4-page-text)] transition duration-300 hover:border-[rgba(29,140,235,0.35)] hover:text-[var(--slot4-dark-bg)]',
    accent:
      'inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(255,68,0,0.22)]',
  },
  media: {
    frame: `relative overflow-hidden rounded-[28px] ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/5]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(19,78,142,0.18)]',
    fade: 'transition duration-300 hover:opacity-90',
  },
} as const

export const aiLayoutRules = [
  'Change the full site color palette in editableRootStyle first; homepage and shell components consume those CSS variables.',
  'Keep page structure in src/editable/sections/HomeSections.tsx so the full homepage can be redesigned in one place.',
  'Favor generous image areas, curved surfaces, and airy spacing over dense dashboard layouts.',
  'Mix featured, compact, editorial, horizontal, and image-first cards instead of repeating one post tile.',
  'Keep dynamic post fetching intact; do not replace posts with mock arrays.',
  'Use postHref() for all post links so task-specific routes keep working.',
] as const
