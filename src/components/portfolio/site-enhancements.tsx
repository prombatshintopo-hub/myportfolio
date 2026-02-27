'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Download, Mail, MessageCircle, Plus, X } from 'lucide-react';

type SiteEnhancementsProps = {
  email: string;
  whatsapp: string;
  resumeUrl: string;
};

export function SiteEnhancements({ email, whatsapp, resumeUrl }: SiteEnhancementsProps) {
  const [progress, setProgress] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(nextProgress);
      setShowTopButton(scrollTop > 420);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-[linear-gradient(90deg,var(--primary),var(--secondary))] transition-[width] duration-150"
          style={{ width: `${Math.max(0, Math.min(progress, 100))}%` }}
        />
      </div>

      <div className="fixed bottom-5 left-5 z-[60] flex flex-col items-start gap-2">
        <AnimatePresence>
          {isQuickActionsOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="mb-1 min-w-[146px] rounded-2xl border border-[var(--primary)]/35 bg-[var(--card)]/92 p-2 shadow-xl backdrop-blur-lg"
            >
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-[var(--foreground)]/92 transition hover:bg-[var(--primary)]/15 hover:text-[var(--secondary)]"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-[var(--foreground)]/92 transition hover:bg-[var(--primary)]/15 hover:text-[var(--secondary)]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={resumeUrl}
                className="mt-1 flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-[var(--foreground)]/92 transition hover:bg-[var(--primary)]/15 hover:text-[var(--secondary)]"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsQuickActionsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/45 bg-[var(--card)]/92 text-[var(--foreground)]/92 shadow-lg backdrop-blur-md transition hover:border-[var(--secondary)]/60 hover:text-[var(--secondary)]"
          aria-label={isQuickActionsOpen ? 'Collapse quick actions' : 'Expand quick actions'}
        >
          {isQuickActionsOpen ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>

        {showTopButton ? (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--secondary)]/60 bg-[var(--secondary)]/14 text-[var(--secondary)] transition hover:bg-[var(--secondary)]/24"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        ) : null}
      </div>
    </>
  );
}
