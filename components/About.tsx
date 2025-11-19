'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart } from 'react-icons/fa';
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
            <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">Why We&apos;re Building CityPulse</h2>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
          {/* Our Mission */}
          <motion.div {...fadeInUp}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#FF1744]/20 flex items-center justify-center">
                  <FaRocket className="text-2xl text-[#FF1744]" />
                </div>
              </div>
              <div>
                <p className="text-xs text-[#FF1744] uppercase tracking-wider mb-2 font-semibold">Search & Discovery Beyond Keywords</p>
              </div>
            </div>

            <div className="pl-16">
              <p className="text-lg text-gray-300 leading-relaxed">
                Most apps treat NYC like a database—stars, reviews, categories. CityPulse is different. We use <span className="text-white font-semibold">multimodal AI</span> to understand
                <span className="text-white font-semibold"> &ldquo;cozy coffee shop&rdquo;</span> or <span className="text-white font-semibold">&ldquo;energetic block party&rdquo;</span> through vision and sound, delivering
                 hyperlocal video recommendations that go far beyond keyword matching. Not 1,000 generic places, but the 3 that truly match your vibe.
              </p>
            </div>
          </motion.div>

          {/* Team / Company */}
          <motion.div
            {...fadeInUp}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#FF1744]/20 flex items-center justify-center">
                  <FaHeart className="text-2xl text-[#FF1744]" />
                </div>
              </div>
              <div>
                <p className="text-xs text-[#FF1744] uppercase tracking-wider mb-2 font-semibold">Built by</p>
              </div>
            </div>

            <div className="pl-16">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF1744] to-white">
                  Contrivance Inc
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">Based in NYC</span>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            {...fadeInUp}
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
          </div>

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
