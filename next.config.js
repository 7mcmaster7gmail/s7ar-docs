/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx', 'md'],
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;