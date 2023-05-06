/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPEN_AI_API_KEY: process.env.DALL_E_API_KEY,
    UPLOAD_THING_KEY: process.env.UPLOAD_THING_API_KEY,
    CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'pbs.twimg.com',
      'oaidalleapiprodscus.blob.core.windows.net',
    ],
  },
};

module.exports = nextConfig;
