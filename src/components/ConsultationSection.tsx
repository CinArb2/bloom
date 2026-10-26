import React from 'react'
import { Button } from './button'

// Page text: edit the wording here
const content = {
  consultation: {
    eyebrow: 'Schedule a Consultation',
    heading: 'Ready to build your recruiting engine?',
    ctaLabel: 'Schedule a call'
  },
  links: {
    getStartedForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc_s9fEMAMxe_DQAmmQOQzsREeb96Lyy2H6mp865xmBNv7NZA/viewform?usp=header',
    scheduleCall: 'https://calendly.com/bloomrecruitingandhr-info/30min'
  }
}


export default function ConsultationSection() {
  const { consultation, links } = content

  return (
    <section className="mx-6 bg-background md:mx-12 lg:h-[350px]">
      <div className="container relative top-[25px] mx-auto max-w-[734px] rounded-3xl bg-gradient-hero px-6 md:flex md:items-center md:justify-between lg:top-[100px] lg:py-8">
        {/* Left Content */}
        <div className="max-w-xl py-9 md:w-1/2">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-sm text-brown-dark">
            <span className="size-2 rounded-full bg-[#F28A2E]"></span>
            <span>{consultation.eyebrow}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl leading-snug text-brown-dark sm:text-4xl md:text-[40px] md:leading-[1.15]">
            {consultation.heading}
          </h2>

          {/* Buttons */}
          <div className="pt-6 lg:mt-8 lg:flex lg:flex-wrap lg:gap-4 lg:pt-11">
            <Button size="lg" variant="default" className="px-8 py-3 text-sm">
              <a href={links.scheduleCall} target="_blank" rel="noreferrer">
                {consultation.ctaLabel}
              </a>
            </Button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:mt-10 lg:ml-12 lg:mt-0">
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
