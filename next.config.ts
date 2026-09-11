import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sluzby",
        destination: "/#co-delame",
        permanent: true,
      },
      {
        source: "/sluzby/ai-video",
        destination: "/sluzby/ai-grafika-a-video",
        permanent: true,
      },
      {
        source: "/sluzby/bannery",
        destination: "/sluzby/ai-grafika-a-video",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
