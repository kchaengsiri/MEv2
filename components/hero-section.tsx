'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { PalmTrees } from '@/components/palm-trees';
import { TextRotator } from '@/components/text-rotator';
import { WaveBackground } from '@/components/wave-background';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="about" className="relative">
      <motion.div
        style={{ scale: heroScale, rotate: heroRotate, opacity: heroOpacity }}
        className="sticky top-0 min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-midnight to-ocean-deep" />

        {/* Sunrise glow — top center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(232,120,58,0.4) 0%, rgba(240,152,86,0.15) 40%, transparent 70%)',
            animation: 'sunrise-glow 8s ease-in-out infinite',
          }}
        />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(232,237,245,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <PalmTrees />

        {/* Remotion-rendered ocean wave neural network — ambient background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten pointer-events-none"
        >
          <source src="/videos/ocean-wave.webm" type="video/webm" />
        </video>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full glass-subtle border border-ocean-teal/20 px-4 py-2"
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
            <span className="text-xs font-medium text-coral-mist">Phuket, Thailand</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-4xl font-bold tracking-tight text-foam-white sm:text-5xl lg:text-6xl"
          >
            Building Global Tech
            <br />
            <span className="bg-gradient-to-r from-sunset-orange via-sunset-warm to-sand-gold bg-clip-text text-transparent">
              from the Island
            </span>
          </motion.h1>

          {/* Role rotator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2 text-lg text-coral-mist sm:text-xl"
          >
            <span className="text-foam-white/60">I&apos;m a</span>
            <TextRotator
              words={['Lead Full-Stack Developer', 'AI & RAG Specialist', 'IoT Architect', 'Tech Team Leader']}
              className="font-semibold text-sunset-orange"
              interval={3500}
            />
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-coral-mist/80 sm:text-base"
          >
            11+ years architecting scalable enterprise systems, conversational AI agents, and IoT platforms. Proven
            track record delivering high-impact solutions for international brands like the J.League.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10"
          >
            <a
              href="#experience"
              className="inline-flex items-center rounded-full bg-sunset-orange px-7 py-3 text-sm font-semibold text-ocean-deep transition-all duration-300 hover:bg-sunset-warm active:translate-y-px active:shadow-none shadow-[0_4px_16px_-2px_rgba(232,120,58,0.4)]"
            >
              View My Work
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>

          {/* Tech icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16 flex items-center justify-center gap-6 opacity-40"
          >
            {['TypeScript', 'Python', 'React', 'Next.js', 'AWS'].map((tech) => (
              <span key={tech} className="text-xs font-mono text-coral-mist/60 uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <WaveBackground />
      </motion.div>
    </section>
  );
}
