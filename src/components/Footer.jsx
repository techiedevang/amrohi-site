import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 pt-16 md:pt-20 px-6 md:px-14 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-10 md:gap-10 pb-12 md:pb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-[22px] mb-4">
            Amrohi<span className="text-brass-light italic">.</span>
          </div>
          <p className="text-[13.5px] leading-relaxed text-bone-dim max-w-[280px]">
            A family-run architecture and construction studio in Malad, Mumbai, practicing since 1998.
          </p>
        </div>

        <div>
          <h5 className="text-[11px] tracking-[0.16em] uppercase text-brass-light font-semibold mb-5">Studio</h5>
          <ul className="list-none m-0 p-0 space-y-3.5">
            {['About', 'Services', 'Projects', 'Journal'].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase()}`} className="text-sm text-bone-dim hover:text-bone transition-colors cursor-pointer block">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-[11px] tracking-[0.16em] uppercase text-brass-light font-semibold mb-5">Disciplines</h5>
          <ul className="list-none m-0 p-0 space-y-3.5">
            {['Residential', 'Commercial', 'Redevelopment', 'Interiors'].map((l) => (
              <li key={l}>
                <Link to={`/services#${l.toLowerCase()}`} className="text-sm text-bone-dim hover:text-bone transition-colors cursor-pointer block">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-[11px] tracking-[0.16em] uppercase text-brass-light font-semibold mb-5">Start a Project</h5>
          <p className="text-[13.5px] text-bone-dim leading-relaxed mb-4">
            Amrohi House, S.V. Road, Malad West, Mumbai 400064
          </p>
          <p className="text-[13.5px] text-bone-dim leading-relaxed">
            +91 85914 45462<br />hello@amrohideverlopers.com
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-bone-dim">
        <span>© {new Date().getFullYear()} Amrohi Developers. All rights reserved.</span>
      </div>
    </footer>
  )
}
