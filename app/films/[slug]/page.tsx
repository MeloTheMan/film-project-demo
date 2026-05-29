import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleCard from '@/components/ArticleCard';
import filmsData from '@/data/films.json';
import articlesData from '@/data/articles.json';

interface FilmPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return filmsData.map((film) => ({
    slug: film.id,
  }));
}

export async function generateMetadata({ params }: FilmPageProps): Promise<Metadata> {
  const { slug } = await params;
  const film = filmsData.find((f) => f.id === slug);

  if (!film) {
    return {
      title: 'Film non trouvé',
    };
  }

  return {
    title: film.title,
    description: film.synopsis.short,
    keywords: [...film.genre, ...film.themes, film.director.name, film.country],
    openGraph: {
      title: film.title,
      description: film.synopsis.short,
      type: 'video.movie',
      images: [
        {
          url: film.poster,
          width: 800,
          height: 1200,
          alt: `Affiche de ${film.title}`,
        },
      ],
    },
  };
}

export default async function FilmPage({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = filmsData.find((f) => f.id === slug);

  if (!film) {
    notFound();
  }

  // Articles liés
  const relatedArticles = articlesData.filter((article) =>
    film.relatedArticles?.includes(article.id)
  );

  // JSON-LD pour le film
  const movieJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: film.title,
    alternateName: film.originalTitle,
    description: film.synopsis.long,
    genre: film.genre,
    datePublished: `${film.year}`,
    inLanguage: film.language,
    countryOfOrigin: film.country,
    duration: `PT${film.duration}M`,
    director: {
      '@type': 'Person',
      name: film.director.name,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/realisateur/${film.director.slug}`,
    },
    actor: film.cast.map((actor) => ({
      '@type': 'Person',
      name: actor.name,
      roleName: actor.role,
    })),
    image: film.poster,
    trailer: film.trailer
      ? {
          '@type': 'VideoObject',
          name: `Bande-annonce de ${film.title}`,
          url: film.trailer,
          thumbnailUrl: film.poster,
        }
      : undefined,
    aggregateRating: film.press.length > 0
      ? {
          '@type': 'AggregateRating',
          ratingCount: film.press.length,
        }
      : undefined,
    review: film.press.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.date,
      reviewBody: review.quote,
      publisher: {
        '@type': 'Organization',
        name: review.outlet,
      },
    })),
  };

  return (
    <>
      <JsonLd data={movieJsonLd} />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src={film.backdrop}
            alt={film.title}
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {film.genre.map((genre) => (
                <span key={genre} className="bg-accent-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {genre}
                </span>
              ))}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
              {film.title}
            </h1>
            <p className="text-2xl text-gray-300 italic mb-6">
              {film.tagline}
            </p>
            <div className="flex flex-wrap gap-4 text-gray-400">
              <span>{film.year}</span>
              <span>•</span>
              <span>{film.duration} min</span>
              <span>•</span>
              <span>{film.country}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Synopsis */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-6">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {film.synopsis.long}
              </p>
            </section>

            {/* Director's Note */}
            {film.directorNote && (
              <section className="bg-gray-900 p-8 rounded-lg">
                <h2 className="font-display text-3xl font-bold mb-6">Note du réalisateur</h2>
                <p className="text-gray-300 leading-relaxed italic">
                  "{film.directorNote}"
                </p>
                <p className="text-gray-400 mt-4">— {film.director.name}</p>
              </section>
            )}

            {/* Gallery */}
            {film.gallery && film.gallery.length > 0 && (
              <section>
                <h2 className="font-display text-3xl font-bold mb-6">Galerie</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {film.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${film.title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Press */}
            {film.press && film.press.length > 0 && (
              <section>
                <h2 className="font-display text-3xl font-bold mb-6">Presse</h2>
                <div className="space-y-6">
                  {film.press.map((review, index) => (
                    <blockquote key={index} className="border-l-4 border-accent-500 pl-6">
                      <p className="text-gray-300 text-lg italic mb-2">
                        "{review.quote}"
                      </p>
                      <footer className="text-gray-400">
                        — {review.author}, <cite>{review.outlet}</cite>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Poster */}
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
              <Image
                src={film.poster}
                alt={`Affiche de ${film.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            {/* Info */}
            <div className="bg-gray-900 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Réalisateur</h3>
                <Link
                  href={`/realisateur/${film.director.slug}`}
                  className="text-accent-400 hover:text-accent-300 transition-colors"
                >
                  {film.director.name}
                </Link>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">Distribution</h3>
                <ul className="space-y-1">
                  {film.cast.map((actor, index) => (
                    <li key={index} className="text-sm">
                      {actor.name} <span className="text-gray-500">({actor.role})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">Thèmes</h3>
                <div className="flex flex-wrap gap-2">
                  {film.themes.map((theme) => (
                    <span key={theme} className="bg-gray-800 px-2 py-1 rounded text-xs">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Festivals */}
            {film.festivals && film.festivals.length > 0 && (
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="font-display text-xl font-bold mb-4">Festivals & Prix</h3>
                <ul className="space-y-3">
                  {film.festivals.map((festival, index) => (
                    <li key={index} className="text-sm">
                      <div className="font-semibold">{festival.name} {festival.year}</div>
                      <div className="text-gray-400">{festival.section}</div>
                      {festival.award && (
                        <div className="text-accent-400 mt-1">🏆 {festival.award}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Press Kit */}
            {film.pressKit && (
              <a
                href={film.pressKit}
                download
                className="block bg-accent-500 text-black text-center px-6 py-3 rounded-lg font-semibold hover:bg-accent-400 transition-colors"
              >
                📄 Télécharger le dossier de presse
              </a>
            )}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-3xl font-bold mb-8">Articles liés</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
