import React from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { TrustSection } from '@/components/TrustSection'
import { ServicesSection } from '@/components/ServicesSection'
import { ToolsSection } from '@/components/ToolsSection'
import { FounderSection } from '@/components/FounderSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <ToolsSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  )
}
