'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const friendsSlides = [
  {
    src: '/screenshots/friends-feed/friends-pool-table.png',
    alt: 'Friends socializing at pool table',
    description: "Share videos with friends and see what they're engaging with. View what your friends are liking, commenting on, and reposting from the Pulse. Share your favorite finds or your own uploads. User Stories are coming soon—share ephemeral moments with your circle."
  },
  {
    src: '/screenshots/friends-feed/user-stories-prototype.png',
    alt: 'User Stories Prototype',
    description: "Share videos with friends and see what they're engaging with. View what your friends are liking, commenting on, and reposting from the Pulse. Share your favorite finds or your own uploads. User Stories are coming soon—share ephemeral moments with your circle."
  },
  {
    src: '/screenshots/friends-feed/tall-bike-meme.png',
    alt: 'Entertaining tall bike video',
    description: "Share entertaining clips and memes. Found a funny NYC sighting? A street performer? A viral moment? Share it with friends or post to the Pulse for the whole city to discover."
  }
];

export default function FriendsFeedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % friendsSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % friendsSlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + friendsSlides.length) % friendsSlides.length);

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
          Friends Feed & Stories
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={friendsSlides[currentIndex].src}
                    alt={friendsSlides[currentIndex].alt}
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
                {friendsSlides.map((_, index) => (
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
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  {friendsSlides[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-4">
              <div className="glass p-4 rounded-lg">
                <p className="text-gray-300">See what friends are liking, commenting, reposting</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <p className="text-gray-300">Share Pulse videos or your own uploads</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <p className="text-gray-300">User Stories coming soon—ephemeral sharing with your circle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
