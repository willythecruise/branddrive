/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Add MSW to the webpack configuration
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Ensure MSW worker is copied to the public directory
  async rewrites() {
    return [
      {
        source: '/mockServiceWorker.js',
        destination: '/mockServiceWorker.js',
      },
    ];
  },
};

module.exports = nextConfig; 