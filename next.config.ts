import type { NextConfig } from "next";
import path from "path";

// Vercel reads the config before and during the build; both phases must use .next.
// Keep the separate production folder only for local Windows development.
const isLocalWindowsProduction =
  process.platform === "win32" &&
  process.env.NODE_ENV === "production" &&
  !process.env.VERCEL;

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_OUTPUT_DIR || (isLocalWindowsProduction ? ".next-production" : ".next"),
  // Keep Windows builds within one process and a small worker pool.
  experimental: {
    cpus: 2,
    workerThreads: true,
    webpackBuildWorker: false,
    turbopackFileSystemCacheForBuild: false,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    const routes: [string, string][] = [
      ['/about', '/#about-shweta'],
      ['/about-us', '/#about-shweta'],
      ['/about-shweta-shah', '/#about-shweta'],
      ['/work', '/#results'],
      ['/our-work-case-studies', '/#results'],
      ['/testimonials', '/#reviews'],
      ['/video', '/#results'],
      ['/services', '/#framework'],
      ['/our-services', '/#framework'],
      ['/contact', '/#investment'],
      ['/google-ads-lead-generation', '/#framework'],
      ['/linkedin-lead-generation', '/#framework'],
      ['/sales-psychology-system', '/#framework'],
      ['/industries-we-help', '/#industry-strip-title'],
      ['/digital-marketing-for-manufacturers', '/#manufacturing'],
      ['/digital-marketing-for-b2b-business', '/#manufacturing'],
      ['/digital-marketing-for-institute', '/#education'],
      ['/digital-marketing-for-real-estate', '/#real-estate'],
      ['/digital-marketing-for-consultants', '/#consulting'],
    ];
    return routes.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
