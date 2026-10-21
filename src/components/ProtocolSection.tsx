"use client";

import React, { useEffect, useRef, useState } from "react";
import { imageFor } from "@/lib/content";

export default function ProtocolSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const steps = [
    {num:'01',icon:'fa-solid fa-bullseye',title:'Your Annual Sales Goal',desc:'We understand your business, your offer, your customers and the conversion gaps between marketing and sales.',img:imageFor('you-get-2-types-of-leads-1.png')},
    {num:'02',icon:'fa-solid fa-layer-group',title:'The Setup',desc:'A conversion-focused landing page, integrated with the Sales Psychology System, gives every enquiry a clear path forward.',img:imageFor('The-Setup-5.png')},
    {num:'03',icon:'fa-solid fa-gem',title:'Strong Branding',desc:'Personal, company and product branding builds trust and credibility before a prospect speaks to your team.',img:imageFor('Lead-to-Deal-Generation-2.png')},
    {num:'04',icon:'fa-solid fa-users',title:'A Strong Sales Team',desc:'Regular sales psychology training and clear SOPs help your people qualify opportunities, handle objections and close deals.',img:imageFor('sales-psycholgo-ysystem.png')},
    {num:'05',icon:'fa-solid fa-magnet',title:'Quality Lead Generation',desc:'Google, Meta and LinkedIn campaigns bring relevant prospects to your business. We connect the campaigns to a conversion system.',img:imageFor('Lead-Genertaion.png')},
    {num:'06',icon:'fa-solid fa-gears',title:'3I + 3B Nurturing',desc:'Respond promptly to urgent buyers. Build trust, credibility and relationships with prospects who are still researching.',img:imageFor('hot-lead-buys-in-24-hours.png')},
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !fillRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.6;
      const endPoint = rect.height;

      let scrollY = startPoint - rect.top;
      if (scrollY < 0) scrollY = 0;
      if (scrollY > endPoint) scrollY = endPoint;

      fillRef.current.style.height = `${scrollY}px`;

      const itemEls = containerRef.current.querySelectorAll(".timeline-item");
      const currentActives: number[] = [];
      itemEls.forEach((item, idx) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < windowHeight * 0.75) {
          currentActives.push(idx);
        }
      });
      setActiveItems(currentActives);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="timeline-section" id="protocol" aria-labelledby="fobet-protocol-title">
      <div className="timeline-glow glow-top-left" />
      <div className="timeline-glow glow-bottom-right" />

      <div className="timeline-header">
        <div className="timeline-badge">SYSTEMATIZED GROWTH</div>
        <h2 className="timeline-title" id="fobet-protocol-title">
          Our Proven <span className="gradient-text">Business Sales Growth Framework</span>
        </h2>
        <p className="timeline-desc">
          Four connected pillars turn your marketing and sales into one growth system.
        </p>
      </div>

      <div className="timeline-container" ref={containerRef}>
        <div className="timeline-line-bg" />
        <div className="timeline-line-fill" ref={fillRef} />

        {steps.map((step, idx) => {
          const isActive = activeItems.includes(idx);
          const isOdd = idx % 2 === 0; // 1-indexed odd: 0, 2, 4 (Text on left, Image on right)

          return (
            <div
              key={step.num}
              className={`timeline-item ${isActive ? "active" : ""} ${
                isOdd ? "odd-row" : "even-row"
              }`}
            >
              {/* Content Side */}
              <div className="timeline-content-side">
                <div className="glass-card">
                  <div className="step-number">{step.num}</div>
                  <div className="step-details">
                    <div className="step-icon">
                      <i className={step.icon} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>

              {/* Central Dot */}
              <div className="timeline-dot" />

              {/* Image Side */}
              <div className="timeline-empty-side">
                <div className="timeline-image-card">
                  <img
                    src={step.img}
                    alt={`${step.title} stage of the Business Growth Karma process`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .timeline-section {
          width: 100%;
          padding: 120px 20px;
          background: #100c06;
          position: relative;
          overflow: hidden;
          color: white;
        }

        .timeline-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .glow-top-left {
          top: 0;
          left: -200px;
          background: radial-gradient(circle, rgba(220, 177, 96, 0.12), transparent 70%);
        }

        .glow-bottom-right {
          bottom: 0;
          right: -200px;
          background: radial-gradient(circle, rgba(231, 189, 107, 0.12), transparent 70%);
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 90px;
          position: relative;
          z-index: 2;
        }

        .timeline-badge {
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

        .timeline-title {
          font-size: clamp(34px, 4.8vw, 60px);
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
          line-height: 1.1;
          letter-spacing: -1px;
          font-family: var(--font-montserrat);
        }

        .timeline-desc {
          font-size: clamp(16px, 1.8vw, 18px);
          color: #b2a58c;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .timeline-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .timeline-line-bg {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: rgba(255, 255, 255, 0.06);
          transform: translateX(-50%);
          border-radius: 4px;
        }

        .timeline-line-fill {
          position: absolute;
          top: 0;
          left: 50%;
          width: 4px;
          height: 0;
          background: linear-gradient(180deg, #f5d18a, #dba22d);
          transform: translateX(-50%);
          border-radius: 4px;
          box-shadow: 0 0 15px rgba(220, 177, 96, 0.6);
          transition: height 0.1s linear;
          z-index: 1;
        }

        .timeline-item {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 120px;
          position: relative;
          width: 100%;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          background: #100c06;
          border: 3px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          z-index: 2;
          transition: all 0.4s ease;
          box-shadow: 0 0 0 4px #100c06;
        }

        .timeline-item.active .timeline-dot {
          border-color: #f5d18a;
          background: #f5d18a;
          box-shadow: 0 0 20px rgba(248, 209, 126, 0.7), 0 0 0 4px #100c06;
          transform: translate(-50%, -50%) scale(1.2);
        }

        .timeline-content-side {
          width: 45%;
          padding: 0 40px;
          position: relative;
        }

        .timeline-empty-side {
          width: 45%;
        }

        /* Alternating Logic */
        .timeline-item.odd-row .timeline-content-side {
          order: 1;
          text-align: right;
        }
        .timeline-item.odd-row .timeline-empty-side {
          order: 3;
        }
        .timeline-item.odd-row .timeline-dot {
          order: 2;
        }

        .timeline-item.even-row .timeline-empty-side {
          order: 1;
        }
        .timeline-item.even-row .timeline-content-side {
          order: 3;
          text-align: left;
        }
        .timeline-item.even-row .timeline-dot {
          order: 2;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 20px;
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .timeline-item.active .glass-card {
          border-color: rgba(248, 209, 126, 0.35);
          transform: translateY(-5px);
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
        }

        .step-number {
          position: absolute;
          top: -20px;
          font-size: 100px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.03);
          line-height: 1;
          z-index: 0;
          pointer-events: none;
          font-family: var(--font-montserrat);
        }

        .timeline-item.odd-row .step-number {
          right: 15px;
        }
        .timeline-item.even-row .step-number {
          left: 15px;
        }

        .step-details {
          position: relative;
          z-index: 1;
        }

        .step-details h3 {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          font-family: var(--font-montserrat);
        }

        .step-details p {
          font-size: 15px;
          color: #ffd985;
          line-height: 1.6;
        }

        .step-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #f5d18a, #dba22d);
          border-radius: 12px;
          color: white;
          font-size: 20px;
          margin-bottom: 15px;
          box-shadow: 0 5px 15px rgba(220, 177, 96, 0.3);
        }

        .timeline-image-card {
          width: 100%;
          height: 220px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .timeline-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
          transition: opacity 0.3s ease, transform 0.5s ease;
        }

        .timeline-item.active .timeline-image-card img {
          opacity: 1;
          transform: scale(1.05);
        }

        @media (max-width: 968px) {
          .timeline-section {
            padding: 80px 20px;
          }
          .timeline-line-bg,
          .timeline-line-fill {
            left: 20px;
          }
          .timeline-item {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 60px;
            padding-left: 50px;
          }
          .timeline-dot {
            left: 20px;
            top: 30px;
            transform: translate(-50%, 0);
          }
          .timeline-item.active .timeline-dot {
            transform: translate(-50%, 0) scale(1.2);
          }
          .timeline-content-side {
            width: 100%;
            padding: 0;
            order: 2 !important;
            text-align: left !important;
            margin-top: 20px;
          }
          .timeline-empty-side {
            width: 100%;
            order: 1 !important;
          }
          .timeline-image-card {
            height: 180px;
          }
          .step-number {
            font-size: 60px;
            top: 5px;
            right: 15px !important;
            left: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
