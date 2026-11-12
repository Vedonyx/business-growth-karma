import TedxPhoto from "./TedxPhoto";
import styles from "./AboutShwetaSection.module.css";

export default function AboutShwetaSection() {
  return (
    <section className="clone-extra-section" id="about-shweta" aria-labelledby="about-shweta-title">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h2 id="about-shweta-title">About <span className="gradient-text">Shweta Shah</span></h2>
          <p className={styles.emphasis}>She&apos;s Not Here to Get You More Leads. She&apos;s Here to Help You Convert Them Into Sales.</p>
          <p>Shweta Shah has been helping businesses grow since 2016. As the Founder of Business Growth Karma, she believes that marketing is not successful just because it generates leads. It is successful when those leads turn into customers, revenue and business growth.</p>
          <p>With 500+ projects delivered, 1,000+ marketers trained and experience across multiple industries, Shweta understands a challenge many business owners face: they&apos;re spending money on marketing, generating enquiries, but still struggling to convert those enquiries into deals.</p>
          <p>Her approach goes beyond running ads. She brings together four critical pillars of business growth: The Setup, Strong Branding, Strong Sales Team and Quality Lead Generation.</p>
          <p>She looks at the complete journey — from the moment a potential customer discovers your business to the moment they become a paying customer.</p>
          <p>She believes business owners don&apos;t always need more leads. Sometimes, they need to fix what&apos;s happening after the lead comes in.</p>
          <p>Her work is about identifying gaps, challenging the way businesses approach marketing and sales, and building practical systems that help teams convert more opportunities into revenue.</p>
          <p>You won&apos;t just hear that you need better marketing. You&apos;ll understand where your business may be losing sales, what needs to change and which steps deserve your attention first.</p>
          <p className={styles.emphasis}>Because more leads don&apos;t automatically mean more sales. A better system can make the difference.</p>
        </div>

        <TedxPhoto />
      </div>
    </section>
  );
}
