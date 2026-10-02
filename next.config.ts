import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'genshin.jmp.blue' },
      { protocol: 'https', hostname: 'enka.network' },
      { protocol: 'https', hostname: 'api.ambr.top' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'fastly.jsdelivr.net' },
    ],
  },
};

export default nextConfig;
