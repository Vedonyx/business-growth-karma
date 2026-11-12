import { brand, experienceCtaLabel, imageFor } from "@/lib/content";
import styles from "./StickyExperienceCta.module.css";

export default function StickyExperienceCta() {
  return (
    <>
      <div className={styles.clearance} aria-hidden="true" />
      <aside className={styles.bar} aria-label="Business Growth Experience offer">
        <img className={`brand-logo-artwork ${styles.logo}`} src={imageFor("Untitled-design-6.png")} alt="" width={493} height={353} />
        <div className={styles.copy}>
          <strong>3-Day Business Growth Experience</strong>
          <p>4 videos and 2 personal calls with Shweta Shah</p>
        </div>
        <a className={`clone-action checkout-cta ${styles.button}`} href={brand.experienceCheckout}>
          {experienceCtaLabel} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </a>
      </aside>
    </>
  );
}
