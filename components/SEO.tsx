import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'movie' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  image = '/images/og-default.jpg',
  url = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords = [],
}: SEOProps): Metadata {
  const siteName = 'Jean-Pierre Bekolo - Cinéma Afrofuturiste';
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://film-project-demo.vercel.app';
  const fullUrl = `${baseUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type: type as any,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: '@jpbekolo',
    },
    alternates: {
      canonical: fullUrl,
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
  };
}
