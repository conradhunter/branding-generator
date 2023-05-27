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
    '/success',
    '/api/stripe/webhook',
    '/api/clerk/add-credits',
  ],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
