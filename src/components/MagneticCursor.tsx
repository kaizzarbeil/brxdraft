import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseleave', mouseLeave);

    // Add magnetic effect to interactive elements
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    
    magneticElements.forEach((element) => {
      const handleMouseEnter = () => setCursorVariant('magnetic');
      const handleMouseLeave = () => setCursorVariant('default');
      
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseleave', mouseLeave);
      
      magneticElements.forEach((element) => {
        element.removeEventListener('mouseenter', () => setCursorVariant('magnetic'));
        element.removeEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      mixBlendMode: 'difference' as const,
    },
    magnetic: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      mixBlendMode: 'difference' as const,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.1
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}