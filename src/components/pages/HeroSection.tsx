import React from "react";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FluidText, TypewriterText } from '../FluidText';
import { SmartButton } from '../SmartButton';

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={heroRef}
      style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840"
          alt="Elite Barracks Fitness Center"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          onLoad={() => console.log('Background image loaded successfully')}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1f2937 0%, #374151 100%)';
          }}
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-black/30"></div>
      <div className="absolute inset-0 z-[3]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <motion.h1
            className="text-7xl md:text-9xl mb-6 tracking-[0.15em] relative"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 25%, #e8e8e8 50%, #f5f5f5 75%, #ffffff 100%)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 60px rgba(255, 255, 255, 0.1)',
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            BARRACKS
          </motion.h1>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </motion.div>
        <TypewriterText
          delay={1500}
          speed={120}
          className="text-2xl md:text-4xl mb-16 tracking-[0.1em] text-white/95 uppercase"
        >
          Discipline. Strength. Transformation.
        </TypewriterText>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center py-16"
        >
          <SmartButton variant="primary" size="lg" magnetic={true} glow={true} ripple={true}>
            JOIN NOW
          </SmartButton>
          <SmartButton variant="magnetic" size="lg" magnetic={true} ripple={true}>
            EXPLORE PROGRAMS
          </SmartButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2 tracking-wide">SCROLL</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
