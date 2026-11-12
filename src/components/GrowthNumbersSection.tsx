"use client";

import { useState } from "react";
import styles from "./GrowthNumbersSection.module.css";

const rows = [
  {
    label: "Business milestones",
    direction: "left",
    cards: [
      { label: "Business Growth Karma", value: "10+ years", detail: "Since 2016" },
      { label: "Founder & Strategist", value: "TEDx", detail: "Shweta Shah" },
    ],
  },
  {
    label: "Projects, training and AI video milestones",
    direction: "right",
    cards: [
      { label: "Projects Delivered", value: "500+", detail: "Across Industries" },
      { label: "Marketers Trained", value: "1000+", detail: "on 4 Pillars" },
      { label: "AI videos done", value: "100+", detail: "Organic marketing (Pillar 2)" },
    ],
  },
];

export default function GrowthNumbersSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className={styles.section}
      id="growth-numbers"
      aria-labelledby="growth-numbers-title"
      data-paused={paused}
    >
      <div className={styles.header}>
        <div className="section-badge">BUSINESS GROWTH KARMA</div>
        <h2 id="growth-numbers-title">Numbers That <span className="gradient-text">Can&apos;t be Ignored</span></h2>
        <button
          className={styles.motionButton}
          type="button"
          aria-pressed={paused}
          aria-controls="growth-numbers-rails"
          onClick={() => setPaused(current => !current)}
        >
          <i className={"fa-solid " + (paused ? "fa-play" : "fa-pause")} aria-hidden="true" />
          {paused ? "Play animation" : "Pause animation"}
        </button>
      </div>

      <div className={styles.rails} id="growth-numbers-rails">
        {rows.map(row => (
          <div className={styles.window} key={row.direction} role="group" aria-label={row.label}>
            <div className={styles.track} data-direction={row.direction}>
              {/* Eight copies fill wide screens even with only two cards in the first row. */}
              {Array.from({ length: 8 }, (_, copy) => (
                <ul className={styles.group} key={copy} aria-hidden={copy > 0 ? true : undefined}>
                  {row.cards.map(card => (
                    <li className={styles.card} key={card.label}>
                      <p className={styles.label}>{card.label}</p>
                      <strong className={styles.value} data-long={card.value.length > 16}>{card.value}</strong>
                      <p className={styles.detail}>{card.detail}</p>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
