import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSystemProps {
  onComplete: () => void;
}

export function LoadingSystem({ onComplete }: LoadingSystemProps) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const phases = [
    { text: "INITIALIZING SYSTEMS", duration: 800 },
    { text: "LOADING EXPERIENCE", duration: 600 },
    { text: "PREPARING EXCELLENCE", duration: 400 },
    { text: "READY FOR TRANSFORMATION", duration: 200 }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let phaseTimeout: NodeJS.Timeout;

    const startLoading = () => {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsComplete(true);
            setTimeout(onComplete, 1000);
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      // Phase transitions
      phases.forEach((phase, index) => {
        const delay = phases.slice(0, index).reduce((acc, p) => acc + p.duration, 0);
        phaseTimeout = setTimeout(() => {
          setCurrentPhase(index);
        }, delay);
      });
    };

    startLoading();

    return () => {
      clearInterval(interval);
      clearTimeout(phaseTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(75,75,75,0.3) 0%, rgba(0,0,0,1) 50%)',
                'radial-gradient(circle at 80% 50%, rgba(75,75,75,0.3) 0%, rgba(0,0,0,1) 50%)',
                'radial-gradient(circle at 20% 50%, rgba(75,75,75,0.3) 0%, rgba(0,0,0,1) 50%)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-lg mx-auto px-6">
          {/* Logo with advanced animation */}
          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
            className="mb-12"
          >
            <motion.h1
              className="text-6xl md:text-7xl tracking-wider mb-4 relative"
              style={{
                background: 'linear-gradient(45deg, #ffffff, #cccccc, #ffffff, #aaaaaa)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              BARRACKS
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div
              className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>

          {/* Loading progress */}
          <div className="mb-8">
            {/* Progress bar container */}
            <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden mb-6">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-white/80 via-white to-white/80"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-80, 320] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Progress percentage */}
            <motion.div
              key={progress}
              initial={{ scale: 1.2, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl tracking-wider mb-4"
            >
              {progress}%
            </motion.div>

            {/* Phase text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-white/70 tracking-wide"
              >
                {phases[currentPhase]?.text}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Loading animation dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white/50 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Completion effect */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                className="w-20 h-20 border-2 border-white/30 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "linear" }}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl"
                >
                  ✓
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Geometric decorations */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 bg-white/5 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute top-1/3 right-16 w-8 h-8 border border-white/30 rotate-45"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </AnimatePresence>
  );
}