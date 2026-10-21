"use client";
import React from 'react';
import {brand,imageFor} from '@/lib/content';
export default function LeadershipSection() {
  return (<section className="about-team-section" id="team" aria-labelledby="fobet-leadership-title"><div className="bg-grid-wrap"><div className="bg-grid"/><div className="bg-glow-spot"/></div>
    <div className="about-header"><div className="team-badge">MEET YOUR GROWTH PARTNER</div><h2 className="about-team-title" id="fobet-leadership-title">Shweta Shah &amp; <span className="gradient-text">Business Growth Karma</span></h2><p className="about-team-subtitle">ROI-driven digital marketing, sales psychology and automation since 2016.</p></div>
    <div className="team-container"><div className="founders-row">
    <div className="member-card founder-card"><div className="avatar-wrapper"><div className="founder-ring"/><img src={imageFor('tedx.png')} alt="Shweta Shah speaking at TEDx" className="avatar-img" loading="lazy"/></div><div className="badge-row"><span className="role-badge">FOUNDER</span><span className="role-badge expert-badge">Digital Marketing ROI Strategist</span></div><h3 className="member-name">Shweta Vallabh Shah</h3><p className="member-bio">Founder of <span className="highlight">Business Growth Karma</span>, TEDx speaker, author of LinkedIn for Business and creator of the Sales Psychology System. Helping business owners connect quality leads with better sales conversations since 2016.</p><div className="social-links"><a href="https://instagram.com/shwetashah.in" target="_blank" rel="noreferrer" className="social-btn instagram"><i className="fa-brands fa-instagram"/> Instagram</a><a href={brand.linkedIn} target="_blank" rel="noreferrer" className="social-btn linkedin"><i className="fa-brands fa-linkedin"/> LinkedIn</a></div></div>
    <div className="member-card founder-card"><div className="avatar-wrapper"><div className="founder-ring"/><img src={imageFor('sales-psycholgo-ysystem.png')} alt="Sales Psychology System" className="avatar-img" loading="lazy"/></div><div className="badge-row"><span className="role-badge co-founder-badge">OUR GROWTH FRAMEWORK</span><span className="role-badge expert-badge">Built Around Your Business</span></div><h3 className="member-name">The Sales Psychology System</h3><p className="member-bio">Developed in 2021, the system connects <span className="highlight">Google Ads, LinkedIn and sales psychology</span>. The 3I formula improves response, while 3B builds trust, credibility and relationships with buyers who need more time.</p><div className="social-links"><a href="/services#setup" className="social-btn instagram"><i className="fa-solid fa-gears"/> Our System</a><a href={brand.tedx} target="_blank" rel="noreferrer" className="social-btn linkedin"><i className="fa-solid fa-play"/> TEDx Talk</a></div></div>
    </div></div>
      <style jsx>{`
        .about-team-section {
          width: 100%;
          padding: 120px 20px;
          background: #100c06;
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
          background: radial-gradient(circle, rgba(231, 189, 107, 0.12), transparent 70%);
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
          color: #f5d18a;
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
          color: #b2a58c;
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
          border-color: rgba(241, 201, 118, 0.45);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(241, 201, 118, 0.15);
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
          background: linear-gradient(135deg, #edbd55, #b38532);
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
          border: 3px solid #100c06;
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
          background: rgba(241, 201, 118, 0.15);
          border: 1px solid rgba(241, 201, 118, 0.35);
          border-radius: 20px;
          font-size: 11px;
          color: #edbd55;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .co-founder-badge {
          background: rgba(231, 189, 107, 0.15);
          border-color: rgba(231, 189, 107, 0.35);
          color: #f8d17e;
        }

        .expert-badge {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
          color: #ffd985;
        }

        .member-name {
          font-size: 26px;
          font-weight: 800;
          color: #fff8e8;
          margin-bottom: 12px;
          font-family: var(--font-montserrat);
        }

        .member-bio {
          font-size: 15px;
          color: #b2a58c;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .highlight {
          color: #f5d18a;
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
          color: #ffd985;
          transition: all 0.25s ease;
        }

        .social-btn.instagram:hover {
          background: rgba(208, 163, 83, 0.15);
          border-color: #d0a353;
          color: #d0a353;
          transform: translateY(-2px);
        }

        .social-btn.linkedin:hover {
          background: rgba(184, 135, 57, 0.15);
          border-color: #b88739;
          color: #b88739;
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
