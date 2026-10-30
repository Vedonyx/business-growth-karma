import styles from "./IndustryStrip.module.css";

const industryLabels = [
  "Real-Estate | Builders",
  "Manufacturer | B2B",
  "Educational Institutes | Classes",
  "B2B Service Providers | Consultants",
  "Doctors",
];

export default function IndustryStrip() {
  return (
    <section className={styles.section} aria-labelledby="industry-strip-title">
      <h2 className={styles.heading} id="industry-strip-title">
        We help industries like..
      </h2>
      <div className={styles.ribbon}>
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <ul className={styles.group} key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {industryLabels.map((industry) => (
                <li className={styles.industry} key={industry}>
                  {industry}
                  <span className={styles.separator} aria-hidden="true">•</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
