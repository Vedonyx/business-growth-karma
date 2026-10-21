import fs from 'node:fs/promises';

const data = JSON.parse(await fs.readFile('src/data/brand-assets.json', 'utf8'));
for (const video of data.videos) {
  const response = await fetch(`https://fast.wistia.com/embed/medias/${video.id}.json`);
  if (!response.ok) throw new Error(`Video metadata request failed: ${video.id}`);
  const media = await response.json();
  const choices = media.media.assets.filter(asset => asset.container === 'mp4' && asset.type !== 'OriginalFile' && asset.width <= 1280).sort((a,b) => Math.abs(a.width - 640) - Math.abs(b.width - 640));
  const asset = choices[0];
  if (!asset) throw new Error(`No MP4 rendition found: ${video.id}`);
  const file = `/brand/video-${video.id}.mp4`;
  const output = await fetch(asset.url);
  if (!output.ok) throw new Error(`Video request failed: ${video.id}`);
  const bytes = Buffer.from(await output.arrayBuffer());
  await fs.writeFile(`public${file}`, bytes);
  video.src = file;
  console.log(`${video.id}: ${Math.round(bytes.length / 1024)} KB`);
}
await fs.writeFile('src/data/brand-assets.json', JSON.stringify(data, null, 2));
