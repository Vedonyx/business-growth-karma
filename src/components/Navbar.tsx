"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { imageFor } from "@/lib/content";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobile = () => {
    const nextState = !isMobileOpen;
    setIsMobileOpen(nextState);
    document.body.style.overflow = nextState ? "hidden" : "";
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <a href="/" className="header-logo" onClick={closeMobile}>
            <img
              src={imageFor("Untitled-design-6.png")}
              alt="Business Growth Karma"
            />
          </a>

          <nav className={`main-nav ${isMobileOpen ? "active" : ""}`} id="mainNav">
            <ul className="nav-menu">{[['/','Home'],['/about','About Us'],['/work','Our Work'],['/services','Services'],['/contact','Contact Us']].map(([href,label]) => <li key={href}><a href={href} className={pathname === href ? 'active' : ''} onClick={closeMobile}>{label}</a></li>)}</ul>

            <button
              type="button"
              className="header-cta"
              onClick={() => {
                closeMobile();
                onOpenModal();
              }}
            >
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </button>
          </nav>

          <button
            type="button"
            className={`mobile-toggle ${isMobileOpen ? "active" : ""}`}
            onClick={toggleMobile}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          background: rgba(18, 12, 6, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .site-header.scrolled {
          background: rgba(12, 8, 4, 0.95);
          border-bottom-color: rgba(241, 201, 118, 0.3);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          text-decoration: none;
          z-index: 10000;
        }

        .header-logo img {
          height: 42px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .header-logo:hover img {
          transform: scale(1.04);
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 32px;
          align-items: center;
        }

        .nav-menu a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.4px;
          transition: all 0.3s ease;
          position: relative;
          padding: 5px 0;
          cursor: pointer;
          font-family: var(--font-space);
        }

        .nav-menu a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #edbd55, #dba22d);
          transition: width 0.3s ease;
        }

        .nav-menu a:hover,
        .nav-menu a.active {
          color: #edbd55;
        }

        .nav-menu a:hover::after,
        .nav-menu a.active::after {
          width: 100%;
        }

        .careers-link {
          display: inline-flex !important;
          align-items: center;
          gap: 8px;
        }

        .hiring-badge {
          display: inline-block;
          padding: 3px 10px;
          background: linear-gradient(135deg, #d8ac4a, #a77327);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          border-radius: 12px;
          text-transform: uppercase;
          animation: pulse-glow 2s ease-in-out infinite;
          box-shadow: 0 2px 10px rgba(183, 134, 56, 0.4);
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 2px 10px rgba(183, 134, 56, 0.4);
          }
          50% {
            box-shadow: 0 2px 20px rgba(183, 134, 56, 0.7);
          }
        }

        .header-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: linear-gradient(135deg, #edbd55, #dba22d);
          color: #fff;
          border: none;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(241, 201, 118, 0.3);
          cursor: pointer;
          font-family: var(--font-space);
        }

        .header-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(241, 201, 118, 0.5);
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          z-index: 10000;
          background: transparent;
          border: none;
        }

        .mobile-toggle span {
          width: 28px;
          height: 3px;
          background: #edbd55;
          border-radius: 2px;
          transition: all 0.3s ease;
          display: block;
        }

        .mobile-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        .mobile-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        @media (max-width: 1024px) {
          .main-nav {
            position: fixed;
            top: 74px;
            left: 0;
            width: 100%;
            height: calc(100vh - 74px);
            background: rgba(12, 8, 4, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: flex-start;
            padding: 40px 25px;
            gap: 0;
            transform: translateX(-100%);
            transition: transform 0.4s ease;
            border-top: 1px solid rgba(241, 201, 118, 0.2);
            overflow-y: auto;
          }

          .main-nav.active {
            transform: translateX(0);
          }

          .nav-menu {
            flex-direction: column;
            gap: 0;
            width: 100%;
          }

          .nav-menu li {
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .nav-menu a {
            display: block;
            width: 100%;
            padding: 18px 10px;
            font-size: 16px;
          }

          .careers-link {
            display: flex !important;
            justify-content: space-between;
          }

          .nav-menu a::after {
            display: none;
          }

          .header-cta {
            margin-top: 25px;
            width: 100%;
            justify-content: center;
          }

          .mobile-toggle {
            display: flex;
          }
        }
        .header-logo img {height:68px;max-width:150px;object-fit:contain;filter:invert(1) grayscale(1) sepia(1) saturate(2.5) brightness(1.5);mix-blend-mode:screen;}
      `}</style>
    </>
  );
}
