"use client";

import React from "react";

export default function PackagesSection() {
  return (
    <section className="packages-section" id="packages" aria-labelledby="fobet-packages-title">
      <div className="packages-glow glow-center" />

      <div className="packages-header">
        <div className="packages-badge">PRICING PLANS</div>
        <h2 className="packages-title" id="fobet-packages-title">
          Our <span className="gradient-text">Packages</span>
        </h2>
        <p className="packages-desc">
          Build <strong>organic</strong> authority or combine it with a <strong>paid media</strong> acquisition engine.
        </p>
      </div>

      <div className="packages-row">
        {/* CARD 1: 1:1 MENTORSHIP */}
        <div className="package-card">
          <div className="package-name">1:1 Mentorship Session</div>
          <div className="package-price">₹50,000</div>
          <p className="package-desc">A direct clarity session to fix your brand direction.</p>
          <div className="package-line" />
          <div className="highlight-text">with Vibhav Raj</div>

          <ul className="package-features">
            <li>
              <i className="fa-solid fa-check" />
              <span>Brand positioning: who you are &amp; how people should see you</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Clear content pillars &amp; storytelling style</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Exact audience &amp; niche clarity</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>6-month growth roadmap</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Script &amp; hook structuring</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Shoot style, what to avoid, on-camera guidance</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Page audit: what&apos;s working vs what&apos;s blocking growth</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Monetisation plan: brand deals, courses, consulting</span>
            </li>
          </ul>

          <div className="highlight-text bottom-highlight">
            A personalised blueprint for YOUR growth.
          </div>

          <a
            href="https://wa.me/919128006318?text=Hi,%20I%20would%20like%20to%20book%20a%201:1%20Mentorship%20Session%20with%20Vibhav%20Raj.%20Can%20you%20please%20share%20more%20details%20about%20the%20availability%20and%20booking%20process?"
            target="_blank"
            rel="noopener noreferrer"
            className="package-btn btn-outline"
          >
            Get Started
          </a>
        </div>

        {/* CARD 2: COMPLETE CREATOR GROWTH */}
        <div className="package-card">
          <div className="package-tag tag-value">Organic Engine</div>
          <div className="package-name">Complete Creator Growth</div>
          <div className="package-price">
            ₹4,00,000
            <span className="price-cycle">/month</span>
          </div>
          <p className="package-desc">Done-for-you creator growth. You just show up.</p>
          <div className="package-line" />
          <div className="highlight-text">We handle:</div>

          <ul className="package-features">
            <li>
              <i className="fa-solid fa-check" />
              <span><strong>Strategy</strong></span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span><strong>Scripting</strong></span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span><strong>Shooting</strong></span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span><strong>Editing</strong></span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span><strong>Posting</strong></span>
            </li>
          </ul>

          <div className="highlight-text bottom-highlight">
            Scaled multiple creators in this category
            <br />
            The fastest path to becoming a known creator.
          </div>

          <a
            href="https://wa.me/919128006318?text=Hi,%20I%27m%20interested%20in%20the%20Complete%20Creator%20Growth%20package.%20I%27d%20like%20to%20learn%20more%20about%20how%20you%20can%20help%20scale%20my%20content%20and%20discuss%20the%20next%20steps%20to%20get%20started."
            target="_blank"
            rel="noopener noreferrer"
            className="package-btn btn-filled"
          >
            Get Started
          </a>
        </div>

        {/* CARD 3: FOBET 2.0 (FLAGSHIP) */}
        <div className="package-card featured">
          <div className="package-tag tag-popular">Flagship</div>
          <div className="package-name">Fobet 2.0</div>
          <div className="package-price">
            ₹7,50,000
            <span className="price-cycle">/month</span>
          </div>
          <p className="package-desc">
            A complete <strong>Organic</strong> + <strong>Paid Media</strong> growth system for founders and brands ready to scale.
          </p>
          <div className="package-line" />
          <div className="highlight-text">
            <strong>Everything in Complete Creator Growth</strong>, plus a dedicated <strong>Paid Media</strong> acquisition layer.
          </div>

          <ul className="package-features">
            <li>
              <i className="fa-solid fa-check" />
              <span>Meta Ads campaign strategy, setup and management</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Audience research, targeting and funnel mapping</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Creative research, competitor analysis and winning creative angles</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Campaign structure, budget allocation and bid management</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Ongoing paid creative concepts and assets development</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>A/B testing for hooks, creatives, audiences and offers</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Pixel, conversion-event and performance tracking support</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Ongoing optimisation across ROAS, CPA, CTR and CPM</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Daily performance monitoring, weekly optimization &amp; monthly reviews</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Meta ad-spend management up to ₹10 lakh/month</span>
            </li>
          </ul>

          <div className="package-note-box">
            <div className="package-note-title">
              <i className="fa-solid fa-circle-info" /> Important
            </div>
            <div className="package-note-text">
              Media spend is paid directly by the client and is not included in the ₹7.5 lakh retainer. Spend above ₹10 lakh/month requires a revised scope.
            </div>
          </div>

          <a
            href="https://wa.me/919128006318?text=Hi%2C%20I%27m%20interested%20in%20Fobet%202.0%2C%20the%20Organic%20%2B%20Paid%20Media%20package%20at%20%E2%82%B97.5%20lakh%20per%20month.%20Please%20share%20the%20scope%2C%20onboarding%20process%20and%20next%20steps."
            target="_blank"
            rel="noopener noreferrer"
            className="package-btn btn-filled"
          >
            Explore Fobet 2.0
          </a>
        </div>
      </div>

      <style jsx>{`
        .packages-section {
          width: 100%;
          padding: 120px 20px;
          background: #0f121e;
          position: relative;
          overflow: hidden;
          color: white;
          text-align: center;
        }

        .packages-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.08), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .glow-center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .packages-header {
          position: relative;
          z-index: 2;
          margin-bottom: 80px;
        }

        .packages-badge {
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

        .packages-title {
          font-size: clamp(34px, 4.8vw, 60px);
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
          line-height: 1.1;
          letter-spacing: -1px;
          font-family: var(--font-montserrat);
        }

        .packages-desc {
          font-size: clamp(16px, 1.8vw, 18px);
          color: #94a3b8;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .packages-desc strong {
          color: #ffffff;
        }

        .packages-row {
          display: flex;
          justify-content: center;
          gap: 30px;
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
          flex-wrap: wrap;
          align-items: stretch;
        }

        .package-card {
          flex: 1;
          min-width: 320px;
          max-width: 400px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 40px 30px;
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          text-align: left;
        }

        .package-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 134, 199, 0.35);
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5);
        }

        .package-card.featured {
          border-color: rgba(255, 134, 199, 0.55);
          background: linear-gradient(
            180deg,
            rgba(255, 134, 199, 0.06) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          box-shadow: 0 0 35px rgba(255, 134, 199, 0.12);
          transform: scale(1.04);
          z-index: 2;
        }

        .package-card.featured:hover {
          transform: scale(1.04) translateY(-8px);
          box-shadow: 0 25px 65px -10px rgba(255, 134, 199, 0.25);
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .tag-popular {
          background: #ff86c7;
          color: #0f121e;
        }

        .tag-value {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
        }

        .package-name {
          font-size: 22px;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          font-family: var(--font-montserrat);
        }

        .package-price {
          font-size: 34px;
          font-weight: 800;
          color: #ff86c7;
          margin-bottom: 15px;
          font-family: var(--font-montserrat);
        }

        .price-cycle {
          font-size: 16px;
          color: #94a3b8;
          font-weight: 500;
        }

        .package-desc {
          font-size: 15px;
          color: #94a3b8;
          margin-bottom: 25px;
          line-height: 1.5;
        }

        .package-line {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: 25px;
        }

        .highlight-text {
          font-size: 14px;
          color: #fff;
          background: rgba(255, 134, 199, 0.1);
          padding: 12px 15px;
          border-radius: 10px;
          margin-bottom: 25px;
          font-weight: 600;
          border-left: 3px solid #ff86c7;
          line-height: 1.5;
        }

        .bottom-highlight {
          margin-top: auto;
        }

        .package-features {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
          flex-grow: 1;
        }

        .package-features li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
          font-size: 14px;
          color: #e2e8f0;
          line-height: 1.5;
        }

        .package-features li i {
          color: #ff86c7;
          margin-right: 12px;
          margin-top: 4px;
          font-size: 12px;
          flex-shrink: 0;
        }

        .package-note-box {
          background: rgba(255, 134, 199, 0.05);
          border: 1px dashed rgba(255, 134, 199, 0.3);
          padding: 15px;
          border-radius: 12px;
          margin-bottom: 25px;
        }

        .package-note-title {
          font-size: 13px;
          font-weight: 700;
          color: #ff86c7;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: var(--font-montserrat);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .package-note-text {
          font-size: 13px;
          color: #ffffff;
          line-height: 1.5;
        }

        .package-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: var(--font-montserrat);
          cursor: pointer;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .btn-outline:hover {
          border-color: #ff86c7;
          background: rgba(255, 134, 199, 0.12);
        }

        .btn-filled {
          background: linear-gradient(135deg, #ff86c7, #d946ef);
          color: #0f121e;
          border: none;
          box-shadow: 0 10px 30px rgba(217, 70, 239, 0.3);
        }

        .btn-filled:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(217, 70, 239, 0.5);
        }

        @media (max-width: 1024px) {
          .packages-row {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }

          .package-card {
            width: 100%;
            max-width: 480px;
          }

          .package-card.featured {
            transform: scale(1);
            order: -1;
          }
          .package-card.featured:hover {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
