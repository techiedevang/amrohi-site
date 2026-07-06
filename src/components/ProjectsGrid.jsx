// Placeholder duotone tiles stand in for real project photography.
// Swap the `photo` field for an actual image URL per project when available —
// layout and hover behavior won't need to change.
export const projects = [
  { slug: 'sky-grove-living', tag: 'Residential', name: 'Sky Grove Living', place: 'Kandivli — 12BHK Villa Cluster', tone: ['#4d5f4f', '#15161a'] },
  { slug: 'hazel-nut-aria', tag: 'Interiors', name: 'Hazel-Nut Aria', place: 'Malad West — Studio Marino', tone: ['#8a6a3c', '#15161a'] },
  { slug: 'the-threshold', tag: 'Commercial', name: 'The Threshold', place: 'Andheri East — Marino Heights', tone: ['#3d4750', '#15161a'] },
  { slug: 'rooting-light', tag: 'Redevelopment', name: 'Rooting Light', place: 'Goregaon — Chandra 3 BHK', tone: ['#6b5738', '#15161a'] },
  { slug: 'walnut-and-brass', tag: 'Interiors', name: 'Walnut & Brass', place: 'Malad West — Kitchen Redesign', tone: ['#455349', '#15161a'] },
  { slug: 'house-of-amrohi', tag: 'Residential', name: 'The House of Amrohi', place: 'Malad West — Studio Film', tone: ['#59503f', '#15161a'] },
]

export default function ProjectsGrid({ limit, showHeader = true }) {
  const items = limit ? projects.slice(0, limit) : projects

  return (
    <section className="bg-white text-ink py-20 md:py-32 px-6 md:px-14">
      {showHeader && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <span className="w-8 h-px bg-brass inline-block" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass">
                Selected work
              </span>
            </div>
            <h2 className="font-display font-medium text-[34px] md:text-[50px] leading-[1.1]">
              Addresses that<br />
              <em className="italic font-normal text-brass">define a city.</em>
            </h2>
          </div>
          <a
            href="/projects"
            className="text-xs tracking-[0.08em] uppercase text-ink border-b border-black/30 hover:border-brass hover:text-brass transition-colors pb-1 whitespace-nowrap"
          >
            View All Projects →
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
        {items.map((p) => (
          <a
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group relative aspect-[4/5] rounded-sm overflow-hidden block"
          >
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"
              style={{
                backgroundImage: `linear-gradient(200deg, rgba(21,22,26,0) 30%, rgba(21,22,26,0.95) 92%), linear-gradient(135deg, ${p.tone[0]}, ${p.tone[1]} 75%)`,
              }}
            />
            <span className="absolute top-5 left-5 z-10 text-[10px] tracking-[0.14em] uppercase text-ink bg-brass-light px-3 py-1.5">
              {p.tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
              <h4 className="font-display font-medium text-[21px] mb-1.5">{p.name}</h4>
              <span className="text-xs text-bone-dim tracking-wide">{p.place}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
