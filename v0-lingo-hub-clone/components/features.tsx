import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe, Mic, Award, Clock, Gamepad2 } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Interactive Learning",
    description: "Learn with peers in engaging group activities and discussions.",
  },
  {
    icon: Globe,
    title: "Cultural Immersion",
    description: "Explore cultures through stories, traditions, and real-world content.",
  },
  {
    icon: Mic,
    title: "Native Speakers",
    description: "Practice with native speakers for authentic pronunciation.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Earn certificates to showcase your language proficiency.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn at your own pace with 24/7 access to materials.",
  },
  {
    icon: Gamepad2,
    title: "Fun Activities",
    description: "Games, quizzes, and challenges make learning enjoyable.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-600">
            Why Choose Us
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What Makes Us Special
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover why thousands of learners choose LingoBuddy for their language journey
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
