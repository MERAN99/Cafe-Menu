import { useState, useEffect } from 'react';
import { menuData } from '../data/menuData';

const MenuSection = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (title: string) => {
    const id = title.toLowerCase().replace(' ', '-');
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="menu" className="py-16 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        {/* Coffee Icons - Using SVG for better display */}
        <div className="absolute top-20 left-10 text-6xl opacity-20" style={{transform: `scale(${1.2 + Math.random() * 0.6})`}}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-amber-600">
            <path d="M2 21h18v-2H2v2zm0-4h18v-2H2v2zm0-4h18v-2H2v2zm0-4h18V7H2v2zM1 6c0-.55.45-1 1-1h20c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V6z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 text-5xl opacity-25" style={{transform: `scale(${1.0 + Math.random() * 0.8})`}}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
            <path d="M7 7h10v10H7V7zm0-2c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H7z"/>
          </svg>
        </div>
        <div className="absolute bottom-40 left-20 text-4xl opacity-20" style={{transform: `scale(${0.8 + Math.random() * 0.7})`}}>
          <span>🫘</span>
        </div>
        <div className="absolute bottom-20 right-10 text-7xl opacity-15" style={{transform: `scale(${1.1 + Math.random() * 0.5})`}}>
          <span>💨</span>
        </div>

        <div className="absolute top-60 left-1/4 text-5xl opacity-25" style={{transform: `scale(${0.9 + Math.random() * 0.6})`}}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-amber-600">
            <path d="M2 21h18v-2H2v2zm0-4h18v-2H2v2zm0-4h18v-2H2v2zm0-4h18V7H2v2zM1 6c0-.55.45-1 1-1h20c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V6z"/>
          </svg>
        </div>
        <div className="absolute top-80 right-1/3 text-3xl opacity-30" style={{transform: `scale(${1.3 + Math.random() * 0.4})`}}>
          <span>🫘</span>
        </div>
        <div className="absolute bottom-60 left-1/2 text-6xl opacity-20" style={{transform: `scale(${0.7 + Math.random() * 0.9})`}}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
            <path d="M7 7h10v10H7V7zm0-2c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H7z"/>
          </svg>
        </div>
        <div className="absolute bottom-80 right-1/4 text-6xl opacity-15" style={{transform: `scale(${1.0 + Math.random() * 0.7})`}}>
          <span>💨</span>
        </div>

        <div className="absolute top-32 left-16 text-4xl opacity-25" style={{transform: `scale(${0.8 + Math.random() * 0.8})`}}>
          <span>🫘</span>
        </div>
        <div className="absolute top-52 right-32 text-5xl opacity-20" style={{transform: `scale(${1.2 + Math.random() * 0.5})`}}>
          <span>💨</span>
        </div>
        <div className="absolute bottom-32 left-32 text-7xl opacity-15" style={{transform: `scale(${0.6 + Math.random() * 1.0})`}}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-amber-600">
            <path d="M2 21h18v-2H2v2zm0-4h18v-2H2v2zm0-4h18v-2H2v2zm0-4h18V7H2v2zM1 6c0-.55.45-1 1-1h20c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V6z"/>
          </svg>
        </div>
        <div className="absolute bottom-52 right-16 text-5xl opacity-25" style={{transform: `scale(${1.1 + Math.random() * 0.6})`}}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
            <path d="M7 7h10v10H7V7zm0-2c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H7z"/>
          </svg>
        </div>
      </div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 font-mono">Our Menu</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Indulge in our exquisite selection of artisanal beverages and gourmet treats
        </p>

        {/* Tab Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((section) => (
            <button
              key={section.title}
              onClick={() => scrollToSection(section.title)}
              className="bg-gray-700 text-amber-400 px-6 py-3 rounded-full font-mono font-bold hover:bg-amber-600 hover:text-black transition-colors shadow-lg"
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Redesigned Layout: Alternating Product Layouts */}
      <div className="space-y-16">
        {menuData.map((section, sectionIndex) => (
          <div key={sectionIndex} id={section.title.toLowerCase().replace(' ', '-')} className={`rounded-3xl p-8 shadow-2xl border border-gray-700 relative overflow-hidden ${
            sectionIndex % 2 === 0 ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-l from-gray-800 to-gray-900'
          }`}>
            {/* Section Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              {section.title === 'Cold Drinks' && (
                <>
                  <div className="absolute top-4 right-4 text-8xl">🧊</div>
                  <div className="absolute bottom-4 left-4 text-6xl">🥤</div>
                </>
              )}
              {section.title === 'Hot Drinks' && (
                <>
                  <div className="absolute top-4 left-4 text-8xl">☕</div>
                  <div className="absolute bottom-4 right-4 text-6xl">🔥</div>
                </>
              )}
              {section.title === 'Desserts' && (
                <>
                  <div className="absolute top-4 right-4 text-8xl">🍰</div>
                  <div className="absolute bottom-4 left-4 text-6xl">🧁</div>
                </>
              )}
              {section.title === 'Snacks' && (
                <>
                  <div className="absolute top-4 left-4 text-8xl">🥖</div>
                  <div className="absolute bottom-4 right-4 text-6xl">🥨</div>
                </>
              )}
            </div>

            <h3 className="text-3xl font-bold text-amber-400 mb-12 text-center font-mono relative z-10">{section.title}</h3>
            <div className="space-y-8 relative z-10">
              {section.products.map((product, productIndex) => {
                const isEven = productIndex % 2 === 0;
                return (
                  <div key={product.id} className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Product Image/Emoji */}
                    <div className="flex-shrink-0 w-32 h-32 bg-gray-700 rounded-2xl flex items-center justify-center text-6xl shadow-lg border border-gray-600">
                      {section.title === 'Cold Drinks' && '🥤'}
                      {section.title === 'Hot Drinks' && '☕'}
                      {section.title === 'Desserts' && '🍰'}
                      {section.title === 'Snacks' && '🥖'}
                    </div>

                    {/* Product Details */}
                    <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className={`text-2xl font-bold text-white ${isEven ? '' : 'order-2'}`}>{product.name}</h4>
                        <span className={`text-xl font-bold text-amber-400 ${isEven ? '' : 'order-1 mr-4'}`}>${product.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-300 mb-4 text-lg">{product.description}</p>
                      {product.badge && (
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                          product.badge === "Best Seller" ? "bg-amber-600 text-black" :
                          product.badge === "50% Off" ? "bg-red-600 text-white" :
                          product.badge === "Popular" ? "bg-green-600 text-white" :
                          "bg-blue-600 text-white"
                        }`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-600 text-black p-4 rounded-full shadow-lg hover:bg-amber-500 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </section>
  );
};

export default MenuSection;
