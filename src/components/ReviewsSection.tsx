"use client";

import { useState } from "react";
import { reviewImages } from "@/lib/content";
import MediaOverlay from "./MediaOverlay";
import styles from "./ReviewsSection.module.css";

export default function ReviewsSection() {
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className="clone-extra-section" id="reviews" aria-labelledby="client-reviews-title">
      <div className="clone-section-header">
        <div className="section-badge">CLIENT REVIEWS</div>
        <h2 id="client-reviews-title">Client <span className="gradient-text">Reviews</span></h2>
        <p>Original WhatsApp reviews shared by business owners.</p>
      </div>
      <div className={styles.grid}>
        {reviewImages.map((image, index) => (
          <a className={styles.card} key={image.src} href={image.src} aria-label={`View client review ${index + 1}`} aria-haspopup="dialog"
            onClick={event => {
              event.preventDefault();
              setSelected({ src: image.src, title: `Client WhatsApp review ${index + 1}` });
            }}>
            <img src={image.src} alt={`Client WhatsApp review ${index + 1}`} width={image.width} height={image.height} loading="lazy" />
          </a>
        ))}
      </div>
      {selected && <MediaOverlay src={selected.src} title={selected.title} onClose={() => setSelected(null)} />}
    </section>
  );
}
