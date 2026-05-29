import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-gray-800">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold hover:text-accent-400 transition-colors">
            Jean-Pierre Bekolo
          </Link>
          
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/films" className="hover:text-accent-400 transition-colors">
                Films
              </Link>
            </li>
            <li>
              <Link href="/realisateur/jean-pierre-bekolo" className="hover:text-accent-400 transition-colors">
                Réalisateur
              </Link>
            </li>
            <li>
              <Link href="/concepts" className="hover:text-accent-400 transition-colors">
                Concepts
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-accent-400 transition-colors">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/evenements" className="hover:text-accent-400 transition-colors">
                Événements
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
