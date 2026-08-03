import React from 'react'
import content from '../content.json'

// Tailwind-only, no external UI libs.
// Drop this into your Testimonial section.
export default function TestimonialCard() {
  const { testimonial } = content

  return (
    <section className="w-full pb-20 md:mx-12 md:w-auto lg:pb-0">
      <div className="container mx-auto max-w-[800px] grid-cols-1 items-center gap-10 px-6 md:px-10 lg:gap-16 lg:py-16">
        {/* Copy / Left */}
        <div>
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 text-sm text-foreground">
            <span className="size-2 rounded-full bg-[#F28A2E]"></span>
            <span>{testimonial.eyebrow}</span>
          </div>

          {/* Quote */}
          <h2 className="pb-4 text-3xl font-semibold leading-snug text-foreground md:leading-[1.15]">
            “{testimonial.quote}”
          </h2>

          <p>{testimonial.body}</p>

          {/* Body */}
          <div className="mt-6 flex w-full items-center justify-between space-y-4 text-sm leading-7 text-foreground">
            <div>
              {/* Signature */}
              <div className="pt-4">
                <p className="text-foreground">{testimonial.authorName}</p>
                <p className="text-sm text-foreground">
                  {testimonial.authorTitle}
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
