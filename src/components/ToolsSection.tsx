'use client'

import React, { cloneElement } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { toolsData } from '@/data/tools'

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
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 15 } 
  },
}

export function ToolsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-[var(--nilux-violet-soft)] text-[var(--nilux-violet)] text-sm font-semibold tracking-wide">
            Review Tools
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--nilux-ink)] mb-3">
            Nilux Business Review Tools
          </h2>
          <p className="font-sinhala text-lg text-[var(--nilux-violet)] font-medium mb-4">
            විශේෂ ව්යාපාර සමාලෝචනය
          </p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive suite of business review tools designed to provide
            clarity and actionable insights for your SME.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {toolsData.map((tool, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Link
                href={`/tools/${tool.slug}`}
                className="block bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--nilux-violet)]/20 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-12 h-12 bg-[var(--nilux-violet-soft)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--nilux-violet)] transition-colors duration-300">
                  {cloneElement(tool.icon as React.ReactElement, {
                    className:
                      'w-6 h-6 text-[var(--nilux-violet)] group-hover:text-white transition-colors duration-300',
                  })}
                </div>
                <h3 className="font-bold text-[var(--nilux-ink)] text-lg mb-3">
                  {tool.title}
                </h3>
                <p className="font-sinhala text-sm text-slate-600 mb-8 flex-grow">
                  {tool.sinhala}
                </p>
                <div className="text-[var(--nilux-violet)] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 mt-auto">
                  More Details <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
