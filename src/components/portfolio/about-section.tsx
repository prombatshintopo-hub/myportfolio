'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type AboutSectionProps = {
  summary: string;
  years: number;
  projects: number;
  satisfaction: string;
};

export function AboutSection({ summary, years, projects, satisfaction }: AboutSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -right-3 -top-3 h-28 w-28 rounded-md border border-[var(--secondary)]/45" />
          <div className="relative h-[420px] overflow-hidden rounded-[10px] border border-[var(--secondary)]/30 bg-[linear-gradient(160deg,#101915,#0d1412_55%,#0a110f)] p-7 sm:h-[500px]">
            <div className="absolute right-8 top-10 h-28 w-28 rounded-full bg-[var(--secondary)]/12 blur-2xl" />
            <div className="absolute bottom-12 left-8 h-36 w-36 rounded-full bg-[var(--primary)]/16 blur-2xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--secondary)] uppercase">Profile Snapshot</p>
                <h3 className="mt-3 font-display text-3xl text-[var(--foreground)] sm:text-4xl">
                  Systems + Security + Delivery
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--foreground)]/82">
                <div className="rounded-[10px] border border-[var(--primary)]/20 bg-[var(--muted)]/72 px-4 py-3">
                  Incident and request handling with fast, practical resolution.
                </div>
                <div className="rounded-[10px] border border-[var(--primary)]/20 bg-[var(--muted)]/72 px-4 py-3">
                  Business software and ERP support focused on operational continuity.
                </div>
                <div className="rounded-[10px] border border-[var(--primary)]/20 bg-[var(--muted)]/72 px-4 py-3">
                  Security-minded execution: access hygiene, risk awareness, and controls.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <p className="text-xs tracking-[0.2em] text-[var(--secondary)] uppercase">About</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            Professional Profile
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--foreground)]/82 sm:text-lg">
            {summary}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <a
              href="#experience"
              className="rounded-[10px] border border-[var(--primary)]/25 bg-[var(--card)]/75 p-4 transition hover:border-[var(--secondary)]/45"
            >
              <div className="text-3xl font-semibold text-[var(--secondary)]">{years}+</div>
              <div className="mt-2 border-t border-[var(--primary)]/30 pt-2 text-xs tracking-[0.14em] text-[var(--muted-foreground)] uppercase">
                Years
              </div>
            </a>
            <a
              href="#projects"
              className="rounded-[10px] border border-[var(--primary)]/25 bg-[var(--card)]/75 p-4 transition hover:border-[var(--secondary)]/45"
            >
              <div className="text-3xl font-semibold text-[var(--secondary)]">{projects}+</div>
              <div className="mt-2 border-t border-[var(--primary)]/30 pt-2 text-xs tracking-[0.14em] text-[var(--muted-foreground)] uppercase">
                Projects
              </div>
            </a>
            <a
              href="#contact"
              className="rounded-[10px] border border-[var(--primary)]/25 bg-[var(--card)]/75 p-4 transition hover:border-[var(--secondary)]/45"
            >
              <div className="text-3xl font-semibold text-[var(--secondary)]">{satisfaction}</div>
              <div className="mt-2 border-t border-[var(--primary)]/30 pt-2 text-xs tracking-[0.14em] text-[var(--muted-foreground)] uppercase">
                Satisfaction
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
