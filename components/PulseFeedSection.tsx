'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const pulseSlides = [
  { src: '/screenshots/pulse-feed/block-party.png', alt: 'Block Party in NYC' },
  { src: '/screenshots/pulse-feed/comedy-club.png', alt: 'Comedy Club Show' },
  { src: '/screenshots/pulse-feed/dragon-parade.png', alt: 'Dragon Float Parade in Manhattan' },
  { src: '/screenshots/pulse-feed/food-pulse.png', alt: 'Food on the Pulse Feed' }
];

export default function PulseFeedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pulseSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % pulseSlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + pulseSlides.length) % pulseSlides.length);

  return (
    <section className="section bg-[#0A0A0A]">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-16"
        >
          The Pulse Feed
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="order-2 lg:order-1">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              The Pulse Feed is a citywide collection of NYC video moments. Festivals, bars, restaurants, fashion sightings,
              block parties, funny memes, news, gossip, discussions—the possibilities are endless. Browse by borough, discover
              based on your preferences, and explore what's trending across the city.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-5 rounded-lg">
                <p className="text-white font-semibold mb-2">AI-Curated</p>
                <p className="text-sm text-gray-400">Based on your preferences</p>
              </div>
              <div className="glass p-5 rounded-lg">
                <p className="text-white font-semibold mb-2">Duplicate Detection</p>
                <p className="text-sm text-gray-400">Cleaner feeds, better results</p>
              </div>
              <div className="glass p-5 rounded-lg">
                <p className="text-white font-semibold mb-2">Borough Filtering</p>
                <p className="text-sm text-gray-400">Manhattan to Staten Island</p>
              </div>
              <div className="glass p-5 rounded-lg">
                <p className="text-white font-semibold mb-2">Endless Variety</p>
                <p className="text-sm text-gray-400">Events, food, fashion & more</p>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={pulseSlides[currentIndex].src}
                    alt={pulseSlides[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                →
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {pulseSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-[#FF1744] w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
