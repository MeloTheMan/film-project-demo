import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FilmCard from '@/components/FilmCard';
import articlesData from '@/data/articles.json';
import filmsData from '@/data/films.json';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Films liés
  const relatedFilms = filmsData.filter((film) =>
    article.relatedFilms?.includes(film.id)
  );

  const formattedDate = new Date(article.publishedDate).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // JSON-LD pour l'article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': article.category === 'Interview' ? 'NewsArticle' : 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: {
      '@type': 'Person',
      name: article.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jean-Pierre Bekolo Films',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${article.slug}`,
    },
    keywords: article.tags.join(', '),
    articleSection: article.category,
    wordCount: article.content.split(' ').length,
    inLanguage: 'fr',
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <article className="container mx-auto px-4 py-20">
        {/* Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="mb-6">
            <span className="bg-accent-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
              {article.category}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-gray-400">
            <span>Par {article.author.name}</span>
            <span>•</span>
            <time dateTime={article.publishedDate}>{formattedDate}</time>
            <span>•</span>
            <span>{article.readTime} min de lecture</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-12 max-w-6xl mx-auto">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => {
              // Détection des titres markdown
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                const title = paragraph.replace(/\*\*/g, '');
                return (
                  <h2 key={index} className="font-display text-2xl font-bold mt-12 mb-6">
                    {title}
                  </h2>
                );
              }
              
              return (
                <p key={index} className="text-gray-300 leading-relaxed mb-6">
                  {paragraph.split(/(\*[^*]+\*)/).map((part, i) => {
                    if (part.startsWith('*') && part.endsWith('*')) {
                      return <em key={i}>{part.slice(1, -1)}</em>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-sm text-gray-400 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Films */}
        {relatedFilms.length > 0 && (
          <section className="mt-20 max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-8">Films liés</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedFilms.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <div className="mt-20 max-w-3xl mx-auto">
          <Link
            href="/articles"
            className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors"
          >
            ← Retour aux articles
          </Link>
        </div>
      </article>
    </>
  );
}
