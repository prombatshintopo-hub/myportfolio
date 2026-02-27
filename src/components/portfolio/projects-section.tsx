'use client';

import { motion, useInView } from 'framer-motion';
import { ExternalLink, FolderKanban, Github } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import type { Title } from '@/lib/types';
import type { DetailContent } from '@/lib/detail-types';
import { DetailModal } from '@/components/portfolio/detail-modal';

type ProjectsSectionProps = {
  projects: Title[];
  portfolioUrl: string;
  githubUrl?: string;
};

export function ProjectsSection({ projects, portfolioUrl, githubUrl }: ProjectsSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeDetail, setActiveDetail] = useState<DetailContent | null>(null);

  const projectActions = useMemo(() => {
    return projects.reduce<Record<string, { viewHref: string; sourceHref: string }>>((acc, project) => {
      acc[project.id] = {
        viewHref: project.links?.[0]?.href ?? portfolioUrl,
        sourceHref: githubUrl || portfolioUrl
      };
      return acc;
    }, {});
  }, [projects, portfolioUrl, githubUrl]);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.2em] text-[var(--secondary)] uppercase">Projects</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            Selected Work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--foreground)]/78">
            Project delivery across operations, cybersecurity, and platform concepts.
          </p>
        </motion.div>

        <div ref={ref} className="mt-12 space-y-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const { viewHref, sourceHref } = projectActions[project.id];
            const mergedTags = [...(project.tech ?? []), ...(project.tags ?? [])].filter(
              (tag, i, arr) => arr.indexOf(tag) === i
            );

            const openProjectDetail = () => {
              const actions = [
                { label: 'View Project', href: viewHref, external: true },
                { label: 'Source / Portfolio', href: sourceHref, external: true }
              ].filter((action, i, arr) => arr.findIndex((item) => item.href === action.href) === i);

              setActiveDetail({
                typeLabel: 'Project',
                title: project.name,
                subtitle: project.subtitle,
                description: project.description,
                bullets: project.bullets,
                tags: mergedTags,
                actions
              });
            };

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="grid gap-7 rounded-[10px] border border-[var(--primary)]/20 bg-[var(--card)]/72 p-5 backdrop-blur-md md:grid-cols-2 md:p-8"
              >
                <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                  <button
                    type="button"
                    onClick={openProjectDetail}
                    className="relative flex h-full min-h-[280px] w-full flex-col justify-between overflow-hidden rounded-[10px] border border-[var(--primary)]/24 bg-[linear-gradient(160deg,#111a16,#0d1512_56%,#0b120f)] p-6 text-left transition hover:border-[var(--secondary)]/45"
                  >
                    <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-[var(--secondary)]/14 blur-2xl" />
                    <div className="absolute -bottom-10 -left-6 h-44 w-44 rounded-full bg-[var(--primary)]/20 blur-2xl" />

                    <div className="relative">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--secondary)]/35 bg-[var(--secondary)]/10 px-3 py-1 text-[11px] tracking-[0.14em] text-[var(--secondary)] uppercase">
                        <FolderKanban className="h-3.5 w-3.5" />
                        Case Study {index + 1}
                      </span>
                      <h4 className="mt-4 text-xl font-medium text-[var(--foreground)]">{project.name}</h4>
                      {project.subtitle ? (
                        <p className="mt-2 text-sm text-[var(--foreground)]/78">{project.subtitle}</p>
                      ) : null}
                    </div>

                    {(project.bullets ?? []).length ? (
                      <ul className="relative mt-6 space-y-2 text-sm text-[var(--foreground)]/80">
                        {(project.bullets ?? []).slice(0, 2).map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--secondary)]/90" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </button>
                </div>

                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                  <p className="text-xs tracking-[0.18em] text-[var(--secondary)] uppercase">
                    {project.status ?? 'Project'}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium text-[var(--foreground)]">{project.name}</h3>
                  {project.subtitle ? (
                    <p className="mt-2 text-sm text-[var(--foreground)]/78">{project.subtitle}</p>
                  ) : null}
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {project.description.split('\n')[0]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {mergedTags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-3 py-1 text-xs text-[var(--foreground)]/84"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={viewHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-[var(--secondary)]/55 px-4 py-2 text-sm text-[var(--secondary)] transition hover:scale-105 hover:bg-[var(--secondary)]/15"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-[var(--primary)]/35 px-4 py-2 text-sm text-[var(--foreground)]/88 transition hover:scale-105 hover:bg-[var(--primary)]/15"
                    >
                      Source Code
                      <Github className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={openProjectDetail}
                      className="inline-flex items-center gap-2 rounded-md border border-[var(--primary)]/40 px-4 py-2 text-sm text-[var(--foreground)]/88 transition hover:scale-105 hover:bg-[var(--primary)]/15"
                    >
                      Expanded View
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <DetailModal open={!!activeDetail} detail={activeDetail} onClose={() => setActiveDetail(null)} />
    </section>
  );
}
