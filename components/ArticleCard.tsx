import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    publishedDate: string;
    category: string;
    featuredImage: string;
    readTime: number;
    author: {
      name: string;
    };
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedDate).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/articles/${article.slug}`} className="group">
      <article className="bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-accent-500 transition-all">
        <div className="relative aspect-[16/9] bg-gray-800">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{article.readTime} min de lecture</span>
          </div>
          
          <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent-400 transition-colors">
            {article.title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="text-sm text-gray-400">
            Par {article.author.name}
          </div>
        </div>
      </article>
    </Link>
  );
}
