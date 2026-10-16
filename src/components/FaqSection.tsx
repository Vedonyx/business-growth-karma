"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "I don't have time to shoot content every week. How will this work for me?",
      a: "You don't have to. We shoot all your reels for the month in just two dedicated studio days. Everything—from setup to direction is handled by our team.",
    },
    {
      q: "I'm not good on camera. Will I still be able to do this?",
      a: "Absolutely. You don't need to remember lines or act. Our prompt director stands right in front of you during the shoot and guides you line by line. Most of our clients had zero on-camera experience before starting.",
    },
    {
      q: "I don't know what to talk about or what kind of content will work for me.",
      a: "That's our job. We do full research on your niche, competitors, and audience, and then create 25–30 targeted scripts for you every month, all aligned with your goals.",
    },
    {
      q: "Will this actually get me followers or just good-looking videos?",
      a: "Our focus is growth, not just aesthetics. Every script, hook, and call-to-action is designed for reach, engagement, and conversion.",
    },
    {
      q: "What if I don't have a clear niche or business idea yet?",
      a: "No problem. During onboarding, we help you find your niche, sub-niche, and positioning, so your content speaks to the right audience and builds authority.",
    },
    {
      q: "I already post but don't see results. How will this be different?",
      a: "Most people post without strategy. We build your content around data, trends, and audience psychology—the same system that's helped multiple creators grow to 100K+ followers.",
    },
    {
      q: "How involved do I have to be in the process?",
      a: "You just need to be present for the 2 shoot days each month. Our team handles everything else: scripting, directing, editing, and strategy.",
    },
    {
      q: "What if I don't like the final edits or the tone?",
      a: "We share previews, take your feedback, and revise until you're happy. Our editors ensure the videos match your brand and comfort level perfectly.",
    },
    {
      q: "Is this service only for influencers or also for business owners?",
      a: "Both. Whether you want to grow your personal brand or generate sales for your business, we tailor the strategy to your specific goals.",
    },
    {
      q: "What's the investment like?",
      a: "Our done-for-you service is priced at ₹4,00,000 per month. This includes everything—scripting, shooting, editing, strategy, and posting. You just show up for 2 days a month, and we handle the rest to grow your brand.",
    },
    {
      q: "Why should I hire a Personal Branding Consultant instead of a general agency?",
      a: "A dedicated consultant like ours focuses on your unique voice, ensuring you don't just get views, but build true authority.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="fobet-faq-title">
      <div className="faq-glow glow-left" />
      <div className="faq-glow glow-right" />

      <div className="faq-header">
        <div className="faq-badge">GOT QUESTIONS?</div>
        <h2 className="faq-title" id="fobet-faq-title">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="faq-desc">Everything you need to know about our service</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`faq-item ${isOpen ? "active" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`} />
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .faq-section {
          width: 100%;
          padding: 120px 20px;
          background: #0f121e;
          position: relative;
          overflow: hidden;
          color: white;
          text-align: center;
        }

        .faq-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(217, 70, 239, 0.08), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .glow-left {
          top: -100px;
          left: -200px;
        }
        .glow-right {
          bottom: -100px;
          right: -200px;
          background: radial-gradient(circle, rgba(255, 134, 199, 0.08), transparent 70%);
        }

        .faq-header {
          position: relative;
          z-index: 2;
          margin-bottom: 60px;
        }

        .faq-badge {
          display: inline-block;
          padding: 8px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          font-size: 12px;
          color: #ff86c7;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .faq-title {
          font-size: clamp(34px, 4.8vw, 56px);
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
          line-height: 1.1;
          letter-spacing: -1px;
          font-family: var(--font-montserrat);
        }

        .faq-desc {
          font-size: clamp(16px, 1.8vw, 18px);
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .faq-item {
          margin-bottom: 18px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          overflow: hidden;
          transition: all 0.3s ease;
          text-align: left;
        }

        .faq-item:hover,
        .faq-item.active {
          border-color: rgba(255, 134, 199, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .faq-question {
          width: 100%;
          padding: 24px 28px;
          background: transparent;
          border: none;
          color: white;
          font-size: 17px;
          font-weight: 700;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          font-family: var(--font-space);
          text-align: left;
        }

        .faq-question i {
          color: #ff86c7;
          font-size: 16px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .faq-answer {
          padding: 0 28px 24px;
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.65;
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
