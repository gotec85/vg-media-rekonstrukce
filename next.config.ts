import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sluzby",
        destination: "/#co-delame",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
