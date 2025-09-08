import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "image.tmdb.org",
      pathname: "/t/p/**", // optional: biar lebih spesifik
    },
  ],
},

};

export default nextConfig;
