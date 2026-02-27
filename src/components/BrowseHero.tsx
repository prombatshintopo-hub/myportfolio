'use client';

import { motion } from 'framer-motion';
import { Info, Play } from 'lucide-react';
import type { Title } from '@/lib/types';
import { gradientFromSeed } from '@/lib/utils';

export function BrowseHero({
  featured,
  onSelect
}: {
  featured: Title;
  onSelect: (t: Title) => void;
}) {
  const bg = gradientFromSeed(featured.posterSeed ?? featured.id);

  return (
    <section className="relative min-h-[68vh] overflow-hidden sm:min-h-[74vh]">
      <div className="absolute inset-0 scale-110 blur-[1.5px]" style={{ backgroundImage: bg }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#141414_8%,rgba(20,20,20,0.32)_45%,rgba(20,20,20,0.14)_70%),linear-gradient(to_right,#141414_18%,rgba(20,20,20,0.35)_58%,rgba(20,20,20,0.84)_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto flex min-h-[68vh] max-w-[1400px] items-end px-4 pb-16 pt-28 sm:min-h-[74vh] sm:px-8 sm:pb-20 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58 }}
          className="max-w-2xl"
        >
          <div className="font-brand text-xl tracking-[0.26em] text-[#E50914] sm:text-2xl">
            FEATURED
          </div>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">{featured.name}</h1>

          {featured.subtitle ? (
            <div className="mt-3 text-base text-white/85 sm:text-lg">{featured.subtitle}</div>
          ) : null}

          <p className="mt-4 line-clamp-4 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-white/82 sm:text-base">
            {featured.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onSelect(featured)}
              className="inline-flex items-center gap-2 rounded bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              <Play className="h-4 w-4" />
              Play
            </button>
            <button
              type="button"
              onClick={() => onSelect(featured)}
              className="inline-flex items-center gap-2 rounded bg-white/30 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/40"
            >
              <Info className="h-4 w-4" />
              More Info
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
