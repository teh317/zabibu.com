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
    // Randomize starting image so every session begins completely uniquely
    const initial = Math.floor(Math.random() * images.length);
    setCurrentIndex(initial);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000); // Changes image smoothly every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 opacity-65 transition-transform duration-1000 ease-in-out" style={{ transform: 'scale(1.05)' }}>
        <Image
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Ambient atmosphere"
          fill
          priority
          className="object-cover filter brightness-90 contrast-110"
        />
      </div>
      {/* Soft gradient curtain so it darkens behind text content but remains fully visible */}
      <div className="absolute inset-0 bg-[#070708]/65 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/40 via-transparent to-[#070708]/80" />
    </div>
  );
}
