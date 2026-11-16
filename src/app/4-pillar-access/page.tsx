import type { Metadata } from "next";
import GoldConfetti from "@/components/GoldConfetti";
import PillarRoof from "@/components/PillarRoof";
import PlanTransformationSection from "@/components/PlanTransformationSection";
import ReviewsSection from "@/components/ReviewsSection";
import WistiaVideo from "@/components/WistiaVideo";
import { brand, discoveryCall } from "@/lib/content";
import CursorGlow from "./CursorGlow";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "4 Pillar Access",
  description: "Your four business sales growth lessons with Shweta Shah.",
  robots: { index: false, follow: false },
};

const lessons = [
  {
    title: "The Setup",
    mediaId: "ync83c39qu",
    investment: "₹10,000 (billed annually)",
    deliverables: "Landing page and Sales Psychology Automation",
    expectation: "Improve the closing ratio from 2% to 11%.",
    risk: "Without a proper conversion setup, you risk losing interested prospects who aren’t yet convinced enough to buy.",
  },
  {
    title: "Social Media Organic Branding",
    mediaId: "opq19luk64",
    investment: "₹25,000 (billed annually)",
    deliverables: "52 AI-powered videos, one per week for 52 weeks",
    expectation: "Improve the closing ratio from 2% to 25%.",
    risk: "Without strong social media branding, you risk losing customer trust, brand recognition and credibility to competitors.",
  },
  {
    title: "Sales SOP & Daily Training",
    mediaId: "3daelect6z",
    investment: "₹1,50,000",
    deliverables: "Daily Sales Pitching Practice",
    expectation: "Improve the closing ratio from 2% to 50%.",
    risk: "Without a trained sales team and structured SOPs, weak follow-ups, objection handling and sales conversations can cost you valuable leads.",
  },
  {
    title: "Daily Quality Lead Generation",
    mediaId: "tdlw8r4ayu",
    investment: "₹2,00,000 (includes ₹1 lakh paid ad budget)",
    deliverables: "Paid Ad Lead Generation from Meta, Google, ChatGPT and LinkedIn",
    expectation: "Generate 100 to 200 ready-to-buy leads from Google Ads each month.",
    risk: "Without consistent quality lead generation, you risk relying on referrals and missing potential customers and sales opportunities.",
  },
];

