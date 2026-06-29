'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const taskLinks = useMemo(
    () =>
      SITE_CONFIG.tasks
        .filter((task) => task.enabled && task.key !== 'image' && task.key !== 'profile')
        .map((task) => ({ label: task.label, href: task.route })),
    []
  )
  const leftLinks = [
    { label: 'The Blog', href: '/article' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[74px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-12 w-12 object-contain transition duration-300 group-hover:-rotate-6" />
          <div className="min-w-0">
            <span className="editable-display block text-[2rem] font-extrabold leading-none text-[#111827]">{SITE_CONFIG.name}</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 pl-4 lg:flex">
          {leftLinks.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`text-lg font-bold transition ${active ? 'text-[var(--slot4-dark-bg)]' : 'text-[#374151] hover:text-[var(--slot4-dark-bg)]'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <form action="/search" className="ml-auto hidden min-w-0 max-w-[240px] flex-1 xl:flex">
          <label className="flex w-full items-center gap-3 rounded-full border border-[var(--editable-border)] bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(19,78,142,0.08)] focus-within:border-[rgba(29,140,235,0.35)]">
            <Search className="h-4 w-4 shrink-0 text-[var(--slot4-dark-bg)]" />
            <input
              name="q"
              type="search"
              placeholder="Search"
              className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-[var(--slot4-soft-muted-text)]"
            />
          </label>
        </form>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="ml-auto rounded-full border border-[var(--editable-border)] bg-white p-2.5 shadow-[0_10px_24px_rgba(19,78,142,0.08)] xl:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-white px-4 py-5 xl:hidden">
          <form action="/search" className="mb-4">
            <label className="flex items-center gap-3 rounded-full border border-[var(--editable-border)] bg-[var(--slot4-lavender)] px-4 py-3">
              <Search className="h-4 w-4 text-[var(--slot4-dark-bg)]" />
              <input name="q" type="search" placeholder="Search" className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-[var(--slot4-soft-muted-text)]" />
            </label>
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...leftLinks, ...taskLinks].map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-extrabold transition ${
                    active ? 'bg-[var(--slot4-lavender)] text-[var(--slot4-dark-bg)]' : 'text-[#44516a] hover:bg-[var(--slot4-warm)]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </header>
  )
}
