import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/about', '/work', '/services', '/contact'].map(path => ({ url: `https://shwetashah.in${path}`, changeFrequency: 'monthly' as const, priority: path ? 0.8 : 1 })); }
