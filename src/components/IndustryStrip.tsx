import styles from "./IndustryStrip.module.css";

const industryLabels = [
  "Manufacturer",
  "B2B Business Owner",
  "Real Estate Agent",
  "Consultant",
  "Educational Institute",
  "Running Ads / Lead Generation",
];

export default function IndustryStrip() {
  return (
    <section className={styles.section} aria-labelledby="industry-strip-title">
      <h2 className={styles.heading} id="industry-strip-title">
        THIS IS FOR YOU IF YOU ARE
      </h2>
      <ul className={styles.grid}>
        {industryLabels.map(industry => (
          <li className={styles.industry} key={industry}>{industry}</li>
        ))}
      </ul>
    </section>
  );
}
