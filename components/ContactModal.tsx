'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormData } from '@/lib/types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with pre-populated data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:rogersentongo@pulse-nyc.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

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
              <h2 className="text-3xl text-white mb-2">Contact Us</h2>
              <p className="text-gray-300">
                Have questions? We'd love to hear from you
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
                  Email client opened! Please send the email to complete your message.
                </p>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-gray-300 mb-2">
                  Name <span className="text-[#FF1744]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF1744] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm text-gray-300 mb-2">
                  Email <span className="text-[#FF1744]">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF1744] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-300 mb-2">
                  Subject <span className="text-[#FF1744]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF1744] transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm text-gray-300 mb-2">
                  Message <span className="text-[#FF1744]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF1744] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
