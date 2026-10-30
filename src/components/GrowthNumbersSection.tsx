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
      { label: "Projects Delivered", value: "500+", detail: "Across Industries" },
      { label: "Marketers Trained", value: "1000+", detail: "on 4 Pillars" },
      { label: "AI videos done", value: "100+", detail: "Organic marketing (Pillar 2)" },
    ],
  },
  {
    label: "Sales growth framework",
    direction: "right",
    cards: [
      { label: "Sales Growth Framework", value: "4 Pillars", detail: "ROI Guaranteed System" },
      { label: "Hot Lead to deal conversion Window", value: "24hrs.- 25 days", detail: "- The Setup (pillar 1)" },
      { label: "Research based Lead to deal Conversion Window", value: "2-12 months", detail: "- Organic Marketing (Pillar 2)" },
      { label: "Get Quality Leads from", value: "Instantly from 1st month", detail: "- Paid Ads (Pillar 4)" },
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
        <h2 id="growth-numbers-title">Numbers That Drive <span className="gradient-text">Growth</span></h2>
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
              {/* Four identical groups keep the loop filled on wide screens. */}
              {[0, 1, 2, 3].map(copy => (
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
