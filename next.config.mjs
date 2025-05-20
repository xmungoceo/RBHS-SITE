/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'your-domain.com'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  compress: true,
};

export default nextConfig; 