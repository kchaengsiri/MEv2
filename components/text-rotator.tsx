'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TextRotatorProps {
  words: string[];
  className?: string;
  interval?: number;
}

export function TextRotator({ words, className = '', interval = 3500 }: TextRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <motion.span
      layout
      className={`relative inline-flex align-bottom ${className}`}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Invisible: render CURRENT phrase to reserve dynamic width */}
      <span className="invisible inline-block whitespace-nowrap" aria-hidden="true">
        {words[currentIndex]}
      </span>

      {/* Visible: animated current phrase, centered in the dynamic space */}
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          className="absolute inset-0 flex items-center whitespace-nowrap"
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
