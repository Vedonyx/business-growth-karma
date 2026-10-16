"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img
                src="https://fobetmedia.com/wp-content/uploads/2025/11/FOBET-MEDIA-LOGO-WITH-TEXT-scaled.png"
                alt="Fobet Media"
              />
            </a>
            <p className="footer-tagline">
              Scale your authority with Fobet Media. Premium &ldquo;done-for-you&rdquo; personal branding agency and short-form video strategy for high-performing entrepreneurs and creators.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/fobet.media"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/vibhav-raj-175622245/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href="https://wa.me/919128006318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="footer-links-group">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#stats">Stats</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#protocol">Protocol</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Agency Links */}
          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#team">About Us</a></li>
              <li><a href="#bts">Behind The Scenes</a></li>
              <li><a href="https://fobetmedia.com/blogs" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="https://fobetmedia.com/career/" target="_blank" rel="noopener noreferrer">Careers (Hiring)</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="footer-links-group">
            <h4>Direct Reach</h4>
            <p className="contact-item">
              <i className="fa-brands fa-whatsapp" /> +91 91280 06318
            </p>
            <p className="contact-item">
              <i className="fa-solid fa-clock" /> Available 24/7 for strategy inquiries
            </p>
            <button type="button" className="scroll-top-btn" onClick={scrollToTop}>
              <i className="fa-solid fa-arrow-up" /> Back to Top
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fobet Media. All rights reserved.</p>
          <div className="footer-legal">
            <span>Done-for-you Personal Branding &amp; Paid Media Agency</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #080b15;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 80px 20px 40px;
          color: #94a3b8;
          position: relative;
          z-index: 10;
        }

        .footer-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 50px;
          margin-bottom: 60px;
        }

        .footer-logo img {
          height: 42px;
          width: auto;
          margin-bottom: 18px;
        }

        .footer-tagline {
          font-size: 14px;
          line-height: 1.6;
          color: #94a3b8;
          max-width: 380px;
          margin-bottom: 24px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-socials a {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.25s ease;
        }

        .footer-socials a:hover {
          background: linear-gradient(135deg, #ee82ee, #d946ef);
          border-color: #ee82ee;
          transform: translateY(-2px);
        }

        .footer-links-group h4 {
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 20px;
          font-family: var(--font-montserrat);
        }

        .footer-links-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-group a {
          font-size: 14px;
          color: #94a3b8;
          transition: color 0.2s ease;
        }

        .footer-links-group a:hover {
          color: #ee82ee;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #cbd5e1;
          margin-bottom: 12px;
        }

        .contact-item i {
          color: #25d366;
        }

        .scroll-top-btn {
          margin-top: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .scroll-top-btn:hover {
          background: rgba(238, 130, 238, 0.2);
          border-color: #ee82ee;
          color: #ee82ee;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          flex-wrap: wrap;
          gap: 15px;
        }

        @media (max-width: 968px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-brand {
            grid-column: span 1;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
