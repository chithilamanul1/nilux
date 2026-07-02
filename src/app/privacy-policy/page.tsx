import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[var(--nilux-violet-soft)] selection:text-[var(--nilux-violet)] flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--nilux-ink)] mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="mb-6">
            <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
          </p>
          <p className="mb-6">
            At Nilux Business Advisory, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, telephone number, and business details that you voluntarily give to us when booking a consultation or contacting us.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, and the times you accessed the site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">2. Use of Your Information</h2>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide targeted business consulting services.</li>
            <li>Respond to customer service requests and communicate with you.</li>
            <li>Improve our website, services, and overall client experience.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">3. Data Security and Confidentiality</h2>
          <p className="mb-6">
            We use administrative, technical, and physical security measures to help protect your personal information and business data. As a business advisory firm, maintaining strict confidentiality regarding our clients' business operations is our top priority. We do not sell or rent your personal or business information to third parties.
          </p>

          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">4. Contact Us</h2>
          <p className="mb-6">
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> hello@nilux.lk
            <br />
            <strong>Phone:</strong> +94 77 703 2554
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
