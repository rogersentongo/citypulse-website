'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const pulseSlides = [
  { src: '/screenshots/pulse-feed/block-party.png', alt: 'Block party' },
  { src: '/screenshots/pulse-feed/comedy-club.png', alt: 'Comedy club show' },
  { src: '/screenshots/pulse-feed/dragon-parade.png', alt: 'Dragon float parade' },
  { src: '/screenshots/pulse-feed/food-pulse.png', alt: 'Food on the Pulse Feed' },
];

const features = [
  { title: 'AI-Curated', sub: 'Based on your preferences' },
  { title: 'Duplicate Detection', sub: 'Cleaner feeds, better results' },
  { title: 'Neighborhood Filtering', sub: 'From downtown to the suburbs' },
  { title: 'Endless Variety', sub: 'Events, food, fashion & more' },
];

export default function PulseFeedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pulseSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const section = document.getElementById('pulse-feed-section');
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setIsPaused(false);
      },
      { threshold: 0 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const goToSlide = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
  };
  const nextSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev + 1) % pulseSlides.length);
  };
  const prevSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev - 1 + pulseSlides.length) % pulseSlides.length);
  };

  return (
    <section id="pulse-feed-section" className="section section-panel">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto mb-16 text-center"
        >
          <div className="eyebrow mb-5">Discovery</div>
          <h2 className="gradient-heading">The Pulse Feed</h2>
        </motion.div>

        {/* Feature row (reverse) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-[72px] items-center"
        >
          {/* Carousel */}
          <div className="carousel-shell relative lg:order-2">
            <div className="frame-glow" />
            <div className="frame h-[clamp(440px,58vw,600px)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
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
            </div>

            <button onClick={prevSlide} className="nav-arrow left-3.5" aria-label="Previous slide">
              ‹
            </button>
            <button onClick={nextSlide} className="nav-arrow right-3.5" aria-label="Next slide">
              ›
            </button>

            <div className="flex gap-1.5 justify-center mt-5">
              {pulseSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="lg:order-1">
            <h3 className="text-white mb-4">The whole city, one feed</h3>
            <p className="text-[1.06rem] text-[var(--fg-2)] leading-relaxed">
              The Pulse Feed is a citywide collection of local video moments. Festivals, bars,
              restaurants, fashion sightings, block parties, funny memes, news, gossip,
              discussions — the possibilities are endless. Browse by neighborhood, discover based
              on your preferences, and explore what&apos;s trending across the city.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {features.map((f) => (
                <div key={f.title} className="mini-card">
                  <p className="font-semibold text-[0.98rem] flex items-center gap-2.5 text-white">
                    <span className="w-[5px] h-[5px] rounded-full bg-[var(--accent)] flex-none" />
                    {f.title}
                  </p>
                  <p className="text-[0.88rem] text-[var(--fg-3)] mt-1.5 pl-[14px]">{f.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
