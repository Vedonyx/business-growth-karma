"use client";

import Hero from "./Hero";
import StatsSection from "./StatsSection";
import ResultsSection from "./ResultsSection";
import ProtocolSection from "./ProtocolSection";
import BtsSection from "./BtsSection";
import PackagesSection from "./PackagesSection";
import PeakStorySection from "./PeakStorySection";
import TestimonialsSection from "./TestimonialsSection";
import LeadershipSection from "./LeadershipSection";
import BonusTicketSection from "./BonusTicketSection";
import FaqSection from "./FaqSection";
import ContactSection from "./ContactSection";
import { ClientLogoRail, FourPillarsSection, LeadJourneysSection, PurposeSection, ServicesDetail, ShwetaStorySection, LearningSection } from "./SupplementarySections";
import { useBooking } from "./SiteFrame";

export default function ClonePage({ page = "home" }: { page?: "home" | "about" | "work" | "services" | "contact" }) {
  const openBooking = useBooking();
  if (page === "about") return <><LeadershipSection /><ShwetaStorySection /><PurposeSection /><ClientLogoRail /><LearningSection /><BonusTicketSection onOpenModal={openBooking} /><ContactSection onOpenModal={openBooking} /></>;
  if (page === "work") return <><ResultsSection /><ClientLogoRail /><TestimonialsSection /><BtsSection all /><BonusTicketSection onOpenModal={openBooking} /><ContactSection onOpenModal={openBooking} /></>;
  if (page === "services") return <><StatsSection /><PurposeSection /><FourPillarsSection /><ProtocolSection /><ServicesDetail /><LeadJourneysSection /><PackagesSection /><PeakStorySection /><BonusTicketSection onOpenModal={openBooking} /><FaqSection /><ContactSection onOpenModal={openBooking} /></>;
  if (page === "contact") return <><ContactSection onOpenModal={openBooking} /><BonusTicketSection onOpenModal={openBooking} /><LearningSection /><FaqSection /></>;
  return <>
    <Hero onOpenModal={openBooking} />
    <ClientLogoRail />
    <StatsSection />
    <PurposeSection />
    <FourPillarsSection />
    <ResultsSection />
    <ProtocolSection />
    <BtsSection />
    <PackagesSection />
    <PeakStorySection />
    <LeadJourneysSection />
    <TestimonialsSection />
    <LeadershipSection />
    <BonusTicketSection onOpenModal={openBooking} />
    <FaqSection />
    <ContactSection onOpenModal={openBooking} />
  </>;
}
