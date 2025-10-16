
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

    const handleInstagramClick = () => {
    window.open('https://www.instagram.com/cafee.way?igsh=bW95bDVua3F3em52', '_blank');
  };

  const handleSnapchatClick = () => {
    window.open('https://snapchat.com/t/FpP5t0sL', '_blank');
  };

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

          <div onClick={handleSnapchatClick} className="flex items-center gap-4">
            <div  className="text-gray-300 hover:text-amber-400 transition-colors">
               <img src="/icons/snapchat-logo.svg" loading="lazy" alt="Snapchat" className="w-10 h-10" />
            </div>
            <div onClick={handleInstagramClick} className="text-gray-300 hover:text-amber-400 transition-colors">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-11 h-11" />
            </div>
          
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
