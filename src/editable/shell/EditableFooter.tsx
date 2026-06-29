'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'image' && task.key !== 'profile')
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="relative overflow-hidden border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[rgba(255,179,63,0.12)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[rgba(19,78,142,0.10)] blur-3xl" />

      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div className="relative">
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-12 w-12 object-contain" />
            <span className="editable-display text-[2rem] font-extrabold leading-none text-[#111827]">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--slot4-muted-text)]">{globalContent.footer.description || SITE_CONFIG.description}</p>
                  </div>

        
        <div className="relative">
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--slot4-dark-bg)]">Company</h3>
          <div className="mt-5 grid gap-3">
            <Link href="/about" className="text-sm font-bold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-dark-bg)]">About</Link>
            <Link href="/contact" className="text-sm font-bold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-dark-bg)]">Contact</Link>
            {session ? (
              <>
                <Link href="/create" className="text-sm font-bold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-dark-bg)]">Create</Link>
                <button type="button" onClick={logout} className="text-left text-sm font-bold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-dark-bg)]">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm font-bold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-dark-bg)]">Login</Link>
                <Link href="/signup" className="text-sm font-bold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-dark-bg)]">Sign up</Link>
              </>
            )}
          </div>
        </div>

        <div className="relative rounded-[28px] border border-[var(--editable-border)] bg-white/80 p-6 shadow-[0_20px_45px_rgba(19,78,142,0.08)]">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Quick note</p>
          <h3 className="editable-display mt-3 text-3xl font-extrabold leading-[0.98] text-[#111827]">Bright pages. Clear discovery.</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{globalContent.footer.bottomNote}</p>
        </div>
      </div>

      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold tracking-[0.12em] text-[var(--slot4-muted-text)]">
        © {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
