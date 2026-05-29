# 🗺️ Plan du Site

Carte complète de toutes les pages et URLs du site.

## 🏠 Pages Principales

### Page d'Accueil
- **URL** : `/`
- **Type** : Statique
- **Contenu** : Hero, films vedettes, réalisateur, articles
- **JSON-LD** : WebSite, Organization

### Films
- **URL** : `/films`
- **Type** : Statique
- **Contenu** : Liste de tous les films
- **JSON-LD** : CollectionPage

### Articles
- **URL** : `/articles`
- **Type** : Statique
- **Contenu** : Liste des articles et essais
- **JSON-LD** : Blog

### Concepts
- **URL** : `/concepts`
- **Type** : Statique
- **Contenu** : Afrofuturisme, Cinéma Africain
- **JSON-LD** : CollectionPage

### Événements
- **URL** : `/evenements`
- **Type** : Statique
- **Contenu** : Projections, festivals, rencontres
- **JSON-LD** : ItemList (Events)

## 🎬 Pages Films (Dynamiques)

### Le Goût du Vin de Palme
- **URL** : `/films/le-gout-du-vin-de-palme`
- **Type** : SSG (Static Site Generation)
- **Contenu** :
  - Synopsis complet
  - Note du réalisateur
  - Galerie photos
  - Presse et critiques
  - Festivals et prix
  - Distribution et équipe
  - Articles liés
- **JSON-LD** : Movie, VideoObject, Person, Review

### Quartier Mozart
- **URL** : `/films/quartier-mozart`
- **Type** : SSG
- **Contenu** : Identique à ci-dessus
- **JSON-LD** : Movie, Person, Review

## 📝 Pages Articles (Dynamiques)

### L'Afrofuturisme dans le Cinéma Africain
- **URL** : `/articles/afrofuturisme-cinema-africain`
- **Type** : SSG
- **Catégorie** : Essai
- **Contenu** : Article complet + films liés
- **JSON-LD** : BlogPosting

### Entretien avec Jean-Pierre Bekolo
- **URL** : `/articles/entretien-bekolo-2024`
- **Type** : SSG
- **Catégorie** : Interview
- **Contenu** : Interview complète + films liés
- **JSON-LD** : NewsArticle

### Le Cinéma Africain des Années 90
- **URL** : `/articles/cinema-africain-annees-90`
- **Type** : SSG
- **Catégorie** : Histoire
- **Contenu** : Article historique + films liés
- **JSON-LD** : BlogPosting

## 💡 Pages Concepts (Dynamiques)

### Afrofuturisme
- **URL** : `/concepts/afrofuturisme`
- **Type** : SSG
- **Contenu** :
  - Définition
  - Description détaillée
  - Histoire du mouvement
  - Figures clés
  - Ressources
  - Films liés
  - Articles liés
- **JSON-LD** : Article

### Cinéma Africain
- **URL** : `/concepts/cinema-africain`
- **Type** : SSG
- **Contenu** : Identique à ci-dessus
- **JSON-LD** : Article

## 👤 Page Réalisateur (Dynamique)

### Jean-Pierre Bekolo
- **URL** : `/realisateur/jean-pierre-bekolo`
- **Type** : SSG
- **Contenu** :
  - Biographie complète
  - Photo
  - Informations personnelles
  - Filmographie chronologique
  - Prix et distinctions
  - Citations
  - Films (cartes)
  - Liens sociaux
- **JSON-LD** : Person

## 🤖 Pages Système

### Sitemap
- **URL** : `/sitemap.xml`
- **Type** : Généré automatiquement
- **Contenu** : Toutes les URLs du site
- **Format** : XML

### Robots
- **URL** : `/robots.txt`
- **Type** : Généré automatiquement
- **Contenu** : Directives pour robots
- **Bots autorisés** : GPTBot, ClaudeBot, Google, Bing, etc.

## 🔗 Maillage Interne

### Navigation Principale (Header)
```
Accueil → Films → Réalisateur → Concepts → Articles → Événements
```

### Liens Contextuels

#### Depuis Films
```
Film → Réalisateur
Film → Articles liés
Film → Concepts (via thèmes)
```

#### Depuis Articles
```
Article → Films liés
Article → Concepts (via tags)
```

#### Depuis Concepts
```
Concept → Films liés
Concept → Articles liés
Concept → Figures clés
```

#### Depuis Réalisateur
```
Réalisateur → Films
Réalisateur → Filmographie
```

### Footer
```
Navigation secondaire
Concepts
Réseaux sociaux
```

## 📊 Statistiques

- **Total pages** : 18
- **Pages statiques** : 5
- **Pages dynamiques (SSG)** : 13
- **Pages système** : 2

### Répartition
- Films : 2 pages
- Articles : 3 pages
- Concepts : 2 pages
- Réalisateurs : 1 page
- Autres : 5 pages
- Système : 2 pages

## 🎯 URLs par Priorité SEO

### Priorité 1.0 (Maximale)
- `/` - Page d'accueil

