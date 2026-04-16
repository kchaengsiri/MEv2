'use client';

import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-ocean-deep">
      {/* Wave divider */}
      <svg
        className="absolute -top-px left-0 w-full h-12 text-background"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C360,48 720,0 1080,24 C1260,36 1350,12 1440,0 L1440,48 L0,48 Z" fill="currentColor" />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl pt-20 px-6 text-center">{/* Brand */}</div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Education */}
          <div>
            <h4 className="text-sm font-semibold text-foam-white mb-4 uppercase tracking-wider">Education</h4>
            <p className="text-sm text-coral-mist/70">B.Sc. Information Technology</p>
            <p className="text-xs text-coral-mist/50 font-mono mt-1">at Prince of Songkla University</p>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-sm font-semibold text-foam-white mb-4 uppercase tracking-wider">Experience</h4>
            <ul className="flex flex-col space-y-2 list-disc">
              <li className="">
                <p className="text-sm text-coral-mist/70">Lead Full-Stack Developer & AI Engineer</p>
                <p className="text-xs text-coral-mist/50 font-mono mt-1">Turfmapp</p>
              </li>
              <li>
                <p className="text-sm text-coral-mist/70">Senior Full-Stack Developer & IoT Engineer</p>
                <p className="text-xs text-coral-mist/50 font-mono mt-1">Smart&Connective</p>
              </li>
              <li>
                <p className="text-sm text-coral-mist/70">Full-Stack Developer</p>
                <p className="text-xs text-coral-mist/50 font-mono mt-1">IMT-ASE</p>
              </li>
              <li>
                <p className="text-sm text-coral-mist/70">POS & PMS System Support</p>
                <p className="text-xs text-coral-mist/50 font-mono mt-1">NATechnosys</p>
              </li>
              <li>
                <p className="text-sm text-coral-mist/70">Administrator & IT Support</p>
                <p className="text-xs text-coral-mist/50 font-mono mt-1">WANNET</p>
              </li>
              <li>
                <p className="text-sm text-coral-mist/70">Freelance Software developer</p>
                <p className="text-xs text-coral-mist/50 font-mono mt-1">Self-employed</p>
              </li>
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

              <li>
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
              &copy; {new Date().getFullYear()} Kitisak Chaengsiri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
