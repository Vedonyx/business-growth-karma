import { imageFor } from "@/lib/content";
import styles from "./StickyExperienceCta.module.css";

export default function StickyExperienceCta({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <>
      <div className={styles.clearance} aria-hidden="true" />
      <aside className={styles.bar} aria-label="Business Growth Experience offer">
        <img className={styles.logo} src={imageFor("Untitled-design-6.png")} alt="" width={493} height={353} />
        <div className={styles.copy}>
          <strong>3-Day Business Growth Experience</strong>
          <p>4 videos and 2 personal calls with Shweta Shah</p>
        </div>
        <button type="button" className={`clone-action ${styles.button}`} onClick={onOpenModal} aria-haspopup="dialog">
          Start for ₹499 <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </button>
      </aside>
    </>
  );
}
