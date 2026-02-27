import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mbatshi Ntopo Portfolio',
    short_name: 'Mbatshi',
    description: 'Modern portfolio for Mbatshi Ntopo focused on IT, security, and digital growth.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f0d',
    theme_color: '#0a0f0d'
  };
}
