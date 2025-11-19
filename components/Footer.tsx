'use client';

import { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">CityPulse NYC</h3>
              <p className="text-gray-400 text-sm">
                AI-powered video search, sharing, and discovery platform for hyperlocal NYC content
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-8 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.linkedin.com/in/rogersentongo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF1744] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="text-gray-400 hover:text-[#FF1744] transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
            <p>© 2025 Contrivance Inc. All rights reserved.</p>
            <p className="mt-2">Built with ❤️ in NYC</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
