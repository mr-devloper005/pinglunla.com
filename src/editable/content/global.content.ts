import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Image and profile showcase',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Image and profile showcase',
    primaryLinks: [
      { label: 'The Blog', href: '/article' },
      { label: 'Contact', href: '/contact' },
    ],
    // actions: {
    //   primary: { label: 'Launch Your Portfolio Free', href: '/signup' },
    //   secondary: { label: 'Login', href: '/login' },
    // },
  },
  footer: {
    tagline: 'Images, profiles, and polished public pages',
    description: 'A bright discovery space for image-led posts, profile pages, business listings, and supporting resources.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Articles', href: '/article' },
          { label: 'Resources', href: '/pdf' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Designed for polished discovery and confident presentation.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
