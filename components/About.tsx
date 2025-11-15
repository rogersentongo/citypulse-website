'use client';

import { motion } from 'framer-motion';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="section bg-black">
      <div className="container-custom">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-center text-white mb-12">Why We're Building CityPulse</h2>

          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Every app treats NYC like a database—stars, reviews, categories. They miss what makes discovery magical:
              stumbling upon a hidden jazz bar through video, seeing what a neighborhood actually feels like on a Tuesday night,
              finding fashion inspiration on real streets.
            </p>

            <p>
              With multimodal AI, we can finally build something different. An app that understands "cozy coffee shop" or
              "energetic block party" through vision and sound, not keywords. That serves New York{' '}
              <span className="text-white font-semibold">deeply</span>, not superficially.
            </p>

            <p>
              CityPulse is for people who want an intimate relationship with NYC. Not 1,000 places you might go, but the 3
              that match your vibe. Not generic recommendations, but hyperlocal video discovery that reveals the city's
              endless possibilities.
            </p>

            <p className="text-white text-xl font-semibold italic text-center pt-8 pb-16">
              Depth over scale. Feeling over features. Video over static reviews.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="glass p-8 rounded-2xl inline-block">
              <p className="text-white text-xl mb-2">Built by</p>
              <h3 className="text-3xl font-bold gradient-accent mb-4">Contrivance Inc.</h3>
              <p className="text-gray-400">Based in New York City</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            {...fadeInUp}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl text-white mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              Interested in partnering, investing, or just want to chat about NYC discovery?
            </p>
            <a
              href="mailto:rogersentongo@gmail.com"
              className="btn-primary inline-block px-8 py-4"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
