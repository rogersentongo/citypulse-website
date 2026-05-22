'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const introSlides = [
  {
    src: '/screenshots/intro/borough-picker.png',
    alt: 'Neighborhood picker',
    description:
      "CityPulse is your AI-powered video discovery platform for the city around you. Record or upload videos to share local moments. Search through thousands of videos using natural language. Discover what's happening in your neighborhood — festivals, restaurants, fashion, entertainment, and more. Video-only, hyperlocal, endlessly explorable.",
    additionalText: 'Choose your neighborhood and dive into area-specific content.',
  },
  {
    src: '/screenshots/intro/bar-vibe.png',
    alt: 'Bar ambiance',
    description:
      'Get a feel for a place before you go. See what bars, restaurants, and venues look like on specific days and times. Does it match your vibe? Watch videos from other visitors to find out.',
    additionalText: '',
  },
  {
    src: '/screenshots/intro/rooftop-bar.png',
    alt: 'Rooftop bar at night',
    description:
      'Get a feel for a place before you go. See what bars, restaurants, and venues look like on specific days and times. Does it match your vibe? Watch videos from other visitors to find out.',
    additionalText: '',
  },
  {
    src: '/screenshots/intro/bar-ambiance-feed.png',
    alt: 'Bar from the Pulse Feed',
    description:
      'Get a feel for a place before you go. See what bars, restaurants, and venues look like on specific days and times. Does it match your vibe? Watch videos from other visitors to find out.',
    additionalText: '',
  },
  {
    src: '/screenshots/intro/comedy-club.png',
    alt: 'Comedy club',
    description:
      "Discover entertainment and events. From comedy clubs to live music, street festivals to cultural celebrations — find what's happening through real video moments.",
    additionalText: '',
  },
  {
    src: '/screenshots/intro/site-seeing.png',
    alt: 'City sightseeing',
    description:
      'Experience iconic city landmarks. See architecture, sights, and attractions through local perspectives and fresh angles.',
    additionalText: '',
  },
];

export default function IntroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % introSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const section = document.getElementById('intro-section');
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
    setCurrentIndex((prev) => (prev + 1) % introSlides.length);
  };
  const prevSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev - 1 + introSlides.length) % introSlides.length);
  };

  const slide = introSlides[currentIndex];

  return (
    <section id="intro-section" className="section">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto mb-16 text-center"
        >
          <div className="eyebrow mb-5">Overview</div>
          <h2 className="gradient-heading">What is CityPulse?</h2>
        </motion.div>

        {/* Feature row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-[72px] items-center"
        >
          {/* Carousel */}
          <div className="carousel-shell relative">
            <div className="frame-glow" />
            <div className="frame h-[clamp(440px,58vw,600px)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
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
              {introSlides.map((_, index) => (
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
          <div>
            <h3 className="text-white mb-4">Your city, endlessly explorable</h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-[1.06rem] text-[var(--fg-2)] leading-relaxed">
                  {slide.description}
                </p>
                {slide.additionalText && (
                  <p className="text-[0.98rem] text-[var(--fg-3)] leading-relaxed mt-3.5">
                    {slide.additionalText}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
