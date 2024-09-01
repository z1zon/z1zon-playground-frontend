const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  swcMinify: true,
  experimental: {
    esmExternals: true,
    typedRoutes: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: "@import '/src/styles/main';",
  },
};

module.exports = nextConfig;
