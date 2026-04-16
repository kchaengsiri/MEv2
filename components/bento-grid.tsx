'use client';

import { motion } from 'motion/react';
import { GlassCard, GlassCardBadge, GlassCardDescription, GlassCardTitle } from '@/components/glass-card';
import { PROJECTS, TECH_CATEGORIES } from '@/lib/constants'


export function BentoGrid() {
  return (
    <section id="experience" className="relative z-10 bg-gradient-to-b from-ocean-deep via-background to-background">
      {/* Section header */}
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foam-white sm:text-4xl">
            Building Global Tech
            <span className="ml-2 text-sunset-orange">from the Island</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-coral-mist/80 sm:text-base">
            From IoT controllers in Phuket hotels to AI agents powering the J.League — every project bridges local
            craftsmanship with global impact.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {PROJECTS.map((item, index) => (
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
                {item.isTechGrid ? (
                  <TechGridContent />
                ) : (
                  <>
                    <GlassCardTitle className={item.accent ? 'text-sunset-orange' : undefined}>
                      {item.title}
                    </GlassCardTitle>
                    {item.detail && <p className="mt-1 text-xs font-mono text-coral-mist/60">{item.detail}</p>}
                    <GlassCardDescription>{item.description}</GlassCardDescription>
                    {item.badges && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <GlassCardBadge key={badge}>{badge}</GlassCardBadge>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechGridContent() {
  return (
    <div>
      <GlassCardTitle>Tech Arsenal</GlassCardTitle>
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
        {TECH_CATEGORIES.map((cat) => (
          <div key={cat.label}>
            <p className="text-xs font-semibold text-sunset-orange/80 uppercase tracking-wider mb-2">{cat.label}</p>
            <ul className="space-y-1">
              {cat.items.map((item) => (
                <li key={item} className="text-xs text-coral-mist/70 font-mono">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
