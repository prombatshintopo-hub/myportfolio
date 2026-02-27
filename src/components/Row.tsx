'use client';

import { useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Row as RowType, Title } from '@/lib/types';
import { TitleCard } from '@/components/TitleCard';
import { cn } from '@/lib/utils';

export function Row({
  row,
  items,
  onSelect
}: {
  row: RowType;
  items: Title[];
  onSelect: (t: Title) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => items.filter(row.predicate), [items, row]);

  const scrollByAmount = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.88) * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  if (filtered.length === 0) return null;

  return (
    <section className="relative">
      <div className="mb-3 flex items-end justify-between gap-3 px-4 sm:px-8">
        <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{row.label}</h2>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-sm border border-white/18',
              'bg-black/48 text-white/90 transition hover:bg-black/78'
            )}
            aria-label={`Scroll ${row.label} left`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-sm border border-white/18',
              'bg-black/48 text-white/90 transition hover:bg-black/78'
            )}
            aria-label={`Scroll ${row.label} right`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 hidden w-8 bg-[linear-gradient(to_right,#141414,transparent)] sm:block" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 hidden w-8 bg-[linear-gradient(to_left,#141414,transparent)] sm:block" />

        <div
          ref={scrollerRef}
          className={cn('no-scrollbar flex gap-2 overflow-x-auto px-4 pb-1 pt-2 sm:gap-3 sm:px-8', 'scroll-smooth')}
        >
          {filtered.map((t) => (
            <TitleCard key={t.id} item={t} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
