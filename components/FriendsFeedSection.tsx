'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const friendsSlides = [
  {
    src: '/screenshots/friends-feed/friends-pool-table.png',
    alt: 'Friends socializing',
    description:
      "Share videos with friends and see what they're engaging with. View what your friends are liking, commenting on, and reposting from the Pulse. Share your favorite finds or your own uploads. User Stories are coming soon — share ephemeral moments with your circle.",
  },
  {
    src: '/screenshots/friends-feed/user-stories-prototype.png',
    alt: 'User Stories prototype',
    description:
      "Share videos with friends and see what they're engaging with. View what your friends are liking, commenting on, and reposting from the Pulse. Share your favorite finds or your own uploads. User Stories are coming soon — share ephemeral moments with your circle.",
  },
  {
    src: '/screenshots/friends-feed/tall-bike-meme.png',
    alt: 'Entertaining clip',
    description:
      'Share entertaining clips and memes. Found a funny city sighting? A street performer? A viral moment? Share it with friends or post to the Pulse for the whole city to discover.',
  },
];

const highlights = [
  'See what friends are liking, commenting, reposting',
  'Share Pulse videos or your own uploads',
  'User Stories coming soon — ephemeral sharing with your circle',
];

export default function FriendsFeedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % friendsSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const section = document.getElementById('friends-feed-section');
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
    setCurrentIndex((prev) => (prev + 1) % friendsSlides.length);
  };
  const prevSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev - 1 + friendsSlides.length) % friendsSlides.length);
  };

  const slide = friendsSlides[currentIndex];

  return (
    <section id="friends-feed-section" className="section">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto mb-16 text-center"
        >
          <div className="eyebrow mb-5">Social</div>
          <h2 className="gradient-heading">Friends Feed &amp; Stories</h2>
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
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
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
              {friendsSlides.map((_, index) => (
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
            <h3 className="text-white mb-4">Share with your circle</h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="text-[1.06rem] text-[var(--fg-2)] leading-relaxed"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            <div className="flex flex-col gap-3 mt-8">
              {highlights.map((h) => (
                <div key={h} className="mini-card">
                  <p className="font-medium text-[0.96rem] flex items-center gap-2.5 text-[var(--fg-2)]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[var(--accent)] flex-none" />
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
