"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { brand, experienceCtaLabel, imageFor } from "@/lib/content";

const homeTopics = [
  { id: "framework", label: "The Solution" },
  { id: "reviews", label: "Our USP" },
  { id: "plan-transformation", label: "The Transformation" },
  { id: "about-shweta", label: "About Shweta Shah" },
  { id: "our-clients", label: "Our Clients" },
];

const accessTopics = [
  { id: "pillar-lessons", label: "Videos" },
  { id: "packages", label: "Our Services" },
  { id: "plan-transformation", label: "The Transformation" },
  { id: "reviews", label: "Our USP" },
  { id: "connect", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTopic, setActiveTopic] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAccess = pathname === "/4-pillar-access";
  const topics = isAccess ? accessTopics : homeTopics;
  const sectionPrefix = isHome || isAccess ? "" : "/";

  useEffect(() => {
    const updateTopic = () => setActiveTopic(window.location.hash.slice(1));
    updateTopic();
    window.addEventListener("hashchange", updateTopic);
    return () => window.removeEventListener("hashchange", updateTopic);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <a href={isHome ? "#home" : "/"} className="header-logo">
          <img
            className="brand-logo-artwork"
            src={imageFor("Untitled-design-6.png")}
            alt="Business Growth Karma home"
          />
        </a>

        <nav aria-label="Page sections">
          <ul className="nav-menu">
            {topics.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`${sectionPrefix}#${id}`}
                  aria-current={!sectionPrefix && activeTopic === id ? "location" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="header-cta" href={isAccess ? "#discovery-call" : brand.experienceCheckout}>
          {isAccess ? "My Discovery Call" : experienceCtaLabel} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </a>
      </div>

      <style jsx>{`
        .site-header {
          position: fixed;
          inset: 0 0 auto;
          z-index: 9999;
          background: rgba(18, 12, 6, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .site-header.scrolled {
          background: rgba(12, 8, 4, 0.95);
          border-bottom-color: rgba(241, 201, 118, 0.3);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px clamp(14px, 3vw, 30px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto auto;
          gap: clamp(14px, 2.5vw, 36px);
          align-items: center;
        }

        .header-logo {
          display: flex;
          justify-self: start;
          background: radial-gradient(ellipse at 27% 34%, #d6ad6499, transparent 72%);
        }

        .header-logo img {
          width: auto;
          height: 68px;
          max-width: 150px;
          object-fit: contain;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: clamp(14px, 2.5vw, 32px);
          list-style: none;
        }

        .nav-menu a {
          display: flex;
          align-items: center;
          position: relative;
          min-height: 40px;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          white-space: nowrap;
          font: 600 15px var(--font-space);
          transition: color 0.2s ease;
        }

        .nav-menu a::after {
          content: "";
          position: absolute;
          bottom: 4px;
          inset-inline: 0;
          height: 2px;
          background: linear-gradient(90deg, #edbd55, #dba22d);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.2s ease;
        }

        .nav-menu a:hover,
        .nav-menu a[aria-current="location"] {
          color: #edbd55;
        }

        .nav-menu a:hover::after,
        .nav-menu a[aria-current="location"]::after {
          transform: scaleX(1);
        }

        .header-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px clamp(16px, 2.2vw, 28px);
          background: linear-gradient(135deg, #edbd55, #dba22d);
          color: #1b1205;
          border: 0;
          border-radius: 8px;
          white-space: nowrap;
          font: 700 14px var(--font-space);
          box-shadow: 0 5px 20px rgba(241, 201, 118, 0.3);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .header-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(241, 201, 118, 0.5);
        }

        @media (max-width: 1024px) {
          .header-container {
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 4px 14px;
            padding-block: 7px;
          }

          .header-logo img {
            height: 42px;
          }

          nav {
            grid-column: 1 / -1;
            grid-row: 2;
          }

          .nav-menu {
            justify-content: space-between;
            gap: 5px;
          }

          .nav-menu a {
            justify-content: center;
            padding-inline: 1px;
            font-size: clamp(11px, 3vw, 14px);
            line-height: 1.2;
            white-space: normal;
            text-align: center;
          }

          .header-cta {
            padding: 9px 12px;
            font-size: clamp(11px, 3vw, 13px);
          }
        }

        @media (max-width: 390px) {
          .header-cta i { display: none; }
        }
      `}</style>
    </header>
  );
}
