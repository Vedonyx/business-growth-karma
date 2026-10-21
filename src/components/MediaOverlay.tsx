"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function MediaOverlay({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
    return () => { document.body.style.overflow = previous; };
  }, []);

  return createPortal(
    <dialog ref={dialogRef} className="clone-media-dialog" aria-label={title} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="clone-media-heading"><span>{title}</span><button type="button" onClick={onClose} aria-label="Close image">×</button></div>
      <img src={src} alt={title} />
      <a href={src} download>Download image <i className="fa-solid fa-download" /></a>
    </dialog>, document.body,
  );
}
