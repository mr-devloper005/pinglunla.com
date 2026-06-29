import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Reading desk',
    headline: 'Stories, ideas, and guides framed like a polished online journal.',
    description: 'Article pages should feel spacious and confident, with bold headings, softer surfaces, and visual breathing room between content blocks.',
    filterLabel: 'Choose article topic',
    secondaryNote: 'Editorial pages need clarity, rhythm, and lighter chrome around the content.',
    chips: ['Editorial layout', 'Readable rhythm', 'Image-friendly'],
  },
  classified: {
    eyebrow: 'Notice board',
    headline: 'Fast-moving offers and posts with clearer action paths.',
    description: 'Classified pages should scan quickly while still matching the brighter image-and-profile visual system.',
    filterLabel: 'Filter classified category',
    secondaryNote: 'Keep urgency visible, but avoid harsh or cramped layouts.',
    chips: ['Fast scan', 'Quick actions', 'Price cues'],
  },
  sbm: {
    eyebrow: 'Saved resources',
    headline: 'Useful links and collections arranged like a curated shelf.',
    description: 'Bookmark pages should feel calm, useful, and well-organized with enough visual framing to stand beside the image-led sections.',
    filterLabel: 'Filter collection',
    secondaryNote: 'Collections work best when metadata stays tidy and cards stay lightweight.',
    chips: ['Curated', 'Useful', 'Shelf-like'],
  },
  profile: {
    eyebrow: 'People and profiles',
    headline: 'Profiles that feel polished, credible, and easy to remember.',
    description: 'Lead with portraits, names, roles, and concise summaries so profile browsing feels closer to a showcase than a plain feed.',
    filterLabel: 'Filter profile category',
    secondaryNote: 'Identity should read clearly before deeper details do.',
    chips: ['Portrait-led', 'Trust cues', 'Business friendly'],
  },
  pdf: {
    eyebrow: 'Document library',
    headline: 'Resources and files presented like a clean visual library.',
    description: 'PDF pages should feel structured and useful, with enough polish to fit naturally beside the rest of the showcase experience.',
    filterLabel: 'Filter document type',
    secondaryNote: 'Archive cues matter, but so does keeping the page inviting.',
    chips: ['Library feel', 'Useful files', 'Clean preview'],
  },
  listing: {
    eyebrow: 'Business directory',
    headline: 'Business listings designed for discovery, trust, and quick comparison.',
    description: 'Directory pages should feel bright and professional, with profile-like warmth and image-friendly cards rather than a heavy catalog feel.',
    filterLabel: 'Filter business category',
    secondaryNote: 'Keep business actions direct without making the page feel cold.',
    chips: ['Directory style', 'Trust cues', 'Business-ready'],
  },
  image: {
    eyebrow: 'Visual gallery',
    headline: 'Image posts arranged like a modern online showcase.',
    description: 'Image pages should lead with media, mix card shapes, and keep supporting text short so the visuals stay in command.',
    filterLabel: 'Filter visual category',
    secondaryNote: 'Let the images do most of the talking.',
    chips: ['Gallery-led', 'Portfolio mood', 'Visual first'],
  },
} satisfies Record<TaskKey, TaskPageVoice>
