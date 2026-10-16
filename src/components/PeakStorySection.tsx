"use client";

import React, { useEffect, useRef, useState } from "react";

export default function PeakStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const leftPathRef = useRef<SVGPathElement>(null);
  const rightPathRef = useRef<SVGPathElement>(null);
  const leftShadowRef = useRef<SVGPathElement>(null);
  const rightShadowRef = useRef<SVGPathElement>(null);
  const leftRunnerRef = useRef<HTMLSpanElement>(null);
  const rightRunnerRef = useRef<HTMLSpanElement>(null);
  const explosionRef = useRef<HTMLDivElement>(null);
  const burstRef = useRef<HTMLDivElement>(null);
  const summitRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<SVGPathElement>(null);
  const atmosphereRef = useRef<HTMLDivElement>(null);

  const [step1Visible, setStep1Visible] = useState(false);
  const [step2Visible, setStep2Visible] = useState(false);
  const [step3Visible, setStep3Visible] = useState(false);
  const [step4Visible, setStep4Visible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const svg = svgRef.current;
    const leftPath = leftPathRef.current;
    const rightPath = rightPathRef.current;
    const leftShadow = leftShadowRef.current;
    const rightShadow = rightShadowRef.current;
    const leftRunner = leftRunnerRef.current;
    const rightRunner = rightRunnerRef.current;
    const explosion = explosionRef.current;
    const burst = burstRef.current;
    const summit = summitRef.current;
    const mountain = mountainRef.current;
    const atmosphere = atmosphereRef.current;

    if (!section || !svg || !leftPath || !rightPath || !leftRunner || !rightRunner || !explosion || !summit || !mountain) {
      return;
    }

    const safeSection: HTMLElement = section;
    const safeSvg: SVGSVGElement = svg;
    const safeLeftPath: SVGPathElement = leftPath;
    const safeRightPath: SVGPathElement = rightPath;
    const safeLeftRunner: HTMLSpanElement = leftRunner;
    const safeRightRunner: HTMLSpanElement = rightRunner;
    const safeExplosion: HTMLDivElement = explosion;
    const safeSummit: HTMLDivElement = summit;
    const safeMountain: SVGPathElement = mountain;

    // Build explosion particles in DOM
    if (burst && burst.children.length === 0) {
      const count = window.innerWidth < 600 ? 26 : 56;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement("span");
        dot.className = "fps-burst-dot";
        const angle = Math.random() * Math.PI * 2;
        const distance = 65 + Math.random() * 155;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        dot.style.setProperty("--x", `${x}px`);
        dot.style.setProperty("--y", `${y}px`);
        dot.style.setProperty("--duration", `${0.7 + Math.random() * 0.7}s`);
        burst.appendChild(dot);
      }
    }

    const leftLength = safeLeftPath.getTotalLength();
    const rightLength = safeRightPath.getTotalLength();

    safeLeftPath.style.strokeDasharray = `${leftLength}`;
    safeLeftPath.style.strokeDashoffset = `${leftLength}`;
    safeRightPath.style.strokeDasharray = `${rightLength}`;
    safeRightPath.style.strokeDashoffset = `${rightLength}`;
    safeLeftPath.style.opacity = "1";
    safeRightPath.style.opacity = "1";

    let played = false;
    const duration = 3800;

    function getScreenPosition(path: SVGPathElement, progress: number) {
      const totalLen = path.getTotalLength();
      const pt = path.getPointAtLength(totalLen * progress);
      const svgPt = safeSvg.createSVGPoint();
      svgPt.x = pt.x;
      svgPt.y = pt.y;
      const matrix = safeSvg.getScreenCTM();
      if (!matrix) return { x: 0, y: 0 };
      const transformed = svgPt.matrixTransform(matrix);
      const stageRect = safeSection.querySelector(".fps-stage")?.getBoundingClientRect();
      if (!stageRect) return { x: 0, y: 0 };
      return {
        x: transformed.x - stageRect.left,
        y: transformed.y - stageRect.top,
      };
    }

    function triggerBoom() {
      safeExplosion.classList.add("boom");
      burst?.classList.add("active");
      safeSummit.classList.add("is-boom");
      safeMountain.classList.add("reveal");

      const ridges = safeSection.querySelectorAll(".fps-final-ridge");
      ridges.forEach((r) => r.classList.add("reveal"));

      if (leftShadow) leftShadow.style.opacity = "1";
      if (rightShadow) rightShadow.style.opacity = "1";

      safeLeftRunner.style.opacity = "0";
      safeRightRunner.style.opacity = "0";

      if (atmosphere) {
        atmosphere.animate(
          [
            { opacity: 0.15, transform: "translate(-50%, -50%) scale(0.8)" },
            { opacity: 0.75, transform: "translate(-50%, -50%) scale(1.18)" },
            { opacity: 0.25, transform: "translate(-50%, -50%) scale(1)" },
          ],
          {
            duration: 1100,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "forwards",
          }
        );
      }
    }

    function startAnimation() {
      if (played) return;
      played = true;
      const startTime = performance.now();

      safeLeftRunner.style.opacity = "1";
      safeRightRunner.style.opacity = "1";

      function frame(now: number) {
        const elapsed = now - startTime;
        let progress = elapsed / duration;
        progress = Math.min(progress, 1);

        const eased = 1 - Math.pow(1 - progress, 2.15);

        safeLeftPath.style.strokeDashoffset = `${leftLength * (1 - eased)}`;
        safeRightPath.style.strokeDashoffset = `${rightLength * (1 - eased)}`;

        const leftPos = getScreenPosition(safeLeftPath, eased);
        const rightPos = getScreenPosition(safeRightPath, eased);

        safeLeftRunner.style.left = `${leftPos.x}px`;
        safeLeftRunner.style.top = `${leftPos.y}px`;
        safeLeftRunner.style.transform = "translate(-50%, -50%)";

        safeRightRunner.style.left = `${rightPos.x}px`;
        safeRightRunner.style.top = `${rightPos.y}px`;
        safeRightRunner.style.transform = "translate(-50%, -50%)";

        if (eased >= 0.24) {
          setStep1Visible(true);
          setStep3Visible(true);
        }
        if (eased >= 0.62) {
          setStep2Visible(true);
          setStep4Visible(true);
        }

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setTimeout(triggerBoom, 90);
        }
      }

      requestAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="fobet-peak-story" ref={sectionRef}>
      <div className="fps-wrap">
        {/* Header */}
        <div className="fps-header">
          <div className="fps-eyebrow">
            <span className="fps-eyebrow-dot" />
            TWO PATHS. ONE PEAK.
          </div>
          <h2 className="fps-title">
            Organic + Inorganic = <span className="fps-gradient">Maximum Growth</span>
          </h2>
          <p className="fps-intro">
            Organic builds momentum from one side. Performance accelerates growth from the other.
            Watch what happens when both reach the same destination.
          </p>
        </div>

        {/* Animation Stage */}
        <div className="fps-stage">
          <div className="fps-atmosphere" ref={atmosphereRef} />

          {/* SVG Canvas */}
          <svg
            className="fps-svg"
            viewBox="0 0 1500 690"
            preserveAspectRatio="none"
            aria-hidden="true"
            ref={svgRef}
          >
            <defs>
              <linearGradient id="fpsOrganicGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff39da" />
                <stop offset="60%" stopColor="#ff58df" />
                <stop offset="100%" stopColor="#ff9bed" />
              </linearGradient>

              <linearGradient id="fpsPaidGradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#8d57ff" />
                <stop offset="60%" stopColor="#a963ff" />
                <stop offset="100%" stopColor="#df86ff" />
              </linearGradient>

              <linearGradient id="fpsMountainFill" x1="0%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#0b060d" />
                <stop offset="55%" stopColor="#1b0b21" />
                <stop offset="100%" stopColor="#461747" />
              </linearGradient>

              <filter id="fpsOrganicGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="fpsPaidGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Mountain Body Fill */}
            <path
              id="fpsMountainBody"
              ref={mountainRef}
              className="fps-final-mountain"
              d="M 105 555 C 240 550, 330 525, 410 480 C 500 430, 565 360, 625 286 C 675 225, 716 178, 750 150 C 784 178, 825 225, 875 286 C 935 360, 1000 430, 1090 480 C 1170 525, 1260 550, 1395 555 L 1395 606 L 105 606 Z"
            />

            {/* Topology Ridges */}
            <path
              className="fps-final-ridge"
              d="M 260 548 C 390 510, 560 390, 750 170 C 940 390, 1110 510, 1240 548"
            />
            <path
              className="fps-final-ridge"
              d="M 365 552 C 485 490, 625 345, 750 190 C 875 345, 1015 490, 1135 552"
            />
            <path
              className="fps-final-ridge"
              d="M 475 555 C 585 470, 670 315, 750 212 C 830 315, 915 470, 1025 555"
            />

            {/* Soft Route Shadows */}
            <path
              id="fpsLeftShadow"
              ref={leftShadowRef}
              className="fps-route-shadow fps-organic-shadow"
              d="M 105 555 C 235 550, 315 527, 405 480 C 505 428, 565 359, 625 286 C 675 225, 716 178, 750 150"
            />
            <path
              id="fpsRightShadow"
              ref={rightShadowRef}
              className="fps-route-shadow fps-paid-shadow"
              d="M 1395 555 C 1265 550, 1185 527, 1095 480 C 995 428, 935 359, 875 286 C 825 225, 784 178, 750 150"
            />

            {/* Animated Dynamic Routes */}
            <path
              id="fpsOrganicPath"
              ref={leftPathRef}
              className="fps-route fps-organic-route"
              d="M 105 555 C 235 550, 315 527, 405 480 C 505 428, 565 359, 625 286 C 675 225, 716 178, 750 150"
            />
            <path
              id="fpsPaidPath"
              ref={rightPathRef}
              className="fps-route fps-paid-route"
              d="M 1395 555 C 1265 550, 1185 527, 1095 480 C 995 428, 935 359, 875 286 C 825 225, 784 178, 750 150"
            />
          </svg>

          {/* Real-time Moving Points */}
          <span className="fps-runner fps-runner-left" id="fpsRunnerLeft" ref={leftRunnerRef} />
          <span className="fps-runner fps-runner-right" id="fpsRunnerRight" ref={rightRunnerRef} />

          {/* Organic Start Card */}
          <div className="fps-start-card fps-organic-card">
            <div className="fps-start-head">
              <div className="fps-start-icon">
                <i className="fa-solid fa-seedling" />
              </div>
              <div>
                <div className="fps-start-title">Organic</div>
                <div className="fps-start-meta">Compounding Growth</div>
              </div>
            </div>
            <p className="fps-start-desc">
              Brand, content, SEO and community build momentum over time.
            </p>
          </div>

          {/* Inorganic Start Card */}
          <div className="fps-start-card fps-paid-card">
            <div className="fps-start-head">
              <div className="fps-start-icon">
                <i className="fa-solid fa-bolt" />
              </div>
              <div>
                <div className="fps-start-title">Inorganic</div>
                <div className="fps-start-meta">Accelerated Growth</div>
              </div>
            </div>
            <p className="fps-start-desc">
              Paid media creates speed, reach and scalable acquisition.
            </p>
          </div>

          {/* Progress Labels */}
          <div className={`fps-step fps-step-1 ${step1Visible ? "visible" : ""}`}>Trust</div>
          <div className={`fps-step fps-step-2 ${step2Visible ? "visible" : ""}`}>Demand</div>
          <div className={`fps-step fps-step-paid fps-step-3 ${step3Visible ? "visible" : ""}`}>
            Reach
          </div>
          <div className={`fps-step fps-step-paid fps-step-4 ${step4Visible ? "visible" : ""}`}>
            Acquisition
          </div>

          {/* Collision / Boom Effects */}
          <div className="fps-explosion" id="fpsExplosion" ref={explosionRef}>
            <span className="fps-shockwave" />
            <span className="fps-shockwave" />
            <span className="fps-shockwave" />
            <span className="fps-flash" />
            <span className="fps-burst-ray" style={{ transform: "translate(-50%, -100%) rotate(0deg)" }} />
            <span className="fps-burst-ray" style={{ transform: "translate(-50%, -100%) rotate(45deg)" }} />
            <span className="fps-burst-ray" style={{ transform: "translate(-50%, -100%) rotate(90deg)" }} />
            <span className="fps-burst-ray" style={{ transform: "translate(-50%, -100%) rotate(135deg)" }} />
            <span className="fps-burst-ray" style={{ transform: "translate(-50%, -100%) rotate(180deg)" }} />
            <span className="fps-burst-ray" style={{ transform: "translate(-50%, -100%) rotate(225deg)" }} />
            <span className="fps-burst-ray" style={{ transform: "translate(-50%, -100%) rotate(270deg)" }} />
            <span className="fps-burst-ray" style={{ transform: "translate(-50%, -100%) rotate(315deg)" }} />
          </div>

          {/* Dynamic Generated Explosion Particles */}
          <div className="fps-burst-particles" id="fpsBurstParticles" ref={burstRef} />

          {/* Final Summit */}
          <div className="fps-summit" id="fpsSummit" ref={summitRef}>
            <div className="fps-peak-core">
              <i className="fa-solid fa-mountain-sun" />
            </div>
            <div className="fps-summit-kicker">Together</div>
            <div className="fps-summit-title">
              Maximum <span>Growth</span>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="fps-bottom">
          <div className="fps-bottom-line" />
          <div className="fps-bottom-copy">
            <i className="fa-solid fa-arrow-trend-up" /> Independent momentum. One shared peak.
          </div>
          <div className="fps-bottom-line" />
        </div>
      </div>

      <style jsx global>{`
        .fps-burst-dot {
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ff67e0;
          box-shadow: 0 0 8px #ff5adb;
          opacity: 0;
        }

        .fps-burst-particles.active .fps-burst-dot {
          animation: fpsBurstDot var(--duration) cubic-bezier(0.1, 0.7, 0.2, 1) forwards;
        }

        .fps-burst-dot:nth-child(3n) {
          background: #ae72ff;
          box-shadow: 0 0 8px #a667ff;
        }
        .fps-burst-dot:nth-child(5n) {
          background: #fff;
          box-shadow: 0 0 9px #fff;
        }

        @keyframes fpsBurstDot {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(0.4);
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(var(--x), var(--y)) scale(1.2);
          }
        }
      `}</style>

      <style jsx>{`
        #fobet-peak-story {
          position: relative;
          width: 100%;
          overflow: hidden;
          color: #fff;
          font-family: var(--font-space);
          background: radial-gradient(circle at 50% 41%, rgba(255, 48, 216, 0.065), transparent 31%),
            linear-gradient(180deg, #040204 0%, #070408 100%);
        }

        #fobet-peak-story:before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.14;
          background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 62px 62px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4) 72%, transparent);
        }

        .fps-wrap {
          width: min(1500px, calc(100% - 44px));
          position: relative;
          z-index: 5;
          margin: auto;
          padding: 90px 20px 100px;
        }

        .fps-header {
          position: relative;
          z-index: 20;
          max-width: 1060px;
          margin: 0 auto;
          text-align: center;
        }

        .fps-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 20px;
          padding: 8px 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          color: #c7bec9;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .fps-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff3fda;
          box-shadow: 0 0 7px #ff3fda, 0 0 18px rgba(255, 63, 218, 0.7);
          animation: fpsPulse 1.6s ease-in-out infinite;
        }

        @keyframes fpsPulse {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        .fps-title {
          margin: 0;
          font-size: clamp(38px, 5vw, 76px);
          line-height: 1.05;
          letter-spacing: -0.05em;
          font-weight: 800;
          font-family: var(--font-montserrat);
        }

        .fps-gradient {
          color: transparent;
          background: linear-gradient(90deg, #ff58df, #d768ff, #a46aff, #ff6be4);
          background-size: 230% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: fpsGradientText 6s linear infinite;
        }

        @keyframes fpsGradientText {
          to {
            background-position: 230% center;
          }
        }

        .fps-intro {
          max-width: 760px;
          margin: 18px auto 0;
          color: #9d939f;
          font-size: clamp(15px, 1.25vw, 19px);
          line-height: 1.7;
        }

        .fps-stage {
          position: relative;
          height: 690px;
          margin-top: 40px;
        }

        .fps-atmosphere {
          position: absolute;
          left: 50%;
          top: 42%;
          width: 660px;
          height: 500px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
          opacity: 0.15;
          background: radial-gradient(
            circle,
            rgba(255, 52, 217, 0.17),
            rgba(126, 66, 255, 0.06) 42%,
            transparent 72%
          );
          filter: blur(60px);
        }

        .fps-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 6;
          overflow: visible;
        }

        .fps-route {
          fill: none;
          stroke-width: 5;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0;
        }

        .fps-organic-route {
          stroke: url(#fpsOrganicGradient);
          filter: url(#fpsOrganicGlow);
        }

        .fps-paid-route {
          stroke: url(#fpsPaidGradient);
          filter: url(#fpsPaidGlow);
        }

        .fps-route-shadow {
          fill: none;
          stroke-width: 13;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0;
        }

        .fps-organic-shadow {
          stroke: rgba(255, 58, 216, 0.055);
        }

        .fps-paid-shadow {
          stroke: rgba(150, 90, 255, 0.055);
        }

        .fps-runner {
          position: absolute;
          z-index: 14;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
        }

        .fps-runner-left {
          background: #ff65df;
          box-shadow: 0 0 6px #fff, 0 0 15px #ff4cda, 0 0 32px rgba(255, 54, 215, 0.9);
        }

        .fps-runner-right {
          background: #ae79ff;
          box-shadow: 0 0 6px #fff, 0 0 15px #9861ff, 0 0 32px rgba(153, 89, 255, 0.9);
        }

        .fps-start-card {
          position: absolute;
          bottom: 42px;
          z-index: 18;
          width: 285px;
          padding: 18px 20px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.052),
            rgba(255, 255, 255, 0.014)
          );
          backdrop-filter: blur(18px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .fps-organic-card {
          left: 1%;
        }

        .fps-paid-card {
          right: 1%;
        }

        .fps-start-card:hover {
          transform: translateY(-6px);
        }

        .fps-start-head {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .fps-start-icon {
          width: 52px;
          height: 52px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 16px;
          font-size: 19px;
          color: #ff66e0;
          border: 1px solid rgba(255, 66, 220, 0.24);
          background: linear-gradient(145deg, rgba(255, 62, 219, 0.15), rgba(255, 62, 219, 0.03));
        }

        .fps-paid-card .fps-start-icon {
          color: #ae7bff;
          border-color: rgba(159, 95, 255, 0.28);
          background: linear-gradient(145deg, rgba(151, 89, 255, 0.15), rgba(151, 89, 255, 0.03));
        }

        .fps-start-title {
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.035em;
          font-family: var(--font-montserrat);
        }

        .fps-start-meta {
          margin-top: 3px;
          color: #746b77;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .fps-start-desc {
          margin: 13px 0 0;
          color: #938994;
          font-size: 12px;
          line-height: 1.55;
        }

        .fps-step {
          position: absolute;
          z-index: 12;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 11px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(8, 4, 10, 0.85);
          backdrop-filter: blur(10px);
          color: #827884;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(7px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .fps-step.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fps-step:before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff57dc;
          box-shadow: 0 0 7px #ff57dc;
        }

        .fps-step-paid:before {
          background: #a36cff;
          box-shadow: 0 0 7px #a36cff;
        }

        .fps-step-1 {
          left: 25%;
          bottom: 216px;
        }
        .fps-step-2 {
          left: 38%;
          top: 292px;
        }
        .fps-step-3 {
          right: 25%;
          bottom: 216px;
        }
        .fps-step-4 {
          right: 38%;
          top: 292px;
        }

        /* Summit */
        .fps-summit {
          position: absolute;
          left: 50%;
          top: 92px;
          z-index: 25;
          width: 280px;
          transform: translateX(-50%) scale(0.7);
          text-align: center;
          opacity: 0;
          pointer-events: none;
        }

        .fps-summit.is-boom {
          animation: fpsSummitReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fpsSummitReveal {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.45);
          }
          48% {
            opacity: 1;
            transform: translateX(-50%) scale(1.12);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        .fps-peak-core {
          position: relative;
          width: 78px;
          height: 78px;
          margin: 0 auto 14px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          font-size: 23px;
          background: radial-gradient(
            circle at 35% 27%,
            #fff 0 2%,
            #ff8aeb 7%,
            #ef5de0 20%,
            #b158ff 43%,
            #54207b 65%,
            #130719 82%
          );
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 10px #fff, 0 0 24px #ff55dd, 0 0 60px rgba(255, 56, 217, 0.78),
            0 0 130px rgba(145, 72, 255, 0.43);
          animation: fpsCoreFloat 2.4s ease-in-out infinite;
        }

        @keyframes fpsCoreFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .fps-summit-kicker {
          color: #948a97;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .fps-summit-title {
          margin-top: 5px;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.04em;
          font-family: var(--font-montserrat);
        }

        .fps-summit-title span {
          color: #ff74e4;
        }

        /* Explosion */
        .fps-explosion {
          position: absolute;
          left: 50%;
          top: 156px;
          z-index: 22;
          width: 20px;
          height: 20px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          opacity: 0;
        }

        .fps-explosion.boom {
          opacity: 1;
        }

        .fps-shockwave {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 40px;
          height: 40px;
          transform: translate(-50%, -50%) scale(0.2);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          opacity: 0;
        }

        .boom .fps-shockwave {
          animation: fpsShockwave 1.25s ease-out forwards;
        }

        .boom .fps-shockwave:nth-child(2) {
          animation-delay: 0.12s;
          border-color: rgba(255, 77, 219, 0.45);
        }

        .boom .fps-shockwave:nth-child(3) {
          animation-delay: 0.22s;
          border-color: rgba(156, 95, 255, 0.35);
        }

        @keyframes fpsShockwave {
          0% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(0.2);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(6.5);
          }
        }

        .fps-flash {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 18px;
          height: 18px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: #fff;
          opacity: 0;
        }

        .boom .fps-flash {
          animation: fpsFlash 0.7s ease-out forwards;
        }

        @keyframes fpsFlash {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.2);
            box-shadow: 0 0 15px #fff, 0 0 30px #ff6de3, 0 0 90px #be62ff,
              0 0 170px rgba(255, 70, 221, 0.8);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(3);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(6);
          }
        }

        .fps-burst-ray {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 2px;
          height: 15px;
          border-radius: 999px;
          background: linear-gradient(to top, transparent, #fff, #ff66df);
          transform-origin: 50% 100%;
          opacity: 0;
        }

        .boom .fps-burst-ray {
          animation: fpsBurstRay 0.8s ease-out forwards;
        }

        @keyframes fpsBurstRay {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            height: 85px;
          }
        }

        .fps-burst-particles {
          position: absolute;
          left: 50%;
          top: 156px;
          width: 1px;
          height: 1px;
          z-index: 23;
          pointer-events: none;
        }

        .fps-final-mountain {
          fill: url(#fpsMountainFill);
          opacity: 0;
        }

        .fps-final-mountain.reveal {
          animation: fpsMountainReveal 1.3s ease forwards;
        }

        @keyframes fpsMountainReveal {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.28;
          }
        }

        .fps-final-ridge {
          fill: none;
          stroke: rgba(255, 255, 255, 0.05);
          stroke-width: 1;
          stroke-dasharray: 4 10;
          opacity: 0;
        }

        .fps-final-ridge.reveal {
          animation: fpsRidgeReveal 1s ease forwards;
        }

        @keyframes fpsRidgeReveal {
          to {
            opacity: 1;
          }
        }

        .fps-bottom {
          max-width: 1020px;
          margin: 10px auto 0;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
        }

        .fps-bottom-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.13));
        }

        .fps-bottom-line:last-child {
          transform: scaleX(-1);
        }

        .fps-bottom-copy {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.025);
          color: #89808b;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .fps-bottom-copy i {
          color: #ef68dc;
        }

        @media (max-width: 1150px) {
          .fps-stage {
            transform: scale(0.92);
            transform-origin: center top;
            margin-bottom: -50px;
          }
        }

        @media (max-width: 850px) {
          .fps-stage {
            height: 560px;
            transform: none;
          }
          .fps-start-card {
            width: 220px;
            padding: 15px;
          }
          .fps-start-desc {
            display: none;
          }
          .fps-step {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .fps-stage {
            height: 470px;
          }
          .fps-start-card {
            width: 160px;
            bottom: 15px;
            padding: 10px;
          }
          .fps-summit {
            top: 55px;
            width: 220px;
          }
          .fps-bottom {
            grid-template-columns: 1fr;
          }
          .fps-bottom-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
