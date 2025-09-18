import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1576491742123-735882d4ca7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTgxOTM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Barracks Gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <h1 className="text-6xl md:text-8xl mb-8 tracking-wider">OUR STORY</h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Born from discipline. Built for transformation. Dedicated to excellence.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl mb-8 tracking-wider">THE MISSION</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Barracks was founded on the principle that true strength comes from within. 
                We don't just build bodies – we forge character, discipline, and unbreakable will.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Every piece of equipment, every training program, every moment within these walls 
                is designed to push you beyond what you thought possible. This is where limits are broken 
                and legends are born.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard>
                <div className="text-center">
                  <div className="text-6xl mb-4">💪</div>
                  <h3 className="text-2xl mb-4 tracking-wide">DISCIPLINE</h3>
                  <p className="text-white/70">
                    Consistency and dedication form the foundation of every transformation
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-wider">OUR VALUES</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "EXCELLENCE",
                description: "We accept nothing less than your absolute best",
                icon: "⚡"
              },
              {
                title: "INTEGRITY",
                description: "Honest training, honest results, honest relationships",
                icon: "🎯"
              },
              {
                title: "COMMUNITY",
                description: "Together we rise, together we conquer",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl mb-4 tracking-wide">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-wider">THE JOURNEY</h2>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                year: "2018",
                title: "FOUNDATION",
                description: "Barracks opens with a vision to redefine fitness culture"
              },
              {
                year: "2020",
                title: "EXPANSION",
                description: "Doubled facility size to meet growing demand for excellence"
              },
              {
                year: "2022",
                title: "INNOVATION",
                description: "Introduced cutting-edge training technology and methods"
              },
              {
                year: "2024",
                title: "LEGACY",
                description: "Over 5,000 transformations and counting"
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <GlassCard className={`max-w-md ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <div className="text-4xl mb-2 text-white/60">{milestone.year}</div>
                  <h3 className="text-2xl mb-4 tracking-wide">{milestone.title}</h3>
                  <p className="text-white/70">{milestone.description}</p>
                </GlassCard>
                
                <div className={`w-4 h-4 bg-white rounded-full ${index % 2 === 0 ? 'order-1' : 'order-2'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}