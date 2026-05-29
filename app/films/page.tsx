import { Metadata } from 'next';
import FilmCard from '@/components/FilmCard';
import JsonLd from '@/components/JsonLd';
import filmsData from '@/data/films.json';

export const metadata: Metadata = {
  title: 'Films',
  description: 'Découvrez la filmographie complète de Jean-Pierre Bekolo, du pionnier Quartier Mozart au récent Le Goût du Vin de Palme.',
  keywords: ['Films', 'Jean-Pierre Bekolo', 'Cinéma Africain', 'Afrofuturisme', 'Filmographie'],
  openGraph: {
    title: 'Films | Jean-Pierre Bekolo',
    description: 'Découvrez la filmographie complète de Jean-Pierre Bekolo',
    type: 'website',
  },
};

export default function FilmsPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Films de Jean-Pierre Bekolo',
    description: 'Filmographie complète du cinéaste camerounais Jean-Pierre Bekolo',
    inLanguage: 'fr',
    numberOfItems: filmsData.length,
  };

  return (
    <>
      <JsonLd data={collectionJsonLd} />
      
      <div className="container mx-auto px-4 py-20">
        <header className="mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Filmographie
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Explorez l'univers cinématographique de Jean-Pierre Bekolo, du pionnier <em>Quartier Mozart</em> (1992) 
            au récent <em>Le Goût du Vin de Palme</em> (2024). Chaque film est une exploration audacieuse 
            des thèmes de l'identité, du pouvoir et de la mémoire.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filmsData.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </div>
    </>
  );
}
