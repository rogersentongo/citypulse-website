'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WaitlistModal from './WaitlistModal';
import DemoVideoModal from './DemoVideoModal';

export default function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden text-center pt-[170px] pb-[100px] max-md:pt-[140px] max-md:pb-[70px]"
    >
      {/* Backdrop */}
      <div className="grid-bg" />
      <div className="hero-glow" />

      <div className="container-custom relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 text-[0.82rem] text-[var(--fg-2)] px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-[var(--border)] mb-7"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-[var(--accent)] pulse-dot" />
          By Contrivance Inc. · Coming soon to iOS &amp; Android
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="gradient-heading"
        >
          Experience your city
          <br />
          through video.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-[600px] mx-auto mt-6 text-[1.12rem] text-[var(--fg-2)]"
        >
          Search, share, and explore hyperlocal moments. From festivals to fashion,
          block parties to hidden gems — discover the city around you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap gap-3.5 justify-center mt-9"
        >
          <button onClick={() => setIsWaitlistOpen(true)} className="btn btn-primary btn-lg">
            Join the Waitlist
          </button>
          <button onClick={() => setIsDemoOpen(true)} className="btn btn-secondary btn-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Demo
          </button>
        </motion.div>

        {/* Product shot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto mt-20 max-w-[380px]"
        >
          <div className="frame-glow" />
          <div className="frame relative z-10">
            <Image
              src="/screenshots/ask-nyc-trending.png"
              alt="CityPulse trending feed"
              width={760}
              height={1330}
              priority
              quality={90}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <DemoVideoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
}
