import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Classic Baking & Catering Uganda',
    template: '%s | Classic Catering Uganda',
  },
  description:
    'Professional culinary training and premium catering services in Uganda. ISO 9001:2015 certified excellence since 2017.',
  keywords: [
    'catering',
    'culinary training',
    'Uganda',
    'Kampala',
    'wedding catering',
    'corporate catering',
    'baking courses',
    'chef training',
  ],
  authors: [{ name: 'Classic Baking & Catering Uganda' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://classiccateringuganda.com',
    siteName: 'Classic Catering Uganda',
    title: 'Classic Baking & Catering Uganda',
    description:
      'Professional culinary training and premium catering services in Uganda. ISO 9001:2015 certified excellence since 2017.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Baking & Catering Uganda',
    description:
      'Professional culinary training and premium catering services in Uganda.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
