import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/generate/logo',
    '/generate/slogan',
    '/generate/name',
    '/example',
    '/sign-in',
    '/sign-up',
    '/success',
    '/api/clerk/add-credits',
    '/api/stripe/handle-webhook',
  ],
  afterAuth: async (auth, req) => {
    // create DB user if it doesn't exist using Clerk User ID
    const { userId } = auth;

    await fetch('http://localhost:3000/api/db/upsertUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });
  },
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
