"use client";

import React from "react";

export default function StatsSection() {
  return (
    <section className="two-day-section" id="stats" aria-labelledby="fobet-two-days-title">
      <div className="glow-spot glow-left" />
      <div className="glow-spot glow-right" />

      <div className="container">
        {/* Top Text Content */}
        <div className="text-content">
          <div className="highlight-box">
            <i className="fa-solid fa-rocket" /> Done for you services
          </div>
          <h2 id="fobet-two-days-title">Your Annual Sales Goal. Our Focus.</h2>
          <h3 className="sub-heading">We handle 80% of marketing-to-sales tasks</h3>
          <h3 className="sub-heading highlight-sub">
            <strong>Save Time. Save Effort. Convert More Leads Into Deals.</strong>
          </h3>
        </div>

        {/* Bottom Stats Deck */}
        <div className="stats-deck">
          {/* Card 1: Revenue */}
          <div className="glass-card stat-card-side purple">
            <div>
              <h4 className="stat-value">2016</h4>
              <p className="stat-label">Helping Businesses Since</p>
            </div>
            <i className="fa-solid fa-dollar-sign icon-float icon-dollar" />
            <svg className="sparkline" viewBox="0 0 100 40">
              <path d="M0 30 Q 20 25 40 10 T 80 15 T 100 5" stroke="#f7cf7c" />
            </svg>
          </div>

          {/* Card 2: Projects (Center Hero with Conic Ring) */}
          <div className="glass-card stat-card-center">
            <div className="progress-ring">
              <div className="stat-text-center">
                <h3>500+</h3>
                <p>Projects</p>
              </div>
            </div>
          </div>

          {/* Card 3: Views */}
          <div className="glass-card stat-card-side blue">
            <div>
              <h4 className="stat-value">8–25%</h4>
              <p className="stat-label">Reported Client Closing Ratios</p>
            </div>
            <i className="fa-solid fa-eye icon-float icon-views" />
            <svg className="sparkline" viewBox="0 0 100 40">
              <path d="M0 35 Q 25 30 50 15 T 100 10" stroke="#f5cb6c" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .two-day-section {
          width: 100%;
          padding: 110px 30px;
          position: relative;
          background: #160f06;
          color: #fff8e8;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .glow-spot {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .glow-left {
          top: -200px;
          left: -200px;
          background: radial-gradient(circle, rgba(228, 186, 105, 0.16), transparent 70%);
        }

        .glow-right {
          bottom: -200px;
          right: -200px;
          background: radial-gradient(circle, rgba(220, 177, 96, 0.16), transparent 70%);
        }

        .container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          z-index: 10;
          position: relative;
        }

        .text-content {
          width: 100%;
          max-width: 820px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .highlight-box {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 8px 22px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          color: #edbd55;
          backdrop-filter: blur(10px);
        }

        .text-content h2 {
          font-size: clamp(38px, 4.8vw, 62px);
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 20px 0;
          letter-spacing: -1px;
          color: #fff8e8;
          font-family: var(--font-montserrat);
        }

        .sub-heading {
          font-size: clamp(22px, 2.8vw, 30px);
          font-weight: 300;
          line-height: 1.4;
          margin: 0;
          color: #e8dfce;
          font-family: var(--font-space);
        }

        .highlight-sub {
          margin-top: 14px;
        }

        .highlight-sub strong {
          display: inline;
          font-weight: 700;
          background: linear-gradient(135deg, #edbd55, #dba22d, #b67b1f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Stats Deck */
        .stats-deck {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 30px;
          width: 100%;
          flex-wrap: wrap;
        }

        .glass-card {
          background: rgba(13, 9, 4, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .stat-card-side {
          width: 290px;
          padding: 28px 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 170px;
        }

        .stat-card-side:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(241, 201, 118, 0.35);
        }

        .stat-card-side.purple::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #f7cf7c, transparent);
          opacity: 0.8;
        }

        .stat-card-side.blue::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #f5cb6c, transparent);
          opacity: 0.8;
        }

        /* Center Circle Hero Card */
        .stat-card-center {
          width: 320px;
          height: 220px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .stat-card-center:hover {
          transform: translateY(-8px);
          border-color: rgba(241, 201, 118, 0.5);
          box-shadow: 0 25px 60px rgba(241, 201, 118, 0.2);
        }

        .progress-ring {
          width: 155px;
          height: 155px;
          border-radius: 50%;
          background: conic-gradient(
            #f5cb6c 0deg,
            #f7cf7c 180deg,
            #f2ca77 270deg,
            transparent 270deg
          );
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 0 30px rgba(207, 162, 83, 0.2);
          animation: spinRing 4s ease-out forwards;
        }

        @keyframes spinRing {
          from {
            transform: rotate(-90deg);
            opacity: 0;
          }
          to {
            transform: rotate(0deg);
            opacity: 1;
          }
        }

        .progress-ring::after {
          content: "";
          position: absolute;
          width: 135px;
          height: 135px;
          background: #160f06;
          border-radius: 50%;
        }

        .stat-text-center {
          position: absolute;
          text-align: center;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-text-center h3 {
          font-size: 34px;
          font-weight: 800;
          margin: 0;
          color: #fff;
          line-height: 1;
          font-family: var(--font-montserrat);
        }

        .stat-text-center p {
          font-size: 11px;
          color: #e4ba68;
          margin-top: 6px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-family: var(--font-space);
          font-weight: 700;
        }

        .stat-value {
          font-size: 42px;
          font-weight: 800;
          margin: 0;
          color: #fff;
          line-height: 1;
          font-family: var(--font-montserrat);
        }

        .stat-label {
          font-size: 13px;
          color: #e4ba68;
          margin-top: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: var(--font-space);
          font-weight: 600;
        }

        .icon-float {
          position: absolute;
          right: 25px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 28px;
          opacity: 0.85;
        }

        .icon-dollar {
          color: #d5a858;
        }

        .icon-views {
          color: #f5cb6c;
        }

        .sparkline {
          position: absolute;
          right: 0;
          top: 20px;
          width: 120px;
          height: 50px;
          opacity: 0.25;
          pointer-events: none;
        }

        .sparkline path {
          fill: none;
          stroke-width: 2.5;
        }

        @media (max-width: 968px) {
          .two-day-section {
            padding: 80px 20px;
          }

          .stats-deck {
            flex-direction: column;
            gap: 20px;
          }

          .stat-card-center {
            order: -1;
            width: 100%;
            max-width: 380px;
            height: 200px;
          }

          .stat-card-side {
            width: 100%;
            max-width: 380px;
            height: 140px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .icon-float {
            position: static;
            transform: none;
          }

          .sparkline {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
