"use client";

import React, { useState, useEffect } from "react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", phone: "", socialLink: "" });
        onClose();
      }, 3000);
    }, 1000);
  };

  return (
    <div
      className="lead-modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lead-modal-content" role="dialog" aria-modal="true">
        <button
          type="button"
          className="fobet-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="fobet-modal-header">
          <h3>
            Ready to <span className="gradient-text">Scale?</span>
          </h3>
          <p>Request a strategy call and we&apos;ll get back to you within 24 hours.</p>
        </div>

        {isSuccess ? (
          <div className="success-banner">
            <i className="fa-solid fa-circle-check" />
            <h4>Thank You, {formData.name || "Creator"}!</h4>
            <p>We received your request and will contact you shortly on WhatsApp.</p>
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

            <button type="submit" className="fobet-submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? "Submitting..." : "Request a Call"}</span>
              <i className="fa-solid fa-arrow-right" />
            </button>

            <p className="fobet-privacy-text">
              🔒 Your information is confidential and will never be shared.
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
          background: rgba(10, 14, 28, 0.88);
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
          background: linear-gradient(145deg, rgba(30, 41, 70, 0.98) 0%, rgba(20, 27, 48, 1) 100%);
          border: 2px solid rgba(238, 130, 238, 0.4);
          border-radius: 28px;
          padding: 45px 40px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(238, 130, 238, 0.2);
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
          background: rgba(238, 130, 238, 0.2);
          color: #ee82ee;
          border-color: #ee82ee;
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
          color: #94a3b8;
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
          color: #ffffff;
          font-size: 15px;
          font-family: var(--font-space);
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .fobet-input-group input:focus {
          border-color: #ee82ee;
          background: rgba(238, 130, 238, 0.06);
          box-shadow: 0 0 15px rgba(238, 130, 238, 0.2);
        }

        .fobet-input-group input::placeholder {
          color: #64748b;
        }

        .fobet-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 17px;
          background: linear-gradient(135deg, #ee82ee, #d946ef);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(238, 130, 238, 0.35);
          font-family: var(--font-montserrat);
          margin-top: 6px;
        }

        .fobet-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(238, 130, 238, 0.55);
        }

        .fobet-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .fobet-privacy-text {
          font-size: 12px;
          color: #64748b;
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
          color: #10b981;
        }

        .success-banner h4 {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
        }

        .success-banner p {
          color: #cbd5e1;
          font-size: 15px;
        }
      `}</style>
    </div>
  );
}
