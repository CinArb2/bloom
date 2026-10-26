import { Button } from './button'

// Page text: edit the wording here
const content = {
  cta: {
    heading: 'Ready to build your recruiting engine?',
    body: 'Whether you\'re making your first hires or setting up a full recruiting function, Bloom can help. Schedule a call to talk through where your team is today.',
    primaryCtaLabel: 'Schedule a call',
    secondaryCtaLabel: 'View Our Services'
  },
  links: {
    getStartedForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc_s9fEMAMxe_DQAmmQOQzsREeb96Lyy2H6mp865xmBNv7NZA/viewform?usp=header',
    scheduleCall: 'https://calendly.com/bloomrecruitingandhr-info/30min'
  }
}


const CTASection = () => {
  const { cta, links } = content

  return (
    <section className="px-6 py-20" id="contact">
      <div className="container mx-auto rounded-3xl bg-[#264C18] px-6 py-24 text-center lg:mx-auto lg:max-w-[988px]">
        <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
          {cta.heading}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm text-white/90">
          {cta.body}
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
            <a href={links.scheduleCall} target="_blank" rel="noreferrer">
              {cta.primaryCtaLabel}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white px-8 py-3 text-sm text-dark-purple hover:bg-white hover:text-primary"
          >
            {cta.secondaryCtaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
