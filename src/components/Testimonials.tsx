import React from 'react'

// Tailwind-only, no external UI libs.
// Drop this into your Testimonial section.
export default function TestimonialCard() {
  return (
    <section className="w-full">
      <div className="container mx-auto max-w-[800px] grid-cols-1 items-center gap-10 px-6 py-12 md:px-10 lg:gap-16 lg:py-16">
        {/* Copy / Left */}
        <div>
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 text-sm text-foreground">
            <span className="size-2 rounded-full bg-[#F28A2E]"></span>
            <span>Client Testimonials</span>
          </div>

          {/* Quote */}
          <h2 className="pb-4 text-3xl font-semibold leading-snug text-foreground md:leading-[1.15]">
            “They found us the right talent and made hiring effortless”
          </h2>

          <p>
            We struggled for months to find the right candidates. We tried job
            boards and referrals, but the quality wasn’t there. Partnering with
            this recruiting company made hiring effortless—they quickly
            understood our needs and delivered top talent.
          </p>

          {/* Body */}
          <div className="mt-6 flex w-full justify-between space-y-4 text-sm leading-7 text-foreground">
            <div>
              {/* Signature */}
              <div className="pt-4">
                <p className="text-foreground">Stephen, Owner</p>
                <p className="text-sm text-foreground">
                  Rain Basketball | Denver, CA
                </p>
              </div>
            </div>
            {/* Image / Right */}
            <div className="">
              <div className="relative w-[100px] overflow-hidden">
                <img
                  src="./Den-Rain-Logo.jpg"
                  alt="Smiling HR manager portrait"
                  className="block size-full object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
