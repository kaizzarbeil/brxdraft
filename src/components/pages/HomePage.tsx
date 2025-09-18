import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { AdvancedGlassCard } from '../AdvancedGlassCard';
import { ParallaxContainer, ParallaxLayer } from '../ParallaxContainer';
import { FluidText, TypewriterText } from '../FluidText';
import { SmartButton } from '../SmartButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HomePage() {
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
    <div className="relative mb-16">
      {/* Hero Section with Advanced Parallax */}
      <motion.section
        ref={heroRef}
        style={{ 
          y: heroY,
          opacity: heroOpacity,
          scale: heroScale,
        }}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      >
        {/* Multiple parallax layers for depth */}
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840"
            alt="Elite Barracks Fitness Center"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
            onLoad={() => console.log('Background image loaded successfully')}
            onError={(e) => {
              console.error('Background image failed to load');
              // Fallback to a solid background if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1f2937 0%, #374151 100%)';
            }}
          />
        </div>

        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 z-[1] bg-black/30"></div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 z-[3]">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -100, 50, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Content with Advanced Typography */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative z-10 text-center max-w-6xl mx-auto px-6"
        >
          {/* Main Title with Liquid Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
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
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              BARRACKS
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
          </motion.div>
          
          {/* Subtitle with Typewriter Effect */}
          <TypewriterText
            delay={1500}
            speed={120}
            className="text-2xl md:text-4xl mb-16 tracking-[0.1em] text-white/95 uppercase"
          >
            Discipline. Strength. Transformation.
          </TypewriterText>

          {/* CTA Buttons with Advanced Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center py-16"
          >
            <SmartButton
              variant="primary"
              size="lg"
              magnetic={true}
              glow={true}
              ripple={true}
            >
              JOIN NOW
            </SmartButton>
            
            <SmartButton
              variant="magnetic"
              size="lg"
              magnetic={true}
              ripple={true}
            >
              EXPLORE PROGRAMS
            </SmartButton>
          </motion.div>

          {/* Scroll indicator */}
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

      {/* Featured Programs Section with Bento Layout */}
      <section className="py-32 px-6 relative">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
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
            <FluidText 
              variant="wave" 
              stagger={0.1}
              className="text-4xl md:text-6xl mb-6 tracking-wider"
            >
              ELITE PROGRAMS
            </FluidText>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Cutting-edge training methodologies designed for maximum transformation
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-6 h-[800px]">
            {/* Large Feature Program */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-8 row-span-2 relative group"
            >
              <AdvancedGlassCard 
                tilt={true} 
                magnetic={true} 
                glow={true}
                className="h-full overflow-hidden"
              >
                <div className="relative h-96 lg:h-[500px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1639503997164-a697df7703c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGJhcmJlbGwlMjBsaWZ0aW5nfGVufDF8fHx8MTc1ODIyMTA0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Elite Crossfit Barbell Training Program"
                    className="w-full h-full object-cover rounded-2xl"
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
              className="col-span-12 md:col-span-4 relative"
            >
              <AdvancedGlassCard 
                tilt={true} 
                magnetic={true}
                className="h-full overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Premium Equipment Training"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop";
                    }}
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
              className="col-span-12 md:col-span-4 relative"
            >
              <AdvancedGlassCard 
                tilt={true} 
                magnetic={true}
                className="h-full overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1571019613540-996a5eca0e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="High-End Personal Coaching"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop";
                    }}
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

          {/* Interactive Stats */}
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
        </div>
      </section>

      {/* Facility Showcase with Split-Screen */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Ambient lighting effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [-100, 100, -100],
            }}
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
            {/* Content Side */}
            <div className="lg:pr-8">
              <FluidText 
                variant="liquid" 
                stagger={0.08}
                className="text-4xl md:text-6xl mb-8 tracking-[0.12em] uppercase"
              >
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

              {/* Feature highlights */}
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
                <SmartButton
                  variant="magnetic"
                  size="lg"
                  magnetic={true}
                  glow={true}
                >
                  VIRTUAL TOUR
                </SmartButton>
              </motion.div>
            </div>
            
            {/* Image Side with Advanced Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <ParallaxContainer speed={0.2} className="relative">
                <AdvancedGlassCard 
                  tilt={true} 
                  magnetic={true}
                  className="overflow-hidden p-0"
                >
                  <div className="relative h-96 lg:h-[500px]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1637870473618-8c9fa7d11f0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwZ3ltJTIwaW50ZXJpb3IlMjBwcmVtaXVtfGVufDF8fHx8MTc1ODIyNjYzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Sophisticated Barracks Facility"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    
                    {/* Floating UI elements */}
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

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 border-2 border-white/20 rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
    </div>
  );
}