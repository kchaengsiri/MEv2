'use client';

import { motion } from 'motion/react';

import { GlassCard, GlassCardBadge, GlassCardDescription, GlassCardTitle } from '@/components/glass-card';
import { TextRotator } from '@/components/text-rotator';

interface ProjectItem {
  id: string;
  span: string;
  title: string;
  description: string;
  badges: string[];
  detail: string;
  accent?: boolean;
}

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  projects = projects || [];
  return (
    <section id="projects" className="relative z-10 bg-gradient-to-b from-ocean-deep via-background to-background">
      {/* Section header */}
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foam-white sm:text-4xl">
              Building with
              <TextRotator
                words={['Love', 'Heart', 'Passion', 'Fun']}
                className="ml-2 text-xl md:text-4xl font-semibold text-sunset-orange"
                interval={3500}
              />
            </h2>
          </motion.div>

          <p className="mt-3 max-w-2xl text-sm text-coral-mist/80 sm:text-base">
            Result-driven Full-Stack Developer with over 10 years of experience architecting scalable Enterprise Web
            Applications, IoT Platforms, and AI Solutions. Expert in bridging the gap between complex backend
            architectures and intuitive user experiences.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-50px' }}
              className={item.span}
            >
              <GlassCard
                hoverRipple
                className={`h-full ${item.accent ? 'border-sunset-orange/20 bg-gradient-to-br from-[rgba(232,120,58,0.06)] to-[rgba(15,31,58,0.45)]' : ''}`}
              >
                <GlassCardTitle className={item.accent ? 'text-sunset-orange' : undefined}>{item.title}</GlassCardTitle>
                {item.detail && <p className="mt-1 text-xs font-mono text-coral-mist/60">{item.detail}</p>}
                <GlassCardDescription>{item.description}</GlassCardDescription>
                {item.badges && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <GlassCardBadge key={badge}>{badge}</GlassCardBadge>
                    ))}
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
