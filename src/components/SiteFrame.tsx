"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeadModal from "./LeadModal";
import StickyExperienceCta from "./StickyExperienceCta";

const BookingContext = createContext<() => void>(() => {});
export const useBooking = () => useContext(BookingContext);

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState("not-sure");
  const pathname = usePathname();
  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("plan");
    if (pathname === "/contact" && selected && ["setup", "training", "done-for-you"].includes(selected)) {
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
              <feComposite in="SourceGraphic" in2="whiteMatte" operator="arithmetic" k2="1" k3="-1" result="logoArtwork" />
              {/* Lift the darkest fills to bronze so the letters read against the dark header. */}
              <feComponentTransfer in="logoArtwork">
                <feFuncR type="table" tableValues="0.40 0.48 0.57 0.75 1" />
                <feFuncG type="table" tableValues="0.26 0.34 0.50 0.75 1" />
                <feFuncB type="table" tableValues="0.12 0.25 0.50 0.75 1" />
                <feFuncA type="linear" slope="1.12" intercept="-0.12" />
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>
        <a className="clone-skip-link" href="#main-content">Skip to content</a>
        <Navbar onOpenModal={openBooking} />
        <main id="main-content">{children}</main>
        {pathname !== "/" && <Footer />}
        <StickyExperienceCta onOpenModal={openBooking} />
        <LeadModal isOpen={open} onClose={closeBooking} initialPlan={plan} />
      </div>
    </BookingContext.Provider>
  );
}
