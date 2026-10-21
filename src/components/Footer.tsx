"use client";
import React from 'react';
import {brand,imageFor} from '@/lib/content';
export default function Footer() {
  const scrollToTop=()=>window.scrollTo({top:0,behavior:'smooth'});
  return (<footer className="site-footer"><div className="footer-container"><div className="footer-top">
    <div className="footer-brand"><a href="/" className="footer-logo"><img src={imageFor('Untitled-design-6.png')} alt="Business Growth Karma"/></a><p className="footer-tagline">Lead generation, sales psychology and automation with Shweta Shah. We build the setup, the branding, the sales capability and the quality lead generation your business needs.</p><div className="footer-socials"><a href="https://instagram.com/shwetashah.in" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"/></a><a href={brand.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"/></a><a href="https://youtube.com/shwetashah" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"/></a><a href="https://wa.me/919920220513" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"/></a></div></div>
    <div className="footer-links-group"><h4>Navigation</h4><ul>{[['/','Home'],['/about','About Us'],['/work','Our Work'],['/services','Services'],['/contact','Contact Us']].map(([href,label])=><li key={href}><a href={href}>{label}</a></li>)}</ul></div>
    <div className="footer-links-group"><h4>Explore</h4><ul><li><a href="/services#packages">Growth Plans</a></li><li><a href="/work#testimonials">Client Videos</a></li><li><a href="/work#gallery">Screenshots & Results</a></li><li><a href={brand.ebook} target="_blank" rel="noreferrer">Free LinkedIn E-book</a></li><li><a href="/contact#learning">Webinars & Training</a></li><li><a href="/services#faq">FAQ</a></li></ul></div>
    <div className="footer-links-group"><h4>Direct Reach</h4><p className="contact-item"><i className="fa-solid fa-phone"/> <a href={brand.phoneHref}>{brand.phone}</a><br/><a href="tel:+918149920513">{brand.secondPhone}</a></p><p className="contact-item"><i className="fa-solid fa-envelope"/> <a href={'mailto:'+brand.email}>{brand.email}</a><br/><a href={'mailto:'+brand.secondEmail}>{brand.secondEmail}</a></p><p className="contact-item"><i className="fa-solid fa-location-dot"/> {brand.address}</p><button className="scroll-top-btn" onClick={scrollToTop}><i className="fa-solid fa-arrow-up"/> Back to Top</button></div>
    </div><div className="footer-bottom"><p>© {new Date().getFullYear()} Business Growth Karma. Founded by Shweta Vallabh Shah.</p><div className="footer-legal"><a href="https://shwetashah.in/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a> · <a href="https://shwetashah.in/terms-and-conditions/" target="_blank" rel="noreferrer">Terms</a> · <a href="https://shwetashah.in/cancellation-refund-policy/" target="_blank" rel="noreferrer">Refund Policy</a></div></div></div>
      <style jsx>{`
        .site-footer {
          background: #090603;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 80px 20px 40px;
          color: #b2a58c;
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
          color: #b2a58c;
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
          color: #fff8e8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.25s ease;
        }

        .footer-socials a:hover {
          background: linear-gradient(135deg, #edbd55, #dba22d);
          border-color: #edbd55;
          transform: translateY(-2px);
        }

        .footer-links-group h4 {
          color: #fff8e8;
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
          color: #b2a58c;
          transition: color 0.2s ease;
        }

        .footer-links-group a:hover {
          color: #edbd55;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #ffd985;
          margin-bottom: 12px;
        }

        .contact-item i {
          color: #dbb35b;
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
          color: #fff8e8;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .scroll-top-btn:hover {
          background: rgba(241, 201, 118, 0.2);
          border-color: #edbd55;
          color: #edbd55;
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
