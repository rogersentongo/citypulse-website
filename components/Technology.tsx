'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
  vision: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    </svg>
  ),
  scene: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
      <path d="M3 8h3l2-2h8l2 2h3v11H3z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  audio: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 10v4M8 7v10M12 3v18M16 7v10M20 10v4" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h7v7" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  ),
};

const approaches = [
  {
    icon: 'vision',
    title: 'Vision AI',
    description:
      'Frame-by-frame video analysis understanding fashion, architecture, atmospheres, and crowd patterns.',
    featured: true,
  },
  {
    icon: 'scene',
    title: 'Visual Scene Understanding',
    description:
      'Advanced multimodal AI that reads scenes, identifies clothing, and recognizes landmarks.',
    featured: true,
  },
  {
    icon: 'audio',
    title: 'Audio Processing',
    description: 'Transcription and ambient sound analysis for context-aware search.',
    featured: false,
  },
  {
    icon: 'search',
    title: 'Semantic Search',
    description: 'Semantic embeddings capture style, vibe, and context for intelligent search.',
    featured: false,
  },
  {
    icon: 'trend',
    title: 'Trend Detection',
    description: 'Temporal pattern recognition for fashion, news, and cultural shifts.',
    featured: false,
  },
  {
    icon: 'server',
    title: 'Self-Hosted Infrastructure',
    description: 'Privacy-first AI stack with full control over data processing.',
    featured: false,
  },
];

const stats = [
  { value: '2s', label: 'Query Response Time' },
  { value: '90s', label: 'Video Processing' },
  { value: '100%', label: 'Frame Analysis' },
  { value: 'Real-time', label: 'Fashion Detection' },
  { value: 'Local', label: 'AI Processing' },
  { value: 'Private', label: 'Data Control' },
];

export default function Technology() {
  return (
    <section id="technology" className="section section-panel">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[680px] mx-auto mb-16 text-center"
        >
          <div className="eyebrow mb-5">Technology</div>
          <h2 className="gradient-heading">
            Built different: multimodal AI that understands your city
          </h2>
        </motion.div>

        {/* AI stack */}
        <div>
          <p className="subhead text-center mb-7">Comprehensive AI Stack</p>
          <div className="grid md:grid-cols-2 gap-4">
            {approaches.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex gap-[18px] p-7 rounded-[var(--radius)] border transition-all duration-200 ${
                  item.featured
                    ? 'border-[var(--border)] border-l-2 border-l-[var(--accent)] bg-[linear-gradient(100deg,rgba(255,23,68,0.06),transparent_55%)] hover:border-[var(--border-strong)]'
                    : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--card-hover)]'
                }`}
              >
                <div
                  className={`flex-none w-[46px] h-[46px] rounded-[10px] flex items-center justify-center border ${
                    item.featured
                      ? 'bg-[var(--accent-soft)] border-[rgba(255,23,68,0.35)] [&_svg]:stroke-[var(--accent)]'
                      : 'bg-white/[0.05] border-[var(--border)] [&_svg]:stroke-[var(--fg-2)]'
                  } [&_svg]:w-[22px] [&_svg]:h-[22px]`}
                >
                  {icons[item.icon]}
                </div>
                <div>
                  <h4 className="text-[1.08rem] font-semibold text-white mb-1.5">{item.title}</h4>
                  <p className="text-[0.93rem] text-[var(--fg-2)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16">
          <p className="subhead text-center mb-7">Built for Speed &amp; Privacy</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center px-3.5 py-6 bg-[var(--card)] border border-[var(--border)] rounded-[11px] hover:border-[rgba(255,23,68,0.4)] transition-colors duration-200"
              >
                <p className="text-[1.7rem] font-semibold tracking-tight bg-[linear-gradient(180deg,var(--accent),var(--accent-2))] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-[0.8rem] text-[var(--fg-3)] mt-1.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
