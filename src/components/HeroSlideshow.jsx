import React, { useState, useEffect } from 'react';

const images = [
  `${import.meta.env.BASE_URL}images/amrohi_slide_1_1783343749964.png`,
  `${import.meta.env.BASE_URL}images/amrohi_slide_2_1783343760366.png`,
  `${import.meta.env.BASE_URL}images/amrohi_slide_3_1783343771974.png`
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getTransform = (index) => {
    const offset = index - currentIndex;
    
    // Circular logic for 3 items
    let relativeIndex = offset;
    if (offset === 2) relativeIndex = -1;
    if (offset === -2) relativeIndex = 1;

    if (relativeIndex === 0) {
      return {
        transform: 'translateX(0) scale(1) translateZ(40px)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)'
      };
    } else if (relativeIndex === -1) {
      return {
        transform: 'translateX(-30%) scale(0.85) rotateY(15deg) translateZ(-50px)',
        zIndex: 20,
        opacity: 0.6,
        filter: 'brightness(0.5)'
      };
    } else if (relativeIndex === 1) {
      return {
        transform: 'translateX(30%) scale(0.85) rotateY(-15deg) translateZ(-50px)',
        zIndex: 20,
        opacity: 0.6,
        filter: 'brightness(0.5)'
      };
    }
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[80vh] flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
      
      {/* 3D Track */}
      <div className="relative w-[85%] md:w-[75%] h-[90%] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        {images.map((src, idx) => {
          const style = getTransform(idx);
          return (
            <div
              key={idx}
              className="absolute w-full h-full rounded-sm shadow-2xl transition-all duration-700 ease-out cursor-pointer"
              style={{ ...style, transformOrigin: 'center center' }}
              onClick={() => setCurrentIndex(idx)}
            >
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-black/30 rounded-sm pointer-events-none transition-opacity duration-700" style={{ opacity: style.zIndex === 30 ? 0.3 : 0 }} />
            </div>
          );
        })}
      </div>

      {/* Readability dark gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent pointer-events-none" 
        style={{ zIndex: 35 }} 
      />
      
      {/* Navigation Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              idx === currentIndex ? 'w-8 bg-brass-light' : 'w-4 bg-white/40 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
