"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const page = glow.parentElement;
    if (!page) return;

    const moveGlow = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      glow.style.opacity = "1";
    };
    const hideGlow = () => { glow.style.opacity = "0"; };

    page.addEventListener("pointermove", moveGlow, { passive: true });
    page.addEventListener("pointerleave", hideGlow);
    return () => {
      page.removeEventListener("pointermove", moveGlow);
      page.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  return <div ref={glowRef} className={styles.cursorGlow} aria-hidden="true" />;
}
