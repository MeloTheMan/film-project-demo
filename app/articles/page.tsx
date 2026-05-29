import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import articlesData from '@/data/articles.json';

export const metadata: Metadata = {
  title: 'Articles & Essais',
  description: 'Explorez nos articles, essais et interviews sur le cinéma africain, l\'afrofuturisme et l\'œuvre de Jean-Pierre Bekolo.',
  keywords: ['Articles', 'Essais', 'Cinéma Africain', 'Afrofuturisme', 'Interviews'],
  openGraph: {
    title: 'Articles & Essais | Jean-Pierre Bekolo',
    description: 'Explorez nos articles sur le cinéma africain et l\'afrofuturisme',
    type: 'website',
  },
};

export default function ArticlesPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Articles & Essais - Jean-Pierre Bekolo',
    description: 'Articles, essais et interviews sur le cinéma africain et l\'afrofuturisme',
    inLanguage: 'fr',
    blogPost: articlesData.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      datePublished: article.publishedDate,
      author: {
        '@type': 'Person',
        name: article.author.name,
      },
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />

      <div className="container mx-auto px-4 py-20">
        <header className="mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Articles & Essais
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Explorez nos réflexions sur le cinéma africain, l'afrofuturisme, et les enjeux 
            de la représentation. Des essais critiques aux interviews exclusives.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
