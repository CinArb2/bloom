import { Button } from './button'

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-20">
      <div className="container mx-auto px-6 lg:mx-auto lg:max-w-[1088px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              About Bloom Recruiting and HR
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              With over a decade of experience in talent acquisition and human
              resources, Bloom Recruiting and HR has established itself as a
              trusted partner for companies seeking exceptional talent and
              candidates pursuing their next career opportunity.
            </p>
            {/* <p className="mb-6 text-lg text-muted-foreground">
              Our team of seasoned recruiters and HR professionals combines deep
              industry knowledge with cutting-edge recruitment technologies to
              deliver results that exceed expectations. We specialize in
              executive search, direct hire, contract staffing, and
              comprehensive HR consulting services.
            </p> */}
            <div className="mb-8 space-y-4">
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
              className="border-dark-purple px-8 py-3 text-lg text-dark-purple hover:bg-tertiary hover:text-white"
            >
              Learn More About Our Process
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rotate-3 rounded-2xl bg-gradient-hero"></div>
            <div className="relative rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-4 text-xl font-semibold text-card-foreground">
                Our Mission
              </h3>
              <p className="mb-6 text-muted-foreground">
                To bridge the gap between exceptional talent and innovative
                companies, creating lasting partnerships that drive growth and
                success for all parties involved.
              </p>

              <h3 className="mb-4 text-xl font-semibold text-card-foreground">
                Our Values
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Integrity in every interaction</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Excellence in service delivery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Innovation in recruitment strategies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Commitment to long-term relationships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
