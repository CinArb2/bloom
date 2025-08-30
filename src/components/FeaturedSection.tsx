import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './Card'
import { Users, Target, Clock, Trophy } from 'lucide-react'

const FeaturedSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Talent Sourcing',
      description:
        'Access our extensive network of qualified professionals across all industries and skill levels.'
    },
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
    <section id="services" className="bg-background py-20">
      <div className="container mx-auto px-6 lg:mx-auto lg:max-w-[1188px]">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">
            Why Choose Bloom Recruiting?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            We combine cutting-edge technology with human expertise to deliver
            exceptional recruiting results for your organization.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 bg-gradient-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-hero">
                  <feature.icon className="size-8 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
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
