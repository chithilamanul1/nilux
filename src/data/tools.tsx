import React from 'react'
import {
  FileText,
  Activity,
  Target,
  Landmark,
  Tags,
  Cog,
  Wallet,
  Lightbulb,
} from 'lucide-react'

export const toolsData = [
  {
    slug: 'financial-statement-review',
    icon: <FileText />,
    title: 'Financial Statement Review',
    sinhala: 'ලාභ අලාභ ගිණුම සහ තුලන පත්රය සමාලෝචනය',
    description: 'A deep dive into your Income Statement and Balance Sheet. We help you understand your financial health, identifying areas of strength and potential financial risks.',
  },
  {
    slug: 'cash-flow-analyzer',
    icon: <Activity />,
    title: 'Cash Flow Analyzer',
    sinhala: 'ව්යාපාරයේ මුදල් ප්රවාහය විශ්ලේෂණය කිරීම',
    description: 'Analyze your cash inflows and outflows to ensure liquidity. Proper cash flow management is critical to surviving and thriving in competitive markets.',
  },
  {
    slug: 'swot-review',
    icon: <Target />,
    title: 'SWOT Review',
    sinhala: 'ව්යාපාරයේ ශක්තීන්, දුර්වලතා, අවස්ථා සහ අවදානම් හඳුනා ගැනීම',
    description: 'A comprehensive evaluation of your business\'s Strengths, Weaknesses, Opportunities, and Threats to help formulate strategic action plans.',
  },
  {
    slug: 'loan-readiness-score',
    icon: <Landmark />,
    title: 'Loan Readiness Score',
    sinhala:
      'බැංකු ණයක් හෝ වෙනත් මූල්ය පහසුකමක් ලබා ගැනීමට ව්යාපාරය සූදානම්ද යන්න බැලීම',
    description: 'Assess your business\'s financial standing and documentation to determine how prepared you are to apply for and secure bank loans or other financial facilities.',
  },
  {
    slug: 'pricing-margin-review',
    icon: <Tags />,
    title: 'Pricing & Margin Review',
    sinhala: 'මිල නියම කිරීම සහ ලාභ ප්රතිශතය ප්රමාණවත්ද යන්න සමාලෝචනය',
    description: 'Review your pricing strategy to ensure your margins are sufficient to cover costs while remaining competitive in the market.',
  },
  {
    slug: 'operational-review',
    icon: <Cog />,
    title: 'Operational Review',
    sinhala:
      'ව්යාපාර මෙහෙයුම් ඇගයීමට ලක් කර කාර්යක්ෂමතාව වැඩිදියුණු කළ හැකි අවස්ථා හඳුනා ගැනීම',
    description: 'Evaluate your business operations from end-to-end. We help you uncover inefficiencies and recommend improvements to save time and reduce costs.',
  },
  {
    slug: 'working-capital-review',
    icon: <Wallet />,
    title: 'Working Capital Review',
    sinhala: 'ක්රියාකාරී ප්රාග්ධනය කාර්යක්ෂමව කළමනාකරණය වේද යන්න සමාලෝචනය',
    description: 'Ensure your business has enough short-term assets to cover short-term liabilities. We evaluate inventory, receivables, and payables management.',
  },
  {
    slug: 'business-decision-review',
    icon: <Lightbulb />,
    title: 'Business Decision Review',
    sinhala:
      'වැදගත් ව්යාපාරික තීරණයක් ගැනීමට පෙර එහි වාසි, අවදානම් සහ විකල්ප ඇගයීමට ලක් කිරීම',
    description: 'Before making a major business move (e.g., expansion, acquisition, large purchase), we help you weigh the pros, cons, and alternatives to make an informed choice.',
  },
]
