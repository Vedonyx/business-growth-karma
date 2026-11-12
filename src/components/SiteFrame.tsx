"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeadModal from "./LeadModal";
import StickyExperienceCta from "./StickyExperienceCta";

const BookingContext = createContext<(plan?: string) => void>(() => {});
export const useBooking = () => useContext(BookingContext);

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState("not-sure");
  const pathname = usePathname();
  const isPillarAccess = pathname === "/4-pillar-access";
  const openBooking = useCallback((selected = "not-sure") => {
    setPlan(selected);
    setOpen(true);
  }, []);
  const closeBooking = useCallback(() => setOpen(false), []);
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("plan");
    if (pathname === "/" && selected && ["setup", "training", "done-for-you"].includes(selected)) {
      setPlan(selected);
      setOpen(true);
    }
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <BookingContext.Provider value={openBooking}>
      <div className="fobet-page-root">
        <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter id="brand-logo-remove-white" colorInterpolationFilters="sRGB">
              {/* Estimate the white matte from the blue channel and subtract it, including at the letter edges. */}
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 0 1
                        0 0 1.45 0 -0.41"
                result="whiteMatte"
              />
              <feComposite in="SourceGraphic" in2="whiteMatte" operator="arithmetic" k2="1" k3="-1" />
            </filter>
          </defs>
        </svg>
        <a className="clone-skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        {pathname !== "/" && !isPillarAccess && <Footer />}
        {!isPillarAccess && <StickyExperienceCta />}
        <LeadModal isOpen={open} onClose={closeBooking} initialPlan={plan} />
      </div>
    </BookingContext.Provider>
  );
}
