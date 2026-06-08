import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.grillzoneoriginal.co.uk"
          }
        ],
        destination: "https://grillzoneoriginal.co.uk/:path*",
        permanent: true
      }
    ];
  },
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
