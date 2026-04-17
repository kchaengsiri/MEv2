# Changelog

## [2026-04-17] feat: Phuket Tech Theme (v1.0.0) & Polish
Finalized full implementation of the "Sea, Sand, Sun" Phuket-themed landing page, focusing on data refinement, SEO, and component polishing.

### Added
- **Decorative Components**: Added `FanCoral` (hand-drawn style SVG coral decorative elements) to complete the digital reef theme.
- **Dynamic Branding**: Replaced the static favicon with a dynamic `app/icon.tsx` generator (Next.js OG) yielding a high-contrast 'KC' brand mark.

### Changed & Refined
- **Projects Data**: Updated `lib/constants.ts` with refined, lead-level project details, specifically enhancing "Open Source Customization" and "Website Development" (Payload CMS, Low-Code).
- **SEO & Layout**: Simplified and polished OpenGraph metadata in `app/layout.tsx` for improved social sharing presence. Switched typography to `Outfit` for display and `Geist Mono` for code snippets.
- **Performance**: Enforced 30fps loops and build-time video assets for Vercel Edge optimization.

### Fixed
- **Hero Navigation**: Adjusted the CTA button in `components/hero-section.tsx` to correctly anchor to `#projects`.

---

## [2026-04-16] feat: Sea, Sand, Sun Core Infrastructure & Animations
Initial architectural build out of the Phuket-themed Tech Lead landing page.

### Added
- **Design System** (`app/globals.css`): Deep Ocean dark-mode-first color palette using OKLCH. Custom tokens for Ocean, Sunset, Sand, Foam, and Coral color families. Glassmorphism utilities (`.glass-card`, `.glass-nav`) and CSS keyframe animations (`wave-drift`, `palm-sway`, `sunrise-glow`, `ripple`, `float`, `shimmer`).
- **Hero Section** (`components/hero-section.tsx`): Full-viewport entry with scroll-driven scale/rotate animations via Framer Motion.
- **Thematic Components**:
  - `WaveBackground`: Three-layer animated SVG ocean waves with GPU-accelerated translateX animations.
  - `PalmTrees`: SVG coconut tree silhouettes with CSS palm-sway animation.
  - `ProjectsSection` & `BentoGrid`: Asymmetric glass card layout showing experience (Island Engineer, AI/RAG, J.League, IoT) with staggered reveal animations.
  - `SkillsSection`: Grouped "Tech Arsenal" overview.
- **Remotion Ocean Background** (`remotion/OceanWave.tsx`): 40-node neural network animation with ocean-wave sine motion. Rendered at build time via `render:ocean` script to a 248.7 kB VP8 WebM (`public/videos/ocean-wave.webm`) for a zero-runtime-cost ambient background.
- **Dynamic Text Rotator** (`components/text-rotator.tsx`): Letter-by-letter blur/slide animation cycling through role titles. Dynamically calculates and animates width using Framer Motion's `layout` prop to eliminate awkward gaps.
- **Navigation & Footer**: Fixed glassmorphism navbar with animated slide-in entry and AnimatePresence collapse. Footer includes Wave SVG divider and "Built with warmth from Phuket" tagline.

### Changed
- **Hero Headline**: Updated to "Where Modern Code Meets the Coral Coast" for improved branding and a premium feel.
- **Config** (`biome.json`): Enabled `css.parser.tailwindDirectives`, disabled `noArrayIndexKey` (required for letter-by-letter animations).

### Dependencies
- Added `motion` (Framer Motion v12) for scroll-driven and entrance animations.
- Added `remotion@4.0.399` and `@remotion/cli@4.0.399`.
