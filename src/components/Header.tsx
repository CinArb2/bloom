import React, { useState } from 'react'
import { Button } from './button'
import content from '../content.json'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { header, links } = content

  return (
    <div className="bg-white text-slate-900 lg:mx-auto lg:max-w-[1150px]">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Left: Brand */}
          <div className="h-[50px] max-w-[100px] pb-2">
            <img src="./logo-1.webp" className="size-full" />
          </div>

          {/* Center: Nav (desktop) */}
          <nav className="hidden items-center gap-8 md:flex">
            {header.nav.map((item) => (
              <a key={item.label} className="nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
            {/* Right: Actions */}
            <div className="hidden items-center gap-3 md:flex">
              <Button size="lg" variant="default" className="px-4 text-sm">
                <a href={links.getStartedForm} target="_blank" rel="noreferrer">
                  {header.ctaLabel}
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="size-6"
            >
              {open ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-slate-200 px-4 pb-4 pt-2">
              {header.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                <Button size="lg" variant="default" className="px-4 text-sm">
                  <a
                    href={links.getStartedForm}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {header.ctaLabel}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
