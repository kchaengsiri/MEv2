'use client';

import { motion } from 'motion/react';
import { GlassCard, GlassCardBadge, GlassCardTitle } from '@/components/glass-card';

interface SkillsSectionProps {
  skills: { label: string; items: string[] }[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="relative z-10 bg-linear-to-b from-background via-ocean-midnight to-ocean-midnight">
      {/* Section header */}
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight  bg-linear-to-b from-coral-mist via-sand-gold to-sand-light bg-clip-text text-transparent sm:text-4xl">
            The Digital Reef
          </h2>

          <p className="mt-3 text-sm bg-linear-to-l from-sand-gold via-sunset-warm to-sand-light bg-clip-text text-transparent sm:text-base">
            Deep-diving into tech for over 10 years. Just as a reef supports a vast ecosystem, I build resilient,
            full-stack architectures that power sustainable growth.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: '-50px' }}
            className="col-span-1 md:col-span-3"
          >
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <GlassCard hoverRipple className={`h-full`}>
                    <GlassCardTitle className="mb-4 bg-linear-to-br from-sand-light via-sand-gold to-sunset-orange bg-clip-text text-transparent">
                      {skill.label}
                    </GlassCardTitle>

                    <div className="flex flex-wrap gap-2.5 bg-linear-to-br from-sunset-warm via-sand-gold to-sand-light bg-clip-text text-transparent">
                      {skill.items.map((item) => (
                        <GlassCardBadge key={item} className="bg-clip-text text-transparent">
                          {item}
                        </GlassCardBadge>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
