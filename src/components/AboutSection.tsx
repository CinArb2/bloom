import { Button } from './button'

const AboutSection = () => {
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
              About Bloom Recruiting and HR
            </h2>
            <p className="mb-6 text-sm leading-8 text-foreground">
              With over a decade of experience in talent acquisition and human
              resources, Bloom Recruiting & HR is your trusted partner for
              finding top talent or taking the next step in your career. We
              combine proven strategies with a personalized approach to deliver
              results that last.
            </p>
            <div className="mb-8 space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <div className="size-2 rounded-full bg-gradient-hero"></div>
                <span className="text-foreground">
                  10+ years of recruitment excellence
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="size-2 rounded-full bg-gradient-hero"></div>
                <span className="text-foreground">
                  500+ successful placements each year
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="size-2 rounded-full bg-gradient-hero"></div>
                <span className="text-foreground">
                  95% client satisfaction rate
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="size-2 rounded-full bg-gradient-hero"></div>
                <span className="text-foreground">
                  Deep expertise across technology and 15 + industries
                </span>
              </div>
            </div>
            <Button size="lg" variant="default" className="px-8 py-3 text-sm">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_s9fEMAMxe_DQAmmQOQzsREeb96Lyy2H6mp865xmBNv7NZA/viewform?usp=header"
                target="_blank"
                rel="noreferrer"
              >
                Learn More About Our Process
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
