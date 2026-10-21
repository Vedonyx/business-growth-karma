"use client";
import React from 'react';
import { plans } from '@/lib/content';
export default function PackagesSection() {
  return (<section className="packages-section" id="packages" aria-labelledby="fobet-packages-title">
    <div className="packages-glow glow-center" />
    <div className="packages-header"><div className="packages-badge">CHOOSE YOUR GROWTH SOLUTION</div><h2 className="packages-title" id="fobet-packages-title">Your Next <span className="gradient-text">Stage of Growth</span></h2><p className="packages-desc">The support that fits your annual sales goal, your team and your ambitions.</p></div>
    <div className="packages-row">{plans.map((plan,index)=><div key={plan.id} className={'package-card '+(plan.featured?'featured':'')}>
      {index>0&&<div className={'package-tag '+(plan.featured?'tag-popular':'tag-value')}>{plan.featured?'Done for You':'Learn & Implement'}</div>}
      <div className="package-name">{plan.title}</div><div className="package-price">₹{plan.price}<span className="price-cycle">{plan.period}</span></div><p className="package-desc">{plan.text}</p><div className="package-line"/><div className="highlight-text">{plan.tag}</div>
      <ul className="package-features">{plan.features.map(feature=><li key={feature}><i className="fa-solid fa-check"/><span>{feature}</span></li>)}</ul>
      <div className="highlight-text bottom-highlight">{plan.bestFor}</div><div className="package-note-box"><div className="package-note-title"><i className="fa-solid fa-circle-info"/> Scope & investment</div><div className="package-note-text">Applicable taxes, media spend and billing terms are confirmed during your consultation.</div></div>
      <a href={'/contact?plan='+plan.id} className={'package-btn '+(plan.featured?'btn-filled':'btn-outline')}>{plan.cta}</a>
    </div>)}</div>
      <style jsx>{`
        .packages-section {
          width: 100%;
          padding: 120px 20px;
          background: #100c06;
          position: relative;
          overflow: hidden;
          color: white;
          text-align: center;
        }

        .packages-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(220, 177, 96, 0.08), transparent 70%);
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
          color: #f5d18a;
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
          color: #b2a58c;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .packages-desc strong {
          color: #fff8e8;
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
          border-color: rgba(248, 209, 126, 0.35);
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5);
        }

        .package-card.featured {
          border-color: rgba(248, 209, 126, 0.55);
          background: linear-gradient(
            180deg,
            rgba(248, 209, 126, 0.06) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          box-shadow: 0 0 35px rgba(248, 209, 126, 0.12);
          transform: scale(1.04);
          z-index: 2;
        }

        .package-card.featured:hover {
          transform: scale(1.04) translateY(-8px);
          box-shadow: 0 25px 65px -10px rgba(248, 209, 126, 0.25);
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
          background: #f5d18a;
          color: #100c06;
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
          color: #f5d18a;
          margin-bottom: 15px;
          font-family: var(--font-montserrat);
        }

        .price-cycle {
          font-size: 16px;
          color: #b2a58c;
          font-weight: 500;
        }

        .package-desc {
          font-size: 15px;
          color: #b2a58c;
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
          background: rgba(248, 209, 126, 0.1);
          padding: 12px 15px;
          border-radius: 10px;
          margin-bottom: 25px;
          font-weight: 600;
          border-left: 3px solid #f5d18a;
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
          color: #e8dfce;
          line-height: 1.5;
        }

        .package-features li i {
          color: #f5d18a;
          margin-right: 12px;
          margin-top: 4px;
          font-size: 12px;
          flex-shrink: 0;
        }

        .package-note-box {
          background: rgba(248, 209, 126, 0.05);
          border: 1px dashed rgba(248, 209, 126, 0.3);
          padding: 15px;
          border-radius: 12px;
          margin-bottom: 25px;
        }

        .package-note-title {
          font-size: 13px;
          font-weight: 700;
          color: #f5d18a;
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
          color: #fff8e8;
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
          border-color: #f5d18a;
          background: rgba(248, 209, 126, 0.12);
        }

        .btn-filled {
          background: linear-gradient(135deg, #f5d18a, #dba22d);
          color: #100c06;
          border: none;
          box-shadow: 0 10px 30px rgba(220, 177, 96, 0.3);
        }

        .btn-filled:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(220, 177, 96, 0.5);
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
