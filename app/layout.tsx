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
  title: 'Kitisak Chaengsiri — Tech Lead from Phuket',
  description:
    'Lead Full-Stack Developer, AI & RAG Specialist, and IoT Architect building global tech from the island. 11+ years architecting scalable enterprise systems, AI agents, and IoT platforms.',
  keywords: [
    'Kitisak Chaengsiri',
    'Tech Lead',
    'Full-Stack Developer',
    'AI Specialist',
    'RAG',
    'IoT Architect',
    'Phuket',
    'Thailand',
  ],
  authors: [{ name: 'Kitisak Chaengsiri' }],
  openGraph: {
    title: 'Kitisak Chaengsiri — Tech Lead from Phuket',
    description: 'Building global tech from the island. AI, IoT, and full-stack engineering.',
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
