import { Link } from 'react-router-dom'

const services = [
  {
    index: '01',
    title: 'Residential Development',
    tone: '#4d5f4f',
    desc: 'From family apartments to sea-facing penthouses — every residence is designed around how a specific family actually lives, not a showflat template.',
    points: ['Custom floor plans', 'Material & finish selection', 'End-to-end project management'],
  },
  {
    index: '02',
    title: 'Commercial Spaces',
    tone: '#a9854b',
    desc: "Boutique workplaces and retail destinations for brands who need a space that performs as well as it photographs.",
    points: ['Workplace design', 'Retail fit-outs', 'Facade & signage integration'],
  },
  {
    index: '03',
    title: 'Redevelopment',
    tone: '#3d4750',
    desc: 'Society redevelopment handled end-to-end — resident consensus, regulatory approvals, construction, and handover.',
    points: ['Society consensus & documentation', 'MahaRERA compliance', 'Phased construction planning'],
  },
  {
    index: '04',
    title: 'Interior Ateliers',
    tone: '#6b5738',
    desc: 'Bespoke interiors, joinery and material sourcing, detailed in-house from concept to the last cabinet handle.',
    points: ['Custom joinery & furniture', 'Material sourcing', 'Styling & staging'],
  },
  {
    index: '05',
    title: 'Structural Engineering',
    tone: '#455349',
    desc: 'In-house structural design means every architectural drawing is buildable from day one — no surprises mid-construction.',
    points: ['Structural drawings & analysis', 'Soil testing coordination', 'Site supervision'],
  },
  {
    index: '06',
    title: 'Facade & Restoration',
    tone: '#59503f',
    desc: 'Heritage-conscious facade work and restoration across older Mumbai buildings, balancing preservation with modern performance.',
    points: ['Heritage facade restoration', 'Waterproofing & structural repair', 'Material matching'],
  },
]

export default function Services() {
  return (
    <>
      <section className="px-6 md:px-14 pt-14 md:pt-20 pb-16">
        <div className="flex items-center gap-3.5 mb-5">
          <span className="w-8 h-px bg-brass inline-block" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass-light">What We Practice</span>
        </div>
        <h1 className="font-display font-medium text-[38px] md:text-[54px] leading-[1.1] max-w-2xl">
          Six disciplines,<br /><em className="italic font-normal text-brass-light">one studio.</em>
        </h1>
      </section>

      {services.map((s) => (
        <section
          key={s.index}
          id={s.title.toLowerCase().replace(/[^a-z]+/g, '-')}
          className="px-6 md:px-14 py-14 md:py-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center scroll-mt-24"
        >
          <div
            className="aspect-[4/3] rounded-sm order-2 md:order-1"
            style={{ backgroundImage: `linear-gradient(135deg, ${s.tone}, #15161a 75%)` }}
          />
          <div className="order-1 md:order-2">
            <div className="font-display text-sm text-brass-light tracking-widest mb-3">{s.index}</div>
            <h2 className="font-display font-medium text-[28px] md:text-[34px] mb-4">{s.title}</h2>
            <p className="text-bone-dim leading-relaxed mb-6 max-w-lg">{s.desc}</p>
            <ul className="space-y-2 mb-8">
              {s.points.map((p) => (
                <li key={p} className="text-sm text-bone-dim flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass inline-block" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="text-[13px] tracking-[0.06em] uppercase text-ink bg-brass hover:bg-brass-light transition-colors px-6 py-3.5 rounded-sm inline-block"
            >
              Enquire About This
            </Link>
          </div>
        </section>
      ))}
    </>
  )
}
