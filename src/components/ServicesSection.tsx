import React, { cloneElement } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Rocket,
  TrendingUp,
  Settings,
} from 'lucide-react'

const services = [
  {
    icon: <Briefcase />,
    title: 'General Business Consultation',
    sinhala: 'සාමාන්ය ව්යාපාර උපදේශනය',
  },
  {
    icon: <Rocket />,
    title: 'Startup Consultation',
    sinhala: 'නව ව්යාපාර ආරම්භ කිරීමට හෝ ආරම්භක අවධියේ ව්යාපාර සඳහා',
  },
  {
    icon: <TrendingUp />,
    title: 'Business Growth Consultation',
    sinhala: 'වර්ධනය, විකුණුම්, ලාභදායිත්වය සහ ව්යාප්තිය සඳහා',
  },
  {
    icon: <Settings />,
    title: 'Operational Excellence Consultation',
    sinhala: 'මෙහෙයුම්, සේවක කළමනාකරණය සහ කාර්යක්ෂමතාව වැඩිදියුණු කිරීම සඳහා',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-[#fcfaff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Discovery Callout Box */}
          <div className="lg:col-span-5 bg-[var(--nilux-violet)] rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
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
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-sinhala text-lg text-white/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="relative z-10 w-full bg-[var(--nilux-ink)] hover:bg-black text-white rounded-full p-4 font-semibold transition-all duration-300 shadow-lg flex flex-col items-center justify-center gap-1 group">
              <span>Reserve Your First Session - FREE</span>
              <span className="font-sinhala text-xs opacity-80 group-hover:opacity-100">
                පළමු හමුව වෙන් කරගන්න - නොමිලේ
              </span>
            </button>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-[2rem] p-8 hover:border-[var(--nilux-violet)]/30 hover:shadow-xl hover:shadow-[var(--nilux-violet)]/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[var(--nilux-violet-soft)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--nilux-violet)] transition-colors duration-300">
                  {cloneElement(service.icon, {
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
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[var(--nilux-ink)] group-hover:bg-[var(--nilux-ink)] group-hover:text-white group-hover:border-[var(--nilux-ink)] transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
