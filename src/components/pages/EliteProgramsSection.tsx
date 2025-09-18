import React from "react";

import { motion } from 'framer-motion';
import { AdvancedGlassCard } from '../AdvancedGlassCard';
import { FluidText } from '../FluidText';
import { SmartButton } from '../SmartButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function EliteProgramsSection() {
  return (
    <section className="py-32 px-6 relative mb-32">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <FluidText variant="wave" stagger={0.1} className="text-4xl md:text-6xl mb-6 tracking-wider">
            ELITE PROGRAMS
          </FluidText>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Cutting-edge training methodologies designed for maximum transformation
          </p>
        </motion.div>
        <div className="grid grid-cols-12 grid-rows-2 gap-6 h-[800px]">
          {/* Large Feature Program */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-8 row-span-2 relative group"
          >
            <AdvancedGlassCard tilt={true} magnetic={true} glow={true} className="h-full overflow-hidden">
              <div className="relative h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1639503997164-a697df7703c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhjcm9zc2ZpdCUyMGJhcmJlbGwlMjBsaWZ0aW5nfGVufDF8fHx8MTc1ODIyMTA0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Elite Crossfit Barbell Training Program"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl mb-4 tracking-[0.12em] uppercase">STRENGTH MASTERY</h3>
                    <p className="text-white/80 mb-6 max-w-md">
                      Transform your body into a powerhouse with our advanced strength training protocols
                    </p>
                    <SmartButton variant="secondary" size="md">
                      EXPLORE PROGRAM
                    </SmartButton>
                  </motion.div>
                </div>
              </div>
            </AdvancedGlassCard>
          </motion.div>
          {/* HIIT Program */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 md:col-span-4 md:row-span-1 relative"
          >
            <AdvancedGlassCard tilt={true} magnetic={true} className="h-full overflow-hidden">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Premium Equipment Training"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl mb-2 tracking-[0.12em] uppercase">HIIT FUSION</h4>
                  <p className="text-white/70 text-sm">Maximum results, minimum time</p>
                </div>
              </div>
            </AdvancedGlassCard>
          </motion.div>
          {/* Personal Training */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 md:col-span-4 md:row-span-1 relative"
          >
            <AdvancedGlassCard tilt={true} magnetic={true} className="h-full overflow-hidden">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571019613540-996a5eca0e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="High-End Personal Coaching"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl mb-2 tracking-[0.12em] uppercase">ELITE COACHING</h4>
                  <p className="text-white/70 text-sm">1-on-1 transformation mastery</p>
                </div>
              </div>
            </AdvancedGlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
