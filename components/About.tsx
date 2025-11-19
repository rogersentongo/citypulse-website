'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';
import ContactModal from './ContactModal';

export default function About() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm text-[#FF1744] uppercase tracking-wider mb-4 font-semibold">Our Story</p>
            <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">Why We're Building CityPulse</h2>
          </div>

          {/* The Problem */}
          <motion.div {...fadeInUp} className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#FF1744]/20 flex items-center justify-center">
                  <FaLightbulb className="text-2xl text-[#FF1744]" />
                </div>
              </div>
              <div>
                <p className="text-xs text-[#FF1744] uppercase tracking-wider mb-2 font-semibold">The Problem</p>
                <h3 className="text-2xl text-white font-bold mb-4">Discovery Is Broken</h3>
              </div>
            </div>

            <div className="pl-16 space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Every app treats NYC like a database—stars, reviews, categories. They miss what makes discovery magical:
                stumbling upon a hidden jazz bar through video, seeing what a neighborhood actually feels like on a Tuesday night,
                finding fashion inspiration on real streets.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With multimodal AI, we can finally build something different. An app that understands <span className="text-white font-semibold">"cozy coffee shop"</span> or
                <span className="text-white font-semibold"> "energetic block party"</span> through vision and sound, not keywords.
              </p>
            </div>
          </motion.div>

          {/* Our Vision */}
          <motion.div {...fadeInUp} className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#FF1744]/20 flex items-center justify-center">
                  <FaRocket className="text-2xl text-[#FF1744]" />
                </div>
              </div>
              <div>
                <p className="text-xs text-[#FF1744] uppercase tracking-wider mb-2 font-semibold">Our Vision</p>
                <h3 className="text-2xl text-white font-bold mb-4">Serving NYC Deeply</h3>
              </div>
            </div>

            <div className="pl-16 space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                CityPulse is for people who want an intimate relationship with NYC. Not 1,000 places you might go, but the 3
                that match your vibe. Not generic recommendations, but <span className="text-[#FF1744] font-semibold">hyperlocal video discovery</span> that reveals the city's
                endless possibilities.
              </p>

              {/* Brand Statement */}
              <div className="mt-8 p-8 bg-gradient-to-r from-[#FF1744]/10 to-transparent border-l-4 border-[#FF1744] rounded-xl">
                <p className="text-2xl md:text-3xl text-white font-bold italic leading-relaxed">
                  Depth over scale.<br />
                  Feeling over features.<br />
                  Video over static reviews.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team / Company */}
          <motion.div
            {...fadeInUp}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#FF1744]/20 flex items-center justify-center">
                  <FaHeart className="text-2xl text-[#FF1744]" />
                </div>
              </div>
              <div>
                <p className="text-xs text-[#FF1744] uppercase tracking-wider mb-2 font-semibold">The Team</p>
                <h3 className="text-2xl text-white font-bold mb-4">Built by</h3>
              </div>
            </div>

            <div className="pl-16">
              <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF1744] to-white">
                  Contrivance Inc.
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">Based in NYC</span>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            {...fadeInUp}
            className="mt-16"
          >
            <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-[#FF1744]/30 text-center backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl text-white mb-4 font-bold">Get in Touch</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Interested in partnering, investing, or just want to chat about NYC discovery?
              </p>
              <button
                onClick={() => setIsContactOpen(true)}
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Contact Modal */}
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </motion.div>
      </div>
    </section>
  );
}
