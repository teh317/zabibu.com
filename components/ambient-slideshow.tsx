'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/city1.jpg',
  '/images/nature1.jpg',
  '/images/people1.jpg',
  '/images/city2.jpg',
  '/images/nature2.jpg',
  '/images/people2.jpg',
];

export function AmbientSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Randomize starting image so every session begins uniquely
    const initial = Math.floor(Math.random() * images.length);
    setCurrentIndex(initial);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000); // Changes image smoothly every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-25 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ transition: 'opacity 1.5s ease-in-out, transform 7s ease-out' }}
        >
          <Image
            src={src}
            alt="Ambient atmosphere"
            fill
            priority={index === 0}
            className="object-cover filter brightness-75 contrast-125 blur-[1px]"
          />
        </div>
      ))}
      {/* Deep gradient overlays to blend seamlessly with the dark UI */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/80 via-[#070708]/50 to-[#070708]" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#070708]/40 to-[#070708]" />
    </div>
  );
}
