'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import type { DetailContent } from '@/lib/detail-types';

type DetailModalProps = {
  open: boolean;
  detail: DetailContent | null;
  onClose: () => void;
};

export function DetailModal({ open, detail, onClose }: DetailModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && detail ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${detail.title} details`}
        >
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 26, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[10px] border border-[var(--primary)]/30 bg-[var(--card)] p-5 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                {detail.typeLabel ? (
                  <p className="text-xs tracking-[0.16em] text-[var(--secondary)] uppercase">
                    {detail.typeLabel}
                  </p>
                ) : null}
                <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                  {detail.title}
                </h3>
                {detail.subtitle ? (
                  <p className="mt-2 text-sm text-[var(--foreground)]/78 sm:text-base">{detail.subtitle}</p>
                ) : null}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--primary)]/35 text-[var(--foreground)]/80 transition hover:border-[var(--secondary)]/50 hover:text-[var(--secondary)]"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
              {detail.description}
            </p>

            {(detail.bullets ?? []).length ? (
              <ul className="mt-5 space-y-2 text-sm text-[var(--foreground)]/84 sm:text-base">
                {(detail.bullets ?? []).map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--secondary)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {(detail.tags ?? []).length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {(detail.tags ?? []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--primary)]/22 bg-[var(--primary)]/10 px-3 py-1 text-xs text-[var(--foreground)]/86"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {(detail.actions ?? []).length ? (
              <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
                {(detail.actions ?? []).map((action) => (
                  <a
                    key={`${action.label}-${action.href}`}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    onClick={() => {
                      if (!action.external) onClose();
                    }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--secondary)]/60 px-4 py-2 text-sm text-[var(--secondary)] transition hover:bg-[var(--secondary)]/15 sm:w-auto"
                  >
                    {action.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
