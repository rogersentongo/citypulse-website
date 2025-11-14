'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PrimaryUseCases() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <section className="section bg-black">
      <div className="container-custom">
        <motion.h2 {...fadeInUp} className="text-center text-white mb-20">
          Three Ways to Experience NYC Like Never Before
        </motion.h2>

        {/* Fashion Trends */}
        <motion.div {...fadeInUp} className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">🔥</span>
                <h3 className="text-white text-3xl font-bold">Fashion Trends</h3>
              </div>
              <h4 className="text-2xl text-white mb-6 font-semibold">
                See What NYC Is Wearing—In Real Time
              </h4>
              <p className="text-gray-300 mb-6 text-lg">
                CityPulse's multimodal vision AI identifies fashion trends as they emerge on NYC streets.
                Our computer vision analyzes clothing, accessories, and style in thousands of videos—showing
                you what's actually being worn in Williamsburg, SoHo, or the Lower East Side <span className="text-white italic">right now</span>.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">👕</span>
                  <p className="text-gray-300">Emerging street style trends across all five boroughs</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🛍️</span>
                  <p className="text-gray-300">Shop the look—links to buy items you see</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">📍</span>
                  <p className="text-gray-300">Where fashion-forward New Yorkers are shopping</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🌡️</span>
                  <p className="text-gray-300">What people wore in similar weather (outfit inspiration)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">📸</span>
                  <p className="text-gray-300">Style documentation from fashion-conscious neighborhoods</p>
                </div>
              </div>

              <div className="glass p-4 inline-block">
                <p className="text-sm text-gray-400">
                  <span className="text-[#FF1744] font-semibold">The Tech:</span> Frame-by-frame clothing detection,
                  style pattern recognition, temporal trend analysis, shopping integration
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/screenshots/street-fashion.png"
                  alt="Street Fashion Discovery"
                  width={600}
                  height={1200}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-lg font-semibold italic">
                    "Find your next outfit by watching the city"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sightseeing */}
        <motion.div {...fadeInUp} className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/screenshots/site-seeing.png"
                  alt="NYC Sightseeing"
                  width={600}
                  height={1200}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-lg font-semibold italic">
                    "See the city's architecture, feel its energy"
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">🏛️</span>
                <h3 className="text-white text-3xl font-bold">Site Seeing</h3>
              </div>
              <h4 className="text-2xl text-white mb-6 font-semibold">
                Experience Iconic NYC Through Fresh Perspectives
              </h4>
              <p className="text-gray-300 mb-6 text-lg">
                Forget static tourist photos. CityPulse brings NYC's architecture and landmarks to life through
                videos that show the city's pulse—from sunrise at the Brooklyn Bridge to golden hour at the Flatiron Building.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🏢</span>
                  <p className="text-gray-300">Iconic buildings with context and cultural stories</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🌆</span>
                  <p className="text-gray-300">Time-specific views (best time to visit, lighting, crowds)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🗽</span>
                  <p className="text-gray-300">Tourist attractions shown through local perspectives</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🏘️</span>
                  <p className="text-gray-300">Architectural gems in every neighborhood</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">📹</span>
                  <p className="text-gray-300">Video tours showing atmosphere, not just static images</p>
                </div>
              </div>

              <div className="glass p-4 inline-block">
                <p className="text-sm text-gray-400">
                  <span className="text-[#FF1744] font-semibold">The Tech:</span> Visual landmark recognition,
                  scene context analysis, temporal crowd intelligence, architectural feature detection
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News & Trending */}
        <motion.div {...fadeInUp}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">📰</span>
                <h3 className="text-white text-3xl font-bold">News & Trending</h3>
              </div>
              <h4 className="text-2xl text-white mb-6 font-semibold">
                What's Happening Right Now
              </h4>
              <p className="text-gray-300 mb-6 text-lg">
                From MTA delays to restaurant openings, block parties to fashion drops—CityPulse surfaces what's
                happening across NYC through rich video content. Our AI analyzes news, events, and trending topics
                so you're always in the know.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🚇</span>
                  <p className="text-gray-300">MTA updates, transit news, city infrastructure</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🍽️</span>
                  <p className="text-gray-300">New restaurant openings and food trends</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🎉</span>
                  <p className="text-gray-300">Upcoming events, street festivals, cultural celebrations</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">💼</span>
                  <p className="text-gray-300">Job fairs, professional networking opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🗣️</span>
                  <p className="text-gray-300">City gossip, viral moments, breaking stories</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FF1744] mt-1">🎭</span>
                  <p className="text-gray-300">Entertainment news, venue openings, scene updates</p>
                </div>
              </div>

              <div className="glass p-4 inline-block">
                <p className="text-sm text-gray-400">
                  <span className="text-[#FF1744] font-semibold">The Tech:</span> Real-time content indexing,
                  news extraction from video transcripts, trend detection, event temporal analysis
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/screenshots/ask-nyc-trending.png"
                  alt="NYC News and Trending"
                  width={600}
                  height={1200}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-lg font-semibold italic">
                    "Your finger on the pulse of NYC news"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
