# 🛠️ Scripts Utilitaires

Scripts pour faciliter le développement et les tests.

---

## 📜 Scripts Disponibles

### 1. test-seo.js

Script de test SEO automatisé qui vérifie :
- ✅ Accessibilité des pages
- ✅ Meta tags (title, description, Open Graph, Twitter)
- ✅ JSON-LD (structured data)
- ✅ Sitemap.xml
- ✅ Robots.txt

#### Usage

**Tester en local** :
```bash
node scripts/test-seo.js http://localhost:3000
```

**Tester en production** :
```bash
node scripts/test-seo.js https://votre-site.com
```

#### Résultat

```
🧪 Test SEO pour : http://localhost:3000

═══════════════════════════════════════
  Test 1: Accessibilité des Pages
═══════════════════════════════════════

✓ / - Accessible (200)
✓ /films - Accessible (200)
✓ /films/le-gout-du-vin-de-palme - Accessible (200)
...

═══════════════════════════════════════
  Test 2: Meta Tags
═══════════════════════════════════════

✓ / - Meta tags complets
✓ /films - Meta tags complets
...

═══════════════════════════════════════
  Test 3: JSON-LD
═══════════════════════════════════════

✓ / - JSON-LD présent (@type: WebSite)
✓ /films/le-gout-du-vin-de-palme - JSON-LD présent (@type: Movie)
...

═══════════════════════════════════════
  Test 4: Fichiers Système
═══════════════════════════════════════

✓ Sitemap accessible - 18 URLs
✓ Robots.txt complet (GPTBot, ClaudeBot, Sitemap)

═══════════════════════════════════════
  Résumé
═══════════════════════════════════════

✓ Tests réussis    : 45
⚠ Avertissements   : 0
✗ Tests échoués    : 0

Taux de réussite : 100.0%

🎉 Tous les tests sont passés ! Votre site est prêt.
```

#### Intégration CI/CD

Ajoutez dans votre workflow GitHub Actions :

```yaml
- name: Test SEO
  run: |
    npm run build
    npm start &
    sleep 5
    node scripts/test-seo.js http://localhost:3000
```

---

### 2. generate-placeholders.js

Script pour créer des fichiers placeholder pour les images.

#### Usage

```bash
node scripts/generate-placeholders.js
```

#### Résultat

```
✓ Created placeholder: E:\test_site\film-project-demo\public\images\films\vin-de-palme-poster.jpg
✓ Created placeholder: E:\test_site\film-project-demo\public\images\films\vin-de-palme-backdrop.jpg
...

✅ Placeholders créés avec succès!

⚠️  IMPORTANT: Remplacez ces placeholders par de vraies images avant le déploiement.
```

---

## 🚀 Ajouter un Nouveau Script

### Créer le script

```javascript
// scripts/mon-script.js

console.log('Mon script fonctionne !');

// Votre code ici
```

### Ajouter dans package.json

```json
{
  "scripts": {
    "mon-script": "node scripts/mon-script.js"
  }
}
```

### Utiliser

```bash
npm run mon-script
```

---

## 💡 Idées de Scripts Futurs

### test-performance.js
Tester la performance avec Lighthouse CLI :
```bash
npx lighthouse https://votre-site.com --output=json
```

### check-links.js
Vérifier tous les liens internes :
```bash
npx broken-link-checker https://votre-site.com
```

### generate-sitemap.js
Générer un sitemap personnalisé (si besoin) :
```javascript
// Parcourir les fichiers JSON
// Générer sitemap.xml
```

### optimize-images.js
Optimiser toutes les images :
```bash
npx sharp-cli resize 1200 630 -i input.jpg -o output.jpg
```

### check-seo-score.js
Calculer un score SEO global :
```javascript
// Vérifier tous les critères SEO
// Donner un score sur 100
```

---

## 📚 Ressources

### Node.js
- Documentation : https://nodejs.org/docs/
- NPM : https://www.npmjs.com/

### Scripts Utiles
- Lighthouse CLI : https://github.com/GoogleChrome/lighthouse
- Broken Link Checker : https://github.com/stevenvachon/broken-link-checker
- Sharp (images) : https://sharp.pixelplumbing.com/

---

## 🆘 Dépannage

### Erreur "Cannot find module"

```bash
npm install
```

### Erreur de permission

**Windows** :
```bash
# Exécuter en tant qu'administrateur
```

**Linux/Mac** :
```bash
chmod +x scripts/test-seo.js
```

### Script ne fonctionne pas

Vérifier la version de Node.js :
```bash
node --version
# Doit être >= 14
```

---

**Bon scripting ! 🚀**
