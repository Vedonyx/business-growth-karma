import Hero from "./Hero";
import IndustryStrip from "./IndustryStrip";
import ResultsSection from "./ResultsSection";
import ReviewsSection from "./ReviewsSection";
import GrowthExperienceSection from "./GrowthExperienceSection";
import GrowthInvestmentSection from "./GrowthInvestmentSection";
import AboutShwetaSection from "./AboutShwetaSection";
import PlanTransformationSection from "./PlanTransformationSection";
import GrowthNumbersSection from "./GrowthNumbersSection";
import PeakStorySection from "./PeakStorySection";
import FaqSection from "./FaqSection";
import { ClientLogoRail, FourPillarsSection, PurposeSection } from "./SupplementarySections";

export default function ClonePage() {
  return <>
    <Hero />
    <IndustryStrip />
    <ClientLogoRail />
    <FourPillarsSection solution />
    <ReviewsSection leadConversionProof />
    <GrowthExperienceSection />
    <PlanTransformationSection realTransformation />
    <GrowthInvestmentSection />
    <AboutShwetaSection />
    <GrowthNumbersSection />
    <FaqSection experience />
    <ResultsSection />
    <PurposeSection />
    <PeakStorySection />
  </>;
}
