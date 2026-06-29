import Link from 'next/link'
import {
  ArrowRight,
  Camera,
  ChevronRight,
  Image as ImageIcon,
  Search,
  Sparkles,
  Star,
  UserRound,
} from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function getExcerpt(post?: SitePost | null, limit = 130) {
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function categoryOf(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Featured'
}

function dedupePosts(posts: SitePost[]) {
  const seen = new Set<string>()
  const out: SitePost[] = []
  for (const post of posts) {
    const key = post.slug || post.id || post.title
    if (!key || seen.has(key)) continue
    seen.add(key)
    out.push(post)
  }
  return out
}

function latestPostImages(posts: SitePost[], max = 10) {
  const seen = new Set<string>()
  const out: string[] = []
  for (const post of posts) {
    const img = getEditablePostImage(post)
    if (!img || img.includes('placeholder') || seen.has(img)) continue
    seen.add(img)
    out.push(img)
    if (out.length >= max) break
  }
  return out
}

function hashStr(value: string) {
  let h = 0
  for (let i = 0; i < value.length; i += 1) h = (h * 31 + value.charCodeAt(i)) >>> 0
  return h
}

function badgeNumber(post: SitePost) {
  return 80 + (hashStr(post.slug || post.id || post.title || 'x') % 19)
}

const container = 'mx-auto w-full max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8'

function ShowcaseCard({ post, href, className = '' }: { post: SitePost; href: string; className?: string }) {
  return (
    <Link href={href} className={`group block overflow-hidden rounded-[30px] border border-[var(--editable-border)] bg-white shadow-[0_20px_55px_rgba(19,78,142,0.10)] transition duration-300 hover:-translate-y-1.5 ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
      </div>
      <div className="p-5">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{categoryOf(post)}</p>
        <h3 className="editable-display mt-2 line-clamp-2 text-[2rem] font-extrabold leading-[0.94] text-[#111827]">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{getExcerpt(post, 110)}</p>
      </div>
    </Link>
  )
}

function CompactCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group flex items-center gap-4 rounded-[24px] border border-[var(--editable-border)] bg-white p-4 shadow-[0_16px_34px_rgba(19,78,142,0.08)] transition duration-300 hover:-translate-y-1">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[18px] bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--slot4-dark-bg)]">{categoryOf(post)}</p>
        <h3 className="mt-1 line-clamp-2 text-base font-extrabold leading-tight text-[#182235]">{post.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-[var(--slot4-muted-text)]">{getExcerpt(post, 72)}</p>
      </div>
    </Link>
  )
}

function EditorialRow({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid gap-5 rounded-[30px] border border-[var(--editable-border)] bg-white p-4 shadow-[0_16px_40px_rgba(19,78,142,0.08)] transition duration-300 hover:-translate-y-1 sm:grid-cols-[240px_minmax(0,1fr)] sm:p-5">
      <div className="relative overflow-hidden rounded-[22px] bg-[var(--slot4-media-bg)] aspect-[4/3]">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
      </div>
      <div className="min-w-0 self-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Feature {String(index + 1).padStart(2, '0')}</p>
        <h3 className="editable-display mt-2 line-clamp-2 text-[2rem] font-extrabold leading-[0.95] text-[#111827]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{getExcerpt(post, 170)}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--slot4-dark-bg)]">
          Open showcase <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}

function ImageFirstCard({ post, href, tall = false }: { post: SitePost; href: string; tall?: boolean }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-[30px] border border-[var(--editable-border)] bg-white shadow-[0_18px_50px_rgba(19,78,142,0.08)] transition duration-300 hover:-translate-y-1.5">
      <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${tall ? 'aspect-[4/5]' : 'aspect-[16/11]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--slot4-dark-bg)]">
          {categoryOf(post)}
        </div>
      </div>
      <div className="p-5">
        <h3 className="line-clamp-2 text-lg font-extrabold leading-tight text-[#182235]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const pool = dedupePosts([...posts, ...timeSections.flatMap((section) => section.posts)])
  const heroImages = latestPostImages(pool)
  const heroTitle = pagesContent.home.hero.title?.join(' ') || `Discover the best of ${SITE_CONFIG.name}`
  const featured = pool[0]
  const sideA = pool[1]
  const sideB = pool[2]
  const tasks = SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'image' && task.key !== 'profile').slice(0, 5)

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] rounded-bl-[180px] bg-[rgba(199,239,255,0.62)] lg:block" />
      <div className={`relative grid gap-12 py-10 sm:py-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:py-16 ${container}`}>
        <div className="relative z-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
          <h1 className="editable-display mt-5 max-w-[12ch] text-[3.25rem] font-extrabold leading-[0.92] tracking-[-0.06em] text-[#161c2d] sm:text-[4.5rem]">
            {heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.hero.description}</p>

          <form action="/search" className="mt-8 flex w-full max-w-xl overflow-hidden rounded-full border border-[var(--editable-border)] bg-white shadow-[0_18px_44px_rgba(19,78,142,0.10)]">
            <div className="flex flex-1 items-center gap-3 px-5">
              <Search className="h-5 w-5 shrink-0 text-[var(--slot4-dark-bg)]" />
              <input
                name="q"
                placeholder={pagesContent.home.hero.searchPlaceholder}
                className="w-full bg-transparent py-4 text-sm font-semibold text-[var(--slot4-page-text)] outline-none placeholder:text-[var(--slot4-soft-muted-text)]"
              />
            </div>
            <button className="shrink-0 bg-[linear-gradient(135deg,#1d8ceb_0%,#2e9cff_100%)] px-6 text-sm font-extrabold text-white transition hover:brightness-95 sm:px-8">
              Search
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={primaryRoute} className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#1d8ceb_0%,#2e9cff_100%)] px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(29,140,235,0.24)] transition hover:-translate-y-0.5">
              {pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {tasks.map((task) => (
              <Link key={task.key} href={task.route} className="rounded-full border border-[var(--editable-border)] bg-white/90 px-4 py-2 text-sm font-bold text-[#44516a] shadow-[0_10px_24px_rgba(19,78,142,0.06)] transition hover:text-[var(--slot4-dark-bg)]">
                {task.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative z-10 min-w-0">
          <div className="relative mx-auto max-w-[760px]">
            <div className="absolute left-[8%] top-[8%] hidden h-[280px] w-[130px] overflow-hidden rounded-[28px] border-[10px] border-white bg-white shadow-[0_30px_65px_rgba(19,78,142,0.20)] md:block">
              <div className="grid h-full grid-cols-2 gap-1 p-2">
                {heroImages.slice(0, 8).map((image, index) => (
                  <img key={`${image}-${index}`} src={image} alt="" className={`${index === 0 ? 'col-span-2 row-span-2' : ''} h-full w-full rounded-[12px] object-cover`} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[40px] border-[12px] border-white bg-white p-3 shadow-[0_36px_90px_rgba(19,78,142,0.22)]">
              <div className="grid min-h-[310px] gap-3 rounded-[28px] bg-[#fbfdff] p-3 sm:grid-cols-[160px_minmax(0,1fr)]">
                <div className="hidden rounded-[22px] border border-[var(--editable-border)] bg-white p-4 sm:block">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[var(--slot4-soft-muted-text)]">Showcase</div>
                  <div className="mt-8 grid gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5d6d86]">
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Portfolio</span>
                    <span>Contact</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {(heroImages.length ? heroImages : ['/placeholder.svg?height=900&width=1400']).slice(0, 9).map((image, index) => (
                    <div key={`${image}-${index}`} className={`${index === 3 || index === 4 ? 'col-span-1 row-span-2' : ''} min-h-[88px] overflow-hidden rounded-[20px] bg-[var(--slot4-media-bg)]`}>
                      <img src={image} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-4 hidden rounded-full bg-[var(--slot4-accent)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_16px_30px_rgba(255,68,0,0.22)] md:block">
              Curated weekly
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--editable-border)] bg-white/70 backdrop-blur-sm">
        <div className={`grid gap-4 py-5 sm:grid-cols-3 ${container}`}>
          <div className="flex items-center gap-3 rounded-[22px] bg-white px-4 py-3 shadow-[0_12px_28px_rgba(19,78,142,0.06)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]"><ImageIcon className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-extrabold text-[#1a2233]">Portfolio-style visuals</div>
              <div className="text-xs text-[var(--slot4-muted-text)]">Image-first discovery that feels polished.</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[22px] bg-white px-4 py-3 shadow-[0_12px_28px_rgba(19,78,142,0.06)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(29,140,235,0.14)] text-[var(--slot4-dark-bg)]"><UserRound className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-extrabold text-[#1a2233]">Profile-driven trust</div>
              <div className="text-xs text-[var(--slot4-muted-text)]">Names, roles, and presentation stay clear.</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[22px] bg-white px-4 py-3 shadow-[0_12px_28px_rgba(19,78,142,0.06)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,68,0,0.12)] text-[var(--slot4-accent)]"><Sparkles className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-extrabold text-[#1a2233]">Fresh mixed layouts</div>
              <div className="text-xs text-[var(--slot4-muted-text)]">Multiple card styles keep browsing lively.</div>
            </div>
          </div>
        </div>
      </div>

      {featured ? (
        <div className={`grid gap-6 py-12 lg:grid-cols-[1.15fr_0.85fr] ${container}`}>
          <div className="rounded-[36px] border border-[var(--editable-border)] bg-white p-5 shadow-[0_24px_60px_rgba(19,78,142,0.10)] sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Your portfolio website, your way</p>
                <h2 className="editable-display mt-3 text-[3rem] font-extrabold leading-[0.94] text-[#111827] sm:text-[3.5rem]">
                  Featured work deserves a brighter stage.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">
                  Highlight new image stories, profile pages, and polished posts through one showcase rhythm that keeps attention on the work.
                </p>
                <Link href={postHref(primaryTask, featured, primaryRoute)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#1d8ceb_0%,#2e9cff_100%)] px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(29,140,235,0.22)] transition hover:-translate-y-0.5">
                  Explore the spotlight <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-[28px] bg-[var(--slot4-lavender)] p-4">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--slot4-dark-bg)]">Stats</div>
                <div className="mt-5 grid gap-4">
                  <div>
                    <div className="text-3xl font-extrabold text-[#111827]">{pool.length}+</div>
                    <div className="text-sm text-[var(--slot4-muted-text)]">Live stories and profiles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-[#111827]">{heroImages.length || 8} visual picks</div>
                    <div className="text-sm text-[var(--slot4-muted-text)]">Rotating in the hero collage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {sideA ? <CompactCard post={sideA} href={postHref(primaryTask, sideA, primaryRoute)} /> : null}
            {sideB ? <CompactCard post={sideB} href={postHref(primaryTask, sideB, primaryRoute)} /> : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const pool = dedupePosts([...posts, ...timeSections.flatMap((section) => section.posts)]).slice(0, 6)
  if (!pool.length) return null

  return (
    <section className="bg-transparent">
      <div className={`py-8 sm:py-12 ${container}`}>
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-accent)]">Trusted by growing brands</p>
            <h2 className="editable-display mt-2 text-[3rem] font-extrabold leading-[0.94] text-[#111827]">Showcase inspiration from across the site</h2>
          </div>
          <Link href={primaryRoute} className="hidden items-center gap-2 text-sm font-extrabold text-[var(--slot4-dark-bg)] sm:inline-flex">
            See all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pool.slice(0, 6).map((post) => (
            <div key={post.id || post.slug} className="text-center">
              <ShowcaseCard post={post} href={postHref(primaryTask, post, primaryRoute)} />
              <h3 className="mt-5 text-2xl font-extrabold text-[#202938]">{post.title}</h3>
              <p className="mt-1 text-lg text-[var(--slot4-soft-muted-text)]">{categoryOf(post)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const pool = dedupePosts([...posts, ...timeSections.flatMap((section) => section.posts)])
  const lead = pool[0]
  const list = pool.slice(1, 4)
  const gallery = pool.slice(4, 8)
  if (!lead) return null

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(229,243,255,0.58)_100%)]">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[42%] rounded-tl-[180px] bg-[rgba(229,243,255,0.76)]" />
      <div className={`relative grid gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] ${container}`}>
        <div className="space-y-5">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-accent)]">Premium editorial cards</p>
          <h2 className="editable-display max-w-[12ch] text-[3.2rem] font-extrabold leading-[0.94] text-[#111827]">
            A homepage that feels like a real visual product.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">
            Featured stories, curated lists, and image-heavy blocks all pull from the real feed while keeping the layout playful and polished.
          </p>
          <EditorialRow post={lead} href={postHref(primaryTask, lead, primaryRoute)} index={0} />
          <div className="grid gap-4">
            {list.map((post, index) => (
              <CompactCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {gallery.map((post, index) => (
            <ImageFirstCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} tall={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

const sectionCopy: Record<string, { eyebrow: string; title: string; description: string }> = {
  spotlight: { eyebrow: 'Fresh this week', title: 'New visuals and profiles landing now', description: 'A mix of compact and image-led cards keeps the browsing rhythm varied.' },
  browse: { eyebrow: 'Popular picks', title: 'Busy sections worth exploring next', description: 'Use these blocks to move between discovery, profile browsing, and showcase-style reading.' },
  index: { eyebrow: 'From the archive', title: 'More pages with a polished public presence', description: 'Older content stays easy to discover through friendlier editorial framing.' },
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sections =
    timeSections.length > 0
      ? timeSections
      : ([
          { key: 'spotlight', posts: posts.slice(0, 8), href: primaryRoute },
          { key: 'browse', posts: posts.slice(8, 16), href: primaryRoute },
          { key: 'index', posts: posts.slice(16, 24), href: primaryRoute },
        ] as Pick<HomeTimeSection, 'key' | 'posts' | 'href'>[])

  const visible = sections.filter((section) => section.posts.length)
  if (!visible.length) return null

  return (
    <>
      {visible.map((section, index) => {
        const copy = sectionCopy[section.key] || {
          eyebrow: 'Discover',
          title: 'More to explore',
          description: 'Browse more content from across the site.',
        }
        const lead = section.posts[0]
        const secondary = section.posts.slice(1, 5)
        const editorial = section.posts.slice(5, 8)
        return (
          <section key={section.key} className={index % 2 === 0 ? 'bg-transparent' : 'bg-[rgba(255,255,255,0.55)]'}>
            <div className={`py-14 ${container}`}>
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{copy.eyebrow}</p>
                  <h2 className="editable-display mt-2 text-[3rem] font-extrabold leading-[0.94] text-[#111827]">{copy.title}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{copy.description}</p>
                </div>
                <Link href={section.href || primaryRoute} className="hidden items-center gap-2 text-sm font-extrabold text-[var(--slot4-dark-bg)] sm:inline-flex">
                  See all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6">
                  {lead ? <ShowcaseCard post={lead} href={postHref(primaryTask, lead, primaryRoute)} className="sm:grid sm:grid-cols-[1.15fr_0.85fr] sm:items-stretch sm:p-0 [&>div:last-child]:sm:p-8" /> : null}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {secondary.map((post, itemIndex) => (
                      <CompactCard key={post.id || post.slug || itemIndex} post={post} href={postHref(primaryTask, post, primaryRoute)} />
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {editorial.map((post, itemIndex) => (
                    <Link key={post.id || post.slug || itemIndex} href={postHref(primaryTask, post, primaryRoute)} className="group rounded-[26px] border border-[var(--editable-border)] bg-white p-5 shadow-[0_16px_34px_rgba(19,78,142,0.07)] transition duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]">
                          {itemIndex % 2 === 0 ? <Camera className="h-5 w-5" /> : <Star className="h-5 w-5" />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--slot4-dark-bg)]">{categoryOf(post)}</p>
                          <h3 className="mt-1 line-clamp-2 text-lg font-extrabold leading-tight text-[#182235]">{post.title}</h3>
                          <p className="mt-2 line-clamp-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{getExcerpt(post, 100)}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="relative overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,179,63,0.20),transparent_25%),radial-gradient(circle_at_85%_15%,rgba(29,140,235,0.18),transparent_30%)]" />
      <div className={`relative rounded-[36px] border border-[var(--editable-border)] bg-white px-6 py-10 text-center shadow-[0_28px_70px_rgba(19,78,142,0.10)] sm:px-10 sm:py-14 ${container}`}>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.home.cta.badge}</p>
        <h2 className="editable-display mx-auto mt-3 max-w-3xl text-[3rem] font-extrabold leading-[0.94] text-[#111827] sm:text-[3.6rem]">
          {pagesContent.home.cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.cta.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={pagesContent.home.cta.primaryCta.href} className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#1d8ceb_0%,#2e9cff_100%)] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(29,140,235,0.24)] transition hover:-translate-y-0.5">
            {pagesContent.home.cta.primaryCta.label} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href={pagesContent.home.cta.secondaryCta.href} className="inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-7 py-3.5 text-sm font-extrabold text-[#22324f] transition hover:border-[rgba(29,140,235,0.35)]">
            {pagesContent.home.cta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
