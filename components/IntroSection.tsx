'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const introSlides = [
  {
    src: '/screenshots/intro/borough-picker.png',
    alt: 'Borough Picker UI',
    description: "CityPulse is your AI-powered video discovery platform for New York City. Record or upload videos to share NYC moments. Search through thousands of videos using natural language. Discover what's happening in your neighborhood—festivals, restaurants, fashion, entertainment, and more. Video-only, hyperlocal, endlessly explorable.",
    additionalText: "Choose your borough—Manhattan, Brooklyn, Queens, Bronx, Staten Island—and dive into neighborhood-specific content."
  },
  {
    src: '/screenshots/intro/bar-vibe.png',
    alt: 'Bar Ambiance',
    description: "Get a feel for a place before you go. See what bars, restaurants, and venues look like on specific days and times. Does it match your vibe? Watch videos from other visitors to find out.",
    additionalText: ""
  },
  {
    src: '/screenshots/intro/rooftop-bar.png',
    alt: 'Rooftop Bar at Night',
    description: "Get a feel for a place before you go. See what bars, restaurants, and venues look like on specific days and times. Does it match your vibe? Watch videos from other visitors to find out.",
    additionalText: ""
  },
  {
    src: '/screenshots/intro/bar-ambiance-feed.png',
    alt: 'Bar from Pulse Feed',
    description: "Get a feel for a place before you go. See what bars, restaurants, and venues look like on specific days and times. Does it match your vibe? Watch videos from other visitors to find out.",
    additionalText: ""
  },
  {
    src: '/screenshots/intro/comedy-club.png',
    alt: 'Comedy Club',
    description: "Discover entertainment and events. From comedy clubs to live music, street festivals to cultural celebrations—find what's happening through real video moments.",
    additionalText: ""
  },
  {
    src: '/screenshots/intro/site-seeing.png',
    alt: 'NYC Site Seeing',
    description: "Experience iconic NYC landmarks. See architecture, sights, and tourist attractions through local perspectives and fresh angles.",
    additionalText: ""
  }
];

export default function IntroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % introSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % introSlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + introSlides.length) % introSlides.length);

  return (
    <section className="section bg-black">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-16"
        >
          What is CityPulse?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={introSlides[currentIndex].src}
                    alt={introSlides[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                aria-label="Next slide"
              >
                →
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {introSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-[#FF1744] w-6' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  {introSlides[currentIndex].description}
                </p>
                {introSlides[currentIndex].additionalText && (
                  <p className="text-md text-gray-400 leading-relaxed">
                    {introSlides[currentIndex].additionalText}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
