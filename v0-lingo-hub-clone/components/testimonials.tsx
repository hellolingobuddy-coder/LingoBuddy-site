import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "LingoBuddy made learning French so enjoyable! The cultural immersion content really helped me understand the context behind the language.",
    name: "Sarah Johnson",
    role: "French Learner",
    avatar: "SJ",
  },
  {
    quote: "As an Arabic speaker, I found the English course perfectly structured. The native speaker audio is incredibly helpful for pronunciation.",
    name: "Ahmed Hassan",
    role: "English Learner",
    avatar: "AH",
  },
  {
    quote: "I never thought I could learn Arabic calligraphy online! LingoBuddy exceeded all my expectations with their interactive lessons.",
    name: "Emma Mueller",
    role: "Arabic Learner",
    avatar: "EM",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What Our Learners Say
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Join thousands of happy learners who have transformed their language skills with LingoBuddy
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-border/50 transition-all duration-300 hover:shadow-md"
            >
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-blue-500/30" />
                <p className="mb-6 text-muted-foreground italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-400 text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
