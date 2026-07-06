import React from 'react';

const founders = [
  {
    name: 'Mehram Amrohi',
    role: 'Principal Architect & Founder',
    image: `${import.meta.env.BASE_URL}images/founder_mehram_1783343838901.png`,
    description: 'With over three decades of visionary design experience, Mehram established the studio on the principles of quiet luxury and structural integrity. His meticulous approach has redefined the architectural language of Mumbai\'s western suburbs, treating every project as a lasting legacy.'
  },
  {
    name: 'Iftekhar Amrohi',
    role: 'Head of Development & Operations',
    image: `${import.meta.env.BASE_URL}images/founder_iftekhar_1783343810412.png`,
    description: 'Iftekhar drives the firm\'s strategic expansion and project execution. Merging a deep understanding of urban development with rigorous operational standards, he ensures that the studio\'s ambitious architectural concepts translate flawlessly into tangible, high-end realities.'
  },
  {
    name: 'Talib Amrohi',
    role: 'Director of Design & Innovation',
    image: `${import.meta.env.BASE_URL}images/founder_talib_1783343821336.png`,
    description: 'Talib brings a modern, avant-garde perspective to the studio. Leading the interior ateliers and facade engineering, his obsession with bespoke materials and micro-detailing injects a contemporary, world-class aesthetic into the firm\'s traditional craftsmanship.'
  }
];

export default function Founders() {
  return (
    <section className="bg-ink border-t border-white/10 py-20 md:py-32 px-6 md:px-14">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <div>
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-8 h-px bg-brass inline-block" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass-light">
              Leadership
            </span>
          </div>
          <h2 className="font-display font-medium text-[34px] md:text-[50px] leading-[1.1] text-bone">
            The foundation of<br />
            <em className="italic font-normal text-brass-light">our practice.</em>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {founders.map((founder, idx) => (
          <div key={idx} className="group relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden mb-6 relative">
              <div className="absolute inset-0 bg-ink opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-display text-[22px] font-medium text-bone mb-1">{founder.name}</h3>
            <span className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-brass-light mb-4">
              {founder.role}
            </span>
            <p className="text-[14.5px] leading-[1.7] text-bone-dim">
              {founder.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
