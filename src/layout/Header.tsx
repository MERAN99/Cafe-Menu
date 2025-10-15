import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 py-4 border-b border-gray-700 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-800/20 backdrop-blur-sm shadow-xl'
        : 'bg-gray-800 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/Logo/Cafe-Logo.png" alt="Cafe Way Logo" className="h-10 w-10 rounded-full" />
            <h2 className="text-2xl font-bold text-amber-400 font-mono">Cafe Way</h2>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
