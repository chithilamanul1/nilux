'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  LineChart,
  TrendingUp,
  Lock,
  Video,
  BadgeDollarSign,
  ArrowUpRight,
} from 'lucide-react'

const trustItems = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Independent & Practical Recommendations',
    sinhala:
      'තමන්ගේ ම ව්යාපාරයට ඇත්තටම ගැලපෙන, ස්වාධීන සහ ප්රායෝගික මගපෙන්වීම',
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Data-Driven Decisions & Solutions',
    sinhala:
      'අනුමානවලට නොව, නිවැරදි දත්ත සහ විශ්ලේෂණ මත පදනම් වූ තීරණ සහ විසඳුම්',
    isDark: true,
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'From Self-Employment to Growing SMEs',
    sinhala:
      'ස්වයං රැකියාවක සිට වර්ධනය වන කුඩා සහ මධ්ය පරිමාණ සියලුම ව්යාපාර දක්වා',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Trusted, Confidential & Personalized Service',
    sinhala:
      'ව්යාපාරික තොරතුරු ආරක්ෂා කරමින්, තමන්ගේම ව්යාපාරයට ගැලපෙන පුද්ගලික සහ විශ්වාසනීය උපදේශන සේවාවක්',
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Flexible Remote Consultations',
    sinhala:
      'තමන්ගේ කාලය ඉතිරි කරමින් WhatsApp, Zoom, Google Meet හරහා දුරස්ථ උපදේශන සැසි',
    isDark: true,
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: 'Affordable & Transparent Pricing',
    sinhala:
      'සැඟවුණු ගාස්තු නොමැතිව, ව්යාපාරයේ අවශ්යතාවයට ගැලපෙන සාධාරණ ගාස්තු',
  },
]

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function TrustSection() {
  return (
    <section className="py-24 bg-[var(--nilux-violet-soft)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white text-[var(--nilux-violet)] text-sm font-semibold tracking-wide shadow-sm">
              Why Choose Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--nilux-ink)] leading-tight">
              Why Business Owners <br /> Trust Nilux
            </h2>
          </div>
          <p className="text-slate-600 max-w-md">
            Professional guidance built on trust, integrity, practical
            experience, and a commitment to helping your business succeed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 rounded-[2rem] transition-all duration-300 group flex flex-col ${item.isDark ? 'bg-[var(--nilux-ink)] text-white shadow-xl' : 'bg-[var(--nilux-violet)]/10 text-[var(--nilux-ink)] hover:bg-white hover:shadow-xl'}`}
            >
              <div className="flex justify-between items-start mb-12">
                <h3
                  className={`text-xl font-bold leading-snug pr-4 ${item.isDark ? 'text-white' : 'text-[var(--nilux-ink)]'}`}
                >
                  {item.title}
                </h3>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.isDark ? 'bg-white/10 text-white' : 'bg-white text-[var(--nilux-ink)] shadow-sm'}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-auto">
                <p
                  className={`font-sinhala text-sm leading-relaxed ${item.isDark ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  {item.sinhala}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom curved divider to white */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.82,21.59,150.29,48.2,224.84,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
