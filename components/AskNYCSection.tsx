'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const askDefault =
  'Ask about gatherings, events, vibes in specific neighborhoods, professional content, where to eat — and get video results that match. Our multimodal AI understands context, visual scenes, and audio to surface the most relevant moments.';

const askSlides = [
  {
    src: '/screenshots/ask-nyc/ask-nyc-main.png',
    alt: 'Ask the City main page',
    title: 'Ask your city anything',
    description:
      "Search using natural language, explore recommended videos, check trending topics, or browse curated Pulse feeds. Whether you're looking for 'comedy tonight' or 'best brunch nearby,' our AI finds relevant video results.",
  },
  {
    src: '/screenshots/ask-nyc/gatherings.png',
    alt: 'Gatherings results',
    title: 'AI-powered video search',
    description: askDefault,
  },
  {
    src: '/screenshots/ask-nyc/lunch-results.png',
    alt: 'Lunch search results',
    title: 'AI-powered video search',
    description: askDefault,
  },
  {
    src: '/screenshots/ask-nyc/vibe-manhattan.png',
    alt: 'Neighborhood vibe video',
    title: 'AI-powered video search',
    description: askDefault,
  },
  {
    src: '/screenshots/ask-nyc/vibe-queens.png',
    alt: 'Neighborhood vibe video',
    title: 'AI-powered video search',
    description: askDefault,
  },
  {
    src: '/screenshots/ask-nyc/corporate-event.png',
    alt: 'Corporate event video',
    title: 'AI-powered video search',
    description: askDefault,
  },
  {
    src: '/screenshots/ask-nyc/street-fashion.png',
    alt: 'Street fashion discovery',
    title: 'Discover fashion trends',
    description:
      'Our computer vision analyzes what people are wearing in thousands of videos across the city. See emerging street styles in trendy neighborhoods and creative districts. Identify trending pieces — jackets, accessories, sneakers — and even shop the look. Our AI detects clothing patterns, styles, and fashion-forward neighborhoods in real-time.',
  },
];

const fashionFeatures = [
  'Frame-by-frame fashion analysis',
  'Style pattern recognition across neighborhoods',
  'Shop the look integration',
  'Outfit inspiration based on weather / occasion',
  'See trending styles before they hit Instagram',
];

export default function AskNYCSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % askSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const section = document.getElementById('ask-section');
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
    setCurrentIndex((prev) => (prev + 1) % askSlides.length);
  };
  const prevSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev - 1 + askSlides.length) % askSlides.length);
  };

  const slide = askSlides[currentIndex];
  const isFashionSlide = currentIndex === askSlides.length - 1;

  return (
    <section id="ask-section" className="section section-panel">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto mb-16 text-center"
        >
          <div className="eyebrow mb-5">AI Search</div>
          <h2 className="gradient-heading">Ask the City</h2>
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
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
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

            <div className="flex gap-1.5 justify-center mt-5 flex-wrap">
              {askSlides.map((_, index) => (
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
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-white mb-4">{slide.title}</h3>
                <p className="text-[1.06rem] text-[var(--fg-2)] leading-relaxed">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {isFashionSlide && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 bg-[var(--card)] border border-[var(--border)] border-l-2 border-l-[var(--accent)] rounded-[11px] px-6 py-5"
              >
                <h4 className="subhead mb-3.5">Fashion Intelligence Features</h4>
                <ul className="flex flex-col">
                  {fashionFeatures.map((f) => (
                    <li
                      key={f}
                      className="relative pl-5 py-1.5 text-[0.92rem] text-[var(--fg-2)] before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)]"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
