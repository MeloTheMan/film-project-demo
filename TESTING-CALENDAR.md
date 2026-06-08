# 📅 Calendrier de Tests SEO - Planning Simplifié

Guide chronologique pour tester votre référencement après déploiement.

---

## 🎯 Vue d'Ensemble

**Durée totale** : 30 jours
**Temps requis** : 3-4 heures réparties
**Objectif** : Valider l'indexation et le référencement

---

## 📆 Jour 1 : Déploiement + Tests Immédiats

### ⏰ Temps : 1 heure

### ✅ Checklist Rapide

#### 1. Vérification Basique (10 min)
```bash
# Tester l'accès
curl -I https://votre-site.com
```
- [ ] Site accessible (code 200)
- [ ] HTTPS actif
- [ ] Toutes les pages chargent

#### 2. Fichiers Système (10 min)
- [ ] Sitemap : `https://votre-site.com/sitemap.xml`
- [ ] Robots : `https://votre-site.com/robots.txt`
- [ ] 18 URLs dans le sitemap

#### 3. PageSpeed Insights (15 min)
**URL** : https://pagespeed.web.dev/

Tester :
- [ ] Page d'accueil
- [ ] Page film

**Objectif** : Score > 90

#### 4. Mobile-Friendly (10 min)
**URL** : https://search.google.com/test/mobile-friendly

- [ ] Page d'accueil : Mobile-friendly ✅
- [ ] Page film : Mobile-friendly ✅

#### 5. Open Graph (15 min)
**URL** : https://www.opengraph.xyz/

Tester :
- [ ] Page d'accueil
- [ ] Page film

**Vérifier** : Image, titre, description

---

## 📆 Jour 2 : Validation SEO

### ⏰ Temps : 1 heure

### ✅ Checklist

#### 1. JSON-LD Validation (20 min)
**URL** : https://validator.schema.org/

Tester ces pages :
- [ ] `/` - WebSite + Organization
- [ ] `/films/le-gout-du-vin-de-palme` - Movie
- [ ] `/realisateur/jean-pierre-bekolo` - Person
- [ ] `/articles/afrofuturisme-cinema-africain` - Article

**Objectif** : 0 erreurs

#### 2. Rich Results Test (20 min)
**URL** : https://search.google.com/test/rich-results

Tester les mêmes pages.

**Objectif** : Structured data détecté

#### 3. Meta Tags (20 min)
Inspecter le code source (Ctrl+U) de 3 pages :

Vérifier :
- [ ] `<title>` unique
- [ ] `<meta name="description">` unique
- [ ] Open Graph complet
- [ ] Twitter Cards complet

---

## 📆 Jour 3 : Soumission aux Moteurs

### ⏰ Temps : 45 minutes

### ✅ Google Search Console

#### Configuration (20 min)
1. **Ajouter la propriété**
   - URL : https://search.google.com/search-console
   - Ajouter : `https://votre-site.com`

2. **Vérifier**
   - Méthode : Balise HTML
   - Ajouter le code dans `app/layout.tsx`
   - Redéployer
   - Vérifier

3. **Soumettre sitemap**
   - Aller dans "Sitemaps"
   - Ajouter : `sitemap.xml`
   - Envoyer

**Checklist** :
- [ ] Propriété vérifiée
- [ ] Sitemap soumis
- [ ] Aucune erreur

### ✅ Bing Webmaster (25 min)

1. **Ajouter le site**
   - URL : https://www.bing.com/webmasters
   - Ajouter : `https://votre-site.com`

2. **Vérifier**
   - Méthode : Balise HTML ou fichier

3. **Soumettre sitemap**
   - Ajouter : `https://votre-site.com/sitemap.xml`

**Checklist** :
- [ ] Site vérifié
- [ ] Sitemap soumis

---

## 📆 Jour 7 : Première Vérification

### ⏰ Temps : 30 minutes

### ✅ Vérification Indexation

