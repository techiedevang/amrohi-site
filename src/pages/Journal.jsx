const posts = [
  {
    slug: 'city-in-motion',
    tag: 'Market Notes',
    title: 'What Mumbai\u2019s skyline is quietly telling developers',
    excerpt: 'A read on where residential demand is shifting across the western suburbs, and what it means for the next decade of addresses.',
    date: 'Jun 18, 2026 · 6 min read',
    tone: '#3d4750',
    size: 'large',
  },
  {
    slug: 'honest-materials',
    tag: 'Design Diary',
    title: 'The case for honest materials: why we choose Kota stone over imported marble',
    excerpt: 'On durability, cost, and why the most premium choice is not always the most imported one.',
    date: 'Jun 05, 2026 · 4 min read',
    tone: '#8a6a3c',
    size: 'small',
  },
  {
    slug: 'resident-stories',
    tag: 'Resident Story',
    title: 'Three families. Three Amrohi homes. One conversation about everyday luxury.',
    excerpt: 'What "luxury" actually means to three different households we\u2019ve built for.',
    date: 'May 22, 2026 · 5 min read',
    tone: '#4d5f4f',
    size: 'small',
  },
]

export default function Journal() {
  const [feature, ...rest] = posts
  return (
    <section className="px-6 md:px-14 pt-14 md:pt-20 pb-24">
      <div className="flex items-center gap-3.5 mb-5">
        <span className="w-8 h-px bg-brass inline-block" />
        <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass-light">The Journal</span>
      </div>
      <h1 className="font-display font-medium text-[38px] md:text-[50px] leading-[1.1] mb-16">
        Notes from<br /><em className="italic font-normal text-brass-light">the studio.</em>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <a href={`/journal/${feature.slug}`} className="group block">
          <div
            className="aspect-[16/10] rounded-sm mb-5 transition-transform duration-500 group-hover:scale-[1.01]"
            style={{ backgroundImage: `linear-gradient(135deg, ${feature.tone}, #15161a 75%)` }}
          />
          <span className="text-[11px] tracking-[0.14em] uppercase text-brass-light">{feature.tag}</span>
          <h3 className="font-display font-medium text-2xl md:text-3xl mt-2 mb-2 group-hover:text-brass-light transition-colors">
            {feature.title}
          </h3>
          <p className="text-bone-dim text-sm leading-relaxed mb-2">{feature.excerpt}</p>
          <span className="text-xs text-bone-dim/70">{feature.date}</span>
        </a>

        <div className="grid grid-rows-2 gap-6">
          {rest.map((post) => (
            <a href={`/journal/${post.slug}`} key={post.slug} className="group grid grid-cols-[1fr_1.4fr] gap-5">
              <div
                className="aspect-square rounded-sm transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: `linear-gradient(135deg, ${post.tone}, #15161a 75%)` }}
              />
              <div>
                <span className="text-[10px] tracking-[0.14em] uppercase text-brass-light">{post.tag}</span>
                <h4 className="font-display font-medium text-base md:text-lg mt-1.5 mb-1.5 leading-snug group-hover:text-brass-light transition-colors">
                  {post.title}
                </h4>
                <span className="text-xs text-bone-dim/70">{post.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
