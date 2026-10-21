import fs from 'node:fs/promises';
import sharp from 'sharp';

await fs.mkdir('public/brand', { recursive: true });
const cover = Buffer.from(`<svg width="1200" height="630"><defs><radialGradient id="g"><stop stop-color="#7d5a22"/><stop offset="1" stop-color="#0c0b08"/></radialGradient></defs><rect width="1200" height="630" fill="#0c0b08"/><circle cx="1000" cy="300" r="400" fill="url(#g)"/><g fill="#d5ad5a" font-family="Arial,sans-serif"><text x="75" y="92" font-size="18" letter-spacing="5">BUSINESS GROWTH KARMA</text><text x="75" y="260" font-size="90" font-weight="bold" fill="#f5f1e6">TURN LEADS INTO</text><text x="75" y="365" font-size="100" font-weight="bold">LASTING GROWTH.</text><text x="78" y="520" font-size="25" fill="#d7d1c3">With Shweta Shah. Your next chapter starts here.</text></g><path d="M75 565h1050" stroke="#d5ad5a" stroke-opacity=".4"/></svg>`);
await sharp(cover).png().toFile('public/brand/social-cover.png');
await sharp('.reference/image5.png').resize({ width: 1200 }).webp({ quality: 88 }).toFile('public/brand/four-pillar-framework.webp');
await sharp('.reference/image6.png').resize({ width: 1200 }).webp({ quality: 88 }).toFile('public/brand/four-pillar-detail.webp');
console.log('Social cover and presentation framework assets ready.');
