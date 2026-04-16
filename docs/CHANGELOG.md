# Changelog

## [2026-04-16] feat: Remotion ocean wave neural network background

### Added
- **Remotion Composition** (`remotion/OceanWave.tsx`): 40-node neural network animation with ocean-wave sine motion. Nodes and connection lines pulse with teal/orange colors. Seamlessly loops via angle-based animation. Uses Remotion's deterministic `random()` for seed-based positioning.
- **Remotion Root** (`remotion/Root.tsx`): Registers OceanWave composition at 1920×1080, 30fps, 5 seconds (150 frames).
- **Remotion Entry** (`remotion/index.ts`): Standard Remotion entry point calling `registerRoot()`.
- **Pre-rendered Video** (`public/videos/ocean-wave.webm`): 248.7 kB VP8 WebM rendered at build time — no runtime SSR cost.
- **Hero Integration** (`components/hero-section.tsx`): Background `<video>` element with `autoPlay loop muted playsInline`, 30% opacity, `mix-blend-lighten` blend mode.
- **Build Script** (`package.json`): Added `render:ocean` script for `bunx remotion render` → `public/videos/ocean-wave.webm`.

### Dependencies
- Added `remotion@4.0.399` and `@remotion/cli@4.0.399`.

---

## [2026-04-16] feat: Sea, Sand, Sun Phuket-themed Tech Lead landing page

### Added
- **Design System** (`globals.css`): Deep Ocean dark-mode-first color palette using oklch colors. Custom tokens for Ocean, Sunset, Sand, Foam, and Coral color families. Glassmorphism utility classes (`.glass-card`, `.glass-nav`, `.glass-subtle`). CSS keyframe animations: `wave-drift`, `palm-sway`, `sunrise-glow`, `ripple`, `float`, `shimmer`.
- **Layout** (`layout.tsx`): Outfit display font + Geist Mono code font. SEO metadata with OpenGraph tags. Forced dark mode.
- **Hero Section** (`components/hero-section.tsx`): Full-viewport hero with scroll-driven scale/rotate animation (Framer Motion). Animated gradient headline, location badge, CTA button, and tech stack row. Composed of WaveBackground, PalmTrees, and TextRotator sub-components.
- **Wave Background** (`components/wave-background.tsx`): Three-layer animated SVG ocean waves with different speeds, opacities, and gradients. GPU-accelerated translateX animations.
- **Palm Trees** (`components/palm-trees.tsx`): SVG coconut tree silhouettes with CSS palm-sway animation. Hidden on mobile, positioned at left/right hero edges.
- **Text Rotator** (`components/text-rotator.tsx`): Letter-by-letter blur/slide animation cycling through role titles using Framer Motion AnimatePresence.
- **Bento Grid** (`components/bento-grid.tsx`): Asymmetric glass card layout showing experience (Island Engineer, AI/RAG, J.League, IoT, Full-Stack) and a "Tech Arsenal" grid. Staggered reveal animations on scroll.
- **Glass Card** (`components/glass-card.tsx`): Reusable glassmorphism card with optional water ripple hover effect. Sub-components: GlassCardTitle, GlassCardDescription, GlassCardBadge.
- **Navigation** (`components/nav-bar.tsx`): Fixed glassmorphism navbar with animated slide-in entry, underline hover effect on links, mobile hamburger with AnimatePresence collapse.
- **Footer** (`components/footer.tsx`): Wave SVG divider, GitHub/email contact links, education section, "Built with warmth from Phuket" tagline.

### Dependencies
- Added `motion` (Framer Motion v12) for scroll-driven and entrance animations.

### Config
- Updated `biome.json`: Enabled `css.parser.tailwindDirectives`, disabled `noArrayIndexKey` (needed for letter-by-letter animations).

### Branch
- `feat/phuket-tech-theme`
