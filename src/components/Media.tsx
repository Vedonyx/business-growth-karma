'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';
import { imageFor, images, industries, videos } from '@/lib/content';

export function Modal({ title, children, onClose, wide = false }: { title: string; children: React.ReactNode; onClose: () => void; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { dialog?.close(); document.body.style.overflow = previous; };
  }, []);
  return createPortal(<dialog ref={ref} className={`media-dialog${wide ? ' wide' : ''}`} aria-label={title} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}><div className="dialog-header"><span>{title}</span><button className="icon-button" aria-label="Close dialog" onClick={onClose}><Icon name="close" /></button></div>{children}</dialog>, document.body);
}

export function VideoCard({ id, title, label, poster }: { id: string; title: string; label: string; poster?: string }) {
  const [open, setOpen] = useState(false);
  return <><button className="video-card" onClick={() => setOpen(true)} aria-label={`Play ${title}`}><img src={poster || `/brand/video-${id}.webp`} alt="" loading="lazy" width="640" height="400" /><span className="video-shade" /><span className="play-button"><Icon name="play" size={23} /></span><span className="video-caption"><span className="micro">{label}</span><strong>{title}</strong><span>Hear their story <Icon name="diagonal" size={14} /></span></span></button>{open && <Modal title={title} onClose={() => setOpen(false)} wide><iframe src={`https://fast.wistia.net/embed/iframe/${id}?autoPlay=true&seo=false`} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video-iframe" /></Modal>}</>;
}

export function Testimonials({ all = false }: { all?: boolean }) {
  const titles = ['A new approach to growth', 'The impact of a better system', 'Sales psychology in action', 'A shorter path to the deal', 'Real conversations. Real progress.'];
  return <div className={`testimonials-grid${all ? ' all-videos' : ''}`}>{videos.filter(video => video.pages.includes('/')).slice(0, all ? 5 : 3).map((video, i) => <div className="reveal" key={video.id}><VideoCard id={video.id} poster={video.poster} title={titles[i]} label={`CLIENT STORY / 0${i + 1}`} /></div>)}</div>;
}

export function CaseStudies() {
  const [filter, setFilter] = useState('all');
  return <><div className="filter-bar" role="group" aria-label="Filter case studies">{[['all', 'All industries'], ...industries.map(i => [i.id, i.short])].map(([id, label]) => <button key={id} className={filter === id ? 'filter-button active' : 'filter-button'} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>)}</div><div className="case-grid">{industries.filter(i => filter === 'all' || i.id === filter).map((item, i) => <article className="case-card" id={item.id} key={item.id}><div className="case-visual"><img src={imageFor(item.proof)} alt={`${item.label} client result shared by Business Growth Karma`} loading="lazy" width="600" height="750" /><span className="case-index">0{industries.indexOf(item) + 1}</span><span className="case-icon"><Icon name={item.icon} size={26} /></span></div><div className="case-content"><span className="micro">{item.label}</span><h3>{item.result}</h3><p>{item.detail}</p><div className="case-client-logos">{item.logos.slice(0, 4).map(src => <img src={imageFor(src)} alt={src.replace('.png', '').replaceAll('-', ' ')} loading="lazy" width="100" height="52" key={src} />)}</div><span className="case-note">Published client results. Outcomes vary by business.</span></div></article>)}</div></>;
}

const galleryImages = images.filter(image => !image.src.includes('about-us-button'));
const isResult = (src: string) => /whatsapp|leads-every|clients-i-closed|realestate|placement|beforeafter|b4a4|2-co-|3co-|compressed/.test(src);
const isLogo = (image: typeof images[number]) => image.pages.includes('/our-work-case-studies/') && image.width <= 700 && !isResult(image.src) && !/shweta/.test(image.src);

export function AssetGallery() {
  const [category, setCategory] = useState('results');
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(12);
  const [selected, setSelected] = useState<typeof images[number] | null>(null);
  const filtered = galleryImages.filter(image => (category === 'all' || (category === 'results' && isResult(image.src)) || (category === 'brands' && isLogo(image)) || (category === 'systems' && !isResult(image.src) && !isLogo(image))) && `${image.alt} ${image.src}`.toLowerCase().includes(search.toLowerCase()));
  const title = (image: typeof images[number]) => image.alt && !/^(whatsapp|untitled|chatgpt|copy of|hours|add.a|orvsin|shweta \d|b4a4|2 co|3co|compressed)/i.test(image.alt) ? image.alt : image.src.split('/').pop()!.replace(/-[a-z0-9]{6}\.webp$/, '').replaceAll('-', ' ');
  return <><div className="gallery-controls"><div className="filter-bar" role="group" aria-label="Filter image gallery">{[['results', 'Results & feedback'], ['brands', 'Client brands'], ['systems', 'Campaigns & systems'], ['all', `All images (${galleryImages.length})`]].map(([id, label]) => <button key={id} className={category === id ? 'filter-button active' : 'filter-button'} aria-pressed={category === id} onClick={() => { setCategory(id); setLimit(12); }}>{label}</button>)}</div><label className="gallery-search"><Icon name="search" size={17} /><input type="search" aria-label="Search image gallery" placeholder="Find an image…" value={search} onChange={e => { setSearch(e.target.value); setLimit(12); }} /></label></div><div className="evidence-gallery">{filtered.slice(0, limit).map(image => <button key={image.src} className={`evidence-item${isLogo(image) ? ' logo-evidence' : ''}`} onClick={() => setSelected(image)} aria-label={`Enlarge ${title(image)}`}><div className="evidence-img"><img src={image.src} alt={title(image)} loading="lazy" width={image.width} height={image.height} /><span className="evidence-expand"><Icon name="diagonal" size={17} /></span></div><span className="evidence-label">{title(image)}</span></button>)}</div>{filtered.length === 0 && <p className="empty-state">No images match this search. Try another keyword or category.</p>}{limit < filtered.length && <div className="gallery-more"><button className="button button-outline" onClick={() => setLimit(limit + 12)}>Show more images <Icon name="plus" size={17} /></button><span>{Math.min(limit, filtered.length)} of {filtered.length} images</span></div>}{selected && <Modal title={title(selected)} onClose={() => setSelected(null)} wide><img className="lightbox-image" src={selected.src} alt={title(selected)} /><a href={selected.src} download className="lightbox-download">Download image <Icon name="diagonal" size={15} /></a></Modal>}</>;
}
