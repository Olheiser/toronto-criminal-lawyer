import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // TEMPORARY: the Newmarket ad page moved to /newmarket-criminal-defence so the
      // organic city page can use /newmarket-criminal-lawyer. Keeps old ad links working.
      // Remove this when the Newmarket city page is published (/new-location newmarket).
      {
        source: '/newmarket-criminal-lawyer',
        destination: '/newmarket-criminal-defence',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
