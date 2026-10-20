import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

// One-time, repeatable migration. No requests to the source are needed at runtime.
const origin = 'https://shwetashah.in';
const pages = ['/', '/about-us/', '/about-shweta-shah/', '/our-work-case-studies/', '/our-services/', '/google-ads-lead-generation/', '/linkedin-lead-generation/', '/sales-psychology-system/', '/industries-we-help/', '/digital-marketing-for-manufacturers/', '/digital-marketing-for-b2b-business/', '/digital-marketing-for-institute/', '/digital-marketing-for-real-estate/', '/digital-marketing-for-consultants/', '/testimonials/', '/video/'];
await fs.mkdir('.reference/source', { recursive: true });
await fs.mkdir('public/brand', { recursive: true });
await fs.mkdir('src/data', { recursive: true });
const assets = new Map();
const videos = new Map();
const links = new Map();
const report = [];
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&#038;', '&').replaceAll('&quot;', '"').replaceAll('&#039;', "'");
for (const page of pages) {
  try {
    const res = await fetch(origin + page, { signal: AbortSignal.timeout(30000) });
    if (!res.ok) { report.push({ page, status: res.status }); continue; }
    const html = await res.text();
    await fs.writeFile(`.reference/source/${page.replaceAll('/', '') || 'home'}.html`, html);
    const pageImages = [];
    for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
      const tag = match[0];
      const attrs = Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map(x => [x[1], decode(x[2])]));
      const src = attrs['data-src'] || attrs.src;
      if (!src?.includes('/wp-content/uploads/') || src.endsWith('.svg')) continue;
      const url = src.replace(/-\d+x\d+(?=\.[a-z]+$)/i, '');
      if (!assets.has(url)) assets.set(url, { source: url, alt: attrs.alt || attrs.title || '', pages: [] });
      const entry = assets.get(url);
      if (!entry.pages.includes(page)) entry.pages.push(page);
      pageImages.push(url);
    }
    const ids = [...new Set([...html.matchAll(/(?:wistia_async_|medias\/|embed\/iframe\/|media-id=["'])([a-z0-9]{10})/g)].map(x => x[1]))];
    for (const id of ids) { if (!videos.has(id)) videos.set(id, { id, pages: [] }); videos.get(id).pages.push(page); }
    for (const [, href] of html.matchAll(/href=["']([^"']+)["']/g)) {
      if (/youtu|linkedin|instagram|facebook|book-call|webinar|drive.google/.test(href)) links.set(decode(href), true);
    }
    report.push({ page, status: res.status, images: pageImages.length, videos: ids });
  } catch (error) { report.push({ page, error: error.message }); }
}
const entries = [...assets.values()];
let next = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  while (next < entries.length) {
    const entry = entries[next++];
    const name = decodeURIComponent(new URL(entry.source).pathname.split('/').pop()).replace(/\.[^.]+$/, '').normalize('NFKD').replace(/[^a-zA-Z0-9]+/g, '-').slice(0, 70).toLowerCase();
    const hash = crypto.createHash('sha1').update(entry.source).digest('hex').slice(0, 6);
    entry.src = `/brand/${name}-${hash}.webp`;
    try {
      const response = await fetch(entry.source, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(String(response.status));
      const buffer = Buffer.from(await response.arrayBuffer());
      const image = sharp(buffer).rotate().resize({ width: 1600, withoutEnlargement: true });
      const { width, height } = await image.metadata();
      entry.width = width; entry.height = height;
      await image.webp({ quality: 86 }).toFile(path.join('public', entry.src));
    } catch (error) { entry.error = error.message; delete entry.src; }
  }
}));
const videoEntries = [...videos.values()];
for (const video of videoEntries) {
  try {
    const res = await fetch(`https://fast.wistia.com/oembed?url=${encodeURIComponent(`https://home.wistia.com/medias/${video.id}`)}&format=json`, { signal: AbortSignal.timeout(20000) });
    const data = await res.json();
    video.title = data.title;
    if (data.thumbnail_url) {
      const thumb = await fetch(data.thumbnail_url);
      await sharp(Buffer.from(await thumb.arrayBuffer())).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 84 }).toFile(`public/brand/video-${video.id}.webp`);
      video.poster = `/brand/video-${video.id}.webp`;
    }
  } catch (error) { video.error = error.message; }
}
await fs.writeFile('src/data/brand-assets.json', JSON.stringify({ images: entries.filter(e => e.src), videos: videoEntries, links: [...links.keys()] }, null, 2));
await fs.writeFile('.reference/import-report.json', JSON.stringify({ pages: report, failedAssets: entries.filter(e => e.error) }, null, 2));
console.log(JSON.stringify({ pages: report, images: entries.filter(e => e.src).length, failedImages: entries.filter(e => e.error).length, videos: videoEntries }, null, 2));
