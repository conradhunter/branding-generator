/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  env: {
    OPEN_AI_API_KEY: process.env.DALL_E_API_KEY,
  },
};

module.exports = nextConfig;
