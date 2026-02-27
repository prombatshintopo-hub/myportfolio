import type { Metadata } from 'next';
import { Manrope, Syne } from 'next/font/google';
import '@/styles/globals.css';
import { person } from '@/lib/content';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap'
});

const syne = Syne({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap'
});

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${person.name} | Portfolio`,
    template: `%s | ${person.name}`
  },
  description: person.headline,
  openGraph: {
    title: `${person.name} | Portfolio`,
    description: person.headline,
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
