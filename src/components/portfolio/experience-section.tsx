'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Title } from '@/lib/types';
import type { DetailContent } from '@/lib/detail-types';
import { DetailModal } from '@/components/portfolio/detail-modal';

type ExperienceSectionProps = {
  experiences: Title[];
  certifications: Title[];
};

export function ExperienceSection({ experiences, certifications }: ExperienceSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeDetail, setActiveDetail] = useState<DetailContent | null>(null);

  const openTitleDetail = (item: Title, typeLabel: string) => {
    setActiveDetail({
      typeLabel,
      title: item.name,
      subtitle: item.subtitle,
      description: item.description,
      bullets: item.bullets,
      tags: [...(item.tech ?? []), ...(item.tags ?? [])],
      actions: item.links?.map((link) => ({ label: link.label, href: link.href, external: true }))
    });
  };

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.2em] text-[var(--secondary)] uppercase">Experience</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            Professional Timeline
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--foreground)]/78">
            Hands-on support in IT operations, systems and ERP environments, and digital project execution.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <motion.button
                key={experience.id}
                type="button"
                onClick={() => openTitleDetail(experience, 'Experience')}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="w-full rounded-[10px] border border-[var(--primary)]/20 bg-[var(--card)]/75 p-5 text-left backdrop-blur-md transition hover:border-[var(--secondary)]/45"
              >
                <p className="text-xs tracking-[0.14em] text-[var(--secondary)] uppercase">{experience.year}</p>
                <h3 className="mt-2 text-xl font-medium text-[var(--foreground)]">{experience.name}</h3>
                {experience.subtitle ? (
                  <p className="mt-1 text-sm text-[var(--foreground)]/78">{experience.subtitle}</p>
                ) : null}
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {experience.description.split('\n')[0]}
                </p>
                <div className="mt-4 text-xs text-[var(--secondary)]">Click for expanded details</div>
              </motion.button>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[10px] border border-[var(--primary)]/24 bg-[var(--card)]/78 p-6 backdrop-blur-md"
          >
            <p className="text-xs tracking-[0.16em] text-[var(--secondary)] uppercase">Certifications</p>
            <ul className="mt-4 space-y-3">
              {certifications.slice(0, 6).map((cert) => (
                <li key={cert.id}>
                  <button
                    type="button"
                    onClick={() => openTitleDetail(cert, 'Certification')}
                    className="w-full rounded-[10px] border border-[var(--primary)]/18 bg-[var(--muted)]/65 px-4 py-3 text-left transition hover:border-[var(--secondary)]/45"
                  >
                    <div className="text-sm font-medium text-[var(--foreground)]">{cert.name}</div>
                    <div className="mt-1 text-xs text-[var(--muted-foreground)]">
                      {cert.subtitle} {cert.year ? `| ${cert.year}` : ''}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>

      <DetailModal open={!!activeDetail} detail={activeDetail} onClose={() => setActiveDetail(null)} />
    </section>
  );
}
