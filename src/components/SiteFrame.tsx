"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeadModal from "./LeadModal";

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

  return <BookingContext.Provider value={openBooking}><div className="fobet-page-root"><a className="clone-skip-link" href="#main-content">Skip to content</a><Navbar onOpenModal={openBooking} /><main id="main-content">{children}</main><Footer /><LeadModal isOpen={open} onClose={closeBooking} initialPlan={plan} /></div></BookingContext.Provider>;
}
