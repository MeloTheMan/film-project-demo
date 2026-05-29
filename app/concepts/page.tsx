import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import conceptsData from '@/data/concepts.json';

export const metadata: Metadata = {
  title: 'Concepts',
  description: 'Explorez les concepts clés du cinéma africain : afrofuturisme, histoire du cinéma africain, et plus encore.',
  keywords: ['Concepts', 'Afrofuturisme', 'Cinéma Africain', 'Théorie du Cinéma'],
  openGraph: {
    title: 'Concepts | Jean-Pierre Bekolo',
    description: 'Explorez les concepts clés du cinéma africain',
    type: 'website',
  },
};

export default function ConceptsPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Concepts - Cinéma Africain',
    description: 'Concepts clés pour comprendre le cinéma africain et l\'afrofuturisme',
    inLanguage: 'fr',
  };

  return (
    <>
      <JsonLd data={collectionJsonLd} />

      <div className="container mx-auto px-4 py-20">
        <header className="mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Concepts
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Découvrez les concepts fondamentaux qui façonnent le cinéma africain contemporain. 
            De l'afrofuturisme à l'histoire du cinéma africain, explorez les idées qui inspirent 
            et définissent ce mouvement artistique.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {conceptsData.map((concept) => (
            <Link
              key={concept.id}
              href={`/concepts/${concept.slug}`}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-accent-500 transition-all"
            >
              <div className="relative aspect-[16/9] bg-gray-800">
                <Image
                  src={concept.featuredImage}
                  alt={concept.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-8">
                <h2 className="font-display text-3xl font-bold mb-4 group-hover:text-accent-400 transition-colors">
                  {concept.title}
                </h2>
                
                <p className="text-gray-400 mb-4 italic">
                  {concept.definition}
                </p>
                
                <p className="text-gray-300 line-clamp-3">
                  {concept.description}
                </p>
                
                <div className="mt-6 text-accent-400 group-hover:text-accent-300 transition-colors">
                  En savoir plus →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
