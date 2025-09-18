import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface FluidTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  variant?: 'fade' | 'slide' | 'scale' | 'wave' | 'liquid';
}

export function FluidText({ 
  children, 
  className = '', 
  delay = 0, 
  stagger = 0.03,
  variant = 'wave'
}: FluidTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    wave: {
      hidden: { opacity: 0, y: 50, rotateX: -90 },
      visible: { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      }
    },
    liquid: {
      hidden: { opacity: 0, scale: 0, y: 20 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 150,
          bounce: 0.3
        }
      }
    }
  };

  const words = children.split(' ');

  return (
    <motion.div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={variants[variant]}
          initial="hidden"
          animate={controls}
          transition={{
            delay: delay + (i * stagger),
            ...variants[variant].visible?.transition
          }}
        >
          {word.split('').map((char, j) => (
            <motion.span
              key={`${i}-${j}`}
              className="inline-block"
              variants={variants[variant]}
              transition={{
                delay: delay + (i * stagger) + (j * stagger * 0.5),
                ...variants[variant].visible?.transition
              }}
            >
              {char}
            </motion.span>
          ))}
          {i < words.length - 1 && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface TypewriterTextProps {
  children: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function TypewriterText({ 
  children, 
  className = '', 
  speed = 50, 
  delay = 0 
}: TypewriterTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      if (currentIndex < children.length) {
        setDisplayedText(children.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [isInView, currentIndex, children, speed, delay]);

  return (
    <div ref={ref} className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-1 h-[1em] bg-current ml-1"
      />
    </div>
  );
}