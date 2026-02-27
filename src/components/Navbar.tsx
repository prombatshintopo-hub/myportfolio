'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Logo } from '@/components/Logo';
import type { Profile } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Navbar({
  profiles,
  profileId,
  onProfileChange,
  search,
  onSearchChange
}: {
  profiles: Profile[];
  profileId: string;
  onProfileChange: (id: string) => void;
  search: string;
  onSearchChange: (v: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'bg-[rgba(20,20,20,0.95)]'
          : 'bg-[linear-gradient(to_bottom,rgba(0,0,0,0.82),rgba(0,0,0,0.08)_72%,transparent)]'
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-5 px-4 py-3 sm:px-8 sm:py-4">
        <Logo />

        <nav className="hidden items-center gap-4 text-sm text-white/80 md:flex">
          <Link href="/browse" className="hover:text-white">
            Home
          </Link>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#certs" className="hover:text-white">
            Certifications
          </a>
          <a href="#marketing" className="hover:text-white">
            Marketing
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" />
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Titles, skills, tech..."
              className={cn(
                'h-10 w-[220px] rounded-sm border border-white/28 bg-black/58 pl-9 pr-3 text-sm text-white outline-none transition',
                'placeholder:text-white/55 focus:border-white/70 sm:w-[280px]'
              )}
              aria-label="Search"
            />
          </div>

          <select
            value={profileId}
            onChange={(e) => onProfileChange(e.target.value)}
            className={cn(
              'h-10 rounded-sm border border-white/28 bg-black/62 px-3 text-sm text-white/90 outline-none transition',
              'focus:border-white/70'
            )}
            aria-label="Select profile"
          >
            {profiles.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="px-4 pb-3 sm:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Titles, skills, tech..."
            className={cn(
              'h-10 w-full rounded-sm border border-white/24 bg-black/60 pl-9 pr-3 text-sm text-white outline-none',
              'placeholder:text-white/55 focus:border-white/70'
            )}
            aria-label="Search"
          />
        </div>
      </div>
    </header>
  );
}
