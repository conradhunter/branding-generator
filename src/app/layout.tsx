import { Footer } from '~/components/Footer';
import './globals.css';
import Header from '~/components/header/Header';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Branding Generator AI',
  description: 'An Branding Generator app powered by the Dall-E API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey='pk_test_bm90ZWQtZ3JvdXNlLTEuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <html lang='en'>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
