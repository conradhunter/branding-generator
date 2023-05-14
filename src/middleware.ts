import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/generate/logo',
    '/generate/slogan',
    '/generate/name',
    '/example',
  ],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
