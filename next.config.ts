import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "img.restaurantguru.com"
      },
      {
        protocol: "https",
        hostname: "img3.restaurantguru.com"
      }
    ]
  }
};

export default nextConfig;
