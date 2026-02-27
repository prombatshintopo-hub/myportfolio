'use client';

import { useEffect, useMemo, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import type { Title } from '@/lib/types';
import { GradientPoster } from '@/components/GradientPoster';
import { cn } from '@/lib/utils';

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-white/18 bg-black/42 px-2.5 py-1 text-xs text-white/90">
      {children}
    </span>
  );
}

export function TitleModal({
  open,
  item,
  onClose
}: {
  open: boolean;
  item: Title | null;
  onClose: () => void;
}) {
  const seed = useMemo(() => item?.posterSeed ?? item?.id ?? 'modal', [item]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && item ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/78"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close dialog"
          />

          <motion.div
            className={cn(
              'relative w-full max-w-5xl overflow-hidden rounded-t-2xl border border-white/10 bg-[#181818] shadow-netflix',
              'sm:rounded-2xl'
            )}
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
          >
            <div className="absolute right-3 top-3 z-10">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white/90 transition hover:bg-black/85"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[1.25fr_1fr]">
              <div className="h-[240px] sm:min-h-[520px]">
                <GradientPoster
                  seed={seed}
                  title={item.name}
                  subtitle={item.subtitle}
                  className="h-full w-full rounded-none border-0 shadow-none"
                />
              </div>

              <div className="max-h-[68vh] overflow-y-auto p-5 sm:max-h-[76vh] sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Chip>{item.kind.toUpperCase()}</Chip>
                  {item.status ? <Chip>{item.status}</Chip> : null}
                  {item.year ? <Chip>{item.year}</Chip> : null}
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-tight">{item.name}</h3>
                {item.subtitle ? (
                  <p className="mt-1 text-sm text-white/72">{item.subtitle}</p>
                ) : null}

                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-white/90">
                  {item.description}
                </p>

                {item.bullets?.length ? (
                  <div className="mt-5">
                    <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/68">
                      Highlights
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/86">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {item.tech?.length ? (
                  <div className="mt-5">
                    <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/68">
                      Tech
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                ) : null}

                {item.tags?.length ? (
                  <div className="mt-5">
                    <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/68">
                      Tags
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                ) : null}

                {item.links?.length ? (
                  <div className="mt-6">
                    <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/68">
                      Links
                    </div>
                    <div className="mt-2 flex flex-col gap-2">
                      {item.links.map((l) => (
                        <a
                          key={l.href + l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-between rounded border border-white/16 bg-black/38 px-4 py-3 text-sm transition hover:bg-black/56"
                        >
                          <span className="font-medium">{l.label}</span>
                          <ExternalLink className="h-4 w-4 text-white/70" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-7 text-xs text-white/52">Tip: Press Esc to close.</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
