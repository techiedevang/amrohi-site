import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-6 md:px-14 py-6 relative z-30">
      <Link to="/" className="font-display text-[22px] tracking-wide text-bone z-40 relative">
        Amrohi<span className="text-brass-light italic">.</span>
        <small className="block font-body text-[9px] tracking-[0.28em] uppercase text-bone-dim mt-1 not-italic">
          Architects &amp; Builders — Malad
        </small>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 list-none m-0 p-0">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) =>
                `text-[13px] tracking-[0.06em] uppercase transition-colors ${
                  isActive ? 'text-brass-light' : 'text-bone-dim hover:text-brass-light'
                }`
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Enquire CTA & Mobile Toggle Wrapper */}
      <div className="flex items-center gap-6 z-40 relative">
        <Link
          to="/contact"
          className="hidden md:inline-block text-[12px] tracking-[0.08em] uppercase text-ink bg-brass hover:bg-brass-light transition-colors px-6 py-3 rounded-sm"
        >
          Enquire
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-bone hover:text-brass-light transition-colors focus:outline-none p-1 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-ink-soft/98 backdrop-blur-lg z-30 flex flex-col justify-center px-8 md:hidden">
          <ul className="flex flex-col gap-8 list-none m-0 p-0 text-center">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-display tracking-widest uppercase transition-colors ${
                      isActive ? 'text-brass-light' : 'text-bone-dim hover:text-brass-light'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-block text-[13px] tracking-[0.1em] uppercase text-ink bg-brass hover:bg-brass-light transition-colors px-10 py-4 rounded-sm"
              >
                Enquire
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
