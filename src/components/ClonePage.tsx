"use client";

import Hero from "./Hero";
import IndustryStrip from "./IndustryStrip";
import ResultsSection from "./ResultsSection";
import ReviewsSection from "./ReviewsSection";
import BtsSection from "./BtsSection";
import PackagesSection from "./PackagesSection";
import PlanTransformationSection from "./PlanTransformationSection";
import GrowthNumbersSection from "./GrowthNumbersSection";
import PeakStorySection from "./PeakStorySection";
import TestimonialsSection from "./TestimonialsSection";
import LeadershipSection from "./LeadershipSection";
import FaqSection from "./FaqSection";
import ContactSection from "./ContactSection";
import { ClientLogoRail, FourPillarsSection, LeadJourneysSection, PurposeSection, ShwetaStorySection, LearningSection } from "./SupplementarySections";
import { useBooking } from "./SiteFrame";

export default function ClonePage({ page = "home" }: { page?: "home" | "about" | "work" | "services" | "contact" }) {
  const openBooking = useBooking();
  if (page === "about") return <><LeadershipSection /><ShwetaStorySection /><PurposeSection /><ClientLogoRail /><LearningSection /><ContactSection onOpenModal={openBooking} /></>;
  if (page === "work") return <><ReviewsSection /><ResultsSection /><ClientLogoRail /><TestimonialsSection /><BtsSection all /><ContactSection onOpenModal={openBooking} /></>;
  if (page === "services") return <><PurposeSection /><FourPillarsSection /><PackagesSection /><PlanTransformationSection /><ReviewsSection /><ResultsSection /><LeadJourneysSection /><GrowthNumbersSection /><PeakStorySection /><FaqSection /><ContactSection onOpenModal={openBooking} /></>;
  if (page === "contact") return <><ContactSection onOpenModal={openBooking} /><LearningSection /><FaqSection /></>;
  return <>
    <Hero onOpenModal={openBooking} />
    <IndustryStrip />
    <ClientLogoRail />
    <FourPillarsSection />
    <PackagesSection />
    <PlanTransformationSection />
    <ReviewsSection />
    <ResultsSection />
    <PurposeSection />
    <GrowthNumbersSection />
    <PeakStorySection />
  </>;
}
