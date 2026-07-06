const team = [
  { name: 'Mehran Amrohi', role: 'Founder & Principal Architect', bio: 'Third-generation Mumbai builder. Trained at Sir J.J. College of Architecture. Believes in the essence of a portfolio aligned.', tone: '#4d5f4f' },
  { name: 'Ayesha Amrohi', role: 'Design Director — Interiors', bio: 'Leads the in-house interiors atelier. Has a quiet obsession with warmth in wood, and remembering where every guest sits.', tone: '#8a6a3c' },
  { name: 'Rahul Deshmukh', role: 'Head of Construction', bio: "Twenty-five years on-site. Speaks four languages and quality more fluently on every site between Borivali and Bandra.", tone: '#3d4750' },
  { name: 'Priya Shah', role: 'Director — Customer Atelier', bio: "Your single point of contact from sample apartments to housewarming. Believes a key handover should feel like a small ceremony.", tone: '#6b5738' },
]

const values = [
  { title: 'Crafted, never mass-produced', desc: 'Every project is a bespoke response — never a repeated template.' },
  { title: 'Transparent by design', desc: 'Fixed pricing, honest timelines, and a single point of contact throughout.' },
]

export default function About() {
  return (
    <>
      {/* Studio story */}
      <section className="px-6 md:px-14 pt-14 md:pt-20 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div
          className="aspect-[4/3] rounded-sm order-2 md:order-1"
          style={{ backgroundImage: 'linear-gradient(135deg, #4d5f4f, #15161a 75%)' }}
        />
        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="w-8 h-px bg-brass inline-block" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass-light">The Studio</span>
          </div>
          <h1 className="font-display font-medium text-[38px] md:text-[50px] leading-[1.1] mb-6">
            A quiet studio<br />
            <em className="italic font-normal text-brass-light">in the heart of Malad.</em>
          </h1>
          <p className="text-bone-dim leading-relaxed mb-4">
            Founded in 1998 by a family of Mumbai builders, Amrohi Developers began as a small studio with a single
            intention — to build homes the way one watches over inherited land. With patience. With pride. With the
            conviction that an address is more than a postcode.
          </p>
          <p className="text-bone-dim leading-relaxed mb-10">
            Today, we're a multi-disciplinary practice of 90 architects, engineers and craftspeople. Yet our studio
            remains, deliberately, a boutique one. We commit to no more than four projects at a time so that every
            threshold, every shade of stone, gets our full attention.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title}>
                <h4 className="font-display text-lg mb-2">{v.title}</h4>
                <p className="text-sm text-bone-dim leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-bone text-ink px-6 md:px-14 py-20 md:py-28">
        <div className="flex items-center gap-3.5 mb-5">
          <span className="w-8 h-px bg-brass inline-block" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass">The People</span>
        </div>
        <h2 className="font-display font-medium text-[32px] md:text-[42px] mb-14">
          Four people who know every site by name.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((p) => (
            <div key={p.name}>
              <div
                className="aspect-[3/4] rounded-sm mb-4"
                style={{ backgroundImage: `linear-gradient(160deg, ${p.tone}, #15161a 80%)` }}
              />
              <h4 className="font-display font-medium text-lg">{p.name}</h4>
              <p className="text-[11px] tracking-widest uppercase text-brass mb-2">{p.role}</p>
              <p className="text-[13px] leading-relaxed text-[#5a5648]">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-14 py-20 md:py-28">
        <div className="flex items-center gap-3.5 mb-5">
          <span className="w-8 h-px bg-brass inline-block" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass-light">In Their Words</span>
        </div>
        <h2 className="font-display font-medium text-[32px] md:text-[42px] mb-10">
          What residents<br /><em className="italic font-normal text-brass-light">quietly say.</em>
        </h2>
        <blockquote className="max-w-2xl">
          <p className="font-display text-xl md:text-2xl leading-relaxed text-bone-dim italic">
            "Amrohi did not sell us a flat — they handed us a home that already understood how our family lives.
            The patience in the detailing is something Mumbai rarely sees anymore."
          </p>
          <footer className="mt-6 text-sm text-brass-light tracking-wide">— Sanjana &amp; Aakash Mehta</footer>
        </blockquote>
      </section>
    </>
  )
}
