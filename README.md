# Site de Démonstration - Projet Film Afrofuturiste

Site de démonstration complet pour le projet de film de Jean-Pierre Bekolo, optimisé pour le SEO et l'indexation par les moteurs de recherche et IA.

## 🎬 À propos

Ce site est conçu comme une **machine à indexation** suivant les meilleures pratiques SEO pour :
- Google Search
- ChatGPT et moteurs IA
- Bing
- Réseaux sociaux (Open Graph)

## ✨ Fonctionnalités

### SEO & Performance
- ✅ JSON-LD structuré sur toutes les pages (Movie, Person, Article, Event)
- ✅ Meta tags optimisés (title, description, keywords)
- ✅ Open Graph pour réseaux sociaux
- ✅ Twitter Cards
- ✅ Sitemap.xml automatique
- ✅ Robots.txt optimisé pour IA
- ✅ Images optimisées (WebP, lazy loading)
- ✅ URLs propres et sémantiques
- ✅ Mobile-first responsive
- ✅ Performance optimale (Next.js 14)

### Structure du Site
- 🏠 **Page d'accueil** : Hero, films vedettes, articles
- 🎥 **Films** : Pages détaillées avec synopsis, galerie, presse, festivals
- 👤 **Réalisateur** : Biographie, filmographie, citations, prix
- 📝 **Articles** : Essais, interviews, analyses
- 💡 **Concepts** : Afrofuturisme, cinéma africain
- 📅 **Événements** : Projections, festivals, rencontres

### Maillage Interne
- Liens entre films, articles, concepts
- Navigation contextuelle
- Breadcrumbs
- Articles et films liés

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start
```

## 📁 Structure du Projet

```
film-project-demo/
├── app/                          # Pages Next.js App Router
│   ├── layout.tsx               # Layout principal avec SEO
│   ├── page.tsx                 # Page d'accueil
│   ├── films/                   # Pages films
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── realisateur/             # Pages réalisateur
│   │   └── [slug]/page.tsx
│   ├── articles/                # Pages articles
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── concepts/                # Pages concepts
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── evenements/              # Page événements
│   │   └── page.tsx
│   ├── sitemap.ts               # Génération sitemap
│   └── robots.ts                # Génération robots.txt
├── components/                   # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── JsonLd.tsx               # Composant JSON-LD
│   ├── SEO.tsx                  # Utilitaires SEO
│   ├── FilmCard.tsx
│   └── ArticleCard.tsx
├── data/                         # Données JSON
│   ├── films.json
│   ├── directors.json
│   ├── articles.json
│   └── concepts.json
└── public/                       # Assets statiques
    └── images/
```

## 🎨 Technologies

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique
- **Tailwind CSS** : Styling utilitaire
- **JSON-LD** : Structured data pour SEO
- **Vercel** : Hébergement optimisé

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_BASE_URL=https://votre-domaine.com
```

### Google Search Console

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter votre propriété
3. Vérifier avec le code dans `app/layout.tsx`
4. Soumettre le sitemap : `https://votre-domaine.com/sitemap.xml`

## 📊 JSON-LD Implémenté

### Pages Films
- `Movie` : Informations complètes du film
- `VideoObject` : Bande-annonce
- `Person` : Réalisateur et acteurs
- `Review` : Critiques presse
- `Event` : Festivals

### Pages Réalisateur
- `Person` : Biographie complète
- `Organization` : Production

### Pages Articles
- `Article` / `BlogPosting` : Contenu éditorial
- `NewsArticle` : Interviews

### Pages Concepts
- `Article` : Définitions et explications

### Page Événements
- `Event` : Projections et rencontres

## 🌐 Déploiement sur Vercel

### Méthode 1 : Via GitHub

1. Pusher le code sur GitHub
2. Connecter le repo à Vercel
3. Déployer automatiquement

### Méthode 2 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration Vercel

Dans les settings du projet :
- Ajouter `NEXT_PUBLIC_BASE_URL` dans Environment Variables
- Activer les optimisations d'images
- Configurer le domaine personnalisé

## 📈 Optimisations SEO

### Checklist Post-Déploiement

- [ ] Vérifier sitemap.xml accessible
- [ ] Vérifier robots.txt accessible
- [ ] Soumettre sitemap à Google Search Console
- [ ] Soumettre sitemap à Bing Webmaster Tools
- [ ] Tester Open Graph avec [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Tester Twitter Cards avec [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Tester performance avec [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Tester mobile avec [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Valider JSON-LD avec [Schema Markup Validator](https://validator.schema.org/)

## 🎯 Prochaines Étapes

### Phase 1 - Contenu
- [ ] Ajouter vraies images (remplacer placeholders)
- [ ] Compléter les données films
- [ ] Ajouter plus d'articles
- [ ] Créer pages FAQ

### Phase 2 - Fonctionnalités
- [ ] Multilingue (FR/EN)
- [ ] Newsletter
- [ ] Recherche
- [ ] Filtres films

### Phase 3 - Analytics
- [ ] Google Analytics 4
- [ ] Suivi conversions
- [ ] Heatmaps
- [ ] A/B testing

## 📝 Licence

Ce projet est un site de démonstration pour illustrer les bonnes pratiques SEO.

## 🤝 Contact

Pour toute question sur l'implémentation SEO ou les fonctionnalités du site.

---

**Fait avec ❤️ pour le cinéma afrofuturiste**
