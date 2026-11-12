import type { Metadata } from "next";
import FourPillarsSection from "@/components/FourPillarsSection";
import PackagesSection from "@/components/PackagesSection";
import PlanTransformationSection from "@/components/PlanTransformationSection";
import ReviewsSection from "@/components/ReviewsSection";
import WistiaVideo from "@/components/WistiaVideo";
import { brand } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "4 Pillar Access",
  description: "Your four business sales growth lessons with Shweta Shah.",
  robots: { index: false, follow: false },
};

const lessons = [
  {
    title: "The Sales Psychology Setup",
    description: "Understand customer psychology and learn what makes prospects say YES.",
    mediaId: "iwnrzubegn",
  },
  {
    title: "Strong Social Media Branding with AI Videos",
    description: "Build a powerful brand presence and attract your ideal audience using AI-powered videos.",
    mediaId: "4se1bieymo",
  },
  {
    title: "Sales Training & SOP",
    description: "Build a structured sales process and train your team to convert leads into paying customers.",
    mediaId: "s9is7qb6h4",
  },
  {
    title: "Lead Generation Strategy & Budget",
    description: "Learn how to generate quality leads with the right strategy and an effective marketing budget.",
    mediaId: "lj4h588pci",
  },
];

const discoveryMessage = encodeURIComponent("Hi Shweta, I'd like to book my discovery call for the 3-Day Business Growth Experience.");
const discoveryHref = `https://wa.me/919920220513?text=${discoveryMessage}`;

export default function PillarAccessPage() {
  return (
    <>
      <section className={`clone-extra-section ${styles.hero}`} aria-labelledby="pillar-access-title">
        <header className={`clone-section-header ${styles.heroHeading}`}>
          <p className={styles.congratulations}>🎉 Congratulations!</p>
          <h1 id="pillar-access-title">
            You&apos;ve Taken the First Step Towards <span className="gradient-text">Smarter Business Growth!</span>
          </h1>
          <p><strong>Your payment is successful!</strong></p>
          <p>You&apos;re now ready to discover the right strategies for generating quality leads, improving sales conversions, and growing your business.</p>
          <h2>Your 4 Exclusive Learning Videos Are Ready!</h2>
          <p>Learn the 4 essential pillars of business sales growth, step by step.</p>
          <a className="clone-action" href="#pillar-lessons">
            Watch the 4 Videos <i className="fa-solid fa-arrow-down" aria-hidden="true" />
          </a>
        </header>
      </section>

      <FourPillarsSection solution diagramOnly />

      <section className="clone-extra-section" id="pillar-lessons" aria-labelledby="pillar-lessons-title">
        <header className="clone-section-header">
          <h2 id="pillar-lessons-title">Your 4 Pillars of <span className="gradient-text">Business Sales Growth</span></h2>
        </header>

        <ol className={styles.lessons} role="list">
          {lessons.map((lesson, index) => (
            <li className={styles.lesson} key={lesson.mediaId}>
              <header className={styles.lessonHeading}>
                <p className={styles.lessonNumber}>Pillar No. {index + 1}</p>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
              </header>
              <WistiaVideo mediaId={lesson.mediaId} title={lesson.title} />
            </li>
          ))}
        </ol>

        <div className={styles.nextSteps}>
          <h3>Congratulations! You&apos;re Now Equipped With the 4 Pillars!</h3>
          <p>You now have a better understanding of what works, what doesn&apos;t, and what your business needs to improve its sales conversions.</p>
          <p>But learning is just the beginning. Implementation is where real growth happens!</p>
          <h3>Ready to Accelerate Your Business Growth?</h3>
          <p><strong>Get Personalised Business Growth Guidance with Shweta Shah!</strong></p>
          <p>Take the next step towards building a predictable lead generation and sales conversion system.</p>
          <p>Book a personal appointment with Shweta Shah and discuss your business growth challenges.</p>
        </div>
      </section>

      <PackagesSection heading="Our Services" />
      <PlanTransformationSection planPrompt="Select any of the above plan" />
      <ReviewsSection leadConversionProof />

      <section className="clone-extra-section" id="discovery-call" aria-labelledby="discovery-call-title">
        <div className={styles.discovery}>
          <div>
            <h2 id="discovery-call-title">Click here to book your 1st Call with <span className="gradient-text">Shweta Shah</span></h2>
            <a className="clone-action checkout-cta" href={discoveryHref} target="_blank" rel="noreferrer">
              My Discovery Call <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
          <img src="/brand/shweta-shah-growth-experience.jpg" alt="Shweta Shah seated at her desk" width={1254} height={1254} loading="lazy" />
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
    </>
  );
}
