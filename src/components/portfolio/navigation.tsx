'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', id: 'top' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        isScrolled
          ? 'border-[rgba(0,128,77,0.26)] bg-[rgba(10,15,13,0.9)] backdrop-blur-lg'
          : 'border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6 sm:py-4 lg:px-12">
        <button
          type="button"
          onClick={() => handleNavClick('top')}
          className="font-display text-base tracking-[0.28em] text-[var(--foreground)] uppercase"
          aria-label="Scroll to home"
        >
          M<span className="text-[var(--primary)]">N</span>
        </button>

        <nav className="ml-auto hidden items-center gap-6 text-sm lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="group relative text-[var(--foreground)]/86 transition hover:text-[var(--foreground)]"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-[var(--secondary)] transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="rounded-md border border-[var(--secondary)]/70 px-4 py-1.5 font-medium text-[var(--secondary)] transition hover:scale-105 hover:bg-[var(--secondary)]/15"
          >
            Hire Me
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(0,128,77,0.3)] bg-[rgba(17,24,20,0.6)] text-[var(--foreground)] lg:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 rounded-xl border border-[rgba(0,128,77,0.32)] bg-[rgba(11,17,15,0.96)] p-4 sm:mx-6 lg:hidden"
          >
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="w-full rounded-lg px-3 py-2 text-left text-base text-[var(--foreground)]/90 transition hover:bg-[rgba(0,128,77,0.16)]"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
