'use client';

import { motion } from 'motion/react';
import { GlassCard, GlassCardBadge, GlassCardDescription, GlassCardTitle } from '@/components/glass-card';

const experiences = [
  {
    id: 'summary',
    span: 'col-span-1 md:col-span-2 md:row-span-2',
    title: 'The Island Engineer',
    description:
      'Result-driven Lead Full-Stack Developer & AI Specialist with over 11 years of experience architecting scalable Enterprise Web Systems, IoT Platforms, and AI Agents. Expert in bridging the gap between complex backend architectures and intuitive user experiences.',
    badges: ['Phuket-based', 'Remote-first', '11+ Years'],
    accent: true,
  },
  {
    id: 'ai-rag',
    span: 'col-span-1 md:row-span-2',
    title: 'AI & RAG Systems',
    description:
      'Architected "Football AI" — a domain-specific conversational agent using RAG and ReAct patterns, enabling natural language queries over complex sports datasets. Built AI-driven content strategy tools reducing manual research by 50%.',
    badges: ['LangChain', 'ReAct', 'Vector DB'],
    detail: 'Turfmapp — Oct 2021 - Nov 2025',
  },
  {
    id: 'jleague',
    span: 'col-span-1',
    title: 'J.League International Portal',
    description:
      'Engineered a high-traffic, multilingual CMS using Django/Wagtail. Integrated automated media pipelines for real-time match highlights and YouTube Live streaming.',
    badges: ['Django', 'Wagtail', 'Multilingual'],
  },
  {
    id: 'iot',
    span: 'col-span-1',
    title: 'IoT Platforms',
    description:
      'Developed scalable energy conservation systems for hotels using Angular, Hapi.js, and DynamoDB. Engineered Raspberry Pi-based controllers using Flask and MQTT for Z-Wave mesh networks.',
    badges: ['MQTT', 'Raspberry Pi', 'AWS'],
    detail: 'Smart & Connective — Jun 2017 - Jul 2021',
  },
  {
    id: 'fullstack',
    span: 'col-span-1',
    title: 'Full-Stack Craft',
    description:
      'Enterprise web applications using MERN/Next.js and Python (Django/FastAPI). Headless CMS ecosystems with Payload CMS and WordPress. E-commerce storefronts with Shopify and Webflow.',
    badges: ['Next.js', 'FastAPI', 'Payload CMS'],
    detail: 'Freelance — May 2012 - Ongoing',
  },
  {
    id: 'tech-stack',
    span: 'col-span-1 md:col-span-2',
    title: 'Tech Arsenal',
    isTechGrid: true,
  },
];

const techCategories = [
  {
    label: 'AI & Data',
    items: ['RAG', 'Agentic Workflows', 'LangChain', 'LlamaIndex', 'ElasticSearch'],
  },
  {
    label: 'Languages',
    items: ['TypeScript', 'Python', 'Lua', 'Node.js'],
  },
  {
    label: 'Backend & DB',
    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Neo4j', 'Supabase'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Linux', 'OpenWrt'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Angular', 'React Native'],
  },
];

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
          {experiences.map((item, index) => (
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
        {techCategories.map((cat) => (
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
