"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { clientCaseStudies } from "@/lib/content";
import MediaOverlay from "./MediaOverlay";
import styles from "./ResultsSection.module.css";

const particleColors = ["#ca9b4c", "#edbd55", "#dba22d", "#fff8e8"];
const particleStyles = Array.from({ length: 24 }, (_, index) => {
  const fromLeft = index % 2 === 0;
  const spread = (fromLeft ? 1 : -1) * (36 + (index * 29) % 112);

  return {
    left: fromLeft ? "15%" : "85%",
    backgroundColor: particleColors[index % particleColors.length],
    borderRadius: index % 3 === 0 ? "50%" : "2px",
    "--spread": `${spread}px`,
    "--lift": `${-(104 + (index * 37) % 155)}px`,
    "--spin": `${spread * 4}deg`,
    "--delay": `${(index * 71) % 660}ms`,
  } as CSSProperties;
});

export default function ResultsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(() => new Set());
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const threshold = 0.3;
    const observer = new IntersectionObserver(entries => {
      setVisibleCards(current => {
        const next = new Set(current);
        for (const entry of entries) {
          if (entry.intersectionRatio >= threshold) next.add(entry.target.id);
          else next.delete(entry.target.id);
        }
        return next;
      });
    }, { threshold });

    gridRef.current?.querySelectorAll("a[id]").forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="results" aria-labelledby="fobet-results-title">
      <div className="clone-section-header">
        <div className="section-badge">REAL PEOPLE. REAL RESULTS.</div>
        <h2 id="fobet-results-title">Client <span className="gradient-text">Transformation Results</span></h2>
        <p>Lead generation and sales results across real estate, manufacturing, education and consulting.</p>
      </div>
      <div className={styles.grid} id="industries" ref={gridRef}>
        {clientCaseStudies.map(study => (
          <a key={study.id} id={study.id} className={styles.card} href={study.src} aria-label={`View ${study.label} case study`} aria-haspopup="dialog"
            onClick={event => {
              event.preventDefault();
              setSelected({ src: study.src, title: study.label + " client case study" });
            }}>
            <img className={styles.image} src={study.src} alt={study.label + ": " + study.result} width="1080" height="1350" loading="lazy" />
            <div className={styles.info}>
              <span className={styles.badge}><i className="fa-solid fa-crown" aria-hidden="true" /> CLIENT MILESTONE</span>
              <h3>{study.id === "education" ? "Education & Institutes" : study.label}</h3>
              <p className={styles.result}>{study.result}</p>
              <p className={styles.description}>{study.text}</p>
            </div>
            {visibleCards.has(study.id) && (
              <span className={styles.confetti} aria-hidden="true">
                {particleStyles.map((style, index) => <span className={styles.particle} key={index} style={style} />)}
              </span>
            )}
          </a>
        ))}
      </div>
      <p className="clone-results-note">Published historical client results. Outcomes vary by business, offer and implementation.</p>
      {selected && <MediaOverlay src={selected.src} title={selected.title} onClose={() => setSelected(null)} />}
    </section>
  );
}
