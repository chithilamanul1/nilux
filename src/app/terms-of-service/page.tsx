import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[var(--nilux-violet-soft)] selection:text-[var(--nilux-violet)] flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--nilux-ink)] mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="mb-6">
            <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
          </p>
          <p className="mb-6">
            Welcome to Nilux Business Advisory. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>
          
          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">1. Consulting Services</h2>
          <p className="mb-6">
            Nilux provides business advisory, financial review, and consulting services to Small and Medium Enterprises (SMEs) in Sri Lanka. The recommendations provided by Nilux are based on the data and information provided by the client. We offer independent and practical guidance, but business decisions remain the sole responsibility of the business owner.
          </p>

          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">2. Client Responsibilities</h2>
          <p className="mb-6">
            To ensure accurate assessments and effective consulting, clients must provide true, complete, and accurate financial and operational information. Nilux cannot be held liable for strategies or recommendations that fail due to incomplete or inaccurate data supplied by the client.
          </p>

          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">3. Confidentiality Agreement</h2>
          <p className="mb-6">
            Both Nilux Business Advisory and the Client agree to maintain the utmost confidentiality regarding all business strategies, financial records, and proprietary information shared during the consultation process. We will not disclose your business data to unauthorized third parties.
          </p>
          
          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">4. Payment and Fees</h2>
          <p className="mb-6">
            Our fee structure for advisory services is transparent and agreed upon prior to the commencement of any service. Unless stated otherwise, all initial discovery meetings are free of charge. Subsequent consulting sessions and business reviews will be billed according to our agreed pricing structure.
          </p>

          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall Nilux Business Advisory be liable for any direct, indirect, consequential, or incidental damages arising out of your business operations or decisions made following our consultation. Our liability is limited strictly to the fees paid for our advisory services.
          </p>

          <h2 className="text-2xl font-bold text-[var(--nilux-ink)] mt-10 mb-4">6. Contact Information</h2>
          <p className="mb-6">
            If you have any questions regarding these Terms of Service, you can reach us at:
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
