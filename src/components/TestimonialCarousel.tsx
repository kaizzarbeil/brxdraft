import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { AdvancedGlassCard } from './AdvancedGlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  id: number;
  name: string;
  achievement: string;
  quote: string;
  image: string;
  rating: number;
  program: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function TestimonialCarousel({ 
  testimonials, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 25 : -25,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 25 : -25,
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main carousel */}
      <div className="relative h-[600px] overflow-hidden rounded-3xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.4 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0"
            style={{ perspective: "1000px" }}
          >
            <AdvancedGlassCard 
              tilt={false} 
              className="h-full p-0 overflow-hidden cursor-grab active:cursor-grabbing"
            >
              <div className="grid lg:grid-cols-2 h-full">
                {/* Image Side */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
                  
                  {/* Floating achievement badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="absolute top-6 left-6"
                  >
                    <div className="bg-black/70 backdrop-blur-xl rounded-full p-4 border border-white/20">
                      <div className="text-center">
                        <div className="text-2xl mb-1">🏆</div>
                        <div className="text-xs text-white/80">ACHIEVED</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Rating Stars */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className={`text-2xl ${
                            i < testimonials[currentIndex].rating
                              ? 'text-yellow-400'
                              : 'text-gray-600'
                          }`}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>

                    {/* Quote */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed italic"
                    >
                      "{testimonials[currentIndex].quote}"
                    </motion.blockquote>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-2"
                    >
                      <h3 className="text-xl tracking-wide">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-white/70">
                        {testimonials[currentIndex].achievement}
                      </p>
                      <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                        {testimonials[currentIndex].program}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </AdvancedGlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
        >
          ←
        </motion.button>

        {/* Pagination Dots */}
        <div className="flex space-x-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
        >
          →
        </motion.button>
      </div>

      {/* Progress Bar */}
      {autoPlay && (
        <div className="mt-6 w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
}