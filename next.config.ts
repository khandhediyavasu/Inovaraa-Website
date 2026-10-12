import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Leadership profile URLs changed when the surnames were updated
  async redirects() {
    return [
      { source: '/team/tejas-daraniya', destination: '/team/tejas-thakkar', permanent: true },
      { source: '/team/vasu-khandhediya', destination: '/team/vasu-thakkar', permanent: true },
    ];
  },
};

export default nextConfig;
