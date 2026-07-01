import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { toolsData } from '@/data/tools'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function generateStaticParams() {
  return toolsData.map((tool) => ({
    slug: tool.slug,
  }))
}

export default async function ToolPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const tool = toolsData.find((t) => t.slug === params.slug)

  if (!tool) {
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
          
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-100 shadow-xl shadow-[var(--nilux-violet)]/5 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--nilux-ink)] opacity-[0.02] rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
            
            <div className="w-16 h-16 bg-[var(--nilux-violet-soft)] rounded-2xl flex items-center justify-center mb-8">
              {React.cloneElement(tool.icon as React.ReactElement<{ className?: string }>, {
                className: 'w-8 h-8 text-[var(--nilux-violet)]',
              })}
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--nilux-ink)] mb-4">
              {tool.title}
            </h1>
            <p className="font-sinhala text-xl text-[var(--nilux-violet)] font-medium mb-10 pb-10 border-b border-slate-200">
              {tool.sinhala}
            </p>
            
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed">
                {tool.description}
              </p>
              {/* Add more detailed content here if needed in the future */}
            </div>
            
            <div className="mt-16">
              <button className="bg-[var(--nilux-violet)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--nilux-ink)] transition-colors duration-300 shadow-lg shadow-[var(--nilux-violet)]/20">
                Request this Review Tool
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
