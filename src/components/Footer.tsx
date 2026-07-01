import React from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[var(--nilux-violet-soft)] text-[var(--nilux-ink)] py-16 border-t border-[var(--nilux-violet)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Band */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 shadow-sm border border-white">
          <div>
            <h3 className="font-display text-3xl font-bold mb-2">
              Ready to bring your dreams to life?
            </h3>
            <p className="text-slate-600">Let's get started Today</p>
          </div>
          <button className="bg-[var(--nilux-ink)] text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-all duration-300 whitespace-nowrap">
            Contact Us Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="https://cdn.magicpatterns.com/uploads/4ySiuEGuK57yv95KpAgf48/image-removebg-preview_(30).png"
                alt="Nilux — Business Review & Decision Support for SMEs"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-600 max-w-md mb-8">
              Business Review & Decision Support for SMEs. Empowering Sri Lankan
              business owners with data-driven insights and practical
              recommendations.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--nilux-ink)] hover:bg-[var(--nilux-violet)] hover:text-white transition-colors shadow-sm"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--nilux-ink)] hover:bg-[var(--nilux-violet)] hover:text-white transition-colors shadow-sm"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--nilux-ink)] hover:bg-[var(--nilux-violet)] hover:text-white transition-colors shadow-sm"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--nilux-ink)] hover:bg-[#25D366] hover:text-white transition-colors shadow-sm"
              >
                <svg
                  className="w-[18px] h-[18px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-[var(--nilux-violet)] shrink-0 mt-0.5"
                />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-[var(--nilux-violet)] shrink-0 mt-0.5"
                />
                <span>hello@nilux.lk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[var(--nilux-violet)] shrink-0 mt-0.5"
                />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--nilux-violet)] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--nilux-violet)] transition-colors"
                >
                  Review Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--nilux-violet)] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--nilux-violet)] transition-colors"
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--nilux-violet)]/10 text-sm text-slate-500 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Nilux Business Advisory. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[var(--nilux-violet)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[var(--nilux-violet)] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
