'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface LocationBadgeProps {
  location: string;
  className?: string;
}
export function LocationBadge({ location, className }: LocationBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={cn(
        'mb-8 inline-flex items-center gap-2 rounded-full glass-subtle border border-ocean-teal/20 px-4 py-2',
        className,
      )}
    >
      <svg
        className="h-4 w-4 text-sunset-orange"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span className="text-xs font-medium text-coral-mist">{location}</span>
    </motion.div>
  );
}
