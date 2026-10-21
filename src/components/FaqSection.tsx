"use client";

import React, { useState } from "react";
import { faqs } from "@/lib/content";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);



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
          background: #100c06;
          position: relative;
          overflow: hidden;
          color: white;
          text-align: center;
        }

        .faq-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(220, 177, 96, 0.08), transparent 70%);
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
          background: radial-gradient(circle, rgba(248, 209, 126, 0.08), transparent 70%);
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
          color: #f5d18a;
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
          color: #b2a58c;
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
          border-color: rgba(248, 209, 126, 0.4);
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
          color: #f5d18a;
          font-size: 16px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .faq-answer {
          padding: 0 28px 24px;
          color: #ffd985;
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
