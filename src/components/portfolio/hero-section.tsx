'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';

type HeroSectionProps = {
  name: string;
  headline: string;
  email: string;
  phone: string;
  whatsapp: string;
  portfolioUrl: string;
  resumeUrl: string;
  location: string;
  openTo: string;
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function HeroSection({
  name,
  headline,
  email,
  phone,
  whatsapp,
  portfolioUrl,
  resumeUrl,
  location,
  openTo
}: HeroSectionProps) {
  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(0,128,77,0.22),transparent_38%),radial-gradient(circle_at_88%_14%,rgba(212,175,55,0.16),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(10,15,13,0.88),rgba(16,25,21,0.86)_54%,rgba(10,17,15,0.9))]" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-9 px-4 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-xs tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm"
          >
            Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
            className="mt-4 max-w-4xl font-display text-4xl leading-[0.96] text-[var(--foreground)] sm:text-6xl lg:text-8xl"
          >
            {firstName}
            <span className="block text-[var(--primary)]">{lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
            className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--foreground)]/82 sm:text-lg"
          >
            {headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:scale-105 hover:bg-[var(--accent)] sm:w-auto sm:px-8 sm:py-4"
            >
              View Work
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={`mailto:${email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--secondary)]/75 px-6 py-3.5 text-sm font-medium text-[var(--secondary)] transition hover:scale-105 hover:bg-[var(--secondary)]/15 sm:w-auto sm:px-8 sm:py-4"
            >
              Get In Touch
            </a>
            <a
              href={resumeUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--primary)]/50 px-6 py-3.5 text-sm font-medium text-[var(--foreground)]/90 transition hover:scale-105 hover:bg-[var(--primary)]/14 sm:w-auto sm:px-8 sm:py-4"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="rounded-[10px] border border-[var(--primary)]/26 bg-[var(--card)]/78 p-5 backdrop-blur-md sm:p-7"
        >
          <div className="relative mb-5 h-52 overflow-hidden rounded-[10px] border border-[var(--primary)]/30 sm:h-64">
            <Image
              src="/images/mbatshi-quick-profile.jpg"
              alt={`${name} professional portrait`}
              fill
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 80vw, 92vw"
              className="object-cover object-[50%_12%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,15,13,0.5),rgba(10,15,13,0.06))]" />
          </div>
          <p className="text-xs tracking-[0.16em] text-[var(--secondary)] uppercase">Quick Profile</p>
          <div className="mt-4 space-y-4 text-sm text-[var(--foreground)]/84">
            <div className="rounded-[10px] border border-[var(--primary)]/18 bg-[var(--muted)]/65 p-4">
              <div className="text-xs tracking-[0.14em] text-[var(--muted-foreground)] uppercase">Location</div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex break-words font-medium text-[var(--foreground)] transition hover:text-[var(--secondary)]"
              >
                {location}
              </a>
            </div>
            <div className="rounded-[10px] border border-[var(--primary)]/18 bg-[var(--muted)]/65 p-4">
              <div className="text-xs tracking-[0.14em] text-[var(--muted-foreground)] uppercase">Phone</div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex break-words font-medium text-[var(--foreground)] transition hover:text-[var(--secondary)]"
              >
                {phone} (WhatsApp)
              </a>
            </div>
            <div className="rounded-[10px] border border-[var(--primary)]/18 bg-[var(--muted)]/65 p-4">
              <div className="text-xs tracking-[0.14em] text-[var(--muted-foreground)] uppercase">Email</div>
              <a
                href={`mailto:${email}`}
                className="mt-1 inline-flex break-all font-medium text-[var(--foreground)] transition hover:text-[var(--secondary)]"
              >
                {email}
              </a>
            </div>
            <div className="rounded-[10px] border border-[var(--primary)]/18 bg-[var(--muted)]/65 p-4">
              <div className="text-xs tracking-[0.14em] text-[var(--muted-foreground)] uppercase">Portfolio</div>
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex font-medium text-[var(--foreground)] transition hover:text-[var(--secondary)]"
              >
                Visit Portfolio Site
              </a>
            </div>
            <div className="rounded-[10px] border border-[var(--primary)]/18 bg-[var(--muted)]/65 p-4">
              <div className="text-xs tracking-[0.14em] text-[var(--muted-foreground)] uppercase">Availability</div>
              <div className="mt-1">{openTo}</div>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-[var(--secondary)]/35 bg-[rgba(10,15,13,0.5)] p-2 text-[var(--secondary)] sm:inline-flex"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