export default function PillarAccessPage() {
  return (
    <div className={`alternating-section-backgrounds ${styles.page}`}>
      <section className={`clone-extra-section ${styles.hero}`} aria-labelledby="pillar-access-title">
        <header className={`clone-section-header ${styles.heroHeading}`}>
          <p className={styles.congratulations}>🎉 Congratulations!</p>
          <h1 id="pillar-access-title">
            You&apos;ve Taken the First Step Towards <span className="gradient-text">Smarter Business Growth!</span>
          </h1>
          <p><strong>Your payment is successful!</strong></p>
          <p className="desktop-detail">You&apos;re now ready to discover the right strategies for generating quality leads, improving sales conversions, and growing your business.</p>
          <h2>Your 4 Exclusive Learning Videos Are Ready!</h2>
          <p>Learn the 4 pillars of business sales growth, step by step.</p>
          <a className="clone-action" href="#pillar-lessons">
            Watch the 4 Videos <i className="fa-solid fa-arrow-down" aria-hidden="true" />
          </a>
        </header>
        <GoldConfetti />
      </section>

      <section className="clone-extra-section" id="pillar-lessons" aria-labelledby="pillar-lessons-title">
        <header className="clone-section-header">
          <h2 id="pillar-lessons-title">Your 4 Pillars of <span className="gradient-text">Business Sales Growth</span></h2>
        </header>
        <div className={styles.lessonRoof}><PillarRoof /></div>

        <ol className={styles.lessons} role="list">
          {lessons.map((lesson, index) => (
            <li className={styles.lesson} key={lesson.mediaId}>
              <header className={styles.lessonHeading}>
                <p className={styles.lessonNumber}>Pillar No. {index + 1}</p>
                <h3>{lesson.title}</h3>
              </header>
              <WistiaVideo mediaId={lesson.mediaId} title={lesson.title} />
              <dl className={styles.lessonDetails}>
                <div><dt>Monthly investment</dt><dd>{lesson.investment}</dd></div>
                <div><dt>Deliverables</dt><dd>{lesson.deliverables}</dd></div>
                <div><dt>What to expect</dt><dd>{lesson.expectation}</dd></div>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      <section className="clone-extra-section" id="goal-faq" aria-labelledby="goal-faq-title">
        <header className="clone-section-header">
          <h2 id="goal-faq-title">Frequently Asked Questions <span className="gradient-text">to Achieve Your Sales Goal</span></h2>
        </header>
        <div className={`${styles.contentWidth} ${styles.faq}`}>
          <details className={styles.box}>
            <summary>My Pillar 3 and Pillar 4 are already performing well. Can I opt for Pillar 1, Pillar 2, or both?</summary>
            <p>Absolutely! You can choose Pillar 1, Pillar 2, or both. We tailor the service to the gaps limiting your sales growth.</p>
          </details>
          <details className={styles.box}>
            <summary>My other pillars are already working well. Can I opt for The Setup alone?</summary>
            <p>Certainly! You can choose The Setup on its own. We’ll focus on the areas that need improvement while keeping the systems that already work.</p>
          </details>
          <details className={styles.box}>
            <summary>I want to strengthen my in-house team. Which services should I choose?</summary>
            <p>We recommend Pillar 1, The Setup, alongside training and support in these areas.</p>
            <ul>
              <li><strong>AI Training</strong> teaches your team to use AI tools effectively.</li>
              <li><strong>Social Media Branding</strong> teaches them to create videos and content for social media.</li>
              <li><strong>Sales SOP Training</strong> helps them establish sales processes and improve performance.</li>
              <li><strong>Lead Generation Training</strong> equips them to generate quality leads.</li>
            </ul>
            <p>Our goal is to give your in-house team the systems, skills and knowledge to grow sustainably.</p>
          </details>
        </div>
      </section>

      <section className="clone-extra-section" id="packages" aria-labelledby="service-options-title">
        <header className="clone-section-header">
          <h2 id="service-options-title">What Are You <span className="gradient-text">Looking For?</span></h2>
        </header>
        <div className={`${styles.contentWidth} ${styles.boxGrid}`}>
          <div className={styles.box}>
            <h3>The Setup +</h3>
            <p>Customised Done-for-You Service</p>
          </div>
          <div className={styles.box}>
            <h3>The Setup +</h3>
            <p>Training on the Other 3 Pillars</p>
          </div>
        </div>
      </section>

      <PlanTransformationSection afterServiceOptions />

      <ReviewsSection leadConversionProof animatedPhotoOutline />

      <section className="clone-extra-section" id="discovery-call" aria-labelledby="discovery-call-title">
        <div className={styles.discovery}>
          <div>
            <h2 id="discovery-call-title">Book Your Discovery Call with <span className="gradient-text">Shweta Shah</span></h2>
            <a className="clone-action checkout-cta" href={discoveryCall.href}>
              {discoveryCall.label} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
          <img src="/brand/shweta-shah-growth-experience.jpg" alt="Shweta Shah seated at her desk" width={1254} height={1254} loading="lazy" />
        </div>
      </section>

      <section className="clone-extra-section" aria-labelledby="pillar-risks-title">
        <header className="clone-section-header">
          <h2 id="pillar-risks-title" className={styles.risksTitle}>
            One Missing Pillar. <span className="gradient-text">Countless Lost Opportunities.</span>
          </h2>
        </header>
        <div className={styles.contentWidth}>
          <ul className={styles.riskList} role="list">
            {[3, 0, 1, 2].map(index => (
              <li key={lessons[index].mediaId}>
                <h3>Pillar {index + 1} · {lessons[index].title}</h3>
                <p>{lessons[index].risk}</p>
              </li>
            ))}
          </ul>
          <div className={`${styles.boxGrid} ${styles.comparison}`}>
            <div className={styles.box}>
              <h3>Without the 4 Pillars</h3>
              <p>You risk losing leads, customer trust, sales opportunities and revenue every month while competitors win customers you could have served.</p>
            </div>
            <div className={styles.box}>
              <h3>With the 4 Pillars</h3>
              <p>Pillar 4 brings in opportunities. Pillars 1, 2 and 3 build trust, nurture prospects and convert those opportunities into customers and revenue.</p>
            </div>
          </div>
          <p className={styles.takeaway}><strong>In simple words:</strong> We help you generate leads and build the complete system to turn them into revenue.</p>
        </div>
      </section>

      <section className={`clone-extra-section ${styles.connect}`} id="connect" aria-labelledby="connect-title">
        <div>
          <h2 id="connect-title">Connect with Shweta Shah</h2>
          <p>{brand.name}</p>
          <p>Mob: <a href={brand.phoneHref}>+91 9920220513</a></p>
          <address>
            <strong>Office Address</strong><br />
            2nd Floor, 207B, Rajgruhi Business Hub, Near Go Pune City, Kondhwa Budruk, Pune, Maharashtra – 411048.
          </address>
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul className={styles.socials} role="list">
            <li><a href={brand.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/shwetashah.in" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </section>
      <CursorGlow />
    </div>
  );
}
