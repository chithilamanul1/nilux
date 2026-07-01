import React, { cloneElement } from 'react'
import {
  ArrowRight,
  FileText,
  Activity,
  Target,
  Landmark,
  Tags,
  Cog,
  Wallet,
  Lightbulb,
} from 'lucide-react'

const tools = [
  {
    icon: <FileText />,
    title: 'Financial Statement Review',
    sinhala: 'ලාභ අලාභ ගිණුම සහ තුලන පත්රය සමාලෝචනය',
  },
  {
    icon: <Activity />,
    title: 'Cash Flow Analyzer',
    sinhala: 'ව්යාපාරයේ මුදල් ප්රවාහය විශ්ලේෂණය කිරීම',
  },
  {
    icon: <Target />,
    title: 'SWOT Review',
    sinhala: 'ව්යාපාරයේ ශක්තීන්, දුර්වලතා, අවස්ථා සහ අවදානම් හඳුනා ගැනීම',
  },
  {
    icon: <Landmark />,
    title: 'Loan Readiness Score',
    sinhala:
      'බැංකු ණයක් හෝ වෙනත් මූල්ය පහසුකමක් ලබා ගැනීමට ව්යාපාරය සූදානම්ද යන්න බැලීම',
  },
  {
    icon: <Tags />,
    title: 'Pricing & Margin Review',
    sinhala: 'මිල නියම කිරීම සහ ලාභ ප්රතිශතය ප්රමාණවත්ද යන්න සමාලෝචනය',
  },
  {
    icon: <Cog />,
    title: 'Operational Review',
    sinhala:
      'ව්යාපාර මෙහෙයුම් ඇගයීමට ලක් කර කාර්යක්ෂමතාව වැඩිදියුණු කළ හැකි අවස්ථා හඳුනා ගැනීම',
  },
  {
    icon: <Wallet />,
    title: 'Working Capital Review',
    sinhala: 'ක්රියාකාරී ප්රාග්ධනය කාර්යක්ෂමව කළමනාකරණය වේද යන්න සමාලෝචනය',
  },
  {
    icon: <Lightbulb />,
    title: 'Business Decision Review',
    sinhala:
      'වැදගත් ව්යාපාරික තීරණයක් ගැනීමට පෙර එහි වාසි, අවදානම් සහ විකල්ප ඇගයීමට ලක් කිරීම',
  },
]

export function ToolsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--nilux-violet)]/20 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="w-12 h-12 bg-[var(--nilux-violet-soft)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--nilux-violet)] transition-colors duration-300">
                {cloneElement(tool.icon, {
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
              <button className="text-[var(--nilux-violet)] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 mt-auto">
                More Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
