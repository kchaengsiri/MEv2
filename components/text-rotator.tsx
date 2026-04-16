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
    <span className={`relative inline-block align-bottom ${className}`}>
      {/* Invisible: render ALL phrases stacked to reserve max width */}
      <span className="invisible block whitespace-nowrap" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b), '')}
      </span>

      {/* Visible: animated current phrase, centered in the reserved space */}
      <AnimatePresence mode="wait">
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
    </span>
  );
}
