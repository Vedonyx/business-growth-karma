"use client";

import { useState } from "react";
import { reviewImages } from "@/lib/content";
import MediaOverlay from "./MediaOverlay";
import styles from "./ReviewsSection.module.css";

export default function ReviewsSection({ leadConversionProof = false }: { leadConversionProof?: boolean }) {
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className="clone-extra-section" id="reviews" aria-labelledby="client-reviews-title">
      {leadConversionProof ? (
        <div className={`clone-section-header ${styles.proofHeader}`}>
          <h2 id="client-reviews-title">OUR <span className="gradient-text">2 USP</span></h2>
          <ul className={styles.uspList}>
            <li>We help you convert more <strong>hot leads</strong> into deals in <strong>24 hours to 25 days</strong>.</li>
            <li>We help you convert more <strong>warm leads</strong> into deals in <strong>2 to 12 months</strong>.</li>
          </ul>
          <h3 className={styles.proofTitle}>Here is the Proof</h3>
        </div>
      ) : (
        <div className="clone-section-header">
          <div className="section-badge">CLIENT REVIEWS</div>
          <h2 id="client-reviews-title">Client <span className="gradient-text">Reviews</span></h2>
          <p>Original WhatsApp reviews shared by business owners.</p>
        </div>
      )}
      <div className={styles.grid}>
        {reviewImages.map((image, index) => (
          <a className={styles.card} key={image.src} href={image.src} aria-label={`View client review ${index + 1}`} aria-haspopup="dialog"
            onClick={event => {
              event.preventDefault();
              setSelected({ src: image.src, title: `Client WhatsApp review ${index + 1}` });
            }}>
            <img src={image.src} alt={image.alt || `Client WhatsApp review ${index + 1}`} width={image.width} height={image.height} loading="lazy" />
          </a>
        ))}
      </div>
      {selected && <MediaOverlay src={selected.src} title={selected.title} onClose={() => setSelected(null)} />}
    </section>
  );
}
