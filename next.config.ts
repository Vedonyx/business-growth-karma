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
      ['/about-us', '/about'],
      ['/about-shweta-shah', '/about'],
      ['/our-work-case-studies', '/work'],
      ['/testimonials', '/work#testimonials'],
      ['/video', '/work#testimonials'],
      ['/our-services', '/services'],
      ['/google-ads-lead-generation', '/services#framework'],
      ['/linkedin-lead-generation', '/services#framework'],
      ['/sales-psychology-system', '/services#framework'],
      ['/industries-we-help', '/#industries'],
      ['/digital-marketing-for-manufacturers', '/work#manufacturing'],
      ['/digital-marketing-for-b2b-business', '/work#manufacturing'],
      ['/digital-marketing-for-institute', '/work#education'],
      ['/digital-marketing-for-real-estate', '/work#real-estate'],
      ['/digital-marketing-for-consultants', '/work#consulting'],
    ];
    return routes.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
