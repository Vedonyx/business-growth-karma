import { imageFor } from "@/lib/content";
import styles from "./PlanTransformationSection.module.css";

export default function PlanTransformationSection() {
  return (
    <section className="clone-extra-section" id="plan-transformation" aria-labelledby="plan-transformation-title">
      <div className="clone-section-header">
        <h2 id="plan-transformation-title">
          Choose any of the above Plan{" "}
          <span className={styles.headingLine + " gradient-text"}>You will see this transformation</span>
        </h2>
      </div>

      <div className={styles.grid}>
        <figure className={styles.imageCard}>
          <figcaption className={styles.label}>Before us</figcaption>
          <img
            src={imageFor("compressed_2MB.png")}
            alt="Before us: the team gets 100 leads from paid ads but asks why there are no sales and why the leads are bad."
            width="1672"
            height="941"
            loading="lazy"
          />
        </figure>

        <figure className={styles.imageCard}>
          <figcaption className={styles.label}>After us</figcaption>
          <div className={styles.afterArtwork}>
            <img
              src={imageFor("2-co.png")}
              alt="After us: the team reports fewer bad leads, more good leads, appointments, conversions, clients and revenue from the same 100 paid-ad leads."
              width="1672"
              height="941"
              loading="lazy"
            />
            <p className={styles.objectionNote}>Objections have decreased<br />Closing ratio have increased</p>
            <p className={styles.conversionNote}>Hot leads are getting close in 5 days.<br />&amp; warm leads are also getting activated</p>
          </div>
        </figure>

        <figure className={styles.imageCard + " " + styles.roiCard}>
          <img
            src={imageFor("b4a4.png")}
            alt="ROI before and after: lead leakage changes from Yes to No; closing ratio from 2%–4% to 8%–25%; staff dependency and manual follow-up from 100% to 20%."
            width="388"
            height="171"
            loading="lazy"
          />
          <figcaption className={styles.profitCaption}>More Revenue + Less Expense = Bigger Profit</figcaption>
        </figure>

        <figure className={styles.imageCard + " " + styles.storyCard}>
          <img
            src={imageFor("3co.png")}
            alt="Two business owners discuss closing more clients without increasing the marketing budget, using the Sales Psychology Automation by Shweta Shah: Spend less and sell more."
            width="1672"
            height="941"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
