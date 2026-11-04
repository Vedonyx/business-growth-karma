"use client";

import { createElement } from "react";
import Script from "next/script";
import styles from "./WistiaVideo.module.css";

export default function WistiaVideo({ mediaId, title }: { mediaId: string; title: string }) {
  const disableLocalTracking = process.env.NODE_ENV === "development";

  return (
    <div className={styles.frame} role="region" aria-label={title}>
      {disableLocalTracking && (
        <Script id="wistia-local-privacy" strategy="afterInteractive">
          {`window._wq = window._wq || [];
window._wq.push(function (W) { W.consent(false); });`}
        </Script>
      )}
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" async />
      <Script src={`https://fast.wistia.com/embed/${mediaId}.js`} type="module" strategy="afterInteractive" async />
      {createElement("wistia-player", {
        "media-id": mediaId,
        aspect: "0.5625",
        "player-color": "dba22d",
        "fit-strategy": "contain",
        preload: "none",
        "do-not-track": disableLocalTracking ? "true" : undefined,
        className: styles.player,
        style: { backgroundImage: `url(https://fast.wistia.com/embed/medias/${mediaId}/swatch)` },
      })}
    </div>
  );
}
