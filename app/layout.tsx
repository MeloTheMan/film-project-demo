import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://film-project-demo.vercel.app'),
  title: {
    default: "Jean-Pierre Bekolo - Cinéma Afrofuturiste",
    template: "%s | Jean-Pierre Bekolo"
  },
  description: "Site officiel du cinéaste camerounais Jean-Pierre Bekolo, pionnier de l'afrofuturisme au cinéma. Découvrez ses films, articles et manifestes.",
  keywords: ["Jean-Pierre Bekolo", "Cinéma Africain", "Afrofuturisme", "Cameroun", "Le Goût du Vin de Palme", "Quartier Mozart"],
  authors: [{ name: "Jean-Pierre Bekolo" }],
  creator: "Jean-Pierre Bekolo",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'Jean-Pierre Bekolo - Cinéma Afrofuturiste',
    title: 'Jean-Pierre Bekolo - Cinéma Afrofuturiste',
    description: 'Site officiel du cinéaste camerounais Jean-Pierre Bekolo, pionnier de l\'afrofuturisme au cinéma.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Jean-Pierre Bekolo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jean-Pierre Bekolo - Cinéma Afrofuturiste',
    description: 'Site officiel du cinéaste camerounais Jean-Pierre Bekolo',
    creator: '@jpbekolo',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
