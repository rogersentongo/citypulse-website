'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WaitlistModal from './WaitlistModal';

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Technology', href: '#technology' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[90] h-16 flex items-center transition-all duration-300 border-b ${
          scrolled
            ? 'bg-black/70 backdrop-blur-xl border-[var(--border)]'
            : 'border-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 font-semibold text-[1.08rem] tracking-tight">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] pulse-dot" />
            CityPulse
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.92rem] text-[var(--fg-2)] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3.5">
            <button onClick={() => setIsWaitlistOpen(true)} className="btn btn-primary">
              Join the Waitlist
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-[38px] h-[38px] rounded-[9px] border border-[var(--border)] flex items-center justify-center"
              aria-label="Menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-[80] md:hidden bg-black/95 backdrop-blur-xl border-b border-[var(--border)]"
          >
            <div className="container-custom py-4 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-[var(--fg-2)] hover:text-white transition-colors border-b border-[var(--border)] last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
}
