import type { Metadata } from 'next';
import './globals.css';
import Footer from '../components/Footer';
import HashScrollHandler from '../components/HashScrollHandler';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Prateek Dental Care',
  description:
    'Prateek Dental Care offers modern dental treatments, implants, orthodontics, and preventive care in Wakad, Pune.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="font-sans text-gray-900 selection:bg-[#48b5c4]/20 selection:text-gray-900"
      >
        <div className="min-h-screen bg-white">
          <HashScrollHandler />
          <WhatsAppFloat />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
