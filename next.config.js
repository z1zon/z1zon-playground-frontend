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
};

module.exports = nextConfig;
