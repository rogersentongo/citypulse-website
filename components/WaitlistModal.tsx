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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                  Thanks for joining! We'll be in touch soon.
                </p>
              </motion.div>
            )}

            {/* Error message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
              >
                <p className="text-red-400 text-center">{errorMessage}</p>
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