#### Google
```
site:votre-site.com
```

**Attendu** : 1-5 pages indexées (début)

#### Bing
```
site:votre-site.com
```

**Attendu** : 0-2 pages (Bing est plus lent)

### ✅ Google Search Console

Vérifier :
- [ ] Couverture : Pages découvertes
- [ ] Erreurs : 0
- [ ] Sitemap : Traité

**Note** : Normal si peu de pages indexées à J+7

---

## 📆 Jour 14 : Suivi Indexation

### ⏰ Temps : 30 minutes

### ✅ Vérification Indexation

#### Google
```
site:votre-site.com
```

**Attendu** : 10-15 pages indexées

#### Recherches Spécifiques
```
site:votre-site.com "Jean-Pierre Bekolo"
site:votre-site.com "Le Goût du Vin de Palme"
```

### ✅ Google Search Console

**Performance** :
- [ ] Impressions : > 0
- [ ] Clics : > 0 (peut-être)
- [ ] Pages indexées : 10-15

**Couverture** :
- [ ] Erreurs : 0
- [ ] Valides : 10-15

---

## 📆 Jour 21 : Optimisation

### ⏰ Temps : 45 minutes

### ✅ Analyse Performance

#### Google Search Console

**Requêtes** :
- [ ] Identifier les requêtes principales
- [ ] Noter les positions
- [ ] Identifier opportunités

**Pages** :
- [ ] Pages les plus vues
- [ ] Pages avec impressions mais sans clics
- [ ] Pages à optimiser

### ✅ Core Web Vitals

Vérifier dans GSC :
- [ ] LCP : Vert
- [ ] FID : Vert
- [ ] CLS : Vert

**Si orange/rouge** : Optimiser

### ✅ Test IA (Optionnel)

**ChatGPT** :
```
"Qui est Jean-Pierre Bekolo ?"
```

**Note** : Peut ne pas encore connaître (normal à J+21)

---

## 📆 Jour 30 : Bilan Mensuel

### ⏰ Temps : 1 heure

### ✅ Rapport Complet

#### 1. Indexation (10 min)

**Google** :
```
site:votre-site.com
```

**Objectif** : 18/18 pages indexées

**Checklist** :
- [ ] Pages indexées : __/18
- [ ] Erreurs : 0
- [ ] Avertissements : 0

#### 2. Performance (15 min)

**Google Search Console** :
- [ ] Impressions totales : ____
- [ ] Clics totaux : ____
- [ ] CTR moyen : ____%
- [ ] Position moyenne : ____

**Objectifs réalistes J+30** :
- Impressions : 50-200
- Clics : 5-20
- CTR : 2-5%
- Position : 20-50

#### 3. Core Web Vitals (10 min)

**PageSpeed Insights** :
- [ ] Performance : ____
- [ ] Accessibility : ____
- [ ] Best Practices : ____
- [ ] SEO : ____

**Objectif** : Tous > 90

#### 4. Structured Data (10 min)

**Google Search Console → Améliorations** :
- [ ] Movie : Détecté
- [ ] Person : Détecté
- [ ] Article : Détecté
- [ ] Erreurs : 0

#### 5. Backlinks (10 min)

**Google Search Console → Liens** :
- [ ] Liens externes : ____
- [ ] Domaines référents : ____

**Objectif J+30** : 1-5 backlinks

#### 6. Plan d'Action (15 min)

**À améliorer** :
- [ ] ___________________
- [ ] ___________________
- [ ] ___________________

**Actions** :
- [ ] ___________________
- [ ] ___________________
- [ ] ___________________

---

## 📊 Tableau de Suivi

### Métriques Clés

