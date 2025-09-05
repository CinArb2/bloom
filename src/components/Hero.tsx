import React from 'react'
import { Button } from './button'

export default function Hero() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* Hero */}
      <div className="relative isolate lg:mx-auto lg:max-w-[1188px]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-12 px-6 py-16 sm:px-6  lg:grid-cols-2 lg:gap-x-12 lg:p-14">
          {/* Copy */}
          <section className="relative z-10 pt-10">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 sm:text-6xl">
              The best talent,
              <br />
              <span className="bg-gradient-to-r from-green-light to-green-dark bg-clip-text text-transparent">
                blooming for you
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-8 text-gray-800">
              Finding exceptional candidates just got easier with Bloom
              Recruiting. We connect you with top talent for your staffing
              needs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                variant="default"
                className="border-dark-purple px-8 py-3 text-sm text-dark-purple"
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
                className="border-white px-8 py-3 text-sm text-dark-purple hover:bg-white/90 hover:text-secondary"
              >
                <a
                  href="https://calendly.com/bloomrecruitingandhr-info/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a call
                </a>
              </Button>
              <div className="ml-1 flex items-center gap-3 rounded-full bg-green-light px-3 py-1 text-xs font-medium text-green-dark">
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

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 text-sm text-gray-800 sm:grid-cols-3">
              <Stat label="Avg. time saved" value="8 hrs/week" />
              <Stat label="Candidate response" value="3× higher" />
              <Stat label="Setup time" value="< 15 min" />
            </div>
          </section>

          {/* Art side */}
          <section className="right-8 top-[50px] lg:absolute">
            <div className="relative mx-auto max-w-[450px] rounded-[36px] lg:ml-6 lg:mr-0">
              <div className="relative overflow-hidden rounded-3xl">
                <video
                  src="./bloom.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full object-cover"
                ></video>
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
      <p className="text-xs uppercase tracking-wide text-gray-800">{label}</p>
      <p className="mt-1 text-lg font-semibold text-gray-800">{value}</p>
    </div>
  )
}
