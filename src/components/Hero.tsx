import React from 'react'
import { Button } from './button'

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#264C18] text-white">
      {/* Hero */}
      <div className="relative isolate lg:mx-auto lg:max-w-[1188px]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-12 px-6 py-16 sm:px-6  lg:grid-cols-2 lg:gap-x-12 lg:p-14">
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
                <a
                  href="https://calendly.com/bloomrecruitingandhr-info/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a call
                </a>
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
          <section className="right-8 top-[50px] lg:absolute">
            <div className="relative mx-auto max-w-[450px] rounded-[36px] lg:ml-6 lg:mr-0">
              {/* Mock person photo */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="./hero-2.webp"
                  alt="Happy teammate"
                  className="w-full object-cover"
                />
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
