import { Button } from "@/components/ui/button"
import { Bird, Users, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
              <Bird className="h-4 w-4" />
              Start your language journey today
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-blue-600">LingoBuddy</span>
              <br />
              <span className="text-balance">Learn Languages as Friends</span>
            </h1>
            
            <p className="mb-8 max-w-xl text-lg text-muted-foreground">
              Join millions of learners on an exciting journey to master French, Arabic, English, and German through fun, interactive lessons and cultural immersion. Your friendly bird buddy is here to guide you!
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="text-base">
                <a href="https://studio.code.org/projects/applab/c469bc7e-da92-4268-a5a9-f91596999aa3" target="_blank" rel="noopener noreferrer">
                  Try the App
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <Link href="#languages">Explore Languages</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">4+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-muted-foreground">Learners</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mascot & Badges */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Main Mascot Circle */}
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-sky-400/20 md:h-80 md:w-80">
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-400 md:h-60 md:w-60">
                  <Bird className="h-24 w-24 text-white md:h-32 md:w-32" />
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -left-4 top-4 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Community</span>
              </div>
              
              <div className="absolute -right-4 top-1/4 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg">
                <Award className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-medium">Certified</span>
              </div>
              
              <div className="absolute -left-8 bottom-8 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">500+ Lessons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
