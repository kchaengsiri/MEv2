import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverRipple?: boolean;
}

export function GlassCard({ children, className, hoverRipple = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl p-6 transition-all duration-500',
        'hover:-translate-y-1 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]',
        'hover:border-ocean-teal/40',
        hoverRipple && 'group relative overflow-hidden',
        className,
      )}
    >
      {hoverRipple && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          aria-hidden="true"
        >
          <div
            className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-teal/20"
            style={{ animation: 'ripple 2s ease-out infinite' }}
          />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function GlassCardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('font-heading text-lg font-semibold text-foam-white', className)}>{children}</h3>;
}

export function GlassCardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('mt-2 text-sm leading-relaxed text-coral-mist', className)}>{children}</p>;
}

export function GlassCardBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        'bg-ocean-teal/20 text-ocean-shallow border border-ocean-teal/30',
        className,
      )}
    >
      {children}
    </span>
  );
}
