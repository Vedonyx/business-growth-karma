"use client";

import { useState } from "react";
import MediaOverlay from "./MediaOverlay";
import PillarRoof from "./PillarRoof";
import WistiaVideo from "./WistiaVideo";
import styles from "./FourPillarsSection.module.css";

const growthPillars = [
  {
    title: "The Setup",
    icon: "fa-solid fa-gears",
    what: "Landing page integrated with the Sales Psychology System.",
    summary: "A Sales Psychology landing page that turns enquiries into deals.",
    benefit: "Convert your hot and warm leads into deals.",
  },
  {
    title: "Strong Branding",
    icon: "fa-solid fa-bullhorn",
    what: "Build an organic social media presence with exclusive branding for individuals, companies, products and services.",
    summary: "Organic social media branding that keeps customers connected.",
    benefit: "Keep old, existing and new clients connected to your brand.",
  },
  {
    title: "Strong Sales Team",
    icon: "fa-solid fa-users",
    what: "Regular sales training on SOPs.",
    summary: "Sales training and SOPs to help teams close more deals.",
    benefit: "Help your team convert leads into deals.",
  },
  {
    title: "Quality Lead Generation",
    icon: "fa-solid fa-bullseye",
    what: "Paid ads on Google, Meta, ChatGPT and LinkedIn.",
    summary: "Paid ads on Google, Meta, ChatGPT and LinkedIn to reach ready-to-buy leads.",
    benefit: "Get interested, ready-to-buy leads from the first month.",
  },
];

export default function FourPillarsSection({
  solution = false,
}: {
  solution?: boolean;
}) {
  const [reference, setReference] = useState(false);
  const diagram = "/brand/business-sales-growth-wide.png";

  return (
    <section className="clone-extra-section clone-pillars-section" id="framework" aria-labelledby="framework-title">
      <div className="clone-section-header">
        <div className="section-badge">{solution ? "SOLUTION" : "THE FOUR PILLARS STRATEGY"}</div>
        <h2 id="framework-title">
          {solution ? "From Lead Generation to " : "A Strong Foundation for "}
          <span className="gradient-text">{solution ? "Deal Conversion" : "Business Sales Growth"}</span>
        </h2>
        <p>{solution ? "4 Pillar Business Sales Growth Done for you Service" : "The setup. Strong branding. A strong sales team. Quality lead generation."}</p>
      </div>

      <div className={styles.layout}>
        <div className={solution ? `${styles.temple} ${styles.solution}` : styles.temple} aria-label="The four pillars of business sales growth">
          {solution ? <PillarRoof /> : (
            <div className={styles.roof}>
              <span className={styles.roofIcon}><i className="fa-solid fa-chart-line" aria-hidden="true" /></span>
              <div>
                <span className={styles.roofLabel}>Four pillars. One sales goal.</span>
                <h3>Business Sales Growth</h3>
              </div>
            </div>
          )}
          <ol className={styles.pillars}>
            {growthPillars.map((pillar, index) => (
              <li className={styles.pillar} key={pillar.title} style={{ animationDelay: `${index * 2}s` }}>
                <span className={styles.number}>PILLAR 0{index + 1}</span>
                <span className={styles.icon}><i className={pillar.icon} aria-hidden="true" /></span>
                <h4>{pillar.title}</h4>
                <p className={`${styles.summary} phone-only`}>{pillar.summary}</p>
                <div className={`${styles.what} desktop-detail`}>
                  <span className={styles.label}>What we do</span>
                  <p>{pillar.what}</p>
                </div>
                <div className={`${styles.benefit} desktop-detail`}>
                  <span className={styles.label}>Benefit</span>
                  <p>{pillar.benefit}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.foundation}>
            <strong><i className="fa-solid fa-gears" aria-hidden="true" /> Done-for-you service</strong>
            <span><i className="fa-solid fa-coins" aria-hidden="true" /> Investment: <b>Starts from Rs. 10k to 4 Lakh Monthly</b></span>
          </div>
        </div>

        <div className={styles.videoStage}>
          <div className={styles.video}>
            <WistiaVideo mediaId="jr3983q8xn" title="The four-pillar business growth strategy video" />
          </div>
        </div>
      </div>

      <button type="button" className="clone-action clone-reference-action" onClick={() => setReference(true)}>
        View Original Diagram <i className="fa-solid fa-expand" aria-hidden="true" />
      </button>
      {reference && <MediaOverlay src={diagram} title="The original four-pillar business sales growth diagram" onClose={() => setReference(false)} />}
    </section>
  );
}
