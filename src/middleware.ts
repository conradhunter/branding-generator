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
    '/api/stripe/webhook',
  ],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
