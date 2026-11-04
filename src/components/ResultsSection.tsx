"use client";

import { useState } from "react";
import { clientCaseStudies } from "@/lib/content";
import MediaOverlay from "./MediaOverlay";
import styles from "./ResultsSection.module.css";

export default function ResultsSection() {
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className={styles.section} id="results" aria-labelledby="fobet-results-title">
      <div className="clone-section-header">
        <div className="section-badge">REAL PEOPLE. REAL RESULTS.</div>
        <h2 id="fobet-results-title">Client <span className="gradient-text">Transformation Results</span></h2>
        <p>Lead generation and sales results across real estate, manufacturing, education and consulting.</p>
      </div>
      <div className={styles.grid} id="industries">
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
          </a>
        ))}
      </div>
      <p className="clone-results-note">Published historical client results. Outcomes vary by business, offer and implementation.</p>
      {selected && <MediaOverlay src={selected.src} title={selected.title} onClose={() => setSelected(null)} />}
    </section>
  );
}
