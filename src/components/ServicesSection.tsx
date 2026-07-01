'use client'

import React, { cloneElement } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { servicesData } from '@/data/services'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function ServicesSection() {
  return (
    <section className="py-24 bg-[#fcfaff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-[var(--nilux-violet-soft)] text-[var(--nilux-violet)] text-sm font-semibold tracking-wide">
            Our Services
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--nilux-ink)] mb-6">
            Nilux Business Advisory Services
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you're starting a business, growing your operations or
            making an important business decision, Nilux offers the right level
            of professional support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Discovery Callout Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[var(--nilux-violet)] rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--nilux-ink)]/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-sinhala text-sm font-semibold mb-8">
                මූලික හමුව (Discovery Meeting)
              </div>

              <ul className="space-y-6 mb-12">
                {[
                  'අපි එකිනෙකා හඳුනා ගනිමු',
                  'තමන්ගේ ව්යාපාරික ගැටලු තේරුම් ගනිමු',
                  'ඉදිරි මග පැහැදිලි කරගනිමු',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-sinhala text-lg text-white/90">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <button className="relative z-10 w-full bg-[var(--nilux-ink)] hover:bg-black text-white rounded-full p-4 font-semibold transition-all duration-300 shadow-lg flex flex-col items-center justify-center gap-1 group">
              <span>Reserve Your First Session - FREE</span>
              <span className="font-sinhala text-xs opacity-80 group-hover:opacity-100">
                පළමු හමුව වෙන් කරගන්න - නොමිලේ
              </span>
            </button>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {servicesData.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full bg-white border border-slate-100 rounded-[2rem] p-8 hover:border-[var(--nilux-violet)]/30 hover:shadow-xl hover:shadow-[var(--nilux-violet)]/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[var(--nilux-violet-soft)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--nilux-violet)] transition-colors duration-300">
                    {cloneElement(service.icon as React.ReactElement<{ className?: string }>, {
                      className:
                        'w-6 h-6 text-[var(--nilux-violet)] group-hover:text-white transition-colors duration-300',
                    })}
                  </div>
                  <h3 className="font-bold text-[var(--nilux-ink)] text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sinhala text-sm text-slate-600 mb-8 min-h-[3rem]">
                    {service.sinhala}
                  </p>
                  <div className="text-[var(--nilux-violet)] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 mt-auto">
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
