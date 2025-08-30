import React from 'react'
import { Button } from './button'

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-hero text-white">
      {/* Hero */}
      <div className="relative isolate lg:mx-auto lg:max-w-[1188px]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-12 px-4 py-16 sm:px-6  lg:grid-cols-2 lg:gap-x-12 lg:p-14">
          {/* Copy */}
          <section className="relative z-10">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              The best talent,
              <br />
              <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                blooming for you
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white">
              Finding exceptional candidates just got easier with Bloom
              Recruiting. We connect you with top talent for your staffing
              needs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-3 text-lg"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc_s9fEMAMxe_DQAmmQOQzsREeb96Lyy2H6mp865xmBNv7NZA/viewform?usp=header"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get started
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white px-8 py-3 text-lg text-dark-purple hover:bg-white/90 hover:text-primary"
              >
                <a href="#about">Learn More</a>
              </Button>
              <div className="ml-1 flex items-center gap-3 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 12.75 11.25 15 15 9.75" />
                </svg>
                Faster sourcing, happier teams
              </div>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 text-sm text-white sm:grid-cols-3">
              <Stat label="Avg. time saved" value="8 hrs/week" />
              <Stat label="Candidate response" value="3× higher" />
              <Stat label="Setup time" value="< 15 min" />
            </div>
          </section>

          {/* Art side */}
          <section className="relative">
            {/* Big blob background */}
            <div className="absolute -right-10 -top-10 size-[520px] rounded-[40px] bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-20 blur-3xl" />

            <div className="relative mx-auto max-w-md rounded-[36px] bg-indigo-50/70 p-6 shadow-[0_10px_40px_-10px_rgba(79,70,229,0.35)] ring-1 ring-indigo-200/40 backdrop-blur-sm lg:ml-6 lg:mr-0">
              {/* Mock person photo */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="./hero-img.webp"
                  alt="Happy teammate"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* Floating card */}
              <div className="-mt-8 ml-4 w-[85%] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-3">
                  <img
                    className="size-9 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                    alt="Tina S. avatar"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">Tina S.</p>
                    <p className="text-xs text-white">Software Engineer</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white">
                  <Pill>Positives</Pill>
                  <Pill variant="soft">Negatives</Pill>
                </div>
                <div className="mt-3 rounded-xl border border-slate-200 p-3 text-xs text-white">
                  <p className="font-medium text-white">Perfect fit!</p>
                  <p className="mt-1">
                    Speaks three languages fluently{' '}
                    <span className="text-indigo-600">•</span> Strong systems
                    background
                  </p>
                </div>
              </div>

              {/* Little badge */}
              <div className="absolute -right-3 bottom-10 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-indigo-700 shadow-lg ring-1 ring-indigo-100">
                AI-matched candidate
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <p className="text-xs uppercase tracking-wide text-white">{label}</p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
    </div>
  )
}

function Pill({
  children,
  variant = 'solid'
}: {
  children: React.ReactNode
  variant?: 'solid' | 'soft'
}) {
  const classes =
    variant === 'soft' ? 'bg-slate-100 text-white' : 'bg-indigo-600 text-white'
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg px-2 py-1 ${classes}`}
    >
      {children}
    </span>
  )
}
