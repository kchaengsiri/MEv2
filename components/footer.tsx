'use client';

import { motion } from 'motion/react';
import { EDUCATIONS, EXPERIENCES } from '@/lib/constants'
import { FanCoral } from '@/components/fan-coral';
import { WaveBackground } from '@/components/wave-background';

export function Footer() {
  return (
    <footer className="relative bg-ocean-deep">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Wave divider */}
        <svg
          className="absolute -top-px left-0 w-full h-32 text-ocean-midnight"
          viewBox="0 0 1440 128"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,128 C128,128 200,88 430,84  1080,128 1260,28 1440,128 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>

        <FanCoral />
        <WaveBackground />
      </motion.div>

      <div id="contact" className="mx-auto max-w-6xl px-6 pt-40 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Education */}
          <div>
            <h4 className="text-sm font-semibold text-foam-white mb-4 uppercase tracking-wider">Educations</h4>

            <ul className="flex flex-col space-y-4">
              {EDUCATIONS.map((item, index) => (
                <li key={`education-${index}`} className="">
                  <p className="font-semibold text-sm text-coral-mist/70">{item.title}</p>
                  <p className="text-xs text-coral-mist/50 font-mono mt-1">{item.school}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-sm font-semibold text-foam-white mb-4 uppercase tracking-wider">Experiences</h4>

            <ul className="flex flex-col space-y-4">
              {EXPERIENCES.map((item, index) => (
                <li key={`experience-${index}`} className="">
                  <p className="font-semibold text-sm text-coral-mist/70">{item.title}</p>
                  <p className="text-xs text-coral-mist/50 font-mono mt-1">{item.company}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foam-white mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/kchaengsiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-coral-mist/70 hover:text-sunset-orange transition-colors inline-flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  github.com/kchaengsiri
                </a>
              </li>
              <li>
                <a
                  href="mailto:kchaengsiri@gmail.com"
                  className="text-sm text-coral-mist/70 hover:text-sunset-orange transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  kchaengsiri@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ocean-teal/15 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-sunset-orange/20 border border-sunset-orange/30">
              <span className="text-xs font-bold text-sunset-orange">KC</span>
            </div>

            <p className="font-semibold text-xs text-foam-white/60">
              &copy; {new Date().getFullYear()} KChaengsiri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
