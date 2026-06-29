import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Build a polished image and profile presence',
      description: 'Discover image-led posts, standout profiles, and polished public pages through a playful showcase-inspired experience.',
      openGraphTitle: 'Build a polished image and profile presence',
      openGraphDescription: 'Explore image-led stories, curated profiles, and polished showcase pages in one bright, discovery-friendly space.',
      keywords: ['image showcase', 'profile directory', 'portfolio inspiration', 'public profiles'],
    },
    hero: {
      badge: 'Image + profile showcase',
      title: ['Your Visual Presence,', 'Beautifully Shared in Minutes.'],
      description: 'Create a brighter way to present images, profiles, and featured work with a smooth browsing experience built for busy business owners.',
      primaryCta: { label: 'Explore articles', href: '/article' },
      secondaryCta: { label: 'Browse listings', href: '/listing' },
      searchPlaceholder: 'Search images, profiles, studios, services, or topics',
      focusLabel: 'Spotlight',
      featureCardBadge: 'showcase preview',
      featureCardTitle: 'Fresh visuals, curated profiles, and polished presentation all live together here.',
      featureCardDescription: 'The homepage pulls from the real feed while keeping the experience clean, bright, and portfolio-inspired.',
    },
    intro: {
      badge: 'Why it works',
      title: 'A playful directory for businesses that need images and identity to feel instantly polished.',
      paragraphs: [
        'Visitors can move from image-led inspiration to profile discovery without feeling like they are bouncing between unrelated sections.',
        'Featured visuals, people-first cards, and compact browsing blocks help every type of post feel purposeful instead of generic.',
        'The result is a site that feels showcase-ready on desktop and tidy, easy, and confidence-building on mobile.',
      ],
      sideBadge: 'What stands out',
      sidePoints: [
        'Search-first hero with strong visual preview.',
        'Mixed showcase cards instead of one repeated template.',
        'Profile and image sections designed to feel connected.',
        'Calmer content blocks that keep focus on the work.',
      ],
      primaryLink: { label: 'See articles', href: '/article' },
      secondaryLink: { label: 'Browse listings', href: '/listing' },
    },
    cta: {
      badge: 'Launch your page',
      title: 'Ready to share a polished public presence?',
      description: 'Browse visuals, discover profiles, or add something new through the same bright and easy-to-navigate experience.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Get in Touch', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the site',
    title: 'Built to make image-led discovery feel polished and easy to trust.',
    description: `${slot4BrandConfig.siteName} brings together visuals, profiles, and supporting content in one clearer showcase experience.`,
    paragraphs: [
      'The site is designed to help visitors discover people, services, and image-rich content without wading through clutter.',
      'Every major page keeps the focus on presentation, navigation, and confidence-building details that help public pages feel more professional.',
    ],
    values: [
      {
        title: 'Presentation-first',
        description: 'Images, names, summaries, and action paths work together so each page feels considered and polished.',
      },
      {
        title: 'Connected discovery',
        description: 'Profiles, visuals, listings, and supporting resources stay close together so visitors can keep exploring naturally.',
      },
      {
        title: 'Friendly clarity',
        description: 'The interface stays bright, flexible, and easy to navigate whether someone is browsing casually or looking for a specific result.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Questions, ideas, and collaborations all have a place here.',
    description: 'Share what you are planning, publishing, or polishing and we will keep the conversation clear and easy to continue.',
    formTitle: 'Send a message',
  },
  search: {
    metadata: {
      title: 'Search',
      description: 'Search images, profiles, topics, categories, and posts across the site.',
    },
    hero: {
      badge: 'Search the showcase',
      title: 'Find images, profiles, listings, and resources faster.',
      description: 'Use keywords and categories to move through every active section without losing the bright, showcase-first browsing rhythm.',
      placeholder: 'Search by keyword, category, profile name, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create new content.',
      description: 'Use your account to open the publishing workspace and create posts for the active sections of this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create content for every active section.',
      description: 'Choose the content type, add details, and prepare a clean post with images, links, summary, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing, managing submissions, and creating new content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start publishing.',
      description: 'Create an account to access the publishing workspace, save details, and submit content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
