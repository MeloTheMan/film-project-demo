import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Jean-Pierre Bekolo</h3>
            <p className="text-gray-400 text-sm">
              Cinéaste camerounais pionnier de l'afrofuturisme au cinéma.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/films" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Films
                </Link>
              </li>
              <li>
                <Link href="/realisateur/jean-pierre-bekolo" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Réalisateur
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Événements
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Concepts</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/concepts/afrofuturisme" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Afrofuturisme
                </Link>
              </li>
              <li>
                <Link href="/concepts/cinema-africain" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Cinéma Africain
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://twitter.com/jpbekolo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/jeanpierrebekolo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jean-Pierre Bekolo. Tous droits réservés.</p>
          <p className="mt-2">Site optimisé pour le référencement et l'indexation IA</p>
        </div>
      </div>
    </footer>
  );
}
