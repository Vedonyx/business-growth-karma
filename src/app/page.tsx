"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ResultsSection from "@/components/ResultsSection";
import ProtocolSection from "@/components/ProtocolSection";
import BtsSection from "@/components/BtsSection";
import PackagesSection from "@/components/PackagesSection";
import PeakStorySection from "@/components/PeakStorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadershipSection from "@/components/LeadershipSection";
import BonusTicketSection from "@/components/BonusTicketSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="fobet-page-root">
      {/* Navigation Header */}
      <Navbar onOpenModal={openModal} />

      {/* Hero Section */}
      <Hero onOpenModal={openModal} />

      {/* Stats ("Just 2 Days In A Month") */}
      <StatsSection />

      {/* Results & Shark Tank Showcase */}
      <ResultsSection />

      {/* Protocol (Systematized Growth Timeline) */}
      <ProtocolSection />

      {/* Behind The Scenes Masonry */}
      <BtsSection />

      {/* Packages / Pricing Plans */}
      <PackagesSection />

      {/* Interactive Feature: Two Paths -> One Peak */}
      <PeakStorySection />

      {/* Client Video Testimonials */}
      <TestimonialsSection />

      {/* Leadership (Riya Upreti & Vibhav Raj) */}
      <LeadershipSection />

      {/* Holographic VIP Bonus Ticket */}
      <BonusTicketSection onOpenModal={openModal} />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection onOpenModal={openModal} />

      {/* Site Footer */}
      <Footer />

      {/* Strategy Session Booking Modal */}
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />

      <style jsx>{`
        .fobet-page-root {
          min-height: 100vh;
          background: #0a0d18;
          color: #ffffff;
          position: relative;
          overflow-x: hidden;
        }
      `}</style>
    </main>
  );
}
