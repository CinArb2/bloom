import React from 'react'
import { Button } from './button'

export default function ConsultationSection() {
  return (
    <section className="w-full bg-background py-16 lg:h-[350px]">
      <div className="container relative top-[25px] mx-auto max-w-[734px] rounded-3xl bg-gradient-hero px-6 lg:flex lg:items-center lg:justify-between lg:py-8">
        {/* Left Content */}
        <div className="w-1/2 max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-sm text-brown-dark">
            <span className="size-2 rounded-full bg-[#F28A2E]"></span>
            <span>Schedule a Consultation</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl leading-snug text-brown-dark sm:text-4xl md:text-[40px] md:leading-[1.15]">
            Ready to find your next great hire?
          </h2>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 pt-11">
            <Button size="lg" variant="default" className="px-8 py-3 text-sm">
              <a
                href="https://calendly.com/bloomrecruitingandhr-info/30min"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a call
              </a>
            </Button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="mt-10 flex justify-center lg:ml-12 lg:mt-0">
          <img
            src="./purple-fw.avif"
            alt="Flower illustration"
            className="w-40 md:w-56 lg:w-64"
          />
        </div>
      </div>
    </section>
  )
}
