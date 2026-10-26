import React from 'react'

// Page text: edit the wording here
const content = {
  testimonials: {
    eyebrow: 'Client Testimonials',
    featured: {
      quote: 'They found us the right talent and made hiring effortless',
      body: 'Bloom Recruiting HR is a top of the line recruiting company that literally saved us in helping us get candidates. We had such a hard time in not just getting candidates but even getting interest in any of our open positions. After failing for years we came to them to help us and the results were through the roof.',
      authorName: 'Stephen, Owner',
      authorTitle: 'Rain Basketball | Denver, CA'
    },
    items: [
      {
        quote: 'Rocio was amazing to work with. Very professional, punctual, and fast. Thank you!',
        authorName: 'Ecare Behavioral Health Institute',
        authorTitle: 'Fractional Talent Acquisition Manager'
      },
      {
        quote: 'Rocio was fantastic to work with. She coached our candidate with practical guidance and personalized feedback that boosted their confidence and helped them land the job. Communication was smooth, and her approach was professional and effective. Highly recommend her for interview coaching.',
        authorName: 'Staff Plex',
        authorTitle: 'Interview coaching'
      }
    ]
  }
}


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
