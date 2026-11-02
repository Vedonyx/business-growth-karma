"use client";

import { useRef } from "react";
import { videos } from "@/lib/content";
import styles from "./TestimonialsSection.module.css";

const testimonials = videos.filter(video => video.pages.includes("/"));

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollVideos(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    const width = track.firstElementChild?.getBoundingClientRect().width ?? 280;
    track.scrollBy({ left: direction * (width + 18), behavior: "smooth" });
  }

  return (
    <section className={"clone-extra-section " + styles.section} id="testimonials" aria-labelledby="fobet-testimonials-title">
      <div className="clone-section-header">
        <div className="section-badge">CLIENT LOVE</div>
        <h2 id="fobet-testimonials-title">What Our <span className="gradient-text">Clients Say</span></h2>
        <p>Hear the experiences shared by business owners on Shweta Shah’s website.</p>
      </div>
      <div className={styles.row} id="client-video-row" ref={trackRef} role="region" aria-label="Client videos" tabIndex={0}>
        {testimonials.map((video, index) => {
          const title = `Client story ${String(index + 1).padStart(2, "0")}`;
          return (
            <div key={video.id} className={styles.card}>
              <video controls preload="none" poster={video.poster} aria-label={title}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <a href={video.src} target="_blank" rel="noreferrer" className={styles.handle}>{title}</a>
            </div>
          );
        })}
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={() => scrollVideos(-1)} aria-label="Previous video" aria-controls="client-video-row"><i className="fa-solid fa-chevron-left" aria-hidden="true" /></button>
        <button type="button" onClick={() => scrollVideos(1)} aria-label="Next video" aria-controls="client-video-row"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></button>
      </div>
    </section>
  );
}
