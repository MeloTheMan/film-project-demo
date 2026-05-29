import Link from 'next/link';
import Image from 'next/image';

interface FilmCardProps {
  film: {
    id: string;
    title: string;
    tagline: string;
    year: number;
    poster: string;
    genre: string[];
    synopsis: {
      short: string;
    };
  };
}

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <Link href={`/films/${film.id}`} className="group">
      <article className="bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-accent-500 transition-all">
        <div className="relative aspect-[2/3] bg-gray-800">
          <Image
            src={film.poster}
            alt={`Affiche de ${film.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span>{film.year}</span>
            <span>•</span>
            <span>{film.genre[0]}</span>
          </div>
          
          <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent-400 transition-colors">
            {film.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-3 italic">
            {film.tagline}
          </p>
          
          <p className="text-gray-300 text-sm line-clamp-3">
            {film.synopsis.short}
          </p>
        </div>
      </article>
    </Link>
  );
}
