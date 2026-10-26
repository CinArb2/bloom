import { Button } from './button'
import content from '../content.json'

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
            {about.clients && (
              <div className="mb-8 text-sm">
                <p className="mb-2 text-xs uppercase tracking-wide text-foreground">
                  {about.clientsLabel}
                </p>
                <p className="font-medium text-foreground">
                  {about.clients.join('  ·  ')}
                </p>
              </div>
            )}
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
