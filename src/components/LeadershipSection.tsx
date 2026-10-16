"use client";

import React from "react";

export default function LeadershipSection() {
  return (
    <section className="about-team-section" id="team" aria-labelledby="fobet-leadership-title">
      <div className="bg-grid-wrap">
        <div className="bg-grid" />
        <div className="bg-glow-spot" />
      </div>

      <div className="about-header">
        <div className="team-badge">MEET THE MINDS</div>
        <h2 className="about-team-title" id="fobet-leadership-title">
          Our <span className="gradient-text">Leadership</span>
        </h2>
        <p className="about-team-subtitle">
          Strategy, creativity, and execution. We are the team behind the screens.
        </p>
      </div>

      <div className="team-container">
        {/* Founders Row */}
        <div className="founders-row">
          {/* Founder 1 - Riya */}
          <div className="member-card founder-card">
            <div className="avatar-wrapper">
              <div className="founder-ring" />
              <img
                src="https://fobetmedia.com/wp-content/uploads/2025/11/SnapInsta.to_375571669_1229266574411367_3192603609645771923_n.jpg"
                alt="Riya Upreti, Founder of Fobet Media"
                className="avatar-img"
                loading="lazy"
              />
            </div>
            <div className="badge-row">
              <span className="role-badge">FOUNDER</span>
              <span className="role-badge expert-badge">Personal Branding Expert</span>
            </div>
            <h3 className="member-name">Riya Upreti</h3>
            <p className="member-bio">
              The creative force. Riya understands <span className="highlight">audience psychology</span> better than anyone. She bridges the gap between raw emotion and strategic content.
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/riyaelity/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram"
              >
                <i className="fa-brands fa-instagram" /> Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/riya-upreti-213a04190/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
              >
                <i className="fa-brands fa-linkedin" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Founder 2 - Vibhav */}
          <div className="member-card founder-card">
            <div className="avatar-wrapper">
              <div className="founder-ring" />
              <img
                src="https://fobetmedia.com/wp-content/uploads/2025/11/P1000734-scaled.jpg"
                alt="Vibhav Raj, Co-Founder of Fobet Media"
                className="avatar-img"
                loading="lazy"
              />
            </div>
            <div className="badge-row">
              <span className="role-badge co-founder-badge">CO-FOUNDER</span>
              <span className="role-badge expert-badge">Personal Branding Expert</span>
            </div>
            <h3 className="member-name">Vibhav Raj</h3>
            <p className="member-bio">
              The strategist. Founder of <span className="highlight">LastRaven</span> and an engineering grad, Vibhav treats virality as a science to be engineered, not guessed.
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/fobet.media/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram"
              >
                <i className="fa-brands fa-instagram" /> Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/vibhav-raj-175622245/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
              >
                <i className="fa-brands fa-linkedin" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-team-section {
          width: 100%;
          padding: 120px 20px;
          background: #0f121e;
          position: relative;
          overflow: hidden;
          color: white;
          text-align: center;
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
          background-size: 50px 50px;
          transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          animation: gridMove 25s linear infinite;
        }

        .bg-glow-spot {
          position: absolute;
          width: 800px;
          height: 800px;
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
            transform: perspective(500px) rotateX(60deg) translateY(50px) translateZ(-200px);
          }
        }

        .about-header {
          position: relative;
          z-index: 2;
          margin-bottom: 70px;
        }

        .team-badge {
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

        .about-team-title {
          font-size: clamp(34px, 4.8vw, 56px);
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
          line-height: 1.1;
          letter-spacing: -1px;
          font-family: var(--font-montserrat);
        }

        .about-team-subtitle {
          font-size: clamp(16px, 1.8vw, 18px);
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .team-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .founders-row {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .member-card {
          flex: 1;
          min-width: 300px;
          max-width: 440px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(15px);
          border-radius: 24px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .member-card:hover {
          transform: translateY(-8px);
          border-color: rgba(238, 130, 238, 0.45);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(238, 130, 238, 0.15);
        }

        .avatar-wrapper {
          position: relative;
          width: 140px;
          height: 140px;
          margin-bottom: 24px;
        }

        .founder-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ee82ee, #8b5cf6);
          opacity: 0.8;
          animation: spinSlow 12s linear infinite;
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 2;
          border: 3px solid #0f121e;
        }

        .badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .role-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(238, 130, 238, 0.15);
          border: 1px solid rgba(238, 130, 238, 0.35);
          border-radius: 20px;
          font-size: 11px;
          color: #ee82ee;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .co-founder-badge {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.35);
          color: #a78bfa;
        }

        .expert-badge {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
          color: #cbd5e1;
        }

        .member-name {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
          font-family: var(--font-montserrat);
        }

        .member-bio {
          font-size: 15px;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .highlight {
          color: #ff86c7;
          font-weight: 600;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 18px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          transition: all 0.25s ease;
        }

        .social-btn.instagram:hover {
          background: rgba(225, 48, 108, 0.15);
          border-color: #e1306c;
          color: #e1306c;
          transform: translateY(-2px);
        }

        .social-btn.linkedin:hover {
          background: rgba(10, 102, 194, 0.15);
          border-color: #0a66c2;
          color: #0a66c2;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .founders-row {
            flex-direction: column;
            align-items: center;
          }
          .member-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
