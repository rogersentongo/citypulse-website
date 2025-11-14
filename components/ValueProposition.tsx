'use client';

import { motion } from 'framer-motion';

export default function ValueProposition() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="section bg-black">
      <div className="container-custom">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-8">
            See NYC Through AI That Actually Understands
          </h2>

          <div className="space-y-6 text-lg md:text-xl">
            <p className="text-gray-300">
              Most apps show you <span className="text-white font-semibold italic">what</span> exists.
              CityPulse shows you <span className="text-white font-semibold italic">what matches your vibe</span>.
            </p>

            <p className="text-gray-300">
              Using cutting-edge <span className="text-[#FF1744] font-semibold">multimodal vision AI</span>, we understand
              NYC the way you do—spotting the latest street fashion trends, revealing architectural stories behind iconic
              buildings, surfacing breaking news and cultural moments. Not through tags or categories, but through
              <span className="text-white font-semibold"> sight and sound</span>.
            </p>

            <p className="text-gray-300">
              Whether you're tracking style trends, exploring landmarks, or staying ahead of what's happening—this is
              discovery for people who want to experience NYC at a deeper level.
            </p>
          </div>

          {/* Icon Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">👗</span>
              <span className="text-white font-semibold">Fashion</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">🏛️</span>
              <span className="text-white font-semibold">Sightseeing</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">📰</span>
              <span className="text-white font-semibold">News & Events</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
