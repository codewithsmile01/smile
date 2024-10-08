/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
        hostname: "images.unsplash.com",
        hostname: "assets.aceternity.com",
        hostname: "images.unsplash.com",
      },
    ],
    domains: ["api.microlink.io"],
  },
};

export default nextConfig;
