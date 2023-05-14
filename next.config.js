/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DALL_E_API_KEY: process.env.DALL_E_API_KEY,
    OPEN_AI_ORGANISATION: process.env.OPEN_AI_ORGANISATION,

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,

    NEXT_PUBLIC_STRIPE: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'pbs.twimg.com',
      'oaidalleapiprodscus.blob.core.windows.net',
      'images.clerk.dev',
    ],
  },
};

module.exports = nextConfig;
