# Architecture SEO du Site

Ce document détaille toutes les optimisations SEO implémentées dans le site, conformément au guide "Guide Boost Pages Seo Film Project Fr.md".

## 🎯 Objectif

Transformer le site en **MACHINE À INDEXATION** pour :
- Google Search
- ChatGPT et moteurs IA (GPTBot, ClaudeBot, etc.)
- Bing
- Réseaux sociaux
- Plateformes de recherche

## 📊 1. Structured Data (JSON-LD)

### Implémentation

Chaque page importante contient du JSON-LD via le composant `<JsonLd>`.

### Pages Films (`/films/[slug]`)

```json
{
  "@context": "https://schema.org",
  "@type": "Movie",
  "name": "Le Goût du Vin de Palme",
  "director": { "@type": "Person", "name": "Jean-Pierre Bekolo" },
  "genre": ["Afrofuturisme", "Drame"],
  "datePublished": "2024",
  "actor": [...],
  "review": [...],
  "trailer": { "@type": "VideoObject" }
}
```

**Fichier:** `app/films/[slug]/page.tsx`

### Pages Réalisateur (`/realisateur/[slug]`)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jean-Pierre Bekolo",
  "birthDate": "1966-07-12",
  "jobTitle": "Réalisateur",
  "award": [...],
  "knowsAbout": ["Cinéma", "Afrofuturisme"]
}
```

**Fichier:** `app/realisateur/[slug]/page.tsx`

### Pages Articles (`/articles/[slug]`)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "L'Afrofuturisme dans le Cinéma",
  "author": { "@type": "Person" },
  "datePublished": "2024-03-15",
  "publisher": { "@type": "Organization" }
}
```

**Fichier:** `app/articles/[slug]/page.tsx`

### Pages Événements (`/evenements`)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Projection - Le Goût du Vin de Palme",
  "startDate": "2026-06-15T20:00",
  "location": { "@type": "Place" }
}
```

**Fichier:** `app/evenements/page.tsx`

## 🏷️ 2. Meta Tags

### Implémentation Globale

**Fichier:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: {
    default: "Jean-Pierre Bekolo - Cinéma Afrofuturiste",
    template: "%s | Jean-Pierre Bekolo"
  },
  description: "...",
  keywords: [...],
  authors: [...],
  openGraph: {...},
  twitter: {...},
  robots: {...}
}
```

### Meta Tags par Page

Chaque page génère ses propres meta tags via `generateMetadata()` :

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: "Titre de la page",
    description: "Description unique",
    keywords: ["mot-clé 1", "mot-clé 2"],
    openGraph: {...},
    twitter: {...}
  }
}
```

### Composant SEO Helper

**Fichier:** `components/SEO.tsx`

Fonction utilitaire pour générer des metadata cohérentes.

## 📱 3. Open Graph & Twitter Cards

### Open Graph

Implémenté sur toutes les pages :

```typescript
openGraph: {
  title: "Titre",
  description: "Description",
  type: "movie" | "article" | "profile" | "website",
  images: [{
    url: "/images/poster.jpg",
    width: 1200,
    height: 630,
    alt: "Description"
  }],
  locale: "fr_FR"
}
```

### Twitter Cards

```typescript
twitter: {
  card: "summary_large_image",
  title: "Titre",
  description: "Description",
  images: ["/images/poster.jpg"],
  creator: "@jpbekolo"
}
```

### Test

- OpenGraph.xyz : https://www.opengraph.xyz/
- Twitter Card Validator : https://cards-dev.twitter.com/validator

## 🗺️ 4. Sitemap.xml

### Génération Automatique

**Fichier:** `app/sitemap.ts`

Génère automatiquement un sitemap avec :
- Toutes les pages statiques
- Toutes les pages de films
- Toutes les pages d'articles
- Toutes les pages de réalisateurs
- Toutes les pages de concepts

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/films/le-gout-du-vin-de-palme`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    // ...
  ]
}
```

### Accès

URL : `https://votre-site.com/sitemap.xml`

### Soumission

1. Google Search Console
2. Bing Webmaster Tools

## 🤖 5. Robots.txt

### Configuration

**Fichier:** `app/robots.ts`

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
```

### Bots IA Autorisés

- ✅ GPTBot (ChatGPT)
- ✅ ClaudeBot (Claude)
- ✅ Google-Extended
- ✅ anthropic-ai
- ✅ Tous les autres bots

### Accès

URL : `https://votre-site.com/robots.txt`

## 🔗 6. URLs Propres

### Structure

```
✅ /films/le-gout-du-vin-de-palme
✅ /realisateur/jean-pierre-bekolo
✅ /articles/afrofuturisme-cinema-africain
✅ /concepts/afrofuturisme

❌ /film?id=1
❌ /page?slug=article
```

### Implémentation

Next.js App Router avec dynamic routes :
- `[slug]` pour les pages dynamiques
- `generateStaticParams()` pour le SSG

## 🕸️ 7. Maillage Interne

### Stratégie

Chaque page est connectée aux autres via :

1. **Navigation principale** (Header)
   - Films
   - Réalisateur
   - Concepts
   - Articles
   - Événements

2. **Liens contextuels**
   - Films → Réalisateur
   - Films → Articles liés
   - Articles → Films liés
   - Concepts → Films liés
   - Concepts → Articles liés

3. **Footer**
   - Navigation secondaire
   - Liens vers concepts
   - Réseaux sociaux

### Exemple de Réseau

```
Le Goût du Vin de Palme
  ↓
Jean-Pierre Bekolo
  ↓
Afrofuturisme
  ↓
Article: "L'Afrofuturisme dans le Cinéma"
  ↓
Quartier Mozart
```