### Priorité 0.9 (Très haute)
- `/films` - Liste films
- `/films/le-gout-du-vin-de-palme` - Film principal
- `/films/quartier-mozart` - Film historique
- `/realisateur/jean-pierre-bekolo` - Réalisateur

### Priorité 0.8 (Haute)
- `/articles` - Liste articles
- `/articles/afrofuturisme-cinema-africain` - Article principal
- `/articles/entretien-bekolo-2024` - Interview
- `/articles/cinema-africain-annees-90` - Article historique

### Priorité 0.7 (Moyenne-haute)
- `/concepts` - Liste concepts
- `/concepts/afrofuturisme` - Concept principal
- `/concepts/cinema-africain` - Concept secondaire
- `/evenements` - Événements

## 🔍 URLs pour Tests

### Tests SEO
```bash
# Sitemap
http://localhost:3000/sitemap.xml

# Robots
http://localhost:3000/robots.txt

# Page d'accueil
http://localhost:3000/

# Film
http://localhost:3000/films/le-gout-du-vin-de-palme

# Article
http://localhost:3000/articles/afrofuturisme-cinema-africain

# Concept
http://localhost:3000/concepts/afrofuturisme

# Réalisateur
http://localhost:3000/realisateur/jean-pierre-bekolo
```

### Tests Open Graph
Testez ces URLs sur https://www.opengraph.xyz/ :
- Page d'accueil
- Page film
- Page article
- Page réalisateur

### Tests Mobile
Testez ces URLs sur https://search.google.com/test/mobile-friendly :
- Page d'accueil
- Page film
- Page article

### Tests Performance
Testez ces URLs sur https://pagespeed.web.dev/ :
- Page d'accueil
- Page film (avec images)
- Page article

## 🌐 URLs en Production

Après déploiement sur Vercel, remplacez `localhost:3000` par votre domaine :

```
https://votre-site.vercel.app/
https://votre-site.vercel.app/films
https://votre-site.vercel.app/films/le-gout-du-vin-de-palme
https://votre-site.vercel.app/articles
https://votre-site.vercel.app/articles/afrofuturisme-cinema-africain
https://votre-site.vercel.app/concepts
https://votre-site.vercel.app/concepts/afrofuturisme
https://votre-site.vercel.app/realisateur/jean-pierre-bekolo
https://votre-site.vercel.app/evenements
https://votre-site.vercel.app/sitemap.xml
https://votre-site.vercel.app/robots.txt
```

## 📱 URLs Partagées sur Réseaux Sociaux

Ces URLs sont optimisées pour le partage :

### Facebook / LinkedIn
- Page d'accueil
- Pages films (avec affiche)
- Pages articles (avec image featured)

### Twitter
- Page d'accueil
- Pages films
- Pages articles
- Citations du réalisateur

### WhatsApp
- Pages films (aperçu avec affiche)
- Pages articles (aperçu avec image)

## 🤖 URLs pour Indexation IA

Ces pages sont particulièrement importantes pour ChatGPT, Claude, etc. :

### Pages de Contexte
- `/realisateur/jean-pierre-bekolo` - Qui est-il ?
- `/concepts/afrofuturisme` - Qu'est-ce que c'est ?
- `/concepts/cinema-africain` - Histoire et contexte
- `/articles/*` - Analyses et réflexions

### Pages de Données
- `/films/*` - Informations structurées sur les films
- `/evenements` - Événements à venir

## 🗂️ Structure Hiérarchique

```
/
├── films/
│   ├── le-gout-du-vin-de-palme
│   └── quartier-mozart
├── articles/
│   ├── afrofuturisme-cinema-africain
│   ├── entretien-bekolo-2024
│   └── cinema-africain-annees-90
├── concepts/
│   ├── afrofuturisme
│   └── cinema-africain
├── realisateur/
│   └── jean-pierre-bekolo
├── evenements
├── sitemap.xml
└── robots.txt
```

## ✅ Checklist URLs

Avant déploiement, vérifiez que toutes ces URLs fonctionnent :

- [ ] `/`
- [ ] `/films`
- [ ] `/films/le-gout-du-vin-de-palme`
- [ ] `/films/quartier-mozart`
- [ ] `/articles`
- [ ] `/articles/afrofuturisme-cinema-africain`
- [ ] `/articles/entretien-bekolo-2024`
- [ ] `/articles/cinema-africain-annees-90`
- [ ] `/concepts`
- [ ] `/concepts/afrofuturisme`
- [ ] `/concepts/cinema-africain`
- [ ] `/realisateur/jean-pierre-bekolo`
- [ ] `/evenements`
- [ ] `/sitemap.xml`
- [ ] `/robots.txt`

## 🎯 URLs à Soumettre à Google

Après déploiement, soumettez ces URLs prioritaires à Google Search Console :

1. Page d'accueil
2. Page films principale
3. Film vedette (Le Goût du Vin de Palme)
4. Page réalisateur
5. Article principal (Afrofuturisme)
6. Sitemap.xml

---

**Total : 18 pages + 2 fichiers système = 20 URLs**
