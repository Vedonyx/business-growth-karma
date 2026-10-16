"use client";

import React from "react";

export default function BtsSection() {
  const btsItems = [
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-16h02m14s592-1.png",
      caption: "Creative Direction",
      tag: "Production",
      span: 1,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-16h02m05s548-1.png",
      caption: "On Set",
      tag: "Filming",
      span: 1,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-16h01m56s659-1.png",
      caption: "Studio Session",
      tag: "Recording",
      span: 2,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-16h01m48s651-1.png",
      caption: "Camera Work",
      tag: "Cinematography",
      span: 1,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-16h01m30s064-1.png",
      caption: "Behind The Lens",
      tag: "Production",
      span: 2,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-15h58m27s295-1.png",
      caption: "Team Collaboration",
      tag: "Teamwork",
      span: 1,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-15h58m15s601-1.png",
      caption: "Action Shot",
      tag: "Filming",
      span: 2,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-15h56m34s794-1.png",
      caption: "Setup Time",
      tag: "Preparation",
      span: 1,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-15h56m17s472-1.png",
      caption: "Creative Process",
      tag: "Brainstorming",
      span: 1,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-15h55m02s210-1.png",
      caption: "Director's View",
      tag: "Direction",
      span: 2,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-15h56m07s074.png",
      caption: "Equipment Check",
      tag: "Technical",
      span: 1,
    },
    {
      img: "https://fobetmedia.com/wp-content/uploads/2026/01/vlcsnap-2026-01-09-15h54m33s746-1.png",
      caption: "In The Moment",
      tag: "Candid",
      span: 2,
    },
  ];

  return (
    <section className="bts-section" id="bts">
      <div className="bts-glow glow-top" />
      <div className="bts-glow glow-bottom-left" />
      <div className="bts-glow glow-bottom-right" />

      <div className="bts-header">
        <div className="bts-badge">BEHIND THE MAGIC</div>
        <h2 className="bts-title">
          Behind The <span className="gradient-text">Scenes</span>
        </h2>
        <p className="bts-desc">
          Take a peek into our creative process, studio sessions, and the moments that bring our vision to life.
        </p>
      </div>

      <div className="bts-container">
        <div className="bts-grid">
          {btsItems.map((item, index) => (
            <div
              key={index}
              className={`bts-item span-${item.span}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <img src={item.img} alt={item.caption} loading="lazy" />
              <div className="bts-overlay">
                <div className="bts-overlay-content">
                  <p className="bts-caption">{item.caption}</p>
                  <span className="bts-tag">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bts-section {
          width: 100%;
          padding: 110px 20px;
          background: #0f121e;
          position: relative;
          overflow: hidden;
        }

        .bts-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.08), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .glow-top {
          top: -300px;
          left: 50%;
          transform: translateX(-50%);
        }
        .glow-bottom-left {
          bottom: -200px;
          left: -300px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%);
        }
        .glow-bottom-right {
          bottom: -200px;
          right: -300px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.06), transparent 70%);
        }

        .bts-header {
          text-align: center;
          margin-bottom: 70px;
          position: relative;
          z-index: 2;
        }

        .bts-badge {
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

        .bts-title {
          font-size: clamp(34px, 4.8vw, 60px);
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
          line-height: 1.1;
          letter-spacing: -1px;
          font-family: var(--font-montserrat);
        }

        .bts-desc {
          font-size: clamp(16px, 1.8vw, 18px);
          color: #94a3b8;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .bts-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .bts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 20px;
          grid-auto-rows: 230px;
        }

        .bts-item {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .bts-item.span-2 {
          grid-row: span 2;
        }
        .bts-item.span-1 {
          grid-row: span 1;
        }

        .bts-item:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 134, 199, 0.45);
          box-shadow: 0 20px 60px rgba(217, 70, 239, 0.25);
        }

        .bts-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .bts-item:hover img {
          transform: scale(1.06);
        }

        .bts-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 18, 30, 0.92) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }

        .bts-item:hover .bts-overlay {
          opacity: 1;
        }

        .bts-overlay-content {
          width: 100%;
        }

        .bts-caption {
          font-size: 15px;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 6px;
          font-family: var(--font-montserrat);
        }

        .bts-tag {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(255, 134, 199, 0.2);
          border: 1px solid rgba(255, 134, 199, 0.3);
          border-radius: 20px;
          font-size: 11px;
          color: #ff86c7;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        @media (max-width: 968px) {
          .bts-section {
            padding: 80px 15px;
          }
          .bts-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 15px;
            grid-auto-rows: 190px;
          }
        }
      `}</style>
    </section>
  );
}
