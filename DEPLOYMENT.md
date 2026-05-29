# Guide de Déploiement sur Vercel

Ce guide vous accompagne pas à pas pour déployer votre site sur Vercel.

## 📋 Prérequis

- Compte GitHub (gratuit)
- Compte Vercel (gratuit)
- Git installé sur votre machine

## 🚀 Étape 1 : Préparer le Projet

### 1.1 Vérifier que tout fonctionne localement

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrez http://localhost:3000 et vérifiez que le site fonctionne.

### 1.2 Créer les images

Avant de déployer, vous devez ajouter de vraies images dans `/public/images/`.

**Option 1 : Utiliser des placeholders temporaires**
```bash
node scripts/generate-placeholders.js
```

**Option 2 : Ajouter vos propres images**
Consultez `/public/images/placeholder.txt` pour la liste complète.

### 1.3 Build de test

```bash
npm run build
```

Si le build réussit, vous êtes prêt pour le déploiement !

## 📦 Étape 2 : Pousser sur GitHub

### 2.1 Initialiser Git (si pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit - Site film afrofuturiste"
```

### 2.2 Créer un repo sur GitHub

1. Allez sur https://github.com/new
2. Nommez votre repo (ex: `film-bekolo-site`)
3. Ne cochez rien (pas de README, .gitignore, etc.)
4. Cliquez sur "Create repository"

### 2.3 Pousser le code

```bash
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

## 🌐 Étape 3 : Déployer sur Vercel

### 3.1 Créer un compte Vercel

1. Allez sur https://vercel.com/signup
2. Connectez-vous avec GitHub
3. Autorisez Vercel à accéder à vos repos

### 3.2 Importer le projet

1. Cliquez sur "Add New..." → "Project"
2. Sélectionnez votre repo GitHub
3. Cliquez sur "Import"

### 3.3 Configurer le projet

**Framework Preset:** Next.js (détecté automatiquement)

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Environment Variables:**
Ajoutez cette variable :
```
NEXT_PUBLIC_BASE_URL=https://votre-projet.vercel.app
```

Note: Vous pourrez mettre à jour cette URL après le premier déploiement.

### 3.4 Déployer

1. Cliquez sur "Deploy"
2. Attendez 2-3 minutes
3. Votre site est en ligne ! 🎉

## 🔧 Étape 4 : Configuration Post-Déploiement

### 4.1 Mettre à jour l'URL de base

1. Copiez l'URL de votre site (ex: `https://film-bekolo-site.vercel.app`)
2. Dans Vercel, allez dans Settings → Environment Variables
3. Modifiez `NEXT_PUBLIC_BASE_URL` avec votre vraie URL
4. Redéployez (Deployments → ... → Redeploy)

### 4.2 Configurer un domaine personnalisé (optionnel)

1. Dans Vercel, allez dans Settings → Domains
2. Ajoutez votre domaine (ex: `jeanpierrebekolo.com`)
3. Suivez les instructions pour configurer les DNS
4. Mettez à jour `NEXT_PUBLIC_BASE_URL` avec votre domaine

### 4.3 Activer les optimisations

Dans Settings → General :
- ✅ Automatically optimize images
- ✅ Enable Web Analytics (optionnel)
- ✅ Enable Speed Insights (optionnel)

## 📊 Étape 5 : Soumettre aux Moteurs de Recherche

### 5.1 Google Search Console

1. Allez sur https://search.google.com/search-console
2. Ajoutez votre propriété (URL de votre site)
3. Vérifiez avec la méthode HTML tag :
   - Copiez le code de vérification
   - Ajoutez-le dans `app/layout.tsx` dans `verification.google`
   - Redéployez
4. Soumettez votre sitemap : `https://votre-site.com/sitemap.xml`

### 5.2 Bing Webmaster Tools

1. Allez sur https://www.bing.com/webmasters
2. Ajoutez votre site
3. Soumettez votre sitemap

### 5.3 Vérifier l'indexation

Après quelques jours, vérifiez :
```
site:votre-domaine.com
```
dans Google pour voir les pages indexées.

## 🧪 Étape 6 : Tests et Validation

### 6.1 Tester le SEO

**PageSpeed Insights**
https://pagespeed.web.dev/
- Entrez votre URL
- Visez 90+ sur mobile et desktop

**Mobile-Friendly Test**
https://search.google.com/test/mobile-friendly
- Vérifiez que le site est mobile-friendly

**Rich Results Test**
https://search.google.com/test/rich-results
- Testez vos pages pour valider le JSON-LD

### 6.2 Tester Open Graph

**OpenGraph.xyz**
https://www.opengraph.xyz/
- Testez comment vos pages apparaissent sur les réseaux sociaux

**Twitter Card Validator**
https://cards-dev.twitter.com/validator
- Testez vos Twitter Cards

### 6.3 Tester la Performance

Dans Vercel :
1. Allez dans Analytics
2. Vérifiez les Core Web Vitals
3. Optimisez si nécessaire

## 🔄 Étape 7 : Mises à Jour

### Déploiement automatique

Chaque fois que vous poussez sur GitHub, Vercel redéploie automatiquement :

```bash
# Faire des modifications
git add .
git commit -m "Description des changements"
git push
```

### Déploiement manuel

Via Vercel CLI :
```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📈 Étape 8 : Monitoring

### Analytics

Activez Vercel Analytics pour suivre :
- Nombre de visiteurs
- Pages populaires
- Performance
- Core Web Vitals

### Logs

Dans Vercel → Deployments → Logs
- Vérifiez les erreurs
- Surveillez les performances

## 🆘 Dépannage

### Le build échoue

1. Vérifiez les logs dans Vercel
2. Testez `npm run build` localement
3. Vérifiez que toutes les dépendances sont dans `package.json`

### Images ne s'affichent pas

1. Vérifiez que les images existent dans `/public/images/`
2. Vérifiez les chemins dans les fichiers JSON
3. Utilisez des URLs absolues si nécessaire

### Erreur 404 sur les pages

1. Vérifiez que les fichiers existent dans `/app/`
2. Vérifiez les noms de fichiers (sensibles à la casse)
3. Redéployez

### Variables d'environnement

1. Vérifiez qu'elles sont bien définies dans Vercel
2. Redéployez après modification
3. Utilisez `NEXT_PUBLIC_` pour les variables côté client

## ✅ Checklist Finale

Avant de considérer le déploiement comme terminé :

- [ ] Site accessible et fonctionnel
- [ ] Toutes les pages se chargent correctement
- [ ] Images affichées (ou placeholders)
- [ ] Sitemap.xml accessible
- [ ] Robots.txt accessible
- [ ] Open Graph fonctionne
- [ ] Mobile responsive
- [ ] Performance > 80 sur PageSpeed
- [ ] Soumis à Google Search Console
- [ ] Soumis à Bing Webmaster
- [ ] JSON-LD validé
- [ ] Domaine personnalisé configuré (si applicable)

## 🎉 Félicitations !

Votre site est maintenant en ligne et optimisé pour :
- ✅ Google Search
- ✅ Bing
- ✅ ChatGPT et moteurs IA
- ✅ Réseaux sociaux
- ✅ Performance mobile

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Web.dev](https://web.dev/)

---

**Besoin d'aide ?** Consultez la documentation ou ouvrez une issue sur GitHub.
