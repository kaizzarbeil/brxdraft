import React from "react";

import { motion } from 'framer-motion';
import { FluidText } from '../FluidText';
import { SmartButton } from '../SmartButton';
import { ParallaxContainer } from '../ParallaxContainer';
import { AdvancedGlassCard } from '../AdvancedGlassCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FacilitySection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [-100, 100, -100] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="lg:pr-8">
            <FluidText variant="liquid" stagger={0.08} className="text-4xl md:text-6xl mb-8 tracking-[0.12em] uppercase">
              World-Class Facility
            </FluidText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-white/70 mb-8 leading-relaxed"
            >
              State-of-the-art equipment, cutting-edge technology, and an atmosphere 
              designed to push you beyond your limits. Every detail crafted for peak performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                { text: "15,000 sq ft" },
                { text: "Latest Equipment" },
                { text: "Climate Control" },
                { text: "Premium Audio" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <span className="text-white/80 tracking-wide uppercase text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <SmartButton variant="magnetic" size="lg" magnetic={true} glow={true}>
                VIRTUAL TOUR
              </SmartButton>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <ParallaxContainer speed={0.2} className="relative">
              <AdvancedGlassCard tilt={true} magnetic={true} className="overflow-hidden p-0">
                <div className="relative h-96 lg:h-[500px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1637870473618-8c9fa7d11f0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwZ3ltJTIwaW50ZXJpb3IlMjBwcmVtaXVtfGVufDF8fHx8MTc1ODIyNjYzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sophisticated Barracks Facility"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute top-6 right-6"
                  >
                    <div className="bg-black/50 backdrop-blur-xl rounded-lg p-3 border border-white/20">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white/90">24/7 OPEN</span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-6 left-6"
                  >
                    <div className="bg-black/50 backdrop-blur-xl rounded-lg p-4 border border-white/20">
                      <div className="text-2xl mb-1">147</div>
                      <div className="text-white/70 text-sm">Members active now</div>
                    </div>
                  </motion.div>
                </div>
              </AdvancedGlassCard>
            </ParallaxContainer>
            <motion.div
              className="absolute -top-6 -left-6 w-12 h-12 border-2 border-white/20 rounded-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-8 h-8 bg-white/10 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
