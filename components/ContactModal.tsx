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

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:info@pulse-nyc.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      onClose();
      setSubmitStatus('idle');
    }, 2000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            className="bg-[#0a0a0a] border border-[var(--border-strong)] rounded-[18px] max-w-[460px] w-full p-8 relative shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg text-[var(--fg-2)] hover:text-white hover:bg-white/[0.08] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-[1.5rem] text-white mb-1.5">Contact Us</h2>
            <p className="text-[0.94rem] text-[var(--fg-2)] mb-6">
              Have questions? We&apos;d love to hear from you.
            </p>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-4 bg-green-500/15 border border-green-500/40 rounded-lg"
              >
                <p className="text-green-400 text-center text-sm">
                  Email client opened! Please send the email to complete your message.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-[0.84rem] text-[var(--fg-2)] mb-1.5">
                  Name <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="field-input"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-[0.84rem] text-[var(--fg-2)] mb-1.5">
                  Email <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="field-input"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[0.84rem] text-[var(--fg-2)] mb-1.5">
                  Subject <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="field-input"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[0.84rem] text-[var(--fg-2)] mb-1.5">
                  Message <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="field-input resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
