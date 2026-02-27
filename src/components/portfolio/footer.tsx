import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

type FooterProps = {
  name: string;
  headline: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  whatsapp: string;
  portfolioUrl: string;
  resumeUrl: string;
};

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export function Footer({
  name,
  headline,
  email,
  phone,
  linkedin,
  github,
  whatsapp,
  portfolioUrl,
  resumeUrl
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const social = [
    { icon: Mail, href: `mailto:${email}`, label: 'Email' },
    { icon: Linkedin, href: linkedin || portfolioUrl, label: 'LinkedIn' },
    { icon: Github, href: github || portfolioUrl, label: 'GitHub' },
    { icon: MessageCircle, href: whatsapp, label: 'WhatsApp' }
  ];

  return (
    <footer className="border-t border-[var(--primary)]/20 bg-[var(--background)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-3 lg:px-12">
        <div>
          <div className="font-display text-xl tracking-[0.2em] text-[var(--foreground)] uppercase">
            M<span className="text-[var(--primary)]">N</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
            {headline}
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <a href={`mailto:${email}`} className="block text-[var(--foreground)]/84 transition hover:text-[var(--secondary)]">
              {email}
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[var(--foreground)]/84 transition hover:text-[var(--secondary)]"
            >
              {phone} (WhatsApp)
            </a>
            <a href={resumeUrl} className="block text-[var(--foreground)]/84 transition hover:text-[var(--secondary)]">
              Download CV
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.16em] text-[var(--secondary)] uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-[var(--foreground)]/82 transition hover:text-[var(--secondary)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.16em] text-[var(--secondary)] uppercase">Social</h3>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--primary)]/30 bg-[var(--muted)] text-[var(--foreground)]/84 transition hover:bg-[var(--primary)] hover:text-[var(--foreground)]"
                aria-label={item.label}
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--primary)]/20">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-[var(--muted-foreground)] sm:px-8 lg:px-12">
          Copyright {currentYear}. {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
