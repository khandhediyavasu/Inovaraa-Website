import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: SITE.colors.navy,
    theme_color: '#0A2540',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
