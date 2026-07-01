'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const waMessage = `Hello, I'm ${formData.name}. %0A%0AEmail: ${formData.email} %0APhone: ${formData.phone} %0A%0AMessage: ${formData.message}`
    const waUrl = `https://wa.me/94777032554?text=${waMessage}`

    try {
      // You can add this URL to your .env.local file once you create the Google Apps Script
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      
      if (scriptUrl) {
        const formDataObj = new FormData()
        formDataObj.append('name', formData.name)
        formDataObj.append('phone', formData.phone)
        formDataObj.append('email', formData.email)
        formDataObj.append('message', formData.message)

        await fetch(scriptUrl, {
          method: 'POST',
          body: formDataObj,
          mode: 'no-cors'
        })
      }

      setIsSubmitting(false)
      setSubmitted(true)
      
      // Open WhatsApp in a new tab
      window.open(waUrl, '_blank')
    } catch (error) {
      console.error('Error submitting form', error)
      setIsSubmitting(false)
      setSubmitted(true)
      // Fallback: still open WA if sheet fails
      window.open(waUrl, '_blank')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[var(--nilux-violet-soft)] selection:text-[var(--nilux-violet)] flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden bg-[#fcfaff]">
        {/* Modern animated background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute right-0 top-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[var(--nilux-violet)] blur-[150px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-[var(--nilux-violet-soft)] text-[var(--nilux-violet)] text-sm font-semibold tracking-wide shadow-sm">
              Contact Us
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--nilux-ink)] mb-4">
              Let's Build Something Great
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto font-sinhala text-lg">
              ඔබේ ව්‍යාපාරයේ ගැටලු ගැන සාකච්ඡා කිරීමට හෝ අපගේ සේවාවන් ගැන වැඩි
              විස්තර දැනගැනීමට අපව සම්බන්ධ කරගන්න.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative"
            >
              {submitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--nilux-ink)] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[var(--nilux-violet)] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-[var(--nilux-ink)]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[var(--nilux-violet)] focus:ring-2 focus:ring-[var(--nilux-violet)]/20 outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-[var(--nilux-ink)]"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[var(--nilux-violet)] focus:ring-2 focus:ring-[var(--nilux-violet)]/20 outline-none transition-all duration-300"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-[var(--nilux-ink)]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[var(--nilux-violet)] focus:ring-2 focus:ring-[var(--nilux-violet)]/20 outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-[var(--nilux-ink)]"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[var(--nilux-violet)] focus:ring-2 focus:ring-[var(--nilux-violet)]/20 outline-none transition-all duration-300 resize-none"
                      placeholder="How can we help your business?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--nilux-ink)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:pt-8"
            >
              <h3 className="font-display text-2xl font-bold text-[var(--nilux-ink)] mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[var(--nilux-violet-soft)] group-hover:border-[var(--nilux-violet-soft)] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[var(--nilux-violet)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">
                      Call Us Directly
                    </p>
                    <p className="text-lg font-bold text-[var(--nilux-ink)]">
                      +94 77 703 2554
                    </p>
                    <p className="text-sm text-slate-600 font-sinhala mt-1">
                      (සඳුදා - සෙනසුරාදා: උදේ 9.00 - සවස 6.00)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[var(--nilux-violet-soft)] group-hover:border-[var(--nilux-violet-soft)] transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[var(--nilux-violet)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">
                      Email Address
                    </p>
                    <p className="text-lg font-bold text-[var(--nilux-ink)]">
                      hello@nilux.lk
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[var(--nilux-violet-soft)] group-hover:border-[var(--nilux-violet-soft)] transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[var(--nilux-violet)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">
                      Office Location
                    </p>
                    <p className="text-lg font-bold text-[var(--nilux-ink)] leading-snug">
                      Nilux Business Advisory <br />
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-200">
                <h4 className="font-bold text-[var(--nilux-ink)] mb-6">
                  Follow Our Socials
                </h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[var(--nilux-ink)] hover:bg-[var(--nilux-violet)] hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <FacebookIcon size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[var(--nilux-ink)] hover:bg-[var(--nilux-violet)] hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[var(--nilux-ink)] hover:bg-[var(--nilux-violet)] hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[var(--nilux-ink)] hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg
                      className="w-[20px] h-[20px]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
