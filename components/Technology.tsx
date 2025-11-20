'use client';

import { motion } from 'framer-motion';
import { FaEye, FaWaveSquare, FaCamera, FaSearch, FaChartLine, FaServer } from 'react-icons/fa';

export default function Technology() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const approaches = [
    {
      icon: FaEye,
      title: 'Vision AI',
      description: 'Frame-by-frame video analysis understanding fashion, architecture, atmospheres, and crowd patterns',
      featured: true
    },
    {
      icon: FaCamera,
      title: 'Visual Scene Understanding',
      description: 'Advanced multimodal AI that reads scenes, identifies clothing, and recognizes landmarks',
      featured: true
    },
    {
      icon: FaWaveSquare,
      title: 'Audio Processing',
      description: 'Transcription and ambient sound analysis for context-aware search',
      featured: false
    },
    {
      icon: FaSearch,
      title: 'Semantic Search',
      description: 'Semantic embeddings capture style, vibe, and context for intelligent search',
      featured: false
    },
    {
      icon: FaChartLine,
      title: 'Trend Detection',
      description: 'Temporal pattern recognition for fashion, news, and cultural shifts',
      featured: false
    },
    {
      icon: FaServer,
      title: 'Self-Hosted Infrastructure',
      description: 'Privacy-first AI stack with full control over data processing',
      featured: false
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

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(#FF1744 1px, transparent 1px), linear-gradient(90deg, #FF1744 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-sm text-[#FF1744] uppercase tracking-wider mb-4 font-semibold">Technology</p>
          <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">
            Built Different: Multimodal AI That Understands NYC
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-16">
        {/* Our Approach */}
        <motion.div {...fadeInUp}>
          <div className="text-center mb-16">
            <p className="text-sm text-[#FF1744] uppercase tracking-wider mb-3 font-semibold">Comprehensive AI Stack</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {approaches.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass p-10 rounded-xl border transition-all duration-300 hover:border-[#FF1744]/50 hover:bg-white/5 ${
                    item.featured
                      ? 'md:col-span-1 border-l-4 border-[#FF1744] bg-gradient-to-r from-[#FF1744]/5 to-transparent'
                      : 'border-white/10'
                  }`}
                  style={{ willChange: 'transform' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.featured ? 'bg-[#FF1744]/20' : 'bg-white/10'
                      }`}>
                        <Icon className={`text-2xl ${item.featured ? 'text-[#FF1744]' : 'text-gray-300'}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl text-white mb-3 font-semibold">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div {...fadeInUp}>
          <div className="text-center mb-12">
            <p className="text-sm text-[#FF1744] uppercase tracking-wider mb-3 font-semibold">Built for Speed & Privacy</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center p-6 glass-light rounded-xl border border-white/10 hover:border-[#FF1744]/30 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-[#FF1744] mb-2">{stat.value}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
