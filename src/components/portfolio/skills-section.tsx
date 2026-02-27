'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Code2, Database, Palette, Rocket, Shield, Zap } from 'lucide-react';
import { useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { DetailContent } from '@/lib/detail-types';
import { DetailModal } from '@/components/portfolio/detail-modal';

type SkillItem = {
  title: string;
  description: string;
  href?: string;
  details?: string[];
};

const skillIcons: LucideIcon[] = [Code2, Database, Palette, Rocket, Shield, Zap];

export function SkillsSection({ skills }: { skills: SkillItem[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeDetail, setActiveDetail] = useState<DetailContent | null>(null);

  const openSkill = (skill: SkillItem) => {
    setActiveDetail({
      typeLabel: 'Core Competency',
      title: skill.title,
      description: skill.description,
      bullets: skill.details,
      actions: skill.href
        ? [
            {
              label: skill.href.startsWith('#') ? 'Jump to section' : 'Open related link',
              href: skill.href,
              external: !skill.href.startsWith('#')
            }
          ]
        : undefined
    });
  };

  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.2em] text-[var(--secondary)] uppercase">Skills</p>
          <a
            href="#experience"
            className="group mt-4 inline-flex items-center gap-2 font-display text-3xl tracking-tight text-[var(--foreground)] transition hover:text-[var(--secondary)] sm:text-5xl"
          >
            Core Competencies
            <ArrowUpRight className="h-6 w-6 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="mt-4 text-base leading-relaxed text-[var(--foreground)]/78">
            Technical depth across infrastructure, security, and digital execution with a quality-first approach.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => {
            const Icon = skillIcons[index % skillIcons.length];
            return (
              <motion.button
                key={skill.title}
                type="button"
                onClick={() => openSkill(skill)}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-[10px] border border-[var(--primary)]/20 bg-[var(--card)]/75 p-5 text-left backdrop-blur-md transition-colors hover:border-[var(--secondary)]/45 hover:bg-[rgba(17,24,20,0.9)] sm:p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[var(--primary)]/12 text-[var(--secondary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 inline-flex items-center gap-2 text-xl font-medium text-[var(--foreground)]">
                  {skill.title}
                  <ArrowUpRight className="h-4 w-4 text-[var(--secondary)]/80" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {skill.description}
                </p>
                <div className="mt-4 text-xs text-[var(--secondary)]">Click for expanded details</div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <DetailModal open={!!activeDetail} detail={activeDetail} onClose={() => setActiveDetail(null)} />
    </section>
  );
}
