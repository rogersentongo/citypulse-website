'use client';

import { motion } from 'framer-motion';

export default function Technology() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: '⚡', label: '2-second query responses' },
    { icon: '🎥', label: 'Video searchable in 90 seconds' },
    { icon: '👁️', label: 'Frame-by-frame visual analysis' },
    { icon: '👗', label: 'Fashion & style detection' },
    { icon: '🏛️', label: 'Landmark & architecture recognition' },
    { icon: '🧠', label: 'Local AI processing (privacy-first)' },
  ];

  return (
    <section className="section bg-[#0A0A0A] relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#FF1744 1px, transparent 1px), linear-gradient(90deg, #FF1744 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container-custom relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-white mb-6">
            Built Different: Multimodal AI That Sees NYC
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge computer vision that understands fashion, architecture, and culture—not just keywords
          </p>
        </motion.div>

        {/* The Challenge */}
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto mb-16">
          <div className="glass-light p-8 rounded-2xl">
            <h3 className="text-2xl text-white mb-4 font-semibold">The Challenge</h3>
            <p className="text-gray-300 text-lg">
              How do you search for "the perfect coffee shop" or identify "the trending jacket style"?
              Not by keywords or hashtags. You're searching for visual patterns and cultural context.
              Traditional search can't handle that. <span className="text-[#FF1744] font-semibold">Multimodal AI can.</span>
            </p>
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div {...fadeInUp} className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center font-semibold">Our Approach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl hover:border-[#FF1744]/50 transition-all duration-300">
              <div className="text-4xl mb-4">👁️</div>
              <h4 className="text-xl text-white mb-3 font-semibold">Vision AI</h4>
              <p className="text-gray-400">
                Frame-by-frame video analysis understanding fashion, architecture, atmospheres, and crowd patterns
              </p>
            </div>

            <div className="glass p-6 rounded-xl hover:border-[#FF1744]/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎵</div>
              <h4 className="text-xl text-white mb-3 font-semibold">Audio Processing</h4>
              <p className="text-gray-400">
                Transcription and ambient sound analysis using Whisper models
              </p>
            </div>

            <div className="glass p-6 rounded-xl hover:border-[#FF1744]/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl text-white mb-3 font-semibold">Visual Scene Understanding</h4>
              <p className="text-gray-400">
                LLaVA multimodal models that read scenes, identify clothing, recognize landmarks
              </p>
            </div>

            <div className="glass p-6 rounded-xl hover:border-[#FF1744]/50 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl text-white mb-3 font-semibold">Semantic Search</h4>
              <p className="text-gray-400">
                Semantic embeddings capture style, vibe, and context for intelligent search
              </p>
            </div>

            <div className="glass p-6 rounded-xl hover:border-[#FF1744]/50 transition-all duration-300">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl text-white mb-3 font-semibold">Trend Detection</h4>
              <p className="text-gray-400">
                Temporal pattern recognition for fashion, news, and cultural shifts
              </p>
            </div>

            <div className="glass p-6 rounded-xl hover:border-[#FF1744]/50 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl text-white mb-3 font-semibold">Self-Hosted Infrastructure</h4>
              <p className="text-gray-400">
                Privacy-first AI stack with full control over data processing
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Result */}
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-[#FF1744]/10 to-transparent p-8 rounded-2xl border border-[#FF1744]/30">
            <h3 className="text-2xl text-white mb-4 font-semibold">The Result</h3>
            <p className="text-gray-300 text-lg">
              When you ask <span className="text-white italic">"What fashion trends are happening in Brooklyn?"</span> or
              <span className="text-white italic"> "What's the news on the L train?"</span>, we don't search keywords.
              We search <span className="text-[#FF1744] font-semibold">reality</span>—analyzing actual videos through
              computer vision, understanding fashion patterns, architectural features, and cultural moments.
            </p>
          </div>
        </motion.div>

        {/* Technical Stats */}
        <motion.div {...fadeInUp}>
          <h3 className="text-xl text-center text-gray-400 mb-8 uppercase tracking-wider">Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 glass-light rounded-xl"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-sm text-gray-400 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
