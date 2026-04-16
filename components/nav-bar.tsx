'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { CTAButton } from './cta-button';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sunset-orange/20 border border-sunset-orange/30">
            <span className="text-sm font-bold text-sunset-orange">KC</span>
          </div>
          {/* <span className="text-sm font-semibold text-foam-white hidden sm:inline">Kitisak Chaengsiri</span> */}
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-coral-mist transition-colors duration-300 hover:text-sunset-orange"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sunset-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        {/* <a
          href="mailto:kchaengsiri@gmail.com"
          className="hidden md:inline-flex items-center rounded-full bg-sunset-orange/15 px-4 py-2 text-sm font-medium text-sunset-orange border border-sunset-orange/25 transition-all duration-300 hover:bg-sunset-orange/25 hover:border-sunset-orange/40 active:translate-y-px"
        >
          Get in Touch
        </a> */}
        <CTAButton href="mailto:kchaengsiri@gmail.com" label="Get in Touch" className="hidden md:inline-flex" />

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-9 h-9 text-coral-mist"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-ocean-teal/15"
          >
            <nav className="flex flex-col items-center gap-4 py-6 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-coral-mist hover:text-foam-white transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:kchaengsiri@gmail.com"
                className="mt-2 inline-flex items-center rounded-full bg-sunset-orange/15 px-5 py-2.5 text-sm font-medium text-sunset-orange border border-sunset-orange/25"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
