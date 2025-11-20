'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WaitlistFormData } from '@/lib/types';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with pre-populated data
    const subject = encodeURIComponent('Waitlist Signup - CityPulse NYC');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message || '(No message provided)'}`
    );
    const mailtoLink = `mailto:rogersentongo@pulse-nyc.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });

    // Close modal after 2 seconds
    setTimeout(() => {
      onClose();
      setSubmitStatus('idle');
    }, 2000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass max-w-lg w-full p-8 rounded-2xl relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl text-white mb-2">Join the Waitlist</h2>
              <p className="text-gray-300">
                Be the first to experience CityPulse NYC when we launch
              </p>
            </div>

            {/* Success message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
              >
                <p className="text-green-400 text-center">
                  Email client opened! Please send the email to complete your signup.
                </p>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                  Name <span className="text-[#FF1744]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF1744] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                  Email <span className="text-[#FF1744]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF1744] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Tell us about yourself (optional)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF1744] transition-colors resize-none"
                  placeholder="What interests you about CityPulse? What would you like to see?"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Join Waitlist
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
