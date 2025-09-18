import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { AdvancedGlassCard } from '../AdvancedGlassCard';
import { TestimonialCarousel } from '../TestimonialCarousel';
import { FluidText } from '../FluidText';
import { MarqueeText } from '../InfiniteMarquee';
import { ParallaxContainer } from '../ParallaxContainer';
import { SmartButton } from '../SmartButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function TestimonialsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const testimonials = [
    {
      id: 1,
      name: "JESSICA MARTINEZ",
      achievement: "Lost 45 lbs in 8 months",
      quote: "Barracks didn't just change my body - it changed my entire mindset. The discipline I learned here carries into every aspect of my life. The trainers pushed me beyond what I thought was possible.",
      image: "https://images.unsplash.com/photo-1734668484998-c943d1fcb48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0ZXN0aW1vbmlhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc1ODIyMTEyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      program: "HIIT Conditioning + Personal Training",
      rating: 5
    },
    {
      id: 2,
      name: "DAVID CHEN",
      achievement: "Gained 25 lbs of muscle",
      quote: "As a former athlete, I thought I knew what training was. Barracks showed me a whole new level. The attention to detail and personalized approach made all the difference.",
      image: "https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODIyMTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      program: "Strength Training + Athletic Performance",
      rating: 5
    },
    {
      id: 3,
      name: "SARAH WILLIAMS",
      achievement: "From couch to marathon",
      quote: "I walked into Barracks barely able to run a mile. One year later, I completed my first marathon. The journey was tough, but every step was worth it.",
      image: "https://images.unsplash.com/photo-1639503997164-a697df7703c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGJhcmJlbGwlMjBsaWZ0aW5nfGVufDF8fHx8MTc1ODIyMTA0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      program: "Conditioning + CrossFit",
      rating: 5
    },
    {
      id: 4,
      name: "MIKE RODRIGUEZ",
      achievement: "Deadlifted 500 lbs",
      quote: "Setting that 500lb deadlift goal seemed impossible when I started. The systematic approach at Barracks made it achievable. Now I'm aiming for 600.",
      image: "https://images.unsplash.com/photo-1734630341082-0fec0e10126c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmluZyUyMHN0cmVuZ3RoJTIwZGFya3xlbnwxfHx8fDE3NTgyMjEwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      program: "Powerlifting + Strength Training",
      rating: 5
    },
    {
      id: 5,
      name: "EMILY FOSTER",
      achievement: "Overcame chronic back pain",
      quote: "Years of desk work left me with constant back pain. Through mobility work and corrective exercises, I'm now pain-free and stronger than ever.",
      image: "https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTgyMTUzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      program: "Mobility & Recovery + Personal Training",
      rating: 5
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic background with multiple layers */}
        <ParallaxContainer speed={-0.3} className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1639496908117-6633c4aa9592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBneW0lMjB0cmFuc2Zvcm1hdGlvbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU4MjI2NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elite Success Transformations"
            className="w-full h-full object-cover scale-110"
          />
        </ParallaxContainer>

        {/* Gradient overlay with motion */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80 z-[1]"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)',
              'radial-gradient(circle at 80% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)',
              'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating quote marks */}
        <div className="absolute inset-0 z-[2]">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-6xl text-white/10"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 2,
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
            >
              "
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <FluidText 
            variant="liquid" 
            stagger={0.1}
            className="text-6xl md:text-8xl mb-6 tracking-wider"
          >
            SUCCESS STORIES
          </FluidText>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Real transformations. Real people. Real results.
          </motion.p>

          {/* Scroll indicator with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute center-12 left-1/2 transform -translate-x-1/2 py-16"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-white/60"
            >
              <span className="text-sm mb-3 tracking-wider">EXPLORE STORIES</span>
              <motion.div
                className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden"
                whileHover={{ borderColor: 'rgba(255,255,255,0.6)' }}
              >
                <motion.div
                  animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-1.5 h-4 bg-white/60 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Animated Marquee */}
      <section className="py-8 border-y border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent">
        <MarqueeText
          text="★ 5000+ TRANSFORMATIONS ★ 98% SUCCESS RATE ★ WORLD-CLASS TRAINING"
          className="text-2xl tracking-wider text-white/40"
          speed={40}
        />
      </section>

      {/* Advanced Testimonial Carousel */}
      <section className="py-32 px-6 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <FluidText 
              variant="wave" 
              stagger={0.08}
              className="text-4xl md:text-6xl mb-6 tracking-wider"
            >
              TRANSFORMATION STORIES
            </FluidText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Witness the extraordinary journeys of dedication and transformation
            </motion.p>
          </motion.div>

          {/* Advanced Carousel Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TestimonialCarousel 
              testimonials={testimonials}
              autoPlay={true}
              autoPlayInterval={6000}
            />
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Stats Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <FluidText 
              variant="scale" 
              stagger={0.05}
              className="text-4xl md:text-6xl mb-6 tracking-wider"
            >
              IMPACT BY NUMBERS
            </FluidText>
            <p className="text-xl text-white/70">Data that speaks to our commitment to excellence</p>
          </motion.div>

          {/* Interactive Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "5,000+",
                label: "Transformations",
                description: "Lives changed through dedication",
                color: "from-red-500/20 to-orange-500/20"
              },
              {
                number: "98%",
                label: "Success Rate",
                description: "Members achieve their goals",
                color: "from-green-500/20 to-emerald-500/20"
              },
              {
                number: "15,000+",
                label: "Pounds Lost",
                description: "Total weight loss by members",
                color: "from-blue-500/20 to-cyan-500/20"
              },
              {
                number: "500+",
                label: "PR's Set",
                description: "Personal records achieved monthly",
                color: "from-purple-500/20 to-pink-500/20"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <AdvancedGlassCard 
                  tilt={true} 
                  magnetic={true} 
                  glow={true}
                  className="text-center h-full relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100`}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="text-4xl md:text-5xl mb-4 tracking-wider"
                      style={{
                        background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <h3 className="text-xl mb-3 tracking-wide uppercase">{stat.label}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{stat.description}</p>
                  </div>
                </AdvancedGlassCard>
              </motion.div>
            ))}
          </div>

          {/* Achievement Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20"
          >
            <h3 className="text-3xl mb-12 text-center tracking-wider">MILESTONES ACHIEVED</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { year: "2022", achievement: "First 1000 Members" },
                { year: "2023", achievement: "State Championship Won" },
                { year: "2024", achievement: "Elite Facility Expansion" }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <AdvancedGlassCard className="text-center">
                    <div className="text-3xl mb-3 text-white/60 tracking-wider">{milestone.year}</div>
                    <div className="tracking-wide uppercase">{milestone.achievement}</div>
                  </AdvancedGlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Call to Action */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FluidText 
              variant="liquid" 
              stagger={0.1}
              className="text-4xl md:text-6xl mb-8 tracking-wider"
            >
              YOUR STORY STARTS HERE
            </FluidText>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/80 mb-16 leading-relaxed max-w-3xl mx-auto"
            >
              Join the elite community of individuals who refused to settle for average. 
              Your transformation journey begins with a single decision.
            </motion.p>
            
            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <SmartButton
                variant="primary"
                size="xl"
                magnetic={true}
                glow={true}
                ripple={true}
              >
                START YOUR TRANSFORMATION
              </SmartButton>
              
              <SmartButton
                variant="magnetic"
                size="xl"
                magnetic={true}
                ripple={true}
              >
                SCHEDULE CONSULTATION
              </SmartButton>
            </motion.div>

            {/* Social Proof Strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <AdvancedGlassCard className="inline-block">
                <div className="flex items-center gap-6 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="text-white">★★★★★</span>
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="w-px h-6 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <span>5000+ Happy Members</span>
                  </div>
                  <div className="w-px h-6 bg-white/20" />
                  <div className="flex items-center gap-2">
                    <span>98% Success Rate</span>
                  </div>
                </div>
              </AdvancedGlassCard>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating action elements */}
        <motion.div
          className="absolute bottom-8 left-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-16 h-16 border-2 border-white/20 rounded-full backdrop-blur-xl" />
        </motion.div>

        <motion.div
          className="absolute top-8 right-8"
          animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-12 h-12 bg-white/5 rounded-lg backdrop-blur-xl border border-white/20" />
        </motion.div>
      </section>
    </div>
  );
}