## 🎨 8. Performance

### Optimisations Images

**Fichier:** `next.config.mjs`

```javascript
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
}
```

### Composant Image

Utilisation de `next/image` partout :

```tsx
<Image
  src="/images/poster.jpg"
  alt="Description"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy" // ou priority pour hero
/>
```

### Lazy Loading

- Images : automatique avec `next/image`
- Composants : via `dynamic()` si nécessaire

### Compression

- Gzip/Brotli : automatique avec Vercel
- CSS : minifié par Tailwind
- JS : minifié par Next.js

## 📱 9. Mobile First

### Responsive Design

Tailwind CSS avec breakpoints :

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Tests

- Chrome DevTools
- Vercel Mobile Preview
- Google Mobile-Friendly Test

## 🤖 10. Stratégie IA / ChatGPT

### Pages de Contexte

Créées pour servir de "mémoire" aux IA :

1. **Qui est Jean-Pierre Bekolo ?**
   - `/realisateur/jean-pierre-bekolo`
   - Biographie complète
   - Filmographie
   - Citations

2. **Qu'est-ce que l'Afrofuturisme ?**
   - `/concepts/afrofuturisme`
   - Définition
   - Histoire
   - Figures clés

3. **Histoire du Cinéma Africain**
   - `/concepts/cinema-africain`
   - Contexte historique
   - Évolution

4. **Articles & Manifestes**
   - `/articles`
   - Essais critiques
   - Interviews
   - Analyses

### Structure pour IA

- Titres hiérarchisés (H1, H2, H3)
- Paragraphes explicites
- Questions/réponses
- Données structurées
- Biographies détaillées
- Résumés clairs
- Citations
- Dates précises

## ♿ 11. Accessibilité

### Images

```tsx
<Image
  src="/poster.jpg"
  alt="Affiche du film Le Goût du Vin de Palme montrant..."
/>
```

### Hiérarchie

```tsx
<h1>Titre principal</h1>
<h2>Section</h2>
<h3>Sous-section</h3>
```

### Navigation Clavier

- Tous les liens accessibles au clavier
- Focus visible
- Skip links si nécessaire

### Contraste

- Texte blanc sur fond noir
- Accent jaune (#eab308) pour les CTA
- Ratio de contraste > 4.5:1

## 📈 12. Monitoring & Analytics

### Google Search Console

1. Vérification du site
2. Soumission du sitemap
3. Monitoring des performances
4. Correction des erreurs

### Vercel Analytics

- Nombre de visiteurs
- Pages populaires
- Core Web Vitals
- Performance

### Métriques Clés

- **LCP** (Largest Contentful Paint) : < 2.5s
- **FID** (First Input Delay) : < 100ms
- **CLS** (Cumulative Layout Shift) : < 0.1

## 🔍 13. Entités Sémantiques

### Entités Principales

Chaque entité a sa propre page :

1. **Jean-Pierre Bekolo**
   - Page : `/realisateur/jean-pierre-bekolo`
   - Type : Person
   - Liens : Films, Articles

2. **Le Goût du Vin de Palme**
   - Page : `/films/le-gout-du-vin-de-palme`
   - Type : Movie
   - Liens : Réalisateur, Concepts, Articles

3. **Afrofuturisme**
   - Page : `/concepts/afrofuturisme`
   - Type : Concept
   - Liens : Films, Articles, Figures clés

4. **Quartier Mozart**
   - Page : `/films/quartier-mozart`
   - Type : Movie
   - Liens : Réalisateur, Histoire

### Réseau Sémantique

```
Jean-Pierre Bekolo
  ├── Le Goût du Vin de Palme
  │     ├── Afrofuturisme
  │     ├── Exil
  │     └── Mémoire coloniale
  ├── Quartier Mozart
  │     ├── Genre
  │     └── Société urbaine
  └── Cinéma Africain
        ├── FESPACO
        └── Cannes
```

## ✅ Checklist SEO Complète

### Technique

- [x] JSON-LD sur toutes les pages
- [x] Meta tags optimisés
- [x] Open Graph
- [x] Twitter Cards
- [x] Sitemap.xml
- [x] Robots.txt
- [x] URLs propres
- [x] Canonical URLs
- [x] Hreflang (préparé pour multilingue)

### Contenu

- [x] Titres uniques
- [x] Descriptions uniques
- [x] Mots-clés ciblés
- [x] Contenu riche
- [x] Hiérarchie claire
- [x] Maillage interne
- [x] Alt text sur images

### Performance

- [x] Images optimisées (WebP)
- [x] Lazy loading
- [x] Compression
- [x] Minification
- [x] CDN (Vercel)
- [x] Cache optimisé

### Mobile

- [x] Responsive design
- [x] Touch-friendly
- [x] Performance mobile
- [x] Viewport configuré

### Accessibilité

- [x] Alt text
- [x] Hiérarchie H1-H6
- [x] Contraste
- [x] Navigation clavier

## 📚 Ressources

### Validation

- Schema Markup Validator : https://validator.schema.org/
- Rich Results Test : https://search.google.com/test/rich-results
- PageSpeed Insights : https://pagespeed.web.dev/
- Mobile-Friendly Test : https://search.google.com/test/mobile-friendly

### Documentation

- Schema.org : https://schema.org/
- Google Search Central : https://developers.google.com/search
- Next.js SEO : https://nextjs.org/learn/seo/introduction-to-seo
- Vercel : https://vercel.com/docs

---

**Ce site est optimisé pour être une véritable machine à indexation, suivant toutes les recommandations du guide SEO.**
