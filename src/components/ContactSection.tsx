"use client";

import React from "react";
import { imageFor } from "@/lib/content";

interface ContactSectionProps {
  onOpenModal: () => void;
}

export default function ContactSection({ onOpenModal }: ContactSectionProps) {
  return (
    <section className="contact-grid-proof" id="contact">
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
        {/* Visual Side */}
        <div className="img-wrap">
          <img
            src={imageFor("tedx.png")}
            alt="Shweta Shah speaking at TEDx"
            loading="lazy"
          />
        </div>

        {/* Content Side */}
        <div className="text">
          <div className="badge">GET IN TOUCH</div>
          <h2>
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p>
            Have questions about your annual sales goal, your lead quality or the right service plan? Talk to Shweta Shah and the Business Growth Karma team.<br /><br />Call, email or schedule a strategy session. Visit us at 207B, Rajgruhi Business Hub, Kondhwa Budruk, Pune 411048.
          </p>

          <div className="btn-group">
            <a
              href="https://wa.me/919920220513"
              className="btn btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
            </a>
            <button
              type="button"
              className="btn btn-call"
              onClick={onOpenModal}
            >
              <i className="fa-solid fa-phone" /> Book Strategy Call
            </button>
          </div>

          <div className="note">
            <i className="fa-brands fa-whatsapp" /> WhatsApp:{" "}
            <strong>+91 99202 20513</strong>
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

        .badge {
          display: inline-block;
          padding: 8px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          font-size: 12px;
          color: #f5d18a;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .text h2 {
          font-size: clamp(38px, 4.8vw, 56px);
          font-weight: 900;
          line-height: 1.05;
          margin: 0 0 20px 0;
          color: #fff8e8;
          font-family: var(--font-montserrat);
        }

        .text p {
          font-size: 17px;
          color: #b2a58c;
          line-height: 1.65;
          margin: 0 0 36px 0;
        }

        .text p strong {
          color: #f5d18a;
          font-weight: 700;
        }

        .btn-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.35s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: var(--font-montserrat);
          cursor: pointer;
        }

        .btn-wa {
          background: linear-gradient(135deg, #dbb35b, #8c6528);
          color: #fff8e8;
          border: none;
          box-shadow: 0 15px 45px rgba(199, 153, 74, 0.4);
        }

        .btn-wa:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 55px rgba(199, 153, 74, 0.6);
        }

        .btn-call {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff8e8;
        }

        .btn-call:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: #edbd55;
          transform: translateY(-4px);
        }

        .note {
          margin-top: 28px;
          font-size: 15px;
          color: #ffd985;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .note i {
          color: #dbb35b;
          font-size: 17px;
        }

        .note strong {
          color: white;
          font-weight: 700;
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
          .btn-group {
            justify-content: center;
          }
          .btn {
            width: 100%;
            justify-content: center;
          }
          .note {
            justify-content: center;
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
