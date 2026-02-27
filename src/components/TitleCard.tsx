'use client';

import { motion } from 'framer-motion';
import type { Title } from '@/lib/types';
import { GradientPoster } from '@/components/GradientPoster';
import { cn } from '@/lib/utils';

export function TitleCard({
  item,
  onSelect
}: {
  item: Title;
  onSelect: (t: Title) => void;
}) {
  const seed = item.posterSeed ?? item.id;
  const badge = item.kind === 'project' ? item.status : item.year;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(item)}
      className={cn(
        'group relative z-0 flex-shrink-0 text-left outline-none',
        'h-[124px] w-[220px] sm:h-[146px] sm:w-[258px] lg:h-[166px] lg:w-[296px]'
      )}
      whileHover={{ scale: 1.12, zIndex: 20 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      aria-label={`Open ${item.name}`}
    >
      <GradientPoster seed={seed} title={item.name} subtitle={item.subtitle} />

      {badge ? (
        <div className="absolute left-2 top-2 rounded bg-black/66 px-2 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-white/85 backdrop-blur sm:left-3 sm:top-3">
          {badge}
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-white/22" />
    </motion.button>
  );
}
