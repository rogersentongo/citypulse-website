'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const askNYCSlides = [
  {
    src: '/screenshots/ask-nyc/ask-nyc-main.png',
    alt: 'Ask NYC Main Page',
    title: 'Ask NYC Anything',
    description: "Search using natural language, explore recommended videos, check trending topics, or browse curated Pulse feeds. Whether you're looking for 'comedy tonight' or 'best brunch in Brooklyn,' our AI finds relevant video results."
  },
  {
    src: '/screenshots/ask-nyc/gatherings.png',
    alt: 'Cool Gatherings Results',
    title: 'AI-Powered Video Search',
    description: "Ask about gatherings, events, vibes in specific boroughs, professional content, where to eat—and get video results that match. Our multimodal AI understands context, visual scenes, and audio to surface the most relevant moments."
  },
  {
    src: '/screenshots/ask-nyc/lunch-results.png',
    alt: 'Lunch Search Results',
    title: 'AI-Powered Video Search',
    description: "Ask about gatherings, events, vibes in specific boroughs, professional content, where to eat—and get video results that match. Our multimodal AI understands context, visual scenes, and audio to surface the most relevant moments."
  },
  {
    src: '/screenshots/ask-nyc/vibe-manhattan.png',
    alt: 'Vibe in Manhattan',
    title: 'AI-Powered Video Search',
    description: "Ask about gatherings, events, vibes in specific boroughs, professional content, where to eat—and get video results that match. Our multimodal AI understands context, visual scenes, and audio to surface the most relevant moments."
  },
  {
    src: '/screenshots/ask-nyc/vibe-queens.png',
    alt: 'Vibe in Queens',
    title: 'AI-Powered Video Search',
    description: "Ask about gatherings, events, vibes in specific boroughs, professional content, where to eat—and get video results that match. Our multimodal AI understands context, visual scenes, and audio to surface the most relevant moments."
  },
  {
    src: '/screenshots/ask-nyc/corporate-event.png',
    alt: 'Corporate Event Video',
    title: 'AI-Powered Video Search',
    description: "Ask about gatherings, events, vibes in specific boroughs, professional content, where to eat—and get video results that match. Our multimodal AI understands context, visual scenes, and audio to surface the most relevant moments."
  },
  {
    src: '/screenshots/ask-nyc/street-fashion.png',
    alt: 'Street Fashion Discovery',
    title: 'Discover Fashion Trends',
    description: "Our computer vision analyzes what people are wearing in thousands of videos across NYC. See emerging street styles in Williamsburg, SoHo, or the Lower East Side. Identify trending pieces—jackets, accessories, sneakers—and even shop the look. Our AI detects clothing patterns, styles, and fashion-forward neighborhoods in real-time."
  }
];

export default function AskNYCSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % askNYCSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % askNYCSlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + askNYCSlides.length) % askNYCSlides.length);

  const isFashionSlide = currentIndex === 6;

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
          Ask NYC Feature
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl text-white font-bold mb-6">
                  {askNYCSlides[currentIndex].title}
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  {askNYCSlides[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Fashion Features (only show on fashion slide) */}
            {isFashionSlide && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="glass p-6 rounded-xl"
              >
                <h4 className="text-white font-semibold mb-5">Fashion Intelligence Features:</h4>
                <div className="space-y-3">
                  <div className="border-l-2 border-[#FF1744] pl-4">
                    <p className="text-sm text-gray-300">Frame-by-frame fashion analysis</p>
                  </div>
                  <div className="border-l-2 border-[#FF1744] pl-4">
                    <p className="text-sm text-gray-300">Style pattern recognition across neighborhoods</p>
                  </div>
                  <div className="border-l-2 border-[#FF1744] pl-4">
                    <p className="text-sm text-gray-300">Shop the look integration</p>
                  </div>
                  <div className="border-l-2 border-[#FF1744] pl-4">
                    <p className="text-sm text-gray-300">Outfit inspiration based on weather/occasion</p>
                  </div>
                  <div className="border-l-2 border-[#FF1744] pl-4">
                    <p className="text-sm text-gray-300">See trending styles before they hit Instagram</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Carousel */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={askNYCSlides[currentIndex].src}
                    alt={askNYCSlides[currentIndex].alt}
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
                {askNYCSlides.map((_, index) => (
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
