import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export function CTAButton({ href, label, className }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        `inline-flex items-center rounded-full bg-sunset-orange/15 px-4 py-2 text-sm font-medium text-sunset-orange border border-sunset-orange/25 transition-all duration-300 hover:bg-sunset-orange/25 hover:border-sunset-orange/40 active:translate-y-px`,
        className,
      )}
    >
      {label || `Let's talk`}
    </a>
  );
}
