import styles from "./GrowthExperienceSection.module.css";

const journeySteps = [
  "Pay ₹499. Get instant access to 4 exclusive videos (35 minutes) explaining the 4 Pillars of Marketing & Sales.",
  "Join a 40-minute one-on-one discovery call with Shweta Shah to understand your business, sales goals and lead conversion challenges.",
  "Join a 40-minute personalised strategy call. Discover your business growth gaps and get a customised action plan to convert more leads into deals.",
];

export default function GrowthExperienceSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="clone-extra-section" id="growth-experience" aria-labelledby="growth-experience-title">
      <header className={`clone-section-header ${styles.intro}`}>
        <h2 id="growth-experience-title">Want to get this kind of <span className="gradient-text">results?</span></h2>
        <p className={styles.offerTitle}>Introducing the 3-Day Business Sales Growth Experience</p>
        <span className={styles.price}>Only ₹499</span>
        <p>Three days. Two personal conversations. Four powerful learning modules.</p>
        <p>A structured experience to help you understand what is missing in your business growth system.</p>
      </header>

      <div className={styles.journey}>
        <div className={styles.journeyHeading}>
          <p className="section-badge">Your 3-Day Journey</p>
          <h3>How It Works</h3>
        </div>

        <ol className={styles.steps} role="list">
          {journeySteps.map((description, index) => (
            <li className={styles.step} key={description}>
              <h4 className={styles.stepLabel}>Step {index + 1} <span>– Day {index + 1}</span></h4>
              <span className={styles.marker} aria-hidden="true"><i className="fa-solid fa-check" /></span>
              <p>{description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.enquiry}>
          <p><i className="fa-solid fa-bolt" aria-hidden="true" /> Start your 3-day journey with Shweta Shah.</p>
          <button type="button" className={`clone-action ${styles.enquiryButton}`} onClick={onOpenModal}>
            Enquire About the ₹499 Experience <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
