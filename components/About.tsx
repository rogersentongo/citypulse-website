'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section id="about" className="section">
      <div className="container-custom">
        {/* Header */}
        <motion.div {...fadeInUp} className="max-w-[640px] mx-auto mb-16 text-center">
          <div className="eyebrow mb-5">Our Story</div>
          <h2 className="gradient-heading">Why we&apos;re building CityPulse</h2>
        </motion.div>

        <div className="max-w-[760px] mx-auto">
          {/* Mission */}
          <motion.div {...fadeInUp} className="flex gap-5 mb-10">
            <div className="flex-none w-[46px] h-[46px] rounded-[10px] bg-[var(--accent-soft)] border border-[rgba(255,23,68,0.3)] flex items-center justify-center">
              <svg
                className="w-[22px] h-[22px] stroke-[var(--accent)]"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinejoin="round"
              >
                <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-[var(--accent)] mb-2.5">
                Search &amp; Discovery Beyond Keywords
              </p>
              <p className="text-[1.02rem] text-[var(--fg-2)] leading-relaxed">
                Most apps treat your city like a database — stars, reviews, categories. CityPulse
                is different. We use <span className="text-white font-semibold">multimodal AI</span>{' '}
                to understand{' '}
                <span className="text-white font-semibold">&ldquo;cozy coffee shop&rdquo;</span> or{' '}
                <span className="text-white font-semibold">
                  &ldquo;energetic block party&rdquo;
                </span>{' '}
                through vision and sound, delivering hyperlocal video recommendations that go far
                beyond keyword matching. Not 1,000 generic places, but the 3 that truly match your
                vibe.
              </p>
            </div>
          </motion.div>

          {/* Built by */}
          <motion.div {...fadeInUp} className="flex gap-5 mb-10">
            <div className="flex-none w-[46px] h-[46px] rounded-[10px] bg-[var(--accent-soft)] border border-[rgba(255,23,68,0.3)] flex items-center justify-center">
              <svg
                className="w-[22px] h-[22px] stroke-[var(--accent)]"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinejoin="round"
              >
                <path d="M12 21S4 14 4 8.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 2.5C20 14 12 21 12 21Z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-[var(--accent)] mb-2.5">
                Built by
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[1.4rem] font-bold tracking-tight bg-[linear-gradient(90deg,var(--accent),#fff)] bg-clip-text text-transparent">
                  Contrivance Inc.
                </span>
                <span className="text-[var(--fg-3)]">•</span>
                <span className="text-[var(--fg-2)]">Based in New York</span>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            {...fadeInUp}
            className="bg-[linear-gradient(160deg,rgba(255,23,68,0.08),var(--card)_60%)] border border-[rgba(255,23,68,0.28)] rounded-[18px] px-10 py-12 text-center"
          >
            <h3 className="text-white">Get in Touch</h3>
            <p className="text-[var(--fg-2)] max-w-[460px] mx-auto mt-3.5 mb-7">
              Interested in partnering, investing, or just want to chat about city discovery?
            </p>
            <button onClick={() => setIsContactOpen(true)} className="btn btn-primary btn-lg">
              Contact Us
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </motion.div>
        </div>

        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </section>
  );
}
