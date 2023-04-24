import { Footer } from '../components/Footer';
import { NavBar } from '../components/header/NavBar';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import Header from '~/components/header/Header';

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
    <ClerkProvider>
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
