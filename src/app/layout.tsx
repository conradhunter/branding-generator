import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import './globals.css';

export const metadata = {
  title: 'AI-Branding-Generator',
  description: 'An Branding Generator app powered by the Dall-E API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
