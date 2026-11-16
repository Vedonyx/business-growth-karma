import { imageFor } from "@/lib/content";
import GoldConfetti from "./GoldConfetti";
import styles from "./PlanTransformationSection.module.css";

const roiMetrics = [
  { label: "Lead Leakage", before: "Yes", after: "No" },
  { label: "Closing Ratio", before: "2%–4%", after: "8%–25%" },
  { label: "Staff Dependency", before: "100%", after: "20%" },
  { label: "Manual Follow-up", before: "100%", after: "20%" },
];

export default function PlanTransformationSection({ afterServiceOptions = false }: { afterServiceOptions?: boolean }) {
  return (
    <section className="clone-extra-section" id="plan-transformation" aria-labelledby="plan-transformation-title">
      <div className="clone-section-header">
        <h2 id="plan-transformation-title">
          {afterServiceOptions ? (
            <>Select any of the above 2, and you will get this <span className="gradient-text">Transformation Immediately</span></>
          ) : (
            <>The Real <span className="gradient-text">Transformation</span></>
          )}
        </h2>
      </div>

      <div className={afterServiceOptions ? `${styles.grid} ${styles.glowingCards}` : styles.grid}>
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
          {afterServiceOptions ? (
            <table className={styles.roiTable} aria-label="ROI before and after">
              <thead><tr><th scope="col">ROI</th><th scope="col">Before</th><th scope="col">After</th></tr></thead>
              <tbody>
                {roiMetrics.map(metric => (
                  <tr key={metric.label}>
                    <th scope="row">{metric.label}</th>
                    <td>{metric.before}</td>
                    <td>{metric.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <img
              src={imageFor("b4a4.png")}
              alt="ROI before and after: lead leakage changes from Yes to No; closing ratio from 2%–4% to 8%–25%; staff dependency and manual follow-up from 100% to 20%."
              width="388"
              height="171"
              loading="lazy"
            />
          )}
          <figcaption className={styles.profitCaption}>More Revenue + Less Expense = Bigger Profit</figcaption>
          {afterServiceOptions && <GoldConfetti />}
        </figure>

        <figure className={styles.imageCard + " " + styles.storyCard}>
          <img
            src={imageFor("3co.png")}
            alt="Two business owners discuss closing more clients without increasing the marketing budget, using the Sales Psychology Automation by Shweta Shah: Spend less and sell more."
            width="1672"
            height="941"
            loading="lazy"
          />
          {afterServiceOptions && <GoldConfetti />}
        </figure>
      </div>
    </section>
  );
}
