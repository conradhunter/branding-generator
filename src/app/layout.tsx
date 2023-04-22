import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs/app-beta';

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
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
