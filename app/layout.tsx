import type { Metadata } from 'next';
import { Geist_Mono, Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kitisak Chaengsiri',
  description:
    'Over 10 years architecting scalable enterprise systems and platforms. Proven track record delivering high-impact solutions for international brands like the J.League.',
  keywords: ['Kitisak Chaengsiri', 'Full-Stack Developer', 'Agentic AI Engineer', 'RAG Specialist'],
  authors: [{ name: 'Kitisak Chaengsiri' }],
  openGraph: {
    title: 'Kitisak Chaengsiri',
    description:
      'Over 10 years architecting scalable enterprise systems and platforms. Proven track record delivering high-impact solutions for international brands like the J.League.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${geistMono.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
