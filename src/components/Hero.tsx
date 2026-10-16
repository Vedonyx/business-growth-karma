"use client";

import React, { useState, useEffect, useRef } from "react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });
  const touchStartRef = useRef<number>(0);

  // Mouse move effect for cursor glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].screenX;
    if (touchEnd < touchStartRef.current - 50) {
      setCurrentSlide(1);
    } else if (touchEnd > touchStartRef.current + 50) {
      setCurrentSlide(0);
    }
  };

  return (
    <div className="fobet-hero-wrapper" id="home">
      <div className="noise-overlay" />
      <div
        className="cursor-light"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />

      <section className="hero-redesigned" aria-labelledby="fobet-hero-title">
        <div className="particles" />
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="bg-elements">
          <i className="fa-solid fa-sparkles bg-icon icon-1" />
          <i className="fa-solid fa-rocket bg-icon icon-3" />
          <i className="fa-solid fa-heart bg-icon icon-8" />
        </div>

        <div className="hero-container">
          {/* Left Text Content */}
          <div className="content-wrapper">
            <div className="logo-badge hero-fade-in delay-1">
              <div className="logo-icon">fm</div>
              <span className="logo-text">FOBET MEDIA</span>
            </div>

            <div className="hero-headline hero-fade-in delay-2">
              We make your business
              <br />
              <span className="gradient-text">impossible to</span>{" "}
              <span className="underline-wrapper">
                <span className="gradient-text">ignore.</span>
                <svg
                  className="svg-underline"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2.00025 6.99997C25.7501 2.99991 74.8003 7.50002 99.0003 4.49997C124 1.50002 150.908 -0.999992 198.001 2.50001"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            <div className="hero-fade-in delay-3 desc-container">
              <h1 className="hero-description" id="fobet-hero-title">
                Done-for-you Personal Branding Agency that converts strangers into customers.
              </h1>
              <p className="hero-subdescription">
                We position you as the <strong>authority in your niche.</strong>
              </p>
            </div>

            <div className="cta-wrapper hero-fade-in delay-4">
              <button
                type="button"
                onClick={onOpenModal}
                className="btn-primary"
              >
                <span>Start Growing Now</span>
                <i className="fa-solid fa-arrow-right" />
              </button>
              <a href="#results" className="btn-secondary">
                <i className="fa-solid fa-play" />
                <span>See Results</span>
              </a>
            </div>
          </div>

          {/* Right Founder Slider */}
          <div
            className="founder-section hero-fade-in delay-3"
            id="founder-slider"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="founder-stage-container">
              <div className="founder-glow" />
              <div className="founder-arch" />

              <div className="founder-slider-wrapper">
                {/* Riya Slide */}
                <div className={`founder-slide ${currentSlide === 0 ? "active" : ""}`}>
                  <img
                    src="https://fobetmedia.com/wp-content/uploads/2026/08/web-e1765185916714.webp"
                    alt="Riya Upreti, Founder of Fobet Media"
                    className="founder-img riya"
                    fetchPriority="high"
                  />
                </div>

                {/* Vibhav Slide */}
                <div className={`founder-slide ${currentSlide === 1 ? "active" : ""}`}>
                  <img
                    src="https://fobetmedia.com/wp-content/uploads/2026/08/Untitled-design-8.webp"
                    alt="Vibhav Raj, Co-Founder and Personal Branding Expert at Fobet Media"
                    className="founder-img vibhav"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Riya's Floating Cards */}
              <div
                className="float-card card-stats-riya"
                style={{ display: currentSlide === 0 ? "flex" : "none" }}
              >
                <div className="stat-icon">
                  <i className="fa-solid fa-star" />
                </div>
                <div className="stat-content">
                  <h4>Mega Creator</h4>
                  <p>2.5M Followers</p>
                </div>
              </div>

              <div
                className="float-card card-social-riya"
                style={{ display: currentSlide === 0 ? "flex" : "none" }}
              >
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/riyaelity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Riya on Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/riya-upreti-213a04190/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Riya on LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </div>
              </div>

              <div
                className="float-card card-views-riya"
                style={{ display: currentSlide === 0 ? "flex" : "none" }}
              >
                <div className="stat-icon stat-icon-green">
                  <i className="fa-solid fa-eye" />
                </div>
                <div className="stat-content">
                  <h4>100M+</h4>
                  <p>
                    <i className="fa-solid fa-caret-up" /> Views
                  </p>
                </div>
              </div>

              {/* Vibhav's Floating Cards */}
              <div
                className="float-card card-stats-vibhav"
                style={{ display: currentSlide === 1 ? "flex" : "none" }}
              >
                <div className="stat-content-text">
                  <strong>Personal Branding Expert</strong>
                </div>
              </div>

              <div
                className="float-card card-stats-vibhav-2"
                style={{ display: currentSlide === 1 ? "flex" : "none" }}
              >
                <div className="stat-content-text">Scaled 70+ Clients to 7 Figures</div>
              </div>

              <div
                className="float-card card-social-vibhav"
                style={{ display: currentSlide === 1 ? "flex" : "none" }}
              >
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/fobet.media"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Fobet on Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vibhav-raj-175622245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Vibhav on LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>

            {/* Founder Info & Controls */}
            <div className="founder-info-container hero-fade-in delay-5">
              <div className={`info-slide ${currentSlide === 0 ? "active" : ""}`}>
                <p className="founder-label">FOUNDER</p>
                <h3 className="founder-name">Riya Upreti</h3>
              </div>
              <div className={`info-slide ${currentSlide === 1 ? "active" : ""}`}>
                <p className="founder-label">CO-FOUNDER</p>
                <h3 className="founder-name">Vibhav Raj</h3>
              </div>
            </div>

            <div className="slider-controls hero-fade-in delay-5">
              <button
                className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
                type="button"
                onClick={() => setCurrentSlide(0)}
                aria-label="Show Riya Upreti"
              />
              <button
                className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
                type="button"
                onClick={() => setCurrentSlide(1)}
                aria-label="Show Vibhav Raj"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fobet-hero-wrapper {
          position: relative;
          background: #141b30;
          color: #ffffff;
          overflow: hidden;
          width: 100%;
          padding-top: 60px;
        }

        .noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          opacity: 0.07;
          pointer-events: none;
          z-index: 2;
        }

        .cursor-light {
          position: fixed;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(238, 130, 238, 0.28), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 999;
          filter: blur(45px);
          transition: 0.08s ease-out;
          will-change: transform, opacity;
        }

        @media (max-width: 768px) {
          .cursor-light {
            display: none;
          }
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particles::before,
        .particles::after {
          content: "";
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(238, 130, 238, 0.4);
          border-radius: 50%;
          animation: floatParticle 10s infinite ease-in-out;
          box-shadow: 0 0 8px rgba(238, 130, 238, 0.3);
        }

        .particles::after {
          left: 75%;
          top: 25%;
          animation-duration: 12s;
        }
        .particles::before {
          left: 15%;
          top: 70%;
        }

        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-40px) scale(1.2);
            opacity: 0.5;
          }
        }

        .bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .bg-icon {
          position: absolute;
          color: rgba(238, 130, 238, 0.1);
          font-size: 32px;
          animation: floatRotate 15s infinite ease-in-out;
        }

        .icon-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }
        .icon-3 {
          bottom: 20%;
          left: 8%;
          animation-delay: 4s;
        }
        .icon-8 {
          bottom: 15%;
          right: 25%;
          animation-delay: 3.5s;
        }

        @keyframes floatRotate {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-20px) rotate(-5deg);
            opacity: 0.25;
          }
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.25;
          pointer-events: none;
          animation: orbPulse 8s infinite ease-in-out;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #d946ef, transparent 70%);
          top: 10%;
          left: 10%;
          transform: translate(-50%, -50%);
        }
        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #8b5cf6, transparent 70%);
          top: 60%;
          right: 5%;
          transform: translate(-50%, -50%);
        }

        @keyframes orbPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.35;
          }
        }

        .hero-redesigned {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px 40px;
        }

        .hero-container {
          max-width: 1300px;
          width: 100%;
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }

        .content-wrapper {
          max-width: 650px;
          width: 100%;
          z-index: 20;
          padding-right: 40px;
        }

        .logo-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 20px;
          background: rgba(238, 130, 238, 0.1);
          border: 1px solid rgba(238, 130, 238, 0.3);
          border-radius: 50px;
          margin-bottom: 26px;
        }

        .logo-icon {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #ee82ee, #d946ef);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          color: #fff;
        }

        .logo-text {
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2px;
          color: #ee82ee;
          text-transform: uppercase;
        }

        .hero-headline {
          font-size: clamp(40px, 5.2vw, 72px);
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
          color: #ffffff;
          font-family: var(--font-montserrat);
        }

        .underline-wrapper {
          position: relative;
          display: inline-block;
        }

        .svg-underline {
          position: absolute;
          bottom: -0.05em;
          left: 5%;
          width: 90%;
          height: 0.15em;
          z-index: -1;
        }

        .desc-container {
          margin-bottom: 38px;
        }

        .hero-description {
          font-size: clamp(17px, 1.8vw, 21px);
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.88);
          max-width: 580px;
          font-weight: 400;
          margin: 0 0 8px 0;
          font-family: var(--font-space);
        }

        .hero-subdescription {
          font-size: clamp(16px, 1.6vw, 19px);
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-family: var(--font-space);
        }

        .hero-subdescription strong {
          color: #ffffff;
        }

        .cta-wrapper {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 38px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #ee82ee, #d946ef);
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: var(--font-space);
          box-shadow: 0 10px 25px rgba(238, 130, 238, 0.35);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(238, 130, 238, 0.55);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 34px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #fff;
          cursor: pointer;
          font-family: var(--font-space);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(238, 130, 238, 0.4);
          transform: translateY(-2px);
        }

        /* Founder Slider Section */
        .founder-section {
          position: relative;
          width: 580px;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          transform: translateX(10px);
          cursor: grab;
        }

        .founder-stage-container {
          position: relative;
          width: 100%;
          height: 680px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .founder-arch {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 90%;
          background: linear-gradient(
            180deg,
            rgba(238, 130, 238, 0.12) 0%,
            rgba(20, 27, 48, 0) 100%
          );
          border: 1px solid rgba(238, 130, 238, 0.22);
          border-bottom: none;
          border-radius: 250px 250px 0 0;
          z-index: 1;
        }

        .founder-glow {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.38), transparent 70%);
          filter: blur(80px);
          z-index: 0;
        }

        .founder-slider-wrapper {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          pointer-events: none;
        }

        .founder-slide {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.8s ease-in-out, visibility 0.8s;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .founder-slide.active {
          opacity: 1;
          visibility: visible;
        }

        .founder-img {
          max-width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6));
          -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
        }

        .founder-img.riya {
          width: 120%;
        }

        .founder-img.vibhav {
          width: 100%;
          margin-bottom: -10px;
        }

        /* Floating Cards */
        .float-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          z-index: 10;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          animation: floatCard 6s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .card-stats-riya {
          top: 140px;
          left: -50px;
          padding: 15px 24px;
          border-right: 4px solid #8b5cf6;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .card-social-riya {
          bottom: 180px;
          left: -40px;
          padding: 12px;
          border-right: 4px solid #ec4899;
        }

        .card-views-riya {
          top: 80px;
          right: -30px;
          padding: 15px 24px;
          border-left: 4px solid #10b981;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .card-stats-vibhav {
          top: 100px;
          left: -70px;
          padding: 15px 25px;
          border-right: 4px solid #8b5cf6;
          max-width: 260px;
        }

        .card-stats-vibhav-2 {
          top: 100px;
          right: -60px;
          padding: 15px 25px;
          border-left: 4px solid #10b981;
          max-width: 260px;
        }

        .card-social-vibhav {
          bottom: 140px;
          right: -40px;
          padding: 12px;
          border-left: 4px solid #f59e0b;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, #ee82ee, #d946ef);
          transform: scale(1.1);
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
        }

        .stat-icon-green {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .stat-content h4 {
          font-size: 17px;
          font-weight: 700;
          color: white;
          margin-bottom: 2px;
          font-family: var(--font-poppins);
        }

        .stat-content p {
          font-size: 12px;
          color: #4ade80;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-poppins);
        }

        .stat-content-text {
          font-size: 14px;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.95);
          font-family: var(--font-poppins);
          font-weight: 600;
        }

        .founder-info-container {
          margin-top: 18px;
          text-align: center;
          width: 100%;
          position: relative;
          height: 75px;
        }

        .info-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.5s ease;
          pointer-events: none;
        }

        .info-slide.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .founder-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 6px;
        }

        .founder-name {
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          font-family: var(--font-montserrat);
        }

        .slider-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 6px;
          z-index: 20;
          position: relative;
        }

        .slider-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot.active {
          background: #ee82ee;
          transform: scale(1.25);
          box-shadow: 0 0 10px rgba(238, 130, 238, 0.6);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-fade-in {
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-1 {
          animation-delay: 0.1s;
        }
        .delay-2 {
          animation-delay: 0.2s;
        }
        .delay-3 {
          animation-delay: 0.3s;
        }
        .delay-4 {
          animation-delay: 0.4s;
        }
        .delay-5 {
          animation-delay: 0.5s;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-redesigned {
            padding: 40px 15px 30px;
            flex-direction: column;
            text-align: center;
          }

          .hero-container {
            flex-direction: column;
            gap: 40px;
          }

          .content-wrapper {
            padding-right: 0;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .cta-wrapper {
            justify-content: center;
            flex-direction: column;
            width: 100%;
            max-width: 400px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .founder-section {
            width: 100%;
            max-width: 460px;
            transform: none;
          }

          .founder-stage-container {
            height: 480px;
          }

          .card-stats-riya {
            top: 50px;
            left: 10px;
            transform: scale(0.9);
          }
          .card-views-riya {
            display: none !important;
          }
          .card-social-riya,
          .card-social-vibhav {
            bottom: auto;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            left: auto;
          }
          .card-stats-vibhav {
            top: 30px;
            left: 10px;
            transform: scale(0.9);
          }
          .card-stats-vibhav-2 {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .founder-stage-container {
            height: 400px;
          }
          .hero-headline {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
