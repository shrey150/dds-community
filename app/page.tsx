"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe } from "@/components/ui/globe"
import { LogoCarousel } from "@/components/ui/logo-carousel"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-serif">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(38,38,38,0.4),transparent)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <StarsBackground />
      <ShootingStars />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-[85vh] py-16 md:py-20">
        <div className="max-w-3xl w-full mx-auto text-center flex flex-col gap-6 md:gap-8 items-center">
          <h1 className="text-6xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gold-400 to-gold-600 font-serif font-normal">
            DDS
          </h1>

          <p className="text-base md:text-lg text-gold-300/70 max-w-md mx-auto font-light tracking-wide">
            Working on something new.
          </p>

          <LogoCarousel />

          <div className="mt-2">
            <Button
              asChild
              variant="outline"
              className="border-gold-500 text-gold-300 hover:bg-gold-500/20 hover:text-gold-200 bg-black/70 backdrop-blur-sm font-serif shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>

      <section
        id="contact"
        className="relative z-10 container mx-auto px-4 pb-32 pt-8 md:pt-12 scroll-mt-8"
      >
        <div className="max-w-md w-full mx-auto">
          <p className="text-center text-sm text-gold-400/80 mb-6 tracking-wide">
            Contact
          </p>
          <WaitlistForm />
        </div>
      </section>

      <div className="absolute bottom-[-350px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          <Globe className="w-full h-full opacity-90" />
        </div>
      </div>
    </div>
  )
}