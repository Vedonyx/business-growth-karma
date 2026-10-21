"use client";

import React, { useEffect, useRef, useState } from "react";
import { images, imageFor, industries } from "@/lib/content";
import MediaOverlay from "./MediaOverlay";

export default function ResultsSection() {
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const colors = [
      "#ca9b4c",
      "#edbd55",
      "#dba22d",
      "#ca9b4c",
      "#ca9b4c",
      "#fff8e8",
      "#ca9b4c",
    ];

    cardRefs.current.forEach((card) => {
      if (!card || card.querySelector(".confetti-container")) return;

      const container = document.createElement("div");
      container.className = "confetti-container";
      card.appendChild(container);

      const numPieces = 40;
      for (let i = 0; i < numPieces; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        const isLeft = i % 2 === 0;
        const startX = isLeft ? "15%" : "85%";
        const directionX = isLeft ? 1 : -1;
        const tx = Math.random() * 120 * directionX + "px";
        const txEnd = Math.random() * 200 * directionX + "px";
        const tyPeak = -(Math.random() * 220 + 90) + "px";
        const tyEnd = Math.random() * 180 + 130 + "px";
        const rot = Math.random() * 720 + "deg";
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 3 + "s";
        const duration = Math.random() * 1.5 + 2.5 + "s";
        const isCircle = Math.random() > 0.5;

        piece.style.cssText = `
          left: ${startX};
          bottom: 15%;
          background-color: ${color};
          --tx: ${tx};
          --tx-end: ${txEnd};
          --ty-peak: ${tyPeak};
          --ty-end: ${tyEnd};
          --r: ${rot};
          border-radius: ${isCircle ? "50%" : "0"};
          animation-duration: ${duration};
          animation-delay: ${delay};
        `;
        container.appendChild(piece);
      }
    });
  }, []);


  const [selected,setSelected]=useState<{src:string;alt:string}|null>(null);
  const resultsGrid=images.filter(image=>image.src.includes('whatsapp-roi')).slice(0,12);
  const featured=[{src:imageFor('I-am-Getting-150-Leads-every-Month.png'),title:'Education & Institutes',highlight:'15–25% Closing Ratio',detail:'Published admission-focused client results'},{src:imageFor('google-ads-for-Realestate.png'),title:'Real Estate / V3 Partners',highlight:'Sold Out in 4 Months',detail:'Landing pages, Google Ads and sales psychology'}];
  return (<section className="results-section" id="results" aria-labelledby="fobet-results-title">
    <div className="bg-orb bg-orb-1"/><div className="bg-orb bg-orb-2"/>{[0,1,2,3].map(i=><i key={i} className="sparkle fas fa-star"/>)}
    <div className="results-badge">REAL PEOPLE. REAL RESULTS.</div><h2 className="results-title" id="fobet-results-title">Client <span className="gradient-text">Transformation Results</span></h2><p className="results-subtext">Lead generation and sales results across real estate, manufacturing, education and consulting.</p>
    <div className="featured-wrapper">{featured.map((item,index)=><a href={item.src} key={item.title} className="featured-card" ref={el=>{cardRefs.current[index]=el;}} onClick={event=>{event.preventDefault();setSelected({src:item.src,alt:item.title});}}><div className="featured-image-container"><img src={item.src} alt={item.title+' client case study'} loading="lazy"/></div><div className="featured-info"><div className="featured-badge-congrats"><i className="fas fa-crown"/> CLIENT MILESTONE</div><h3 className="featured-handle">{item.title}</h3><p className="featured-achievement"><span className="featured-highlight">{item.highlight}</span><br/>{item.detail}</p></div></a>)}</div>
    <div className="results-grid">{resultsGrid.map(image=><a key={image.src} href={image.src} className="result-card" onClick={event=>{event.preventDefault();setSelected({src:image.src,alt:'Original client feedback shared by Shweta Shah'});}}><div className="card-tag tag-months">CLIENT FEEDBACK</div><div className="result-static"><img src={image.src} className="result-static-img shark-screenshot-img" alt="Original client WhatsApp feedback" loading="lazy"/></div></a>)}</div>
    <div className="shark-tank-section" id="industries"><div className="shark-tank-kicker"><i className="fa-solid fa-building"/> THE INDUSTRIES WE HELP</div><h3 className="shark-tank-title">Built for <span>Your Business</span></h3><p className="shark-tank-subtext">A connected system for your market, your customers and your annual sales goal.</p><div className="shark-tank-grid">{industries.map(item=><a href={'/work#'+item.id} className="shark-card" key={item.id} id={item.id}><div className="shark-card-media"><div className="shark-card-badge"><i className="fas fa-star"/>{item.short}</div><img src={imageFor(item.proof)} alt={item.label+' case study'} loading="lazy"/></div><div className="shark-card-body"><h4 className="shark-card-name">{item.label}</h4><p className="shark-card-handle">{item.text}</p></div><span className="shark-card-arrow"><i className="fa-solid fa-arrow-up-right-from-square"/></span></a>)}</div></div>
    <p className="clone-results-note">Published historical client results. Outcomes vary by business, offer and implementation.</p>
    {selected&&<MediaOverlay src={selected.src} title={selected.alt} onClose={()=>setSelected(null)}/>}
      <style jsx global>{`
        .confetti-container {
          position: absolute;
          top: -50px;
          left: 0;
          width: 100%;
          height: calc(100% + 100px);
          pointer-events: none;
          z-index: 3;
          overflow: hidden;
        }
        .confetti-piece {
          position: absolute;
          width: 8px;
          height: 16px;
          opacity: 0;
          animation: confettiExplode ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes confettiExplode {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          40% { transform: translate(var(--tx), var(--ty-peak)) rotate(calc(var(--r) / 2)); opacity: 1; }
          100% { transform: translate(var(--tx-end), var(--ty-end)) rotate(var(--r)); opacity: 0; }
        }
      `}</style>
      <style jsx>{`
        .results-section {
          width: 100%;
          padding: 100px 20px;
          background: #160f06;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.2;
          pointer-events: none;
          z-index: 0;
        }

        .bg-orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #dba22d, transparent 70%);
          top: -100px;
          left: -100px;
          animation: floatOrb1 25s ease-in-out infinite;
        }

        .bg-orb-2 {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, #b38532, transparent 70%);
          bottom: -100px;
          right: -100px;
          animation: floatOrb2 30s ease-in-out infinite;
        }

        @keyframes floatOrb1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, -30px) scale(1.1);
          }
        }

        @keyframes floatOrb2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, 30px) scale(1.1);
          }
        }

        .sparkle {
          position: absolute;
          font-size: 16px;
          color: rgba(241, 201, 118, 0.3);
          pointer-events: none;
          z-index: 0;
        }

        .sparkle:nth-child(3) {
          top: 15%;
          left: 10%;
          animation: sparkle 3s ease-in-out infinite;
        }
        .sparkle:nth-child(4) {
          top: 25%;
          right: 12%;
          animation: sparkle 3.5s ease-in-out infinite 1s;
        }
        .sparkle:nth-child(5) {
          bottom: 20%;
          left: 8%;
          animation: sparkle 4s ease-in-out infinite 2s;
        }
        .sparkle:nth-child(6) {
          bottom: 30%;
          right: 10%;
          animation: sparkle 3.8s ease-in-out infinite 0.5s;
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3) rotate(180deg);
          }
        }

        .results-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(241, 201, 118, 0.1);
          border: 1px solid rgba(241, 201, 118, 0.3);
          border-radius: 50px;
          font-size: 13px;
          color: #edbd55;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 24px;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .results-title {
          font-size: clamp(34px, 4.8vw, 56px);
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
          font-family: var(--font-montserrat);
          color: #fff8e8;
        }

        .results-subtext {
          font-size: clamp(16px, 1.8vw, 20px);
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
          font-family: var(--font-space);
        }

        /* Featured Profiles */
        .featured-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 34px;
          max-width: 980px;
          margin: 0 auto 70px auto;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }

        .featured-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          background: rgba(18, 12, 6, 0.65);
          border: 2px solid #edbd55;
          border-radius: 24px;
          overflow: hidden;
          max-width: 900px;
          width: 100%;
          text-decoration: none;
          color: white;
          position: relative;
          box-shadow: 0 0 40px rgba(241, 201, 118, 0.4), inset 0 0 20px rgba(241, 201, 118, 0.2);
          animation: congratsGlow 2.5s infinite alternate;
          backdrop-filter: blur(15px);
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .featured-card:hover {
          transform: translateY(-5px) scale(1.02);
        }

        @keyframes congratsGlow {
          0% {
            box-shadow: 0 0 30px rgba(241, 201, 118, 0.3),
              inset 0 0 15px rgba(241, 201, 118, 0.1);
            border-color: rgba(241, 201, 118, 0.8);
          }
          100% {
            box-shadow: 0 0 70px rgba(220, 177, 96, 0.7),
              inset 0 0 30px rgba(220, 177, 96, 0.4);
            border-color: #ffd985;
          }
        }

        .featured-image-container {
          flex: 0 0 48%;
          max-width: 48%;
          position: relative;
          overflow: hidden;
          min-height: 360px;
        }

        .featured-image-container img {
          width: 100%;
          height: 100%;
          min-height: 360px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .featured-info {
          flex: 0 0 52%;
          max-width: 52%;
          padding: 48px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .featured-badge-congrats {
          background: linear-gradient(135deg, #ca9b4c, #ca9b4c);
          color: #000;
          padding: 8px 22px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
          box-shadow: 0 4px 20px rgba(202, 155, 76, 0.5);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .featured-handle {
          font-size: clamp(26px, 3vw, 38px);
          font-family: var(--font-montserrat);
          font-weight: 900;
          margin: 0 0 12px 0;
          background: linear-gradient(135deg, #fff8e8, #ffd985);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .featured-achievement {
          font-size: clamp(18px, 2.4vw, 22px);
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          line-height: 1.4;
        }

        .featured-highlight {
          color: #ca9b4c;
          font-weight: 800;
          font-size: 1.3em;
          display: inline-block;
          margin-bottom: 5px;
          text-shadow: 0 0 15px rgba(202, 155, 76, 0.4);
          animation: partyPulse 2s infinite ease-in-out;
        }

        @keyframes partyPulse {
          0%,
          100% {
            transform: scale(1);
            text-shadow: 0 0 15px rgba(202, 155, 76, 0.4);
          }
          50% {
            transform: scale(1.08);
            text-shadow: 0 0 25px rgba(202, 155, 76, 0.9), 0 0 10px #eec673;
            color: #e6dec8;
          }
        }

        .featured-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          animation: shineCard 5s infinite;
          pointer-events: none;
        }

        @keyframes shineCard {
          0% {
            left: -100%;
          }
          20% {
            left: 200%;
          }
          100% {
            left: 200%;
          }
        }

        /* Results Grid */
        .results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          max-width: 1500px;
          margin: 0 auto 70px auto;
          position: relative;
          z-index: 1;
        }

        .result-card {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.04);
          border: 2px solid rgba(241, 201, 118, 0.2);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          cursor: pointer;
          display: block;
        }

        .result-card:hover {
          transform: translateY(-8px);
          border-color: rgba(241, 201, 118, 0.6);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7), 0 0 40px rgba(241, 201, 118, 0.3);
        }

        .result-static {
          position: relative;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          background: #0b0703;
        }

        .result-static-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .card-tag {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 2;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .tag-months,
        .tag-starting,
        .tag-featured-result {
          background: linear-gradient(135deg, #edbd55, #dba22d);
          color: #fff8e8;
        }

        .tag-shark-tank {
          background: linear-gradient(135deg, #e4ba69, #c69748);
          color: #090603;
          border-color: rgba(255, 255, 255, 0.55);
          box-shadow: 0 7px 24px rgba(198, 151, 72, 0.34);
        }

        /* Shark Tank Featured Section */
        .shark-tank-section {
          max-width: 1280px;
          margin: 10px auto 30px auto;
          padding: 48px 34px 34px;
          position: relative;
          z-index: 2;
          border: 1px solid rgba(241, 201, 118, 0.22);
          border-radius: 28px;
          overflow: hidden;
          background: radial-gradient(circle at 12% 10%, rgba(220, 177, 96, 0.12), transparent 35%),
            radial-gradient(circle at 88% 85%, rgba(231, 189, 107, 0.1), transparent 38%),
            rgba(9, 6, 3, 0.72);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.34);
          backdrop-filter: blur(14px);
        }

        .shark-tank-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 18px;
          margin-bottom: 16px;
          border-radius: 999px;
          background: rgba(241, 201, 118, 0.1);
          border: 1px solid rgba(241, 201, 118, 0.25);
          color: #edbd55;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .shark-tank-title {
          margin: 0;
          color: #fff8e8;
          font-family: var(--font-montserrat);
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .shark-tank-title span {
          background: linear-gradient(135deg, #edbd55, #dba22d, #b67b1f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .shark-tank-subtext {
          max-width: 760px;
          margin: 14px auto 32px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          line-height: 1.6;
        }

        .shark-tank-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .shark-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(241, 201, 118, 0.22);
          background: rgba(255, 255, 255, 0.045);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .shark-card:hover {
          transform: translateY(-7px);
          border-color: rgba(241, 201, 118, 0.55);
          box-shadow: 0 26px 60px rgba(0, 0, 0, 0.38), 0 0 35px rgba(241, 201, 118, 0.15);
        }

        .shark-card-media {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #0b0703;
          display: flex;
          flex-direction: column;
        }

        .shark-card-media img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .shark-card:hover .shark-card-media img {
          transform: scale(1.02);
        }

        .shark-card-badge {
          position: relative;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin: 14px 14px 10px;
          padding: 8px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #e4ba69, #c69748);
          color: #090603;
          font-size: 11px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .shark-card-body {
          padding: 22px;
          text-align: left;
          background: linear-gradient(180deg, rgba(18, 12, 6, 0), rgba(18, 12, 6, 0.35));
        }

        .shark-card-name {
          margin: 0 0 7px;
          color: #fff8e8;
          font-family: var(--font-montserrat);
          font-size: 22px;
          font-weight: 800;
        }

        .shark-card-handle {
          margin: 0;
          color: rgba(255, 255, 255, 0.65);
          font-size: 14px;
        }

        .shark-card-arrow {
          position: absolute;
          right: 18px;
          bottom: 18px;
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          color: #edbd55;
          background: rgba(241, 201, 118, 0.08);
          border: 1px solid rgba(241, 201, 118, 0.2);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .shark-card:hover .shark-card-arrow {
          transform: translate(3px, -3px);
          background: rgba(241, 201, 118, 0.2);
        }

        @media (max-width: 1200px) {
          .results-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .results-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .featured-card {
            flex-direction: column;
          }
          .featured-image-container,
          .featured-info {
            flex: none;
            width: 100%;
            max-width: 100%;
          }
          .featured-image-container,
          .featured-image-container img {
            min-height: 0;
            aspect-ratio: 4 / 3;
          }
          .featured-info {
            padding: 30px 20px;
          }
          .shark-tank-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
