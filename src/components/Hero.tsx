"use client";

import React, { useState, useEffect } from "react";
import { brand, experienceCtaLabel } from "@/lib/content";
import TedxPhoto from "./TedxPhoto";

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });

  // Mouse move effect for cursor glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
            <p className="hero-intro hero-fade-in delay-1">
              We do ROI-based lead generation from Google, Meta, etc. and make AI videos for strong branding on social media
            </p>

            <h1 className="hero-headline hero-fade-in delay-2" id="fobet-hero-title">
              Turn your hard-earned
              <br />
              <span className="gradient-text">leads into</span>{" "}
              <span className="underline-wrapper">
                <span className="gradient-text">deals.</span>
                <svg
                  className="svg-underline"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2.00025 6.99997C25.7501 2.99991 74.8003 7.50002 99.0003 4.49997C124 1.50002 150.908 -0.999992 198.001 2.50001"
                    stroke="#fff8e8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <section className="hero-offer hero-fade-in delay-3" aria-labelledby="hero-offer-title">
              <div className="offer-windows">
                <p><strong>Convert Hot Leads</strong> in 24 hrs to 25 days</p>
                <p><strong>Convert Warm Leads</strong> between 2 months to 12 months</p>
              </div>
              <p className="offer-promise">
                Stop spending more on ads. Start converting your hard earned leads into deals.
              </p>

              <h2 id="hero-offer-title">Get 2 Exclusive 1:1 Calls with Shweta Shah</h2>
              <ol className="offer-days">
                <li><strong className="offer-day-label">Day 1</strong><span>Learn – the 4 Pillars of Marketing &amp; Sales.</span></li>
                <li><strong className="offer-day-label">Day 2</strong><span>Discover Call with Shweta Shah – Why your leads aren&apos;t converting.</span></li>
                <li><strong className="offer-day-label">Day 3</strong><span>Sales Strategy Call with Shweta Shah – Get your personalised sales growth strategy.</span></li>
              </ol>

              <a href={brand.experienceCheckout} className="offer-cta">{experienceCtaLabel}</a>
              <p className="offer-reassurance">
                No generic tips. No random hacks. No more guesswork.
              </p>
              <p className="offer-outcome">
                Just a clear strategy to convert leads into paying clients.
              </p>
            </section>
          </div>

          {/* Founder photo and credentials */}
          <div
            className="founder-section hero-fade-in delay-3"
            id="founder-video"
          >
            <div className="founder-stage-container">
              <div className="founder-glow" />
              <div className="founder-arch" />

              <div className="founder-photo">
                <TedxPhoto eager />
              </div>

              {/* Founder credentials */}
              <div
                className="float-card roi-badge"
              >
                <div className="stat-icon">
                  <i className="fa-solid fa-star" aria-hidden="true" />
                </div>
                <div className="stat-content">
                  <h4>ROI Strategist</h4>
                  <p>Since 2016</p>
                </div>
              </div>

              <div
                className="float-card projects-badge"
              >
                <div className="stat-icon stat-icon-green">
                  <i className="fa-solid fa-eye" aria-hidden="true" />
                </div>
                <div className="stat-content">
                  <h4>500+ Projects</h4>
                </div>
              </div>

              <div className="float-card expert-badge">
                <div className="stat-icon">
                  <i className="fa-solid fa-bullseye" aria-hidden="true" />
                </div>
                <div className="stat-content">
                  <h4>Lead Generation &amp; Sales Expert</h4>
                </div>
              </div>

            </div>

            {/* Founder info */}
            <div className="founder-info-container hero-fade-in delay-5">
              <div className="info-slide active">
                <p className="founder-label">FOUNDER &amp; TEDx SPEAKER</p>
                <h3 className="founder-name">Shweta Shah</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fobet-hero-wrapper {
          position: relative;
          background: #160f06;
          color: #fff8e8;
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
          background: radial-gradient(circle, rgba(241, 201, 118, 0.28), transparent 70%);
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
          background: rgba(241, 201, 118, 0.4);
          border-radius: 50%;
          animation: floatParticle 10s infinite ease-in-out;
          box-shadow: 0 0 8px rgba(241, 201, 118, 0.3);
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
          color: rgba(241, 201, 118, 0.1);
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
          background: radial-gradient(circle, #dba22d, transparent 70%);
          top: 10%;
          left: 10%;
          transform: translate(-50%, -50%);
        }
        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #b38532, transparent 70%);
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

        .hero-intro {
          margin: 0 0 16px;
          color: #f5d18a;
          font-size: clamp(14px, 1.2vw, 17px);
          font-weight: 700;
          line-height: 1.5;
          font-family: var(--font-space);
        }

        .logo-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 20px;
          background: rgba(241, 201, 118, 0.1);
          border: 1px solid rgba(241, 201, 118, 0.3);
          border-radius: 50px;
          margin-bottom: 26px;
        }

        .logo-icon {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #edbd55, #dba22d);
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
          color: #edbd55;
          text-transform: uppercase;
        }

        .hero-headline {
          font-size: clamp(40px, 5.2vw, 72px);
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
          color: #fff8e8;
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

        .hero-offer {
          width: 100%;
          max-width: 640px;
          padding: clamp(16px, 2.3vw, 28px);
          text-align: left;
          border: 1px solid rgba(241, 201, 118, 0.3);
          border-radius: 18px;
          background: linear-gradient(155deg, #2b2011, #1b140c 75%);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.25);
          color: #e5d9c3;
          font-size: 14px;
          line-height: 1.5;
          font-family: var(--font-space);
        }

        .offer-windows {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .offer-windows p {
          padding: 10px 12px;
          background: rgba(241, 201, 118, 0.07);
          border: 1px solid rgba(241, 201, 118, 0.16);
          border-radius: 10px;
        }

        .offer-windows strong {
          display: block;
          color: #f5d18a;
        }

        .offer-promise {
          margin: 14px 0 16px;
        }

        .hero-offer h2 {
          margin-bottom: 10px;
          color: #fff8e8;
          font-size: clamp(18px, 1.7vw, 23px);
          line-height: 1.25;
        }

        .offer-days {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .offer-days li {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: baseline;
          gap: 12px;
          padding: 8px 0;
        }

        .offer-days li + li {
          border-top: 1px solid rgba(241, 201, 118, 0.14);
        }

        .offer-day-label {
          color: #f5d18a;
          white-space: nowrap;
        }

        .offer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px 16px;
          width: 100%;
          margin: 14px 0 12px;
          padding: 14px 16px;
          border: 1px solid #edbd55;
          border-radius: 8px;
          background: linear-gradient(135deg, #f5d18a, #dba22d);
          color: #1b1205;
          cursor: pointer;
          font: inherit;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.35;
          text-align: center;
        }

        .offer-cta:hover {
          background: #f5d18a;
        }

        .offer-cta:focus-visible {
          outline: 2px solid #fff8e8;
          outline-offset: 4px;
        }

        .offer-reassurance {
          color: #c9baa1;
          font-size: 13px;
        }

        .offer-outcome {
          margin-top: 6px;
          color: #fff8e8;
          font-weight: 600;
        }

        /* Founder Slider Section */
        .founder-section {
          position: relative;
          width: 44%;
          max-width: 580px;
          flex-shrink: 0;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          transform: translateX(10px);
        }

        .founder-stage-container {
          position: relative;
          width: 100%;
          height: auto;
          padding: 98px 0 72px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .founder-photo {
          position: relative;
          width: min(100%, 500px);
          z-index: 5;
        }

        .founder-arch {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 90%;
          background: linear-gradient(
            180deg,
            rgba(241, 201, 118, 0.12) 0%,
            rgba(18, 12, 6, 0) 100%
          );
          border: 1px solid rgba(241, 201, 118, 0.22);
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
          background: radial-gradient(circle, rgba(228, 186, 105, 0.38), transparent 70%);
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

        /* Founder badges */
        .float-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
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
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -10px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .float-card { animation: none; }
        }

        .roi-badge {
          top: 0;
          left: 0;
          border-right: 4px solid #b38532;
        }

        .projects-badge {
          top: 0;
          right: 0;
          border-left: 4px solid #d8ac4a;
          animation-delay: -2s;
        }

        .expert-badge {
          bottom: 0;
          right: 0;
          border-left: 4px solid #b38532;
          animation-delay: -4s;
        }

        @media (min-width: 1025px) {
          .expert-badge { bottom: 62px; }
        }

        .stat-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #b38532, #e7be6c);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
        }

        .stat-icon-green {
          background: linear-gradient(135deg, #d8ac4a, #a77327);
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
          color: #d8ac5b;
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
          color: #fff8e8;
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
          background: #edbd55;
          transform: scale(1.25);
          box-shadow: 0 0 10px rgba(241, 201, 118, 0.6);
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
        .delay-5 {
          animation-delay: 0.5s;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-redesigned {
            padding: 64px 15px 30px;
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

          .founder-section {
            width: 100%;
            max-width: 460px;
            transform: none;
          }

        }

        @media (max-width: 480px) {
          .founder-stage-container { padding-block: 75px 60px; }
          .float-card { padding: 8px 9px; gap: 6px; }
          .stat-icon { width: 27px; height: 27px; font-size: 13px; }
          .stat-content h4 { font-size: 12px; }
          .stat-content p { font-size: 10px; }
          .hero-headline {
            font-size: 36px;
          }

          .hero-container {
            padding-inline: 4px;
          }

          .offer-windows {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .offer-cta {
            flex-direction: column;
            gap: 4px;
          }
        }

      `}</style>
    </div>
  );
}
