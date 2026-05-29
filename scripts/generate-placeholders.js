/**
 * Script pour créer des fichiers placeholder pour les images
 * En production, remplacez ces placeholders par de vraies images
 */

const fs = require('fs');
const path = require('path');

const placeholders = {
  films: [
    'vin-de-palme-poster.jpg',
    'vin-de-palme-backdrop.jpg',
    'vin-de-palme-1.jpg',
    'vin-de-palme-2.jpg',
    'vin-de-palme-3.jpg',
    'quartier-mozart-poster.jpg',
    'quartier-mozart-backdrop.jpg',
    'quartier-mozart-1.jpg',
    'quartier-mozart-2.jpg',
  ],
  directors: ['bekolo.jpg'],
  articles: [
    'afrofuturisme.jpg',
    'bekolo-interview.jpg',
    'cinema-90s.jpg',
  ],
  concepts: ['afrofuturisme.jpg', 'cinema-africain.jpg'],
  root: ['og-default.jpg', 'logo.png'],
};

const publicDir = path.join(__dirname, '..', 'public', 'images');

// Créer les dossiers
Object.keys(placeholders).forEach((folder) => {
  const folderPath = folder === 'root' 
    ? publicDir 
    : path.join(publicDir, folder);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Créer des fichiers placeholder
  placeholders[folder].forEach((file) => {
    const filePath = path.join(folderPath, file);
    if (!fs.existsSync(filePath)) {
      // Créer un fichier vide comme placeholder
      fs.writeFileSync(filePath, '');
      console.log(`✓ Created placeholder: ${filePath}`);
    }
  });
});

console.log('\n✅ Placeholders créés avec succès!');
console.log('\n⚠️  IMPORTANT: Remplacez ces placeholders par de vraies images avant le déploiement.');
console.log('Vous pouvez utiliser:');
console.log('- Unsplash: https://unsplash.com');
console.log('- Pexels: https://pexels.com');
console.log('- Canva: https://canva.com');
