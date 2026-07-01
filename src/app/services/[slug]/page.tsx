import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { servicesData } from '@/data/services'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = servicesData.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Header />
      <main className="flex-grow pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[var(--nilux-violet)] transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <div className="bg-[#fcfaff] rounded-[2.5rem] p-10 md:p-16 border border-[var(--nilux-violet)]/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--nilux-violet)] opacity-[0.03] rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <div className="w-16 h-16 bg-[var(--nilux-violet-soft)] rounded-2xl flex items-center justify-center mb-8">
              {React.cloneElement(service.icon as React.ReactElement, {
                className: 'w-8 h-8 text-[var(--nilux-violet)]',
              })}
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--nilux-ink)] mb-4">
              {service.title}
            </h1>
            <p className="font-sinhala text-xl text-[var(--nilux-violet)] font-medium mb-10 pb-10 border-b border-slate-200">
              {service.sinhala}
            </p>
            
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed">
                {service.description}
              </p>
              {/* Add more detailed content here if needed in the future */}
            </div>
            
            <div className="mt-16">
              <button className="bg-[var(--nilux-ink)] text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-all duration-300">
                Book a Consultation for this Service
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
