import Link from "next/link"
import { Bird, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-400">
                <Bird className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">LingoBuddy</span>
            </Link>
            <p className="mb-4 max-w-md text-muted-foreground">
              Your friendly companion for learning languages. Join millions of learners on an exciting journey to master French, Arabic, English, and German.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello.lingobuddy@gmail.com" className="hover:text-primary transition-colors">
                hello.lingobuddy@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#languages" className="text-muted-foreground hover:text-primary transition-colors">
                  Languages
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Languages</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">French</span>
              </li>
              <li>
                <span className="text-muted-foreground">Arabic</span>
              </li>
              <li>
                <span className="text-muted-foreground">English</span>
              </li>
              <li>
                <span className="text-muted-foreground">German</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LingoBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
