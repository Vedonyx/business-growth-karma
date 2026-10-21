"use client";

import React, { useState, useEffect, useRef } from "react";
import { brand, plans } from "@/lib/content";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export default function LeadModal({ isOpen, onClose, initialPlan = "not-sure" }: LeadModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialLink: "",
    plan: initialPlan,
    goal: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => { setFormData(previous => ({ ...previous, plan: initialPlan })); }, [initialPlan]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const controls = contentRef.current?.querySelectorAll<HTMLElement>('a[href],button,input,select,textarea');
        if (!controls?.length) return;
        const first = controls[0], last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      contentRef.current?.querySelector<HTMLInputElement>('input')?.focus();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Business growth enquiry: ${formData.name}`;
    const message = `Hi Shweta,\n\nI would like to discuss my annual sales goal.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nWebsite: ${formData.socialLink || 'Not supplied'}\nService: ${plans.find(plan => plan.id === formData.plan)?.title || 'Help me choose'}\nAnnual sales goal: ${formData.goal || 'Let’s discuss'}\n`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div
      className="lead-modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div ref={contentRef} className="lead-modal-content" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button
          type="button"
          className="fobet-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="fobet-modal-header">
          <h3 id="booking-title">
            Ready to <span className="gradient-text">Scale?</span>
          </h3>
          <p>Discuss your annual sales goal with Shweta Shah. Prepare an enquiry or book a strategy session.</p>
        </div>

        {isSuccess ? (
          <div className="success-banner">
            <i className="fa-solid fa-circle-check" />
            <h4>Your email draft is ready, {formData.name || "there"}.</h4>
            <p>Send the draft from your email app to complete your enquiry. You can also email {brand.email} directly.</p>
            <a href={brand.booking} target="_blank" rel="noreferrer" className="fobet-submit-btn">Book a strategy session <i className="fa-solid fa-arrow-right" /></a>
          </div>
        ) : (
          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="fobet-input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="fobet-input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="fobet-input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="fobet-input-group">
              <input
                type="url"
                name="socialLink"
                placeholder="Instagram or Website Link (Optional)"
                value={formData.socialLink}
                onChange={(e) => setFormData({ ...formData, socialLink: e.target.value })}
              />
            </div>

            <div className="fobet-input-group"><select aria-label="Service plan" value={formData.plan} onChange={event => setFormData({ ...formData, plan: event.target.value })}><option value="not-sure">Help me choose a growth plan</option>{plans.map(plan => <option key={plan.id} value={plan.id}>{plan.title} — ₹{plan.price} {plan.period}</option>)}</select></div>
            <div className="fobet-input-group"><select aria-label="Annual sales goal" value={formData.goal} onChange={event => setFormData({ ...formData, goal: event.target.value })}><option value="">What is your annual sales goal?</option><option>Under ₹1 crore</option><option>₹1–5 crore</option><option>₹5–10 crore</option><option>₹10 crore and above</option><option>Let’s discuss</option></select></div>
            <button type="submit" className="fobet-submit-btn" disabled={isSubmitting}>
              <span>Prepare My Enquiry</span>
              <i className="fa-solid fa-arrow-right" />
            </button>

            <p className="fobet-privacy-text">
              Your details open in your email app. They are sent only when you send the draft. <a href={brand.booking} target="_blank" rel="noreferrer">Prefer to book directly?</a>
            </p>
          </form>
        )}
      </div>

      <style jsx>{`
        .lead-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 7, 3, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .lead-modal-content {
          background: linear-gradient(145deg, rgba(26, 18, 8, 0.98) 0%, rgba(18, 12, 6, 1) 100%);
          border: 2px solid rgba(241, 201, 118, 0.4);
          border-radius: 28px;
          padding: 45px 40px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(241, 201, 118, 0.2);
          position: relative;
          text-align: center;
          color: #fff;
          animation: popIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes popIn {
          from {
            transform: translateY(40px) scale(0.92);
          }
          to {
            transform: translateY(0) scale(1);
          }
        }

        .fobet-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .fobet-close-btn:hover {
          background: rgba(241, 201, 118, 0.2);
          color: #edbd55;
          border-color: #edbd55;
          transform: rotate(90deg);
        }

        .fobet-modal-header h3 {
          font-family: var(--font-montserrat);
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 10px 0;
        }

        .fobet-modal-header p {
          font-size: 15px;
          color: #b2a58c;
          margin-bottom: 28px;
        }

        .lead-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .fobet-input-group input {
          width: 100%;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          color: #fff8e8;
          font-size: 15px;
          font-family: var(--font-space);
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .fobet-input-group input:focus {
          border-color: #edbd55;
          background: rgba(241, 201, 118, 0.06);
          box-shadow: 0 0 15px rgba(241, 201, 118, 0.2);
        }

        .fobet-input-group input::placeholder {
          color: #8d7b5a;
        }

        .fobet-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 17px;
          background: linear-gradient(135deg, #edbd55, #dba22d);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(241, 201, 118, 0.35);
          font-family: var(--font-montserrat);
          margin-top: 6px;
        }

        .fobet-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(241, 201, 118, 0.55);
        }

        .fobet-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .fobet-privacy-text {
          font-size: 12px;
          color: #8d7b5a;
          margin-top: 10px;
        }

        .success-banner {
          padding: 30px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .success-banner i {
          font-size: 50px;
          color: #d8ac4a;
        }

        .success-banner h4 {
          font-size: 24px;
          font-weight: 800;
          color: #fff8e8;
        }

        .success-banner p {
          color: #ffd985;
          font-size: 15px;
        }
        .lead-modal-content {max-height:92dvh;overflow-y:auto;}
        .fobet-input-group select {width:100%;padding:15px 18px;border-radius:12px;border:1px solid rgba(237,189,85,.25);background:#1a1208;color:#f5e6c6;font-family:inherit;font-size:14px;}
        .fobet-input-group select:focus {outline:2px solid #edbd55;outline-offset:2px;}
        .fobet-privacy-text a {color:#edbd55;text-decoration:underline;}
      `}</style>
    </div>
  );
}
