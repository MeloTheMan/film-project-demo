# 🚀 Quick Start Guide

Guide rapide pour démarrer avec le site de démonstration.

## ⚡ Démarrage Rapide (5 minutes)

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer en développement

```bash
npm run dev
```

Ouvrez http://localhost:3000 dans votre navigateur.

### 3. Tester le build

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
film-project-demo/
├── app/                    # Pages Next.js
│   ├── page.tsx           # Page d'accueil
│   ├── films/             # Pages films
│   ├── articles/          # Pages articles
│   ├── concepts/          # Pages concepts
│   └── evenements/        # Page événements
├── components/            # Composants réutilisables
├── data/                  # Données JSON
│   ├── films.json
│   ├── directors.json
│   ├── articles.json
│   └── concepts.json
└── public/images/         # Images (à ajouter)
```

## 🎨 Personnalisation

### Modifier les données

Éditez les fichiers JSON dans `/data/` :

- `films.json` : Informations sur les films
- `directors.json` : Biographie du réalisateur
- `articles.json` : Articles et essais
- `concepts.json` : Concepts (afrofuturisme, etc.)

### Ajouter des images

Placez vos images dans `/public/images/` selon cette structure :

```
public/images/
├── films/
│   ├── [film-id]-poster.jpg
│   └── [film-id]-backdrop.jpg
├── directors/
│   └── [director-id].jpg
├── articles/
│   └── [article-slug].jpg
└── concepts/
    └── [concept-slug].jpg
```

### Modifier les couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  accent: {
    500: '#eab308',  // Couleur principale
    // ...
  }
}
```

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé)

1. Pusher sur GitHub
2. Connecter à Vercel
3. Déployer

[Guide détaillé →](./DEPLOYMENT.md)

### Option 2 : Autre hébergeur

```bash
npm run build
# Déployer le dossier .next/
```

## 📊 SEO

### Vérifier le SEO

Après déploiement :

1. **Sitemap** : `https://votre-site.com/sitemap.xml`
2. **Robots** : `https://votre-site.com/robots.txt`
3. **JSON-LD** : Inspecter le code source de chaque page

### Soumettre aux moteurs

1. [Google Search Console](https://search.google.com/search-console)
2. [Bing Webmaster](https://www.bing.com/webmasters)

## 🧪 Tests

### Tester localement

```bash
npm run dev
```

### Tester le build

```bash
npm run build
npm start
```

### Tester le SEO

- PageSpeed : https://pagespeed.web.dev/
- Mobile-Friendly : https://search.google.com/test/mobile-friendly
- Rich Results : https://search.google.com/test/rich-results

## 📚 Documentation Complète

- [README.md](./README.md) - Vue d'ensemble
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guide de déploiement
- [SEO-ARCHITECTURE.md](./SEO-ARCHITECTURE.md) - Architecture SEO

## ❓ FAQ

### Les images ne s'affichent pas

Ajoutez vos images dans `/public/images/` ou utilisez le script :

```bash
node scripts/generate-placeholders.js
```

### Erreur de build

Vérifiez que toutes les dépendances sont installées :

```bash
rm -rf node_modules
npm install
npm run build
```

### Modifier l'URL de base

Éditez `.env.local` :

```env
NEXT_PUBLIC_BASE_URL=https://votre-domaine.com
```

## 🎯 Prochaines Étapes

1. ✅ Ajouter vos vraies images
2. ✅ Personnaliser les données
3. ✅ Déployer sur Vercel
4. ✅ Soumettre aux moteurs de recherche
5. ✅ Configurer Google Analytics (optionnel)

## 🆘 Besoin d'aide ?

Consultez la documentation complète ou ouvrez une issue sur GitHub.

---

**Bon développement ! 🎬**
