import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './Card'
import { Target, Clock, Trophy } from 'lucide-react'

const FeaturedSection = () => {
  const features = [
    // {
    //   icon: Users,
    //   title: 'Expert Talent Sourcing',
    //   description:
    //     'Access our extensive network of qualified professionals across all industries and skill levels.'
    // },
    {
      icon: Target,
      title: 'Precision Matching',
      description:
        'Our advanced matching algorithm ensures the perfect fit between candidates and your company culture.'
    },
    {
      icon: Clock,
      title: 'Rapid Placement',
      description:
        'Reduce time-to-hire with our streamlined process and dedicated recruitment specialists.'
    },
    {
      icon: Trophy,
      title: 'Quality Guarantee',
      description:
        'We stand behind our placements with comprehensive vetting and performance guarantees.'
    }
  ]

  return (
    <section id="services" className="bg-background pb-12 pt-28 lg:py-20">
      <div className="container mx-auto max-w-[1000px] rounded-3xl bg-gradient-hero px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-4 pt-10 text-4xl font-bold text-brown-dark">
            Why Choose Bloom Recruiting?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-brown-dark">
            We combine cutting-edge technology with human expertise to deliver
            exceptional recruiting results for your organization.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 transition-all duration-300"
            >
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full">
                  <feature.icon className="size-8 text-brown-dark" />
                </div>
                <CardTitle className="text-sm text-brown-dark">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-brown-dark">
                <CardDescription className="text-sm leading-relaxed text-brown-dark">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
