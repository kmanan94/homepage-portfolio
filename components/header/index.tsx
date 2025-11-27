import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Kevin Manan
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              href="/projects" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/about-me" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              About Me
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}