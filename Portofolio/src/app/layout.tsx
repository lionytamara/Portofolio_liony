import React from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CustomCursor } from '../components/layout/CustomCursor';

export const metadata: Metadata = {
  title: 'Liony Tamara Lewinsky | Fresh Graduate Information Systems & Product Analyst',
  description:
    'World-class portfolio of Liony Tamara Lewinsky, a Fresh Graduate Information Systems Specialist from Del Institute of Technology specializing in Product Management, Business Analysis, Data Analysis, and UI/UX Design.',
  keywords: [
    'Fresh Graduate Portfolio',
    'Information Systems',
    'Sistem Informasi',
    'Del Institute of Technology',
    'Product Management',
    'Business Analyst',
    'Data Analyst',
    'UI/UX Designer',
    'Indonesia Tech Portfolio',
  ],
  authors: [{ name: 'Liony Tamara Lewinsky' }],
  creator: 'Liony Tamara Lewinsky',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lionytamara-portfolio.vercel.app',
    title: 'Liony Tamara Lewinsky - Portfolio Website',
    description:
      'High-impact personal portfolio of Liony Tamara Lewinsky, a Fresh Graduate Information Systems Specialist specializing in Product Analysis, Business Analysis, Data Visualization, and UI/UX Design.',
    siteName: 'Liony Tamara Lewinsky Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Liony Tamara Lewinsky Portfolio Preview',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-[#0f172a] text-[#f8fafc] antialiased selection:bg-blue-600/40 selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
