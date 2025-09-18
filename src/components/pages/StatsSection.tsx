import React from "react";

import { motion } from 'framer-motion';
import { AdvancedGlassCard } from '../AdvancedGlassCard';

export function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
      >
        {[
          { number: "5000+", label: "Transformations" },
          { number: "98%", label: "Success Rate" },
          { number: "24/7", label: "Access" },
          { number: "50+", label: "Programs" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <AdvancedGlassCard className="text-center">
              <div className="text-2xl mb-2 tracking-wider">{stat.number}</div>
              <div className="text-white/60 text-sm tracking-wide uppercase">{stat.label}</div>
            </AdvancedGlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
