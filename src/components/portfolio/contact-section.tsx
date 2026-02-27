'use client';

import { motion, useInView } from 'framer-motion';
import { Download, Mail, Linkedin, Github, MessageCircle, Phone } from 'lucide-react';
import { useRef } from 'react';
import type { LucideIcon } from 'lucide-react';

type ContactLink = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

type ContactSectionProps = {
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  whatsapp: string;
  portfolioUrl: string;
  resumeUrl: string;
  location: string;
  openTo: string;
};

export function ContactSection({
  email,
  phone,
  linkedin,
  github,
  whatsapp,
  portfolioUrl,
  resumeUrl,
  location,
  openTo
}: ContactSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks: ContactLink[] = [
    { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
    {
      icon: Phone,
      label: 'Phone',
      value: `${phone} (WhatsApp)`,
      href: whatsapp
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: linkedin ? 'View Profile' : 'Profile available on request',
      href: linkedin || portfolioUrl
    },
    {
      icon: Github,
      label: 'GitHub',
      value: github ? 'View Repositories' : 'Repositories available on request',
      href: github || portfolioUrl
    },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat Now', href: whatsapp }
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />
        <div className="absolute right-1/4 top-24 h-96 w-96 rounded-full bg-[var(--secondary)]/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-[10px] border border-[var(--primary)]/26 bg-gradient-to-r from-[var(--primary)]/12 via-[var(--primary)]/6 to-transparent p-6 sm:p-10"
        >
          <p className="text-xs tracking-[0.2em] text-[var(--secondary)] uppercase">Contact</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            Let&apos;s build something exceptional.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--foreground)]/78">
            {openTo}. Based in {location}.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent)] sm:w-auto sm:px-8 sm:py-4"
          >
            Start Conversation
          </a>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md border border-[var(--secondary)]/65 px-5 py-3 text-sm text-[var(--secondary)] transition hover:bg-[var(--secondary)]/15 sm:w-auto"
          >
            WhatsApp Chat
          </a>
          <a
            href={resumeUrl}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--primary)]/40 px-5 py-3 text-sm text-[var(--foreground)]/92 transition hover:bg-[var(--primary)]/14 sm:w-auto"
          >
            Download CV
            <Download className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-[10px] border border-[var(--primary)]/20 bg-[var(--card)]/76 p-5 backdrop-blur-md transition hover:border-[var(--secondary)]/50 hover:bg-[rgba(17,24,20,0.9)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[var(--primary)]/16 text-[var(--secondary)]">
                <link.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs tracking-[0.14em] text-[var(--muted-foreground)] uppercase">
                  {link.label}
                </span>
                <span className="mt-1 block break-words text-sm text-[var(--foreground)]">{link.value}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
