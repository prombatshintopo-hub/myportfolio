'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Profile } from '@/lib/types';
import { gradientFromSeed } from '@/lib/utils';

export function ProfileCard({ profile }: { profile: Profile }) {
  const bg = gradientFromSeed(`profile-${profile.id}`);
  const initial = profile.label.slice(0, 1).toUpperCase();

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={`/browse?profile=${profile.id}`}
        className="group flex flex-col items-center gap-3"
        aria-label={`Open ${profile.label}`}
      >
        <div
          className="relative h-24 w-24 overflow-hidden rounded-md border border-transparent shadow-netflix transition-all duration-300 group-hover:border-white/70 sm:h-32 sm:w-32"
          style={{ backgroundImage: bg }}
        >
          {profile.imageSrc ? (
            <Image
              src={profile.imageSrc}
              alt={profile.label}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 128px, 96px"
            />
          ) : null}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:14px_14px]" />
          {!profile.imageSrc ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-brand text-5xl tracking-[0.08em] text-white/90 sm:text-6xl">
                {initial}
              </span>
            </div>
          ) : null}
          <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-transparent transition group-hover:ring-[rgba(255,255,255,0.35)]" />
        </div>

        <div className="text-sm text-white/72 transition-colors group-hover:text-white sm:text-base">
          {profile.label}
        </div>
        <div className="max-w-[11rem] text-center text-[11px] leading-snug text-white/45 transition-colors group-hover:text-white/70 sm:max-w-[12rem]">
          {profile.tagline}
        </div>
      </Link>
    </motion.div>
  );
}
