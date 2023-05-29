/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DALL_E_API_KEY: process.env.DALL_E_API_KEY,
    OPEN_AI_ORGANISATION: process.env.OPEN_AI_ORGANISATION,

    DATABASE_URL: process.env.DATABASE_URL,

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLERK_WEBHOOK_ENDPOINT: process.env.CLERK_WEBHOOK_ENDPOINT,
    CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,

    NEXT_PUBLIC_STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    CREDITS_PRODUCT_ID: process.env.CREDITS_PRODUCT_ID,
    STRIPE_WEBHOOK_SIGNING_SECRET: process.env.STRIPE_WEBHOOK_SIGNING_SECRET,
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
