import fs from 'node:fs/promises';
import crypto from 'node:crypto';

await fs.mkdir('public/fonts', { recursive: true });
const response = await fetch('https://fonts.googleapis.com/css2?family=Montserrat:wght@300..900&family=Space+Grotesk:wght@300..700&family=Poppins:wght@300;400;500;600;700;800&family=Manrope:wght@400..800&display=swap', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' } });
let css = await response.text();
for (const url of new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]))) {
  const file = `clone-${crypto.createHash('sha1').update(url).digest('hex').slice(0, 10)}${new URL(url).pathname.match(/\.[a-z0-9]+$/)?.[0] || '.woff2'}`;
  const font = await fetch(url);
  if (!font.ok) throw new Error(`Font request failed: ${font.status}`);
  await fs.writeFile(`public/fonts/${file}`, Buffer.from(await font.arrayBuffer()));
  css = css.replaceAll(url, `/fonts/${file}`);
}
await fs.writeFile('public/fonts/clone-fonts.css', css);
let icons = await fetch('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css').then(r => r.text());
for (const relative of new Set([...icons.matchAll(/url\((\.\.\/webfonts\/[^)]+)\)/g)].map(m => m[1]))) {
  const file = relative.split('/').pop();
  const font = await fetch(`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/${file}`);
  if (!font.ok) throw new Error(`Icon font request failed: ${font.status}`);
  await fs.writeFile(`public/fonts/${file}`, Buffer.from(await font.arrayBuffer()));
  icons = icons.replaceAll(relative, `/fonts/${file}`);
}
await fs.writeFile('public/fonts/fontawesome.css', icons);
console.log('Original clone typography and icons are hosted locally.');
