import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

const languages = [
  {
    greeting: "Bonjour!",
    name: "French",
    nativeName: "Français",
    description: "Explore the language of love, art, and diplomacy.",
    flag: "🇫🇷",
    bgColor: "bg-gradient-to-br from-blue-600 via-white to-red-500",
    cardBg: "bg-blue-50",
  },
  {
    greeting: "مرحبا!",
    name: "Arabic",
    nativeName: "العربية",
    description: "Discover the beauty of Arabic calligraphy and culture.",
    flag: "🇸🇦",
    bgColor: "bg-gradient-to-br from-green-600 to-emerald-500",
    cardBg: "bg-green-50",
  },
  {
    greeting: "Hello!",
    name: "English",
    nativeName: "English",
    description: "Master the global language of business and communication.",
    flag: "🇬🇧",
    bgColor: "bg-gradient-to-br from-blue-700 via-red-600 to-blue-700",
    cardBg: "bg-red-50",
  },
  {
    greeting: "Hallo!",
    name: "Deutsch",
    nativeName: "Deutsch",
    description: "Learn the language of precision, engineering, and philosophy.",
    flag: "🇩🇪",
    bgColor: "bg-gradient-to-b from-gray-900 via-red-600 to-yellow-500",
    cardBg: "bg-yellow-50",
  },
]

export function Languages() {
  return (
    <section id="languages" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-600">
            Choose Your Language
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Start Learning Today
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Pick from four amazing languages and embark on your multilingual journey with our friendly bird buddy!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((language) => (
            <Card
              key={language.name}
              className={`group cursor-pointer overflow-hidden border-border/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg ${language.cardBg}`}
            >
              <CardHeader className={`${language.bgColor} p-6 text-center relative h-32`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="mb-2 text-5xl drop-shadow-lg">{language.flag}</div>
                  <p className="text-2xl font-semibold text-white drop-shadow-md">{language.greeting}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <h3 className="mb-1 text-xl font-bold text-foreground">{language.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{language.nativeName}</p>
                <p className="text-sm text-muted-foreground">{language.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
