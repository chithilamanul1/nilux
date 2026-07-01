'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function FounderSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-[var(--nilux-violet-soft)] text-[var(--nilux-violet)] text-sm font-semibold tracking-wide">
              About Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--nilux-ink)] leading-tight mb-10">
              The Founder Behind Nilux
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--nilux-violet-soft)] p-8 rounded-3xl flex flex-col justify-center">
                <span className="text-4xl font-bold text-[var(--nilux-ink)] mb-2">
                  18+
                </span>
                <span className="text-sm text-slate-600 font-medium">
                  Years Experience
                </span>
                <p className="text-xs text-slate-500 mt-4">
                  In banking and business management
                </p>
              </div>

              <div className="bg-[var(--nilux-violet)]/10 p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--nilux-violet)] opacity-10 rounded-full blur-xl"></div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  <svg
                    className="w-5 h-5 text-[var(--nilux-violet)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <span className="text-3xl font-bold text-[var(--nilux-ink)] mb-1">
                  SME
                </span>
                <span className="text-sm text-slate-600 font-medium">
                  Focused Support
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--nilux-violet-soft)] rounded-bl-[5rem] rounded-tr-[2.5rem] -z-10"></div>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 shrink-0 rounded-full bg-slate-200 border-4 border-white shadow-md overflow-hidden relative">
                {/* Placeholder for photo */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--nilux-ink)]">
                  Nirosh R. Gunawardana
                </h3>
                <p className="text-[var(--nilux-violet)] font-semibold text-sm">
                  Business Management Consultant
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                With over 18 years of professional experience in the banking
                sector, combined with hands-on experience in entrepreneurship
                and business management, founded Nilux with the objective of
                helping Small and Medium Enterprise (SME) owners make better
                business decisions. Through practical business reviews,
                independent professional recommendations, and a range of modern
                business review tools, Nilux supports business owners in
                understanding their businesses and making informed, confident
                decisions.
              </p>
              <div className="w-full h-px bg-slate-100"></div>
              <p className="font-sinhala text-slate-600 leading-relaxed text-sm">
                වසර 18කට වැඩි බැංකු ක්ෂේත්රයේ වෘත්තීය පළපුරුද්ද සහ
                ව්යාවසායකත්ව/ව්යාපාර කළමනාකරණයේ ප්රායෝගික අත්දැකීම් සමගින්
                කුඩා හා මධ්ය පරිමාණ ව්යාපාර හිමියන් වෙනුවෙන්ම බිහිකල ආයතනයකි
                Nilux. ව්යූහගත ව්යාපාර සමාලෝචන, ප්රායෝගික නිර්දේශ සහ ස්වාධීන
                වෘත්තීය උපදේශන මගින් ව්යාපාර හිමියන්ට වඩාත් හොඳ ව්යාපාරික තීරණ
                ගැනීමට සහාය වීම එහි අරමුණයි.
              </p>
            </div>

            <button className="mt-8 bg-[var(--nilux-ink)] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
