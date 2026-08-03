import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './Card'
import { Target, Clock, Trophy, Users, type LucideIcon } from 'lucide-react'
import content from '../content.json'

const iconMap: Record<string, LucideIcon> = {
  Target,
  Clock,
  Trophy,
  Users
}

const FeaturedSection = () => {
  const { features } = content

  return (
    <section
      id="services"
      className="mx-6 bg-background pb-20 md:mx-12 lg:py-20 lg:pt-28"
    >
      <div className="mx-auto max-w-[1000px] rounded-3xl bg-gradient-hero py-12 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 pt-10 text-4xl font-bold text-brown-dark">
            {features.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-brown-dark">
            {features.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Target
            return (
              <Card
                key={index}
                className="rounded-3xl border-0 transition-all duration-300"
              >
                <CardHeader className="pb-4 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full">
                    <Icon className="size-8 text-brown-dark" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
