# 🛠️ Commandes Utiles

Liste de toutes les commandes utiles pour travailler avec le projet.

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Installer une dépendance spécifique
npm install [package-name]

# Installer une dépendance de développement
npm install -D [package-name]
```

## 🚀 Développement

```bash
# Lancer le serveur de développement
npm run dev

# Lancer sur un port spécifique
npm run dev -- -p 3001

# Lancer avec Turbopack (plus rapide)
npm run dev --turbo
```

## 🏗️ Build

```bash
# Build pour production
npm run build

# Lancer le serveur de production
npm start

# Build + Start
npm run build && npm start
```

## 🧹 Nettoyage

```bash
# Nettoyer le cache Next.js
rm -rf .next

# Nettoyer node_modules
rm -rf node_modules
npm install

# Nettoyer tout
rm -rf .next node_modules
npm install
```

## 🧪 Tests & Validation

```bash
# Vérifier TypeScript
npx tsc --noEmit

# Linter (si configuré)
npm run lint

# Formater le code (si Prettier configuré)
npx prettier --write .
```

## 📊 Analyse

```bash
# Analyser la taille du bundle
npm run build
npx @next/bundle-analyzer

# Vérifier les dépendances obsolètes
npm outdated

# Mettre à jour les dépendances
npm update
```

## 🌐 Déploiement

### Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer en preview
vercel

# Déployer en production
vercel --prod

# Voir les logs
vercel logs

# Lister les déploiements
vercel ls
```

### Git

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Message"

# Ajouter remote
git remote add origin [url]

# Pousser
git push -u origin main

# Pousser force (attention !)
git push -f origin main
```

## 🖼️ Images

```bash
# Générer les placeholders
node scripts/generate-placeholders.js

# Optimiser les images (si sharp installé)
npx sharp-cli resize 1200 630 -i input.jpg -o output.jpg
```

## 📝 Données

```bash
# Valider le JSON
node -e "console.log(JSON.parse(require('fs').readFileSync('data/films.json')))"

# Formater le JSON
npx prettier --write data/*.json
```

## 🔍 SEO

```bash
# Vérifier le sitemap localement
curl http://localhost:3000/sitemap.xml

# Vérifier robots.txt localement
curl http://localhost:3000/robots.txt

# Tester une page spécifique
curl http://localhost:3000/films/le-gout-du-vin-de-palme
```

## 🐛 Debug

```bash
# Lancer avec debug
NODE_OPTIONS='--inspect' npm run dev

# Voir les variables d'environnement
npm run dev -- --debug

# Verbose logging
DEBUG=* npm run dev
```

## 📦 Package Management

```bash
# Voir la version de npm
npm --version

# Voir la version de Node
node --version

# Mettre à jour npm
npm install -g npm@latest

# Nettoyer le cache npm
npm cache clean --force
```

## 🔧 Configuration

```bash
# Créer .env.local
cp .env.example .env.local

# Éditer .env.local
nano .env.local
# ou
code .env.local
```

## 📊 Performance

```bash
# Analyser les performances
npm run build
npm start

# Dans un autre terminal
npx lighthouse http://localhost:3000 --view
```

## 🌍 Multilingue (futur)

```bash
# Extraire les traductions (si i18n configuré)
npm run extract

# Compiler les traductions
npm run compile
```

## 🔐 Sécurité

```bash
# Audit de sécurité
npm audit

# Corriger automatiquement
npm audit fix

# Audit détaillé
npm audit --json
```

## 📱 Mobile Testing

```bash
# Tester sur réseau local
npm run dev -- -H 0.0.0.0

# Accéder depuis mobile
# http://[votre-ip]:3000
```

## 🎨 Tailwind

```bash
# Générer le CSS Tailwind
npx tailwindcss -i ./app/globals.css -o ./output.css

# Watch mode
npx tailwindcss -i ./app/globals.css -o ./output.css --watch
```

## 📚 Documentation

```bash
# Générer la documentation TypeScript (si configuré)
npx typedoc

# Servir la documentation
npx http-server docs
```

## 🔄 Mise à Jour

```bash
# Mettre à jour Next.js
npm install next@latest react@latest react-dom@latest

# Mettre à jour toutes les dépendances
npx npm-check-updates -u
npm install
```

## 🎯 Raccourcis Utiles

```bash
# Tout nettoyer et réinstaller
rm -rf .next node_modules && npm install

# Build rapide
npm run build

# Dev + ouvrir navigateur
npm run dev && open http://localhost:3000

# Déployer rapidement
git add . && git commit -m "Update" && git push
```

## 🆘 Dépannage

```bash
# Si le port 3000 est occupé
lsof -ti:3000 | xargs kill -9
# ou
npx kill-port 3000

# Si problème de cache
rm -rf .next
npm run dev

# Si problème de dépendances
rm -rf node_modules package-lock.json
npm install
```

## 📋 Checklist Avant Déploiement

```bash
# 1. Vérifier le build
npm run build

# 2. Tester en production localement
npm start

# 3. Vérifier TypeScript
npx tsc --noEmit

# 4. Vérifier le sitemap
curl http://localhost:3000/sitemap.xml

# 5. Vérifier robots.txt
curl http://localhost:3000/robots.txt

# 6. Commit et push
git add .
git commit -m "Ready for deployment"
git push

# 7. Déployer
vercel --prod
```

## 🎉 Commandes Post-Déploiement

```bash
# Vérifier le site en ligne
curl https://votre-site.com

# Vérifier le sitemap
curl https://votre-site.com/sitemap.xml

# Tester la performance
npx lighthouse https://votre-site.com --view

# Vérifier les logs Vercel
vercel logs
```

---

**Astuce** : Ajoutez ces commandes à votre `.bashrc` ou `.zshrc` pour des alias :

```bash
alias dev="npm run dev"
alias build="npm run build"
alias deploy="vercel --prod"
```
