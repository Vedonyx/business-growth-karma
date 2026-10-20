'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';

const navigation = [['/', 'Home'], ['/about', 'About'], ['/work', 'Our Work'], ['/services', 'Services'], ['/contact', 'Contact']];

export function BrandMark() {
  return <span className="brand-mark"><span className="brand-symbol" aria-hidden="true"><i /><i /><i /><span>↗</span></span><span className="brand-wordmark">BUSINESS GROWTH<span>Karma<span className="brand-byline">BY SHWETA SHAH</span></span></span></span>;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  return <header className="site-header"><div className="nav-wrap"><Link href="/" aria-label="Business Growth Karma home" onClick={() => setOpen(false)}><BrandMark /></Link><nav aria-label="Main navigation" id="main-navigation" className={open ? 'nav-links is-open' : 'nav-links'}>{navigation.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}</nav><Link href="/contact" className="nav-cta">Let’s talk growth <Icon name="diagonal" size={15} /></Link><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button></div></header>;
}

export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
