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
    <div className="relative bg-black text-white overflow-x-hidden font-serif">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(38,38,38,0.4),transparent)] pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent z-30 pointer-events-none" />

      <StarsBackground />
      <ShootingStars />

      {/* Hero: full viewport; globe anchors here so it stays above the fold */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen py-20">
          <div className="max-w-3xl w-full mx-auto text-center flex flex-col gap-8 items-center">
            <h1 className="text-6xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gold-400 to-gold-600 font-serif font-normal">
              DDS
            </h1>

            <p className="text-lg md:text-xl text-gold-300/80 max-w-xl mx-auto font-light tracking-wide font-serif">
              The Sun Leads The Day
            </p>

            <LogoCarousel />

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
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

        <div className="absolute bottom-[-350px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
          <div className="relative w-[800px] h-[800px]">
            <Globe className="w-full h-full opacity-90" />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 container mx-auto px-4 pb-32 pt-16 md:pt-20 scroll-mt-4"
      >
        <div className="max-w-md w-full mx-auto">
          <p className="text-center text-sm text-gold-400/80 mb-6 tracking-wide">
            Contact
          </p>
          <WaitlistForm />
        </div>
      </section>
    </div>
  )
}