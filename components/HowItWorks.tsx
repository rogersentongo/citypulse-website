'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Capture',
    description:
      'Record videos directly in the app or upload from your photos folder. Video-only — no photos allowed. Share local moments as they happen.',
  },
  {
    number: '02',
    title: 'AI Understanding',
    description:
      'Our multimodal AI processes every video — transcribing audio, analyzing visual scenes, detecting duplicates, and creating semantic embeddings. Videos become instantly searchable and discoverable.',
  },
  {
    number: '03',
    title: 'Personal Discovery',
    description:
      'Search via Ask the City, explore the Pulse Feed or Friends Feed, and get AI recommendations. The more you use CityPulse, the better it understands your preferences — automatically remembering places, events, and content you love.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto mb-16 text-center"
        >
          <div className="eyebrow mb-5">Process</div>
          <h2 className="gradient-heading">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="card p-8 hover:-translate-y-1"
            >
              <span className="inline-block font-mono text-[0.82rem] text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent-soft)] px-2.5 py-1 rounded-md">
                {step.number}
              </span>
              <h3 className="text-[1.3rem] text-white mt-5 mb-2.5">{step.title}</h3>
              <p className="text-[0.96rem] text-[var(--fg-2)] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
