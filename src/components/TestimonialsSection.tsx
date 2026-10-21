"use client";

import React, { useRef } from "react";
import { videos } from "@/lib/content";

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const testimonials = videos.filter(video=>video.pages.includes('/')).map((video,index)=>({video:video.src,poster:video.poster,handle:'Client story 0'+(index+1),link:video.src}));

  const scrollSlider = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const scrollAmount = 300;
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="fobet-testimonials-title">
      <div className="bg-grid-wrap">
        <div className="bg-grid" />
        <div className="bg-glow-spot" />
      </div>

      <div className="testimonials-header">
        <div className="testimonials-badge">CLIENT LOVE</div>
        <h2 className="testimonials-title" id="fobet-testimonials-title">
          What Our <span className="gradient-text">Clients Say</span>
        </h2>
        <p className="testimonials-desc">Hear the experiences shared by business owners on Shweta Shah’s website.</p>
      </div>

      {/* Desktop Grid */}
      <div className="videos-grid">
        {testimonials.map((item, idx) => (
          <div key={idx} className="video-card">
            <div className="video-wrapper">
              <video controls preload="none" poster={item.poster}>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="video-handle"
              >
                {item.handle}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider Controls */}
      <div className="mobile-slider-container">
        <div className="mobile-slider-wrapper">
          <button
            type="button"
            className="mobile-nav-btn mobile-nav-left"
            onClick={() => scrollSlider("left")}
            aria-label="Previous video"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button
            type="button"
            className="mobile-nav-btn mobile-nav-right"
            onClick={() => scrollSlider("right")}
            aria-label="Next video"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>

          <div className="mobile-slider-track" ref={trackRef}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="mobile-video-card">
                <div className="video-wrapper">
                  <video controls preload="none" poster={item.poster}>
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-handle"
                  >
                    {item.handle}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
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
          background: radial-gradient(circle, rgba(220, 177, 96, 0.1), transparent 70%);
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

        .testimonials-header {
          position: relative;
          z-index: 2;
          margin-bottom: 70px;
        }

        .testimonials-badge {
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

        .testimonials-title {
          font-size: clamp(34px, 4.8vw, 56px);
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
          line-height: 1.1;
          letter-spacing: -1px;
          font-family: var(--font-montserrat);
        }

        .testimonials-desc {
          font-size: clamp(16px, 1.8vw, 18px);
          color: #b2a58c;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .video-card {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-8px);
          border-color: rgba(241, 201, 118, 0.4);
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 16;
          background: #000;
        }

        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .video-handle {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(12, 8, 4, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          z-index: 2;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .video-handle:hover {
          background: #edbd55;
          color: #000;
        }

        .mobile-slider-container {
          display: none;
        }

        @media (max-width: 1024px) {
          .videos-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .videos-grid {
            display: none;
          }
          .mobile-slider-container {
            display: block;
            position: relative;
            z-index: 5;
            max-width: 480px;
            margin: 0 auto;
          }
          .mobile-slider-wrapper {
            position: relative;
          }
          .mobile-slider-track {
            display: flex;
            gap: 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 10px 4px 20px;
            scrollbar-width: none;
          }
          .mobile-slider-track::-webkit-scrollbar {
            display: none;
          }
          .mobile-video-card {
            flex: 0 0 280px;
            scroll-snap-align: center;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.15);
          }
          .mobile-nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(18, 12, 6, 0.9);
            border: 1px solid rgba(241, 201, 118, 0.4);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            cursor: pointer;
          }
          .mobile-nav-left {
            left: -15px;
          }
          .mobile-nav-right {
            right: -15px;
          }
        }
      `}</style>
    </section>
  );
}
