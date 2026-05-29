import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FilmCard from '@/components/FilmCard';
import ArticleCard from '@/components/ArticleCard';
import conceptsData from '@/data/concepts.json';
import filmsData from '@/data/films.json';
import articlesData from '@/data/articles.json';

interface ConceptPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return conceptsData.map((concept) => ({
    slug: concept.slug,
  }));
}

export async function generateMetadata({ params }: ConceptPageProps): Promise<Metadata> {
  const { slug } = await params;
  const concept = conceptsData.find((c) => c.slug === slug);

  if (!concept) {
    return {
      title: 'Concept non trouvé',
    };
  }

  return {
    title: concept.title,
    description: concept.definition,
    keywords: [concept.title, 'Cinéma Africain', 'Théorie du Cinéma'],
    openGraph: {
      title: concept.title,
      description: concept.definition,
      type: 'article',
      images: [
        {
          url: concept.featuredImage,
          width: 1200,
          height: 630,
          alt: concept.title,
        },
      ],
    },
  };
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = conceptsData.find((c) => c.slug === slug);

  if (!concept) {
    notFound();
  }

  // Films liés
  const relatedFilms = filmsData.filter((film) =>
    concept.relatedFilms?.includes(film.id)
  );

  // Articles liés
  const relatedArticles = articlesData.filter((article) =>
    concept.relatedArticles?.includes(article.id)
  );

  // JSON-LD pour le concept
  const conceptJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: concept.title,
    description: concept.definition,
    image: concept.featuredImage,
    author: {
      '@type': 'Organization',
      name: 'Jean-Pierre Bekolo Films',
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
      '@id': `${process.env.NEXT_PUBLIC_BASE_URL}/concepts/${concept.slug}`,
    },
    inLanguage: 'fr',
  };

  return (
    <>
      <JsonLd data={conceptJsonLd} />

      <article className="container mx-auto px-4 py-20">
        {/* Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            {concept.title}
          </h1>

          <p className="text-2xl text-gray-400 italic mb-8">
            {concept.definition}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-12 max-w-6xl mx-auto">
          <Image
            src={concept.featuredImage}
            alt={concept.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Description */}
          <section>
            <div className="prose prose-invert prose-lg max-w-none">
              {concept.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* History */}
          {concept.history && (
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="font-display text-3xl font-bold mb-6">Histoire</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                {concept.history.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          )}

          {/* Key Figures */}
          {concept.keyFigures && concept.keyFigures.length > 0 && (
            <section>
              <h2 className="font-display text-3xl font-bold mb-6">Figures Clés</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {concept.keyFigures.map((figure, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-display text-xl font-bold mb-2">{figure.name}</h3>
                    <div className="text-accent-400 text-sm mb-3">{figure.field}</div>
                    <p className="text-gray-300 text-sm">{figure.contribution}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Resources */}
          {concept.resources && concept.resources.length > 0 && (
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="font-display text-3xl font-bold mb-6">Ressources</h2>
              <ul className="space-y-4">
                {concept.resources.map((resource, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-accent-400 text-xl">📚</span>
                    <div>
                      <div className="font-semibold">{resource.title}</div>
                      <div className="text-gray-400 text-sm">
                        {resource.author} • {resource.type} • {resource.year}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
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

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-8">Articles liés</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <div className="mt-20 max-w-3xl mx-auto">
          <Link
            href="/concepts"
            className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors"
          >
            ← Retour aux concepts
          </Link>
        </div>
      </article>
    </>
  );
}
