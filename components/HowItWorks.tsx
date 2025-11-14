'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Capture',
      description: 'New Yorkers upload real moments—street fashion, architectural gems, breaking news, events. No editing, no filters. Just NYC as it happens.',
      icon: '📹'
    },
    {
      number: '02',
      title: 'AI Understanding',
      description: 'Our multimodal AI processes every video: transcribing audio, analyzing visual scenes (fashion, landmarks, trends), understanding context. Ready to watch in 5 seconds, fully searchable in 90.',
      icon: '🧠'
    },
    {
      number: '03',
      title: 'Personal Discovery',
      description: 'You explore through natural language ("street fashion in SoHo") or browse your personalized Pulse Feed. The more you use it, the better it understands whether you care about fashion, landmarks, news, or all three.',
      icon: '✨'
    }
  ];

  return (
    <section className="section bg-[#0A0A0A]">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-20"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-6">
                <span className="text-6xl">{step.icon}</span>
              </div>
              <div className="mb-4">
                <span className="text-[#FF1744] text-5xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-2xl text-white font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
