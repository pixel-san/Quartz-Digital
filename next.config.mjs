/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deployable to Cloudflare Pages, Vercel, or any static host
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // next/image optimization needs a server; export serves originals
    unoptimized: true,
  },
};

export default nextConfig;
