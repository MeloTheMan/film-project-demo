import { MetadataRoute } from 'next';
import filmsData from '@/data/films.json';
import articlesData from '@/data/articles.json';
import directorsData from '@/data/directors.json';
import conceptsData from '@/data/concepts.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://film-project-demo.vercel.app';

  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/films`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/concepts`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/evenements`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  // Pages de films
  const filmPages = filmsData.map((film) => ({
    url: `${baseUrl}/films/${film.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Pages d'articles
  const articlePages = articlesData.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.updatedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Pages de réalisateurs
  const directorPages = directorsData.map((director) => ({
    url: `${baseUrl}/realisateur/${director.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Pages de concepts
  const conceptPages = conceptsData.map((concept) => ({
    url: `${baseUrl}/concepts/${concept.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...filmPages,
    ...articlePages,
    ...directorPages,
    ...conceptPages,
  ];
}
