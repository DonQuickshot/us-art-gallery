import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Removed the old 'domains' fallback line to clear the warning
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
