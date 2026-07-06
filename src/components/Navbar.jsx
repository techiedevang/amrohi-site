import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-14 py-6 relative z-20">
      <Link to="/" className="font-display text-[22px] tracking-wide text-bone">
        Amrohi<span className="text-brass-light italic">.</span>
        <small className="block font-body text-[9px] tracking-[0.28em] uppercase text-bone-dim mt-1 not-italic">
          Architects &amp; Builders — Malad
        </small>
      </Link>

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

      <Link
        to="/contact"
        className="text-[12px] tracking-[0.08em] uppercase text-ink bg-brass hover:bg-brass-light transition-colors px-6 py-3 rounded-sm"
      >
        Enquire
      </Link>
    </nav>
  )
}
