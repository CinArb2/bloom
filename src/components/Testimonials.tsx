import React from 'react'

// Tailwind-only, no external UI libs.
// Drop this into your Testimonial section.
export default function TestimonialCard() {
  return (
    <section className="w-full pb-20 md:mx-12 md:w-auto lg:pb-0">
      <div className="container mx-auto max-w-[800px] grid-cols-1 items-center gap-10 px-6 md:px-10 lg:gap-16 lg:py-16">
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
            Bloom Recruiting HR is a top of the line recruiting company that
            literally saved us in helping us get candidates. We had such a hard
            time in not just getting candidates but even getting interest in any
            of our open positions. After failing for years we came to them to
            help us and the results were through the roof.
          </p>

          {/* Body */}
          <div className="mt-6 flex w-full items-center justify-between space-y-4 text-sm leading-7 text-foreground">
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
              <div className="relative w-[100px] overflow-hidden lg:w-[150px]">
                <img
                  src="./logo-2.png"
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
