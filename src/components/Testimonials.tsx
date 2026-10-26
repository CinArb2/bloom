import React from 'react'
import content from '../content.json'

export default function TestimonialCard() {
  const { testimonials } = content
  const { featured, items } = testimonials

  return (
    <section className="w-full pb-20 md:mx-12 md:w-auto lg:pb-0">
      <div className="container mx-auto max-w-[800px] px-6 md:px-10 lg:py-16">
        <div className="mb-6 inline-flex items-center gap-2 text-sm text-foreground">
          <span className="size-2 rounded-full bg-[#F28A2E]"></span>
          <span>{testimonials.eyebrow}</span>
        </div>

        <h2 className="pb-4 text-3xl font-semibold leading-snug text-foreground md:leading-[1.15]">
          “{featured.quote}”
        </h2>
        <p className="text-sm leading-7">{featured.body}</p>

        <div className="mt-6 flex w-full items-center justify-between gap-4 text-sm leading-7 text-foreground">
          <div className="pt-4">
            <p className="text-foreground">{featured.authorName}</p>
            <p className="text-sm text-foreground">{featured.authorTitle}</p>
          </div>
          <div className="relative w-[100px] overflow-hidden lg:w-[150px]">
            <img
              src="./logo-2.png"
              alt="Client logo"
              className="block size-full object-fill"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <figure
              key={item.authorName}
              className="flex flex-col justify-between rounded-3xl bg-gradient-hero p-6 text-brown-dark"
            >
              <div>
                <div className="mb-3 text-[#F28A2E]" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote className="text-sm leading-7">
                  “{item.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-5 text-sm">
                <p className="font-semibold">{item.authorName}</p>
                <p>{item.authorTitle}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
