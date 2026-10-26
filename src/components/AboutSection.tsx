import { Button } from './button'

// Page text: edit the wording here
const content = {
  about: {
    heading: 'About Bloom Recruiting and HR',
    body: 'Bloom Recruiting and HR was built for startups that are ready to grow but don\'t have a recruiting team yet. We step in to design your hiring process, from job descriptions and structured interviews to scorecards, set up the tools and automations that keep it moving, and put metrics in place so you can see what\'s working. On the HR side, we make sure every new hire has a smooth start, and we\'re there to advise when tougher situations come up, like corrective action or a performance plan.',
    highlights: [
      '12+ years in talent acquisition and HR',
      'Specialty in tech and engineering, plus executive, sales and marketing roles',
      'Recruiting departments built from the ground up',
      'Onboarding, offer letters and employee handbooks'
    ],
    ctaLabel: 'Tell us about your team'
  },
  links: {
    getStartedForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc_s9fEMAMxe_DQAmmQOQzsREeb96Lyy2H6mp865xmBNv7NZA/viewform?usp=header',
    scheduleCall: 'https://calendly.com/bloomrecruitingandhr-info/30min'
  }
}


const AboutSection = () => {
  const { about, links } = content

  return (
    <section id="about" className="bg-background pb-20 lg:pt-28">
      <div className="container mx-auto max-w-[1000px] px-6 md:px-16 lg:mx-auto lg:px-0">
        <div className="grid items-center gap-0 md:gap-12 lg:grid-cols-2">
          <div className="relative order-1 lg:order-none lg:w-[400px]">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <img src="./about-us.jpeg" alt="" />
            </div>
          </div>
          <div className="pb-10">
            <h2 className="mb-6 text-3xl font-semibold text-foreground md:text-4xl">
              {about.heading}
            </h2>
            <p className="mb-6 text-sm leading-8 text-foreground">
              {about.body}
            </p>
            <div className="mb-8 space-y-4 text-sm">
              {about.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center space-x-3">
                  <div className="size-2 rounded-full bg-gradient-hero"></div>
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
            <Button size="lg" variant="default" className="px-8 py-3 text-sm">
              <a
                href={links.getStartedForm}
                target="_blank"
                rel="noreferrer"
              >
                {about.ctaLabel}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