| Métrique | J+1 | J+7 | J+14 | J+21 | J+30 | Objectif |
|----------|-----|-----|------|------|------|----------|
| Pages indexées | 0 | 1-5 | 10-15 | 15-18 | 18 | 18 |
| Impressions | 0 | 0-10 | 10-50 | 30-100 | 50-200 | 200+ |
| Clics | 0 | 0 | 0-5 | 2-10 | 5-20 | 20+ |
| Position moy. | - | - | 50+ | 30-50 | 20-40 | <20 |
| PageSpeed | 90+ | - | - | - | 90+ | 90+ |
| Backlinks | 0 | 0 | 0-1 | 1-3 | 1-5 | 5+ |

---

## 🎯 Objectifs par Phase

### Phase 1 : Technique (J+1 à J+3)
- ✅ Site accessible
- ✅ Sitemap soumis
- ✅ JSON-LD validé
- ✅ Performance > 90
- ✅ Mobile-friendly

### Phase 2 : Indexation (J+7 à J+14)
- ✅ Premières pages indexées
- ✅ Aucune erreur GSC
- ✅ Structured data détecté

### Phase 3 : Visibilité (J+14 à J+21)
- ✅ Majorité des pages indexées
- ✅ Premières impressions
- ✅ Premiers clics (peut-être)

### Phase 4 : Optimisation (J+21 à J+30)
- ✅ Toutes les pages indexées
- ✅ Impressions régulières
- ✅ Clics réguliers
- ✅ Position < 50

---

## 📋 Checklist Simplifiée

### Semaine 1
- [ ] Jour 1 : Tests immédiats (1h)
- [ ] Jour 2 : Validation SEO (1h)
- [ ] Jour 3 : Soumission moteurs (45min)
- [ ] Jour 7 : Vérification indexation (30min)

### Semaine 2
- [ ] Jour 14 : Suivi indexation (30min)

### Semaine 3
- [ ] Jour 21 : Optimisation (45min)

### Semaine 4
- [ ] Jour 30 : Bilan mensuel (1h)

**Total temps** : ~5h30 sur 30 jours

---

## 🚨 Alertes à Surveiller

### Jour 7
**Si 0 pages indexées** :
- Vérifier robots.txt
- Vérifier sitemap
- Demander indexation manuelle

### Jour 14
**Si < 5 pages indexées** :
- Vérifier erreurs GSC
- Améliorer contenu
- Demander indexation manuelle

### Jour 30
**Si < 15 pages indexées** :
- Analyser erreurs GSC
- Vérifier qualité contenu
- Créer backlinks
- Améliorer maillage interne

---

## 💡 Conseils

### Patience
- Le SEO prend du temps (2-6 mois)
- Ne pas paniquer si résultats lents
- Continuer à optimiser

### Régularité
- Vérifier GSC chaque semaine
- Analyser les requêtes
- Optimiser progressivement

### Contenu
- Ajouter du contenu régulièrement
- Améliorer pages existantes
- Créer des backlinks

### Performance
- Maintenir PageSpeed > 90
- Optimiser images
- Surveiller Core Web Vitals

---

## 📚 Ressources Rapides

### Outils Essentiels
- **PageSpeed** : https://pagespeed.web.dev/
- **Search Console** : https://search.google.com/search-console
- **Schema Validator** : https://validator.schema.org/
- **Mobile Test** : https://search.google.com/test/mobile-friendly
- **Open Graph** : https://www.opengraph.xyz/

### Commandes Utiles
```bash
# Vérifier indexation Google
site:votre-site.com

# Vérifier page spécifique
site:votre-site.com "titre exact"

# Vérifier sitemap
curl https://votre-site.com/sitemap.xml

# Vérifier robots
curl https://votre-site.com/robots.txt
```

---

## 🎉 Félicitations !

Si vous suivez ce calendrier, après 30 jours vous aurez :

✅ Un site correctement indexé
✅ Des premières impressions
✅ Des premiers clics
✅ Une base solide pour le SEO
✅ Des données pour optimiser

**Continuez sur cette lancée ! 🚀**

---

**Prochaine étape** : Répéter le bilan mensuel tous les mois et optimiser progressivement.
