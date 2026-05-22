'use client';

import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import ContactModal from './ContactModal';

const productLinks = [
  { label: 'Overview', href: '#intro-section' },
  { label: 'Pulse Feed', href: '#pulse-feed-section' },
  { label: 'Ask the City', href: '#ask-section' },
  { label: 'How it works', href: '#how-it-works' },
];

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-[var(--border)] pt-16 pb-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-10 pb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 font-semibold text-[1.08rem] tracking-tight mb-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] pulse-dot" />
                CityPulse
              </div>
              <p className="text-[0.92rem] text-[var(--fg-3)] max-w-[320px]">
                AI-powered video search, sharing, and discovery platform for hyperlocal city
                content.
              </p>
            </div>

            {/* Product */}
            <div>
              <h5 className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[var(--fg-3)] mb-4 font-medium">
                Product
              </h5>
              {productLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[0.92rem] text-[var(--fg-2)] hover:text-white py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Company */}
            <div>
              <h5 className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[var(--fg-3)] mb-4 font-medium">
                Company
              </h5>
              <a
                href="#about"
                className="block text-[0.92rem] text-[var(--fg-2)] hover:text-white py-1.5 transition-colors"
              >
                About
              </a>
              <button
                onClick={() => setIsContactOpen(true)}
                className="block text-[0.92rem] text-[var(--fg-2)] hover:text-white py-1.5 transition-colors text-left"
              >
                Contact
              </button>
              <a
                href="#"
                className="block text-[0.92rem] text-[var(--fg-2)] hover:text-white py-1.5 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-[0.92rem] text-[var(--fg-2)] hover:text-white py-1.5 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-wrap justify-between items-center gap-3.5 border-t border-[var(--border)] pt-7">
            <p className="text-[0.85rem] text-[var(--fg-3)]">
              © 2025 Contrivance Inc. All rights reserved. · Built with ❤️ in New York
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.linkedin.com/in/rogersentongo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-[9px] border border-[var(--border)] flex items-center justify-center text-[var(--fg-2)] hover:text-[var(--accent)] hover:border-[rgba(255,23,68,0.4)] transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <button
                onClick={() => setIsContactOpen(true)}
                aria-label="Email"
                className="w-9 h-9 rounded-[9px] border border-[var(--border)] flex items-center justify-center text-[var(--fg-2)] hover:text-[var(--accent)] hover:border-[rgba(255,23,68,0.4)] transition-colors"
              >
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
