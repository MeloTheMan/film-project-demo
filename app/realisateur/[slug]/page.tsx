import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FilmCard from '@/components/FilmCard';
import directorsData from '@/data/directors.json';
import filmsData from '@/data/films.json';

interface DirectorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return directorsData.map((director) => ({
    slug: director.id,
  }));
}

export async function generateMetadata({ params }: DirectorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const director = directorsData.find((d) => d.id === slug);

  if (!director) {
    return {
      title: 'Réalisateur non trouvé',
    };
  }

  return {
    title: director.name,
    description: director.biography.short,
    keywords: [director.name, 'Réalisateur', 'Cinéma Africain', 'Afrofuturisme', director.nationality],
    openGraph: {
      title: director.name,
      description: director.biography.short,
      type: 'profile',
      images: [
        {
          url: director.photo,
          width: 800,
          height: 800,
          alt: director.name,
        },
      ],
    },
  };
}

export default async function DirectorPage({ params }: DirectorPageProps) {
  const { slug } = await params;
  const director = directorsData.find((d) => d.id === slug);

  if (!director) {
    notFound();
  }

  // Films du réalisateur
  const directorFilms = filmsData.filter((film) =>
    director.filmography.some((f) => f.slug === film.id)
  );

  // JSON-LD pour le réalisateur
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: director.name,
    birthDate: director.birthDate,
    birthPlace: director.birthPlace,
    nationality: director.nationality,
    jobTitle: 'Réalisateur',
    description: director.biography.long,
    image: director.photo,
    url: director.website,
    sameAs: [
      `https://twitter.com/${director.social.twitter.replace('@', '')}`,
      `https://instagram.com/${director.social.instagram.replace('@', '')}`,
    ],
    award: director.awards.map((award) => `${award.name} - ${award.festival} ${award.year}`),
    knowsAbout: ['Cinéma', 'Afrofuturisme', 'Réalisation', 'Scénario'],
  };

  return (
    <>
      <JsonLd data={personJsonLd} />

      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
              <Image
                src={director.photo}
                alt={director.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Né le</h3>
                <p>
                  {new Date(director.birthDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">Lieu de naissance</h3>
                <p>{director.birthPlace}</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">Nationalité</h3>
                <p>{director.nationality}</p>
              </div>

              {director.website && (
                <div>
                  <a
                    href={director.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 transition-colors text-sm"
                  >
                    Site web →
                  </a>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <a
                  href={`https://twitter.com/${director.social.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://instagram.com/${director.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {director.name}
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {director.biography.short}
            </p>

            <div className="prose prose-invert prose-lg max-w-none">
              {director.biography.long.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Quotes */}
        {director.quotes && director.quotes.length > 0 && (
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8">Citations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {director.quotes.map((quote, index) => (
                <blockquote
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg border-l-4 border-accent-500"
                >
                  <p className="text-gray-300 italic text-lg">"{quote}"</p>
                </blockquote>
              ))}
            </div>
          </section>
        )}

        {/* Awards */}
        {director.awards && director.awards.length > 0 && (
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8">Prix & Distinctions</h2>
            <div className="bg-gray-900 p-8 rounded-lg">
              <ul className="space-y-4">
                {director.awards.map((award, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <div className="font-semibold text-lg">{award.name}</div>
                      <div className="text-gray-400">
                        {award.festival} {award.year}
                      </div>
                      <div className="text-sm text-gray-500">{award.film}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Filmography */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold mb-8">Filmographie</h2>
          
          {/* Timeline */}
          <div className="mb-12 bg-gray-900 p-8 rounded-lg">
            <ul className="space-y-4">
              {director.filmography.map((film, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-accent-400 font-bold text-lg w-16">{film.year}</span>
                  {film.slug ? (
                    <Link
                      href={`/films/${film.slug}`}
                      className="text-lg hover:text-accent-400 transition-colors"
                    >
                      {film.title}
                    </Link>
                  ) : (
                    <span className="text-lg text-gray-400">{film.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Film Cards */}
          {directorFilms.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directorFilms.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
