"use client";

import React from "react";

interface BonusTicketSectionProps {
  onOpenModal: () => void;
}

export default function BonusTicketSection({ onOpenModal }: BonusTicketSectionProps) {
  return (
    <section className="bonus-section" id="bonus">
      <div className="bg-grid-wrap">
        <div className="bg-grid" />
        <div className="bg-glow-spot" />
      </div>

      <div className="ticket-container">
        {/* Left Side: Offer */}
        <div className="ticket-left">
          <span className="bonus-label">LIMITED BONUS</span>
          <h2 className="bonus-title">
            Strategy Session <span className="highlight">&amp; Roadmap</span>
          </h2>
          <p className="bonus-desc">
            An exclusive <strong>1-on-1 session with Vibhav Raj</strong> to analyze your current standing and build a custom growth blueprint.
          </p>

          <ul className="bonus-list">
            <li>
              <div className="check-icon">
                <i className="fa-solid fa-check" />
              </div>
              <span>Niche &amp; Positioning Audit</span>
            </li>
            <li>
              <div className="check-icon">
                <i className="fa-solid fa-check" />
              </div>
              <span>90-Day Content Plan</span>
            </li>
            <li>
              <div className="check-icon">
                <i className="fa-solid fa-check" />
              </div>
              <span>Monetization Strategy</span>
            </li>
            <li>
              <div className="check-icon">
                <i className="fa-solid fa-check" />
              </div>
              <span>Growth &amp; Viral Hacks</span>
            </li>
          </ul>
        </div>

        {/* Right Side: Roadmap Stub */}
        <div className="ticket-right">
          <h4 className="roadmap-title">YOUR ROADMAP</h4>

          <div className="roadmap-steps">
            <div className="step-item">
              <div className="step-num">1</div>
              <div className="step-text">Define Unique Positioning</div>
            </div>
            <div className="step-item">
              <div className="step-num">2</div>
              <div className="step-text">Scale to 100K Followers</div>
            </div>
            <div className="step-item">
              <div className="step-num">3</div>
              <div className="step-text">Automate &amp; Monetize</div>
            </div>
          </div>

          <button
            type="button"
            className="bonus-btn"
            onClick={onOpenModal}
          >
            Claim Your Spot <i className="fa-solid fa-arrow-right" />
          </button>

          <div className="barcode" />
        </div>
      </div>

      <style jsx>{`
        .bonus-section {
          width: 100%;
          padding: 120px 20px;
          background: #0f121e;
          position: relative;
          overflow: hidden;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bg-grid-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .bg-grid {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          animation: gridMove 25s linear infinite;
        }

        .bg-glow-spot {
          position: absolute;
          width: 900px;
          height: 900px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.12), transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
        }

        @keyframes gridMove {
          0% {
            transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px);
          }
          100% {
            transform: perspective(500px) rotateX(60deg) translateY(60px) translateZ(-200px);
          }
        }

        .ticket-container {
          display: flex;
          width: 100%;
          max-width: 1100px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border-radius: 24px;
          position: relative;
          z-index: 5;
          box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .ticket-container:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 134, 199, 0.4);
          box-shadow: 0 40px 80px -10px rgba(0, 0, 0, 0.6);
        }

        .ticket-left {
          flex: 1.5;
          padding: 50px;
          position: relative;
          border-right: 2px dashed rgba(255, 255, 255, 0.15);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 100%);
        }

        /* Perforation circles */
        .ticket-left::after,
        .ticket-left::before {
          content: "";
          position: absolute;
          right: -10px;
          width: 20px;
          height: 20px;
          background: #0f121e;
          border-radius: 50%;
          z-index: 2;
        }
        .ticket-left::before {
          top: -10px;
        }
        .ticket-left::after {
          bottom: -10px;
        }

        .ticket-right {
          flex: 1;
          padding: 50px;
          background: rgba(20, 27, 48, 0.6);
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .bonus-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #ff86c7;
          text-transform: uppercase;
          margin-bottom: 15px;
          background: rgba(255, 134, 199, 0.1);
          padding: 6px 14px;
          border-radius: 4px;
          font-family: var(--font-montserrat);
        }

        .bonus-title {
          font-size: clamp(30px, 3.8vw, 42px);
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin-bottom: 16px;
          font-family: var(--font-montserrat);
        }

        .highlight {
          color: #ff86c7;
        }

        .bonus-desc {
          font-size: 16px;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .bonus-desc strong {
          color: #ffffff;
        }

        .bonus-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bonus-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #e2e8f0;
          font-weight: 500;
        }

        .check-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(238, 130, 238, 0.15);
          color: #ee82ee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
        }

        .roadmap-title {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #94a3b8;
          margin-bottom: 20px;
          font-family: var(--font-montserrat);
        }

        .roadmap-steps {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 30px;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.03);
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ee82ee, #d946ef);
          color: #fff;
          font-weight: 800;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-text {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
        }

        .bonus-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          background: linear-gradient(135deg, #ee82ee, #d946ef);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-weight: 800;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          font-family: var(--font-montserrat);
          box-shadow: 0 10px 30px rgba(238, 130, 238, 0.35);
          transition: all 0.3s ease;
          width: 100%;
        }

        .bonus-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(238, 130, 238, 0.55);
        }

        .barcode {
          margin-top: 24px;
          height: 35px;
          width: 100%;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.55) 0px,
            rgba(255, 255, 255, 0.55) 2px,
            transparent 2px,
            transparent 4px,
            rgba(255, 255, 255, 0.55) 4px,
            rgba(255, 255, 255, 0.55) 7px,
            transparent 7px,
            transparent 9px
          );
          opacity: 0.45;
          border-radius: 3px;
        }

        @media (max-width: 900px) {
          .ticket-container {
            flex-direction: column;
          }
          .ticket-left {
            border-right: none;
            border-bottom: 2px dashed rgba(255, 255, 255, 0.15);
            padding: 35px 25px;
          }
          .ticket-left::after,
          .ticket-left::before {
            display: none;
          }
          .ticket-right {
            padding: 35px 25px;
          }
        }
      `}</style>
    </section>
  );
}
