import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './Card'
import {
  Target,
  Clock,
  Trophy,
  Users,
  Workflow,
  ClipboardCheck,
  UserCheck,
  LayoutDashboard,
  Check,
  type LucideIcon
} from 'lucide-react'
import content from '../content.json'

const iconMap: Record<string, LucideIcon> = {
  Target,
  Clock,
  Trophy,
  Users,
  Workflow,
  ClipboardCheck,
  UserCheck,
  LayoutDashboard
}

type FeatureItem = {
  icon: string
  title: string
  description: string
  badge?: string
  points?: string[]
}

const FeaturedSection = () => {
  const { features } = content
  const items = features.items as FeatureItem[]

  return (
    <section
      id="services"
      className="mx-6 bg-background pb-20 md:mx-12 lg:py-20 lg:pt-28"
    >
      <div className="mx-auto max-w-[1000px] rounded-3xl bg-gradient-hero px-4 py-12 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 pt-10 text-4xl font-bold text-brown-dark">
            {features.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-brown-dark">
            {features.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {items.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Target
            return (
              <Card
                key={feature.title}
                className="rounded-3xl border-0 bg-white/60 transition-all duration-300"
              >
                <CardHeader className="pb-4 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full">
                    <Icon className="size-8 text-brown-dark" />
                  </div>
                  <CardTitle className="text-base text-brown-dark">
                    {feature.title}
                  </CardTitle>
                  {feature.badge && (
                    <span className="mx-auto mt-2 inline-block rounded-full bg-green-light px-3 py-1 text-xs font-medium text-green-dark">
                      {feature.badge}
                    </span>
                  )}
                </CardHeader>
                <CardContent className="text-brown-dark">
                  <CardDescription className="text-center text-sm leading-relaxed text-brown-dark">
                    {feature.description}
                  </CardDescription>
                  {feature.points && (
                    <ul className="mx-auto mt-5 max-w-xs space-y-2 text-sm">
                      {feature.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-green-dark" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
