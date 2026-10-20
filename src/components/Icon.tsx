import type { CSSProperties } from 'react';

export default function Icon({ name = 'arrow', size = 24, className = '', style }: { name?: string; size?: number; className?: string; style?: CSSProperties }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    diagonal: <><path d="M5 19 19 5M5 5h14v14" /></>,
    spark: <><path d="m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2Z" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    layers: <><path d="m3 7 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 17l9 5 9-5" /></>,
    people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v3" /></>,
    building: <><path d="M4 22V4h11v18M15 10h5v12M8 8h3M8 12h3M8 16h3M2 22h20" /></>,
    factory: <><path d="M3 21V10l6 4V9l6 4V3h4l2 18H3ZM6 17h1m4 0h1m4 0h1" /></>,
    graduate: <><path d="m2 8 10-5 10 5-10 5-10-5Zm4 3v7c4 3 8 3 12 0v-7M22 8v9" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V3h8v4M3 12c6 4 12 4 18 0M12 12v5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    play: <path d="m9 5 11 7-11 7V5Z" fill="currentColor" strokeWidth="0" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>,
    bolt: <path d="M13 2 3 14h8l-1 8L21 9h-8l1-7Z" />,
    seed: <><path d="M12 22V11M12 15C3 15 2 10 2 6c6 0 10 3 10 9Zm0-4c0-6 4-9 10-9 0 6-4 10-10 9Z" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7L22 6" /></>,
    phone: <path d="M5 2h4l2 5-3 2a16 16 0 0 0 7 7l2-3 5 2v4a3 3 0 0 1-3 3C9 21 3 15 2 5a3 3 0 0 1 3-3Z" />,
    pin: <><path d="M20 9c0 6-8 13-8 13S4 15 4 9a8 8 0 0 1 16 0Z" /><circle cx="12" cy="9" r="3" /></>,
    chart: <><path d="M3 3v18h18M6 15l5-5 4 3 6-8M16 5h5v5" /></>,
    search: <><circle cx="10" cy="10" r="7" /><path d="m15 15 6 6" /></>,
    mountain: <><path d="m2 21 7-14 4 7 3-11 6 18H2Z" /><path d="m7 11 2 3 2-3m3-1 2 3 2-3" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">{paths[name] || paths.arrow}</svg>;
}
