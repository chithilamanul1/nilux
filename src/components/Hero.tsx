'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative w-full bg-[#fcfaff] pt-36 pb-24 overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[500px] w-[500px] rounded-full bg-[var(--nilux-violet)] blur-[130px]"
        ></motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-[var(--nilux-violet-soft)] text-[var(--nilux-violet)] text-sm font-semibold tracking-wide">
            Welcome To Nilux
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--nilux-ink)] leading-[1.1] mb-6"
        >
          Empowering Sri Lankan{' '}
          <span className="text-[var(--nilux-violet)]">SMEs</span> to Build{' '}
          <br className="hidden md:block" />
          Better <span className="font-vine font-bold text-[1.4em] text-[var(--nilux-violet)] pr-2 relative top-2">Businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sinhala text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          ව්යාපාර අවබෝධය සහ නිවැරදි තීරණ සමගින් වඩාත් සාර්ථක ඉදිරි ගමනකට.
          Empowering Sri Lankan SMEs to Build Better Businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Link href="/contact" className="bg-[var(--nilux-ink)] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 group">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/#about" className="bg-white text-[var(--nilux-ink)] border border-slate-200 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-1 md:col-span-1 h-64 rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-1 md:col-span-2 h-64 rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.82,21.59,150.29,48.2,224.84,56.44Z"
            className="fill-[var(--nilux-violet-soft)]"
          ></path>
        </svg>
      </div>
    </section>
  )
}
