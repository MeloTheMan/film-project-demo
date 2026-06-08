/**
 * Script de test SEO automatisé
 * 
 * Usage: node scripts/test-seo.js https://votre-site.com
 */

const https = require('https');
const http = require('http');

// Couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// URL du site à tester
const siteUrl = process.argv[2] || 'http://localhost:3000';
const baseUrl = new URL(siteUrl);

console.log(`${colors.cyan}🧪 Test SEO pour : ${siteUrl}${colors.reset}\n`);

// Liste des pages à tester
const pagesToTest = [
  '/',
  '/films',
  '/films/le-gout-du-vin-de-palme',
  '/films/quartier-mozart',
  '/articles',
  '/articles/afrofuturisme-cinema-africain',
  '/realisateur/jean-pierre-bekolo',
  '/concepts/afrofuturisme',
  '/evenements',
  '/sitemap.xml',
  '/robots.txt',
];

// Résultats des tests
const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  tests: [],
};

/**
 * Faire une requête HTTP/HTTPS
 */
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Tester l'accessibilité d'une page
 */
async function testPageAccessibility(path) {
  const url = `${siteUrl}${path}`;
  
  try {
    const response = await makeRequest(url);
    
    if (response.statusCode === 200) {
      console.log(`${colors.green}✓${colors.reset} ${path} - Accessible (200)`);
      results.passed++;
      return { success: true, path, statusCode: 200 };
    } else {
      console.log(`${colors.red}✗${colors.reset} ${path} - Code ${response.statusCode}`);
      results.failed++;
      return { success: false, path, statusCode: response.statusCode };
    }
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} ${path} - Erreur: ${error.message}`);
    results.failed++;
    return { success: false, path, error: error.message };
  }
}

/**
 * Tester les meta tags d'une page
 */
async function testMetaTags(path) {
  const url = `${siteUrl}${path}`;
  
  try {
    const response = await makeRequest(url);
    const html = response.body;
    
    const checks = {
      title: /<title>(.+?)<\/title>/.test(html),
      description: /<meta name="description" content="(.+?)"/.test(html),
      ogTitle: /<meta property="og:title" content="(.+?)"/.test(html),
      ogDescription: /<meta property="og:description" content="(.+?)"/.test(html),
      ogImage: /<meta property="og:image" content="(.+?)"/.test(html),
      twitterCard: /<meta name="twitter:card" content="(.+?)"/.test(html),
    };
    
    const allPassed = Object.values(checks).every(v => v);
    
    if (allPassed) {
      console.log(`${colors.green}✓${colors.reset} ${path} - Meta tags complets`);
      results.passed++;
    } else {
      const missing = Object.keys(checks).filter(k => !checks[k]);
      console.log(`${colors.yellow}⚠${colors.reset} ${path} - Meta tags manquants: ${missing.join(', ')}`);
      results.warnings++;
    }
    
    return { success: allPassed, path, checks };
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} ${path} - Erreur meta tags: ${error.message}`);
    results.failed++;
    return { success: false, path, error: error.message };
  }
}

/**
 * Tester le JSON-LD d'une page
 */
async function testJsonLd(path) {
  const url = `${siteUrl}${path}`;
  
  try {
    const response = await makeRequest(url);
    const html = response.body;
    
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">(.+?)<\/script>/s);
    
    if (jsonLdMatch) {
      try {
        const jsonLd = JSON.parse(jsonLdMatch[1]);
        console.log(`${colors.green}✓${colors.reset} ${path} - JSON-LD présent (@type: ${jsonLd['@type']})`);
        results.passed++;
        return { success: true, path, type: jsonLd['@type'] };
      } catch (e) {
        console.log(`${colors.red}✗${colors.reset} ${path} - JSON-LD invalide`);
        results.failed++;
        return { success: false, path, error: 'Invalid JSON-LD' };
      }
    } else {
      console.log(`${colors.yellow}⚠${colors.reset} ${path} - JSON-LD absent`);
      results.warnings++;
      return { success: false, path, error: 'No JSON-LD found' };
    }
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} ${path} - Erreur JSON-LD: ${error.message}`);
    results.failed++;
    return { success: false, path, error: error.message };
  }
}

/**
 * Tester le sitemap
 */
async function testSitemap() {
  const url = `${siteUrl}/sitemap.xml`;
  
  try {
    const response = await makeRequest(url);
    
    if (response.statusCode === 200) {
      const urlCount = (response.body.match(/<url>/g) || []).length;
      console.log(`${colors.green}✓${colors.reset} Sitemap accessible - ${urlCount} URLs`);
      results.passed++;
      return { success: true, urlCount };
    } else {
      console.log(`${colors.red}✗${colors.reset} Sitemap inaccessible (${response.statusCode})`);
      results.failed++;
      return { success: false, statusCode: response.statusCode };
    }
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} Sitemap erreur: ${error.message}`);
    results.failed++;
    return { success: false, error: error.message };
  }
}

