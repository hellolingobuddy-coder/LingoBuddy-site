import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How many languages are available in LingoBuddy?",
    answer: "LingoBuddy currently offers four languages: French, Arabic, English, and German. Each course is carefully designed with native speaker audio, cultural content, and interactive exercises to help you achieve fluency from A1 to C2 levels.",
  },
  {
    question: "How can I get support or help?",
    answer: "We offer 24/7 support through multiple channels! You can reach us via email at hello.lingobuddy@gmail.com, use our in-app chat feature, or join our community forum where fellow learners and tutors can help answer your questions.",
  },
  {
    question: "What is included in the subscription?",
    answer: "Your subscription includes unlimited access to all 4 languages, 500+ interactive lessons, native speaker audio, cultural immersion content, live tutoring sessions, community access, progress tracking, and certificates upon completion of each level.",
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Absolutely! LingoBuddy is designed for flexible learning. All materials are available 24/7, so you can learn whenever it suits your schedule. Whether you prefer 10 minutes a day or intensive study sessions, our platform adapts to your learning style.",
  },
  {
    question: "Are there any live sessions or group activities?",
    answer: "Yes! We offer weekly live sessions with native speakers, group conversation practice, and collaborative learning activities. These sessions help you practice real-world communication and connect with learners worldwide.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Got questions? We&apos;ve got answers. Find everything you need to know about LingoBuddy.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
