import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'inline-flex select-none items-center',
        'transition-opacity hover:opacity-90',
        className
      )}
      aria-label="Go to home"
    >
      <span className="font-brand text-[2rem] leading-none tracking-[0.16em] text-[#E50914] sm:text-[2.25rem]">
        MBATSHI
      </span>
    </Link>
  );
}
