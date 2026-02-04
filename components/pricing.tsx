'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const features = [
  "Access to all 4 languages",
  "Unlimited lessons & exercises",
  "Native speaker audio",
  "Cultural immersion content",
  "24/7 support",
  "Certificate upon completion",
  "Live sessions with tutors",
  "Community access",
]

export function Pricing() {
  const handleSubscribe = () => {
    // Implement subscription logic here
  };

  const subscribed = false;

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-600">
            Pricing
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Start Learning for Just $9.50/month
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            One simple plan with everything you need. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <Card className="relative overflow-hidden border-blue-500/50 shadow-lg">
            <Badge className="absolute right-4 top-4 bg-amber-500 text-white">
              Best Value
            </Badge>
            <CardHeader className="pb-4 pt-8 text-center">
              <CardTitle className="text-2xl">LingoBuddy Premium</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold text-blue-600">$9.50</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="mb-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg" asChild>
                <Link href="/subscribe">Subscribe Now</Link>
              </Button>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Cancel anytime. No hidden fees.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
