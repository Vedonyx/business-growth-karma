"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./GoldConfetti.module.css";

const colors = ["#ca9b4c", "#edbd55", "#fff8e8", "#fff"];
const particles = Array.from({ length: 24 }, (_, index) => {
  const fromLeft = index % 2 === 0;
  const spread = (fromLeft ? 1 : -1) * (36 + (index * 29) % 112);

  return {
    left: fromLeft ? "15%" : "85%",
    backgroundColor: colors[index % colors.length],
    borderRadius: index % 3 === 0 ? "50%" : "2px",
    "--spread": `${spread}px`,
    "--lift": `${-(104 + (index * 37) % 155)}px`,
    "--spin": `${spread * 4}deg`,
    "--delay": `${(index * 71) % 660}ms`,
  } as CSSProperties;
});

export default function GoldConfetti() {
  const layer = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const card = layer.current?.parentElement;
    if (!card) return;

    const threshold = 0.3;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.intersectionRatio >= threshold);
    }, { threshold });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <span className={styles.confetti} ref={layer} aria-hidden="true">
      {visible && particles.map((style, index) => (
        <span className={styles.particle} key={index} style={style} />
      ))}
    </span>
  );
}
