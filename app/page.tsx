import Link from 'next/link';
import Image from 'next/image';
import FilmCard from '@/components/FilmCard';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import filmsData from '@/data/films.json';
import articlesData from '@/data/articles.json';
import directorsData from '@/data/directors.json';

export default function Home() {
  const featuredFilm = filmsData[0];
  const director = directorsData[0];
  const recentArticles = articlesData.slice(0, 3);

  // JSON-LD pour la page d'accueil
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jean-Pierre Bekolo - Cinéma Afrofuturiste',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://film-project-demo.vercel.app',
    description: 'Site officiel du cinéaste camerounais Jean-Pierre Bekolo',
    inLanguage: 'fr',
    author: {
      '@type': 'Person',
      name: 'Jean-Pierre Bekolo',
      jobTitle: 'Réalisateur',
      nationality: 'Camerounaise',
    },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jean-Pierre Bekolo Films',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://film-project-demo.vercel.app',
    logo: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://film-project-demo.vercel.app'}/images/logo.png`,
    sameAs: [
      'https://twitter.com/jpbekolo',
      'https://instagram.com/jeanpierrebekolo',
    ],
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={organizationJsonLd} />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-10" />
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src={featuredFilm.backdrop}
            alt={featuredFilm.title}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-balance">
            Cinéma Afrofuturiste
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance">
            Explorez l'univers de Jean-Pierre Bekolo, pionnier du cinéma africain contemporain
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href={`/films/${featuredFilm.id}`}
              className="bg-accent-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-accent-400 transition-colors"
            >
              Découvrir {featuredFilm.title}
            </Link>
            <Link
              href="/films"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Tous les films
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Film Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
            <Image
              src={featuredFilm.poster}
              alt={`Affiche de ${featuredFilm.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div>
            <div className="inline-block bg-accent-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Nouveau Film
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {featuredFilm.title}
            </h2>
            <p className="text-xl text-gray-400 italic mb-6">
              {featuredFilm.tagline}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {featuredFilm.synopsis.long}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredFilm.genre.map((genre) => (
                <span key={genre} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
            <Link
              href={`/films/${featuredFilm.id}`}
              className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* About Director Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                Jean-Pierre Bekolo
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {director.biography.short}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Depuis son premier film <em>Quartier Mozart</em> en 1992, Bekolo n'a cessé de repousser les limites du cinéma africain, explorant des thèmes comme l'identité, le pouvoir, et la mémoire coloniale à travers une esthétique afrofuturiste unique.
              </p>
              <Link
                href="/realisateur/jean-pierre-bekolo"
                className="inline-block bg-accent-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-accent-400 transition-colors"
              >
                Découvrir le réalisateur →
              </Link>
            </div>
            
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={director.photo}
                alt={director.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Films Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-4xl font-bold">Filmographie</h2>
          <Link href="/films" className="text-accent-400 hover:text-accent-300 transition-colors">
            Voir tous les films →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filmsData.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl font-bold">Articles & Essais</h2>
            <Link href="/articles" className="text-accent-400 hover:text-accent-300 transition-colors">
              Tous les articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl p-12 text-center">
          <h2 className="font-display text-4xl font-bold text-black mb-4">
            Explorez l'Afrofuturisme
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez comment l'afrofuturisme redéfinit le cinéma africain et ouvre de nouvelles perspectives narratives
          </p>
          <Link
            href="/concepts/afrofuturisme"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            En savoir plus
          </Link>
        </div>
      </section>
    </>
  );
}
