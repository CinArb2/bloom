import { Button } from './button'

const AboutSection = () => {
  return (
    <section id="about" className="bg-background pb-14 pt-28">
      <div className="container mx-auto px-6 lg:mx-auto lg:max-w-[1088px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-1 lg:order-none lg:w-[400px]">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <img src="./about-us.jpeg" alt="" />
            </div>
          </div>
          <div className="pb-10">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              About Bloom Recruiting and HR
            </h2>
            <p className="mb-6 text-sm leading-8 text-foreground">
              With over a decade of experience in talent acquisition and human
              resources, Bloom Recruiting and HR has established itself as a
              trusted partner for companies seeking exceptional talent and
              candidates pursuing their next career opportunity.
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
                  500+ successful placements annually
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
                  Industry expertise across 15+ sectors
                </span>
              </div>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-sm text-dark-purple"
            >
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
