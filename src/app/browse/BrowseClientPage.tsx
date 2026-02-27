'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { profiles, titles } from '@/lib/content';
import { getRowsForProfile, getTitlesForProfile } from '@/lib/content';
import type { Title } from '@/lib/types';
import { Navbar } from '@/components/Navbar';
import { BrowseHero } from '@/components/BrowseHero';
import { Row } from '@/components/Row';
import { TitleModal } from '@/components/TitleModal';
import { Footer } from '@/components/Footer';

function matchesSearch(t: Title, q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  const hay = [
    t.name,
    t.subtitle ?? '',
    t.description,
    ...(t.tags ?? []),
    ...(t.tech ?? [])
  ]
    .join(' ')
    .toLowerCase();
  return hay.includes(s);
}

export function BrowseClientPage() {
  const searchParams = useSearchParams();

  const [profileId, setProfileId] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Title | null>(null);

  useEffect(() => {
    const fromUrl = searchParams.get('profile');
    if (fromUrl) {
      setProfileId(fromUrl);
      try {
        localStorage.setItem('mbatshi_profile', fromUrl);
      } catch {
        // ignore
      }
      return;
    }

    try {
      const stored = localStorage.getItem('mbatshi_profile');
      if (stored) setProfileId(stored);
    } catch {
      // ignore
    }
  }, [searchParams]);

  const rows = useMemo(() => getRowsForProfile(profileId), [profileId]);

  const visibleTitles = useMemo(() => {
    return getTitlesForProfile(profileId).filter((t) => matchesSearch(t, search));
  }, [profileId, search]);

  const featured = useMemo(() => {
    return (
      visibleTitles.find((t) => t.id === 'about') ??
      visibleTitles.find((t) => t.kind === 'project') ??
      titles[0]
    );
  }, [visibleTitles]);

  const handleProfileChange = (id: string) => {
    setProfileId(id);
    try {
      localStorage.setItem('mbatshi_profile', id);
    } catch {
      // ignore
    }
  };

  return (
    <main className="min-h-screen bg-[#141414]">
      <Navbar
        profiles={profiles}
        profileId={profileId}
        onProfileChange={handleProfileChange}
        search={search}
        onSearchChange={setSearch}
      />

      <BrowseHero featured={featured} onSelect={(t) => setSelected(t)} />

      <div className="mx-auto max-w-[1400px] space-y-8 pb-8 pt-2 sm:space-y-10 sm:pt-4">
        {rows.map((r) => {
          const anchorId =
            r.id === 'row-projects'
              ? 'projects'
              : r.id === 'row-experience'
                ? 'experience'
                : r.id === 'row-certs'
                  ? 'certs'
                  : r.id === 'row-marketing'
                    ? 'marketing'
                    : r.id === 'row-about'
                      ? 'contact'
                      : undefined;

          return (
            <div key={r.id} id={anchorId} className="scroll-mt-24">
              <Row row={r} items={visibleTitles} onSelect={(t) => setSelected(t)} />
            </div>
          );
        })}
      </div>

      <Footer />

      <TitleModal open={!!selected} item={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
