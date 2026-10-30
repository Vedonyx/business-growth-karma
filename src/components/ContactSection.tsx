"use client";

import React from "react";
import { imageFor } from "@/lib/content";

interface ContactSectionProps {
  onOpenModal: () => void;
}

export default function ContactSection({ onOpenModal }: ContactSectionProps) {
  return (
    <section className="contact-grid-proof" id="contact" aria-labelledby="growth-access-title">
      {/* Animated Grid Background */}
      <div className="bg-grid-wrap">
        <div className="bg-grid" />
        <div className="bg-glow-spot" />
      </div>

      {/* Floating Particles */}
      <div className="p p-1" />
      <div className="p p-2" />
      <div className="p p-3" />
      <div className="p p-4" />
      <div className="p p-5" />

      <div className="grid">
        <h2 className="section-heading" id="growth-access-title">
          Contact <span className="gradient-text">Us</span>
        </h2>
        {/* Visual Side */}
        <div className="img-wrap">
          <img
            src={imageFor("you-get-2-types-of-leads-1.png")}
            alt="We help you to close both types of leads: hot leads who are ready to buy, and research-based leads who need more time."
            width="1600"
            height="1014"
            loading="lazy"
          />
        </div>

        {/* Content Side */}
        <div className="text">
          <ol className="benefits">
            <li>Learn the 4 Pillars of Business Growth</li>
            <li>Get access to 20 bite-sized video episodes of 2 min each</li>
            <li>Just ₹49 one-time investment. From next year 499/-</li>
            <li>Discover how to get more leads &amp; turn into deals</li>
            <li>Get a FREE strategy call with Shweta Shah</li>
            <li>Identify gaps in your marketing and sales process</li>
            <li>Take the first step towards your annual sales goal</li>
          </ol>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-access"
              onClick={onOpenModal}
            >
              <span>Get access at Rs 49 only, <span className="future-price">Soon 499/-</span></span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid-proof {
          display: block;
          font-family: var(--font-space);
          background: #100c06;
          color: #fff8e8;
          padding: 120px 20px;
          position: relative;
          overflow: hidden;
          width: 100%;
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

        .p {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #f5d18a;
          border-radius: 50%;
          opacity: 0.45;
          animation: rise 15s linear infinite;
          z-index: 2;
        }

        .p-1 {
          left: 10%;
          animation-delay: 0s;
        }
        .p-2 {
          left: 25%;
          animation-delay: 4s;
        }
        .p-3 {
          left: 40%;
          animation-delay: 7s;
        }
        .p-4 {
          left: 65%;
          animation-delay: 2s;
        }
        .p-5 {
          left: 82%;
          animation-delay: 9s;
        }

        @keyframes rise {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }

        .grid {
          max-width: 1150px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
          z-index: 10;
          position: relative;
        }

        .img-wrap {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          transition: transform 0.4s ease, border-color 0.4s ease;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .img-wrap:hover {
          transform: translateY(-8px);
          border-color: rgba(248, 209, 126, 0.45);
        }

        .img-wrap img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .text {
          padding: 20px 0;
          text-align: left;
        }

        .section-heading {
          grid-column: 1 / -1;
          text-align: center;
          font-size: clamp(38px, 4.8vw, 56px);
          font-weight: 900;
          line-height: 1.05;
          margin: 0;
          color: #fff8e8;
          font-family: var(--font-montserrat);
        }

        .benefits {
          font-size: 17px;
          color: #d0c1a7;
          line-height: 1.65;
          margin: 0 0 36px;
          padding-left: 26px;
        }

        .benefits li {
          padding-left: 8px;
          margin: 15px 0;
        }

        .benefits li:first-child {
          margin-top: 0;
        }

        .benefits li::marker {
          color: #edbd55;
          font-weight: 800;
        }

        .btn-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 22px 32px;
          min-height: 72px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 18px;
          text-decoration: none;
          transition: all 0.35s ease;
          text-transform: none;
          letter-spacing: 0;
          line-height: 1.5;
          max-width: 100%;
          text-align: center;
          font-family: var(--font-montserrat);
          cursor: pointer;
        }

        .btn-access {
          background: linear-gradient(135deg, #dbb35b, #8c6528);
          color: #100c06;
          border: none;
          box-shadow: 0 15px 45px rgba(199, 153, 74, 0.4);
        }

        .btn-access:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 55px rgba(199, 153, 74, 0.6);
        }

        .btn-access i {
          flex-shrink: 0;
        }

        .future-price {
          white-space: nowrap;
        }

        @media (max-width: 968px) {
          .contact-grid-proof {
            padding: 80px 20px;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .text {
            text-align: center;
          }
          .benefits {
            text-align: left;
            margin-bottom: 32px;
          }
          .btn-group {
            justify-content: center;
          }
          .btn {
            width: 100%;
            justify-content: center;
            min-height: 84px;
            padding: 20px 24px;
            gap: 12px;
            font-size: 17px;
          }
          .img-wrap {
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
