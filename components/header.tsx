"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Bird } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-400">
            <Bird className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">LingoBuddy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href="#languages">Languages</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#features">Features</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#faq">FAQ</Link>
          </Button>
          <Button variant="outline" className="bg-transparent" asChild>
            <Link href="/login">
              Log In
            </Link>
          </Button>
          <Button asChild>
            <a href="https://dc344e61-1a70-44dc-baa7-51b9227f8fd2.app-preview.com/" target="_blank" rel="noopener noreferrer">
              Try the App
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="flex flex-col gap-2 border-t border-border bg-background p-4 md:hidden">
          <Button variant="ghost" asChild className="justify-start">
            <Link href="#languages" onClick={() => setMobileMenuOpen(false)}>Languages</Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <Link href="#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          </Button>
          <Button variant="outline" asChild className="bg-transparent">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
          </Button>
          <Button asChild>
            <a href="https://studio.code.org/projects/applab/c469bc7e-da92-4268-a5a9-f91596999aa3" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
              Try the App
            </a>
          </Button>
        </nav>
      )}
    </header>
  )
}
