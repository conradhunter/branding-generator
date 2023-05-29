import { Footer } from '~/components/Footer';
import './globals.css';
import Header from '~/components/header/Header';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Branding Generator AI',
  description: 'An Branding Generator app powered by the OpenAI API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey='pk_live_Y2xlcmsuYnJhbmRpbmdnZW5lcmF0b3JhaS5jb20k'>
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
