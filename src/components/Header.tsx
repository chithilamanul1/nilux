import React from 'react'

export function Header() {
  return (
    <div className="w-full flex justify-center pt-6 px-4 absolute top-0 z-50">
      <header className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-full border border-slate-100 shadow-sm px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="https://cdn.magicpatterns.com/uploads/4ySiuEGuK57yv95KpAgf48/image-removebg-preview_(30).png"
            alt="Nilux — Business Review & Decision Support for SMEs"
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="text-[var(--nilux-ink)] font-semibold">
            Home
          </a>
          <a
            href="#"
            className="hover:text-[var(--nilux-violet)] transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-[var(--nilux-violet)] transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-[var(--nilux-violet)] transition-colors"
          >
            Tools
          </a>
          <a
            href="#"
            className="hover:text-[var(--nilux-violet)] transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-100 transition-colors">
            <svg
              className="w-4 h-4 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="md:hidden p-2 text-slate-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  )
}
