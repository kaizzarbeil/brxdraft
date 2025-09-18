import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`
        backdrop-blur-md bg-white/5 border border-white/10
        rounded-2xl shadow-2xl hover:shadow-3xl
        transition-all duration-500
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      <div className="p-8">
        {children}
      </div>
    </motion.div>
  );
}