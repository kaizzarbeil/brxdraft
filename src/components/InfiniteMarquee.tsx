import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export function InfiniteMarquee({ 
  children, 
  direction = 'left', 
  speed = 50,
  className = '' 
}: InfiniteMarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate content for seamless loop */}
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </motion.div>
    </div>
  );
}

interface MarqueeTextProps {
  text: string;
  className?: string;
  direction?: 'left' | 'right';
  speed?: number;
}

export function MarqueeText({ 
  text, 
  className = '', 
  direction = 'left',
  speed = 30 
}: MarqueeTextProps) {
  return (
    <InfiniteMarquee direction={direction} speed={speed} className={className}>
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className="mx-8">
          {text}
        </span>
      ))}
    </InfiniteMarquee>
  );
}