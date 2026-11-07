import styles from "./GrowthInvestmentSection.module.css";

const programmeBenefits = [
  "4 exclusive learning videos (35 minutes total)",
  "40-minute personal discovery call",
  "40-minute personalised strategy call",
  "Business growth gap analysis",
  "Customised marketing and sales recommendations",
];

export default function GrowthInvestmentSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="clone-extra-section" id="investment" aria-labelledby="growth-investment-title">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle} id="growth-investment-title">Your <span className="gradient-text">Investment</span></h2>

        <div className={styles.layout}>
          <div className={styles.offer}>
            <header className={styles.offerHeading}>
              <span className="section-badge">YOUR FIRST STEP TOWARDS SALES GROWTH</span>
              <h3>3-Day Business Growth Experience</h3>
              <p className={styles.price}>₹499</p>
              <p className={styles.priceNote}>One-time programme investment</p>
            </header>

            <ul className={styles.benefits} role="list">
              {programmeBenefits.map(benefit => (
                <li key={benefit}>
                  <span className={styles.check} aria-hidden="true"><i className="fa-solid fa-check" /></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button type="button" className={`clone-action ${styles.cta}`} onClick={onOpenModal} aria-haspopup="dialog">
              PAY ₹499 &amp; START MY 3-DAY JOURNEY
            </button>
            <p className={styles.flow}>Payment → Video Access → Discovery Call → Strategy Call</p>
          </div>

          <figure className={styles.portrait}>
            <img src="/brand/shweta-shah-growth-experience.jpg" alt="Shweta Shah seated at her desk" width={1080} height={1080} loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
}
