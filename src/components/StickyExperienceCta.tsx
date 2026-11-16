import { brand, compactExperienceCtaLabel, experienceCtaLabel } from "@/lib/content";
import styles from "./StickyExperienceCta.module.css";

export default function StickyExperienceCta() {
  return (
    <>
      <div className={styles.clearance} aria-hidden="true" />
      <aside className={styles.bar} aria-label="Business Growth Experience offer">
        <img className={styles.logo} src={brand.logo} alt="" width={384} height={343} />
        <div className={styles.copy}>
          <strong>3-Day Business Growth Experience</strong>
          <p>4 videos and 2 exclusive 1:1 calls with Shweta Shah</p>
        </div>
        <a className={`clone-action checkout-cta ${styles.button}`} href={brand.experienceCheckout}>
          <span className="desktop-detail">{experienceCtaLabel}</span>
          <span className="phone-only">{compactExperienceCtaLabel}</span>
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </a>
      </aside>
    </>
  );
}
