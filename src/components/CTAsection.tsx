import { Button } from './button'

const CTASection = () => {
  return (
    <section className="bg-gradient-hero py-20" id="contact">
      <div className="container mx-auto px-6 text-center lg:mx-auto lg:max-w-[1188px]">
        <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
          Ready to find your next great hire?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Join hundreds of companies who trust Bloom Recruiting to connect them
          with exceptional talent. Start your search today.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
            Schedule a Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white px-8 py-3 text-lg text-dark-purple hover:bg-white hover:text-primary"
          >
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
