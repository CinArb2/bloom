import React from 'react'
import { Button } from './button'
import content from '../content.json'

export default function Hero() {
  const { hero, links } = content

  return (
    <div className="py-16 text-gray-800">
      {/* Hero */}
      <div className="container relative isolate mx-auto max-w-[1150px] lg:mx-auto">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-12 md:px-6  lg:grid-cols-2 lg:gap-x-12">
          {/* Copy */}
          <section className="relative z-10 md:pt-10">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 sm:text-6xl">
              {hero.titleLine1}
              <br />
              <span className="bg-gradient-to-r from-green-light to-green-dark bg-clip-text text-transparent">
                {hero.titleLine2}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-8 text-gray-800">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex max-w-[350px] flex-wrap items-center gap-3">
              <Button size="lg" variant="default" className="px-8 py-3 text-sm">
                <a href={links.getStartedForm} target="_blank" rel="noreferrer">
                  {hero.primaryCtaLabel}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-sm">
                <a href={links.scheduleCall} target="_blank" rel="noreferrer">
                  {hero.secondaryCtaLabel}
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
                {hero.badge}
              </div>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 text-sm  text-gray-800">
              {hero.stats.map((stat) => (
                <Stat key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
          </section>

          {/* Art side */}
          <section className="right-8 top-[50px] lg:absolute">
            <div className="relative mx-auto rounded-[36px] lg:ml-6 lg:mr-0 lg:max-w-[450px]">
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
    <div className="w-[150px] rounded-2xl border border-slate-200 p-4 md:w-auto">
      <p className="text-xs uppercase tracking-wide text-gray-800">{label}</p>
      <p className="mt-1 text-lg font-semibold text-gray-800">{value}</p>
    </div>
  )
}
