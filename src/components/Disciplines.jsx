import ParticleBuilding from './ParticleBuilding'

const featured = [
  {
    index: '01',
    title: 'Residential Development',
    desc: 'Intimate residences ranging from family apartments to sea-facing penthouses, designed for everyday ritual and exceptional moments.',
    tone: '#5c6b5d',
  },
  {
    index: '02',
    title: 'Commercial Spaces',
    desc: "Boutique workplaces and retail destinations engineered for ambitious brands across Mumbai's western suburbs.",
    tone: '#a9854b',
  },
]

const listed = [
  { index: '03', title: 'Redevelopment', desc: 'Society redevelopment handled end-to-end, from resident consensus to handover.' },
  { index: '04', title: 'Interior Ateliers', desc: 'Bespoke interiors, joinery and materials sourced and detailed in-house.' },
  { index: '05', title: 'Structural Engineering', desc: 'In-house structural design, so every drawing is buildable from day one.' },
  { index: '06', title: 'Facade & Restoration', desc: 'Heritage-conscious facades and restoration work across older Mumbai buildings.' },
]

export default function Disciplines() {
  return (
    <section className="relative bg-bone text-ink py-20 md:py-32 px-6 md:px-14 overflow-hidden">
      <ParticleBuilding />
      
      {/* Content wrapper with pointer-events-none so mouse passes through to Canvas, but text is readable */}
      <div className="relative z-10 pointer-events-none">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
        <div>
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-8 h-px bg-brass inline-block" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass">
              What we practice
            </span>
          </div>
          <h2 className="font-display font-medium text-[34px] md:text-[50px] leading-[1.1]">
            Six disciplines.<br />
            <em className="italic font-normal text-brass">One quiet obsession.</em>
          </h2>
        </div>
        <p className="max-w-[340px] text-[14.5px] leading-[1.7] text-[#5a5648] pb-1.5">
          We treat every site as a once-in-a-generation opportunity —
          architects, engineers and craftsmen working under one roof in Malad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mb-0.5 bg-black/10">
        {featured.map((f) => (
          <div
            key={f.index}
            className="relative bg-ink text-bone p-10 md:p-12 min-h-[280px] flex flex-col justify-end overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(160deg, rgba(21,22,26,0.55), rgba(21,22,26,0.92)), linear-gradient(135deg, ${f.tone}, #15161a 70%)`,
              }}
            />
            <div className="relative z-10">
              <div className="font-display text-[13px] text-brass-light tracking-widest mb-3">{f.index}</div>
              <h3 className="font-display font-medium text-[27px] mb-2.5">{f.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-bone-dim max-w-[340px]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        {listed.map((item, i) => (
          <div
            key={item.index}
            className={`border-t border-black/15 px-6 md:px-6 py-7 ${
              i === 0 ? 'md:border-l-0' : 'md:border-l border-black/15'
            } ${i % 2 === 1 ? 'border-l' : ''} ${i < 2 ? 'border-t-0 md:border-t' : ''}`}
          >
            <div className="font-display text-[13px] text-brass tracking-widest mb-3">{item.index}</div>
            <h4 className="font-display font-medium text-lg mb-2">{item.title}</h4>
            <p className="text-[13px] leading-relaxed text-[#5a5648]">{item.desc}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
