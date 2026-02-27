import { cn, gradientFromSeed } from '@/lib/utils';

export function GradientPoster({
  seed,
  title,
  subtitle,
  className
}: {
  seed: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  const bg = gradientFromSeed(seed);

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden rounded-md border border-white/8',
        'shadow-netflix',
        className
      )}
      style={{ backgroundImage: bg }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_5%,rgba(255,255,255,0.16),transparent_45%),linear-gradient(to_top,rgba(0,0,0,0.86)_8%,rgba(0,0,0,0.44)_58%,rgba(0,0,0,0.20)_100%)]" />
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <div className="text-[10px] font-semibold tracking-[0.19em] uppercase text-white/72 sm:text-xs">
          {subtitle ?? 'Featured'}
        </div>
        <div className="mt-1 line-clamp-2 text-sm font-bold leading-tight text-white sm:text-base">
          {title}
        </div>
      </div>
    </div>
  );
}