/**
 * Tester robots.txt
 */
async function testRobots() {
  const url = `${siteUrl}/robots.txt`;
  
  try {
    const response = await makeRequest(url);
    
    if (response.statusCode === 200) {
      const hasGPTBot = response.body.includes('GPTBot');
      const hasClaudeBot = response.body.includes('ClaudeBot');
      const hasSitemap = response.body.includes('Sitemap:');
      
      if (hasGPTBot && hasClaudeBot && hasSitemap) {
        console.log(`${colors.green}✓${colors.reset} Robots.txt complet (GPTBot, ClaudeBot, Sitemap)`);
        results.passed++;
      } else {
        console.log(`${colors.yellow}⚠${colors.reset} Robots.txt incomplet`);
        results.warnings++;
      }
      
      return { success: true, hasGPTBot, hasClaudeBot, hasSitemap };
    } else {
      console.log(`${colors.red}✗${colors.reset} Robots.txt inaccessible (${response.statusCode})`);
      results.failed++;
      return { success: false, statusCode: response.statusCode };
    }
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} Robots.txt erreur: ${error.message}`);
    results.failed++;
    return { success: false, error: error.message };
  }
}

/**
 * Exécuter tous les tests
 */
async function runAllTests() {
  console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}  Test 1: Accessibilité des Pages${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}\n`);
  
  for (const path of pagesToTest) {
    await testPageAccessibility(path);
  }
  
  console.log(`\n${colors.blue}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}  Test 2: Meta Tags${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}\n`);
  
  const htmlPages = pagesToTest.filter(p => !p.includes('.xml') && !p.includes('.txt'));
  for (const path of htmlPages) {
    await testMetaTags(path);
  }
  
  console.log(`\n${colors.blue}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}  Test 3: JSON-LD${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}\n`);
  
  for (const path of htmlPages) {
    await testJsonLd(path);
  }
  
  console.log(`\n${colors.blue}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}  Test 4: Fichiers Système${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}\n`);
  
  await testSitemap();
  await testRobots();
  
  // Résumé
  console.log(`\n${colors.blue}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}  Résumé${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}\n`);
  
  console.log(`${colors.green}✓ Tests réussis    : ${results.passed}${colors.reset}`);
  console.log(`${colors.yellow}⚠ Avertissements   : ${results.warnings}${colors.reset}`);
  console.log(`${colors.red}✗ Tests échoués    : ${results.failed}${colors.reset}`);
  
  const total = results.passed + results.warnings + results.failed;
  const successRate = ((results.passed / total) * 100).toFixed(1);
  
  console.log(`\n${colors.cyan}Taux de réussite : ${successRate}%${colors.reset}\n`);
  
  if (results.failed === 0 && results.warnings === 0) {
    console.log(`${colors.green}🎉 Tous les tests sont passés ! Votre site est prêt.${colors.reset}\n`);
    process.exit(0);
  } else if (results.failed === 0) {
    console.log(`${colors.yellow}⚠️  Quelques avertissements à corriger.${colors.reset}\n`);
    process.exit(0);
  } else {
    console.log(`${colors.red}❌ Certains tests ont échoué. Veuillez corriger les erreurs.${colors.reset}\n`);
    process.exit(1);
  }
}

// Lancer les tests
runAllTests().catch((error) => {
  console.error(`${colors.red}Erreur fatale: ${error.message}${colors.reset}`);
  process.exit(1);
});
