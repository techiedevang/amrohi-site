import HeroSlideshow from './HeroSlideshow'
import BuildingSketch from './BuildingSketch'

export default function Hero() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] items-center gap-5 px-6 md:px-14 pt-5 md:min-h-[88vh]">
      <div className="blueprint-grid absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none" />
      
      {/* Slideshow on the left with text overlaid */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center order-2 md:order-1">
        <HeroSlideshow />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-14 pointer-events-none">
          <div className="flex items-center gap-3.5 mb-6">
            <span className="w-8 h-px bg-brass inline-block" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass-light drop-shadow-md">
              Est. 1998 — Malad, Mumbai
            </span>
          </div>

          <h1 className="font-display font-medium text-[42px] md:text-[68px] leading-[1.06] tracking-tight mb-6 text-white drop-shadow-xl">
            Addresses that<br />
            <em className="italic font-normal text-brass-light">define a city.</em>
          </h1>

          <p className="text-[16.5px] leading-[1.7] text-white/90 max-w-[480px] mb-10 drop-shadow-md">
            A multi-disciplinary studio of architects, engineers and craftsmen.
            We take on four projects at a time, so that every threshold, every
            shade of stone, receives our full attention.
          </p>

          <div className="flex items-center gap-7 flex-wrap pointer-events-auto">
            <a
              href="/contact"
              className="text-[13px] tracking-[0.06em] uppercase text-ink bg-brass hover:bg-brass-light border border-brass hover:border-brass-light transition-colors px-7 py-4 rounded-sm whitespace-nowrap"
            >
              Enquire Now
            </a>
            <a
              href="/projects"
              className="text-[13px] tracking-[0.06em] uppercase text-white border-b border-white/30 hover:border-brass-light hover:text-brass-light transition-colors pb-1 whitespace-nowrap drop-shadow-md"
            >
              View Projects →
            </a>
          </div>
        </div>
      </div>

      {/* Animation on the right */}
      <div className="relative z-10 flex items-center justify-center h-[280px] md:h-full order-1 md:order-2">
        <BuildingSketch />
      </div>
    </section>
  )
}
