import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  badge?: string;
  categoryId?: string;
  image: string;
  category: {
    _id: string;
    name: string;
  };
}

interface Category {
  _id: string;
  name: string;
}

interface Section {
  title: string;
  id: string;
  products: Product[];
}

const MenuSection = () => {
  const [menuData, setMenuData] = useState<Section[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Fetch menu.json from public folder
  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((data) => {
        if (!data.categories || !data.products) {
          console.error("Invalid JSON format:", data);
          return;
        }

        const structured = data.categories.map((cat: Category) => ({
          title: cat.name,
          id: cat._id,
          products: data.products.filter(
            (p: Product) => p.category._id === cat._id
          ),
        }));

        setMenuData(structured);
      })
      .catch((err) => console.error("Error loading menu.json:", err));
  }, []);

  const scrollToSection = (title: string) => {
    const id = title.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="menu"
      className="py-8 md:py-16 px-2 md:px-4 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-20 left-10 text-6xl opacity-20">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-amber-600"
          >
            <path d="M2 21h18v-2H2v2zm0-4h18v-2H2v2zm0-4h18v-2H2v2zm0-4h18V7H2v2zM1 6c0-.55.45-1 1-1h20c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V6z" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-400 mb-2 md:mb-4 font-mono">
          Our Menu
        </h2>
        <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mb-4 md:mb-8 px-4">
          Indulge in our exquisite selection of artisanal beverages and gourmet
          treats
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-12 px-2">
          {menuData.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.title)}
              className="bg-gray-700 text-amber-400 px-6 py-3 rounded-full font-mono font-bold hover:bg-amber-600 hover:text-black transition-colors shadow-lg"
              style={{ fontFamily: "'Tajawal', 'Amiri', 'Noto Sans Arabic', sans-serif" }}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="space-y-8 md:space-y-16">
        {menuData.map((section, sectionIndex) => (
          <div
            key={section.id}
            id={section.title.toLowerCase().replace(/\s+/g, "-")}
            className={`rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-gray-700 relative overflow-hidden ${
              sectionIndex % 2 === 0
                ? "bg-gradient-to-r from-gray-80 to-gray-90"
                : "bg-gradient-to-l from-gray-80 to-gray-900"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 md:mb-12 text-center font-mono relative z-10"
                style={{ fontFamily: "'Tajawal', 'Amiri', 'Noto Sans Arabic', sans-serif" }}>
              {section.title}
            </h3>

            {section.products.length === 0 ? (
              <div key={`no-products-${section.id}`}>
                <p className="text-gray-400 text-center italic">
                  No products available in this category.
                </p>
              </div>
            ) : (
              <div key={`products-${section.id}`} className="space-y-4 md:space-y-8 relative z-10">
                {section.products.map((product, productIndex) => {
                  const isEven = productIndex % 2 === 0;
                  return (
                    <div
                      key={product.id}
                      className={`flex items-center gap-4 md:gap-8 ${
                        isEven ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-40 h-30 md:w-32 md:h-32 rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-gray-60">
                        <img
                        loading="lazy"
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "/Logo/Cafe-Logo.png"; // fallback image
                          }}
                        />
                      </div>

                      {/* Product Details */}
                      <div
                        className={`flex-1 ${isEven ? "text-left" : "text-right"}`}
                        style={{
                          direction: 'rtl',
                          fontFamily: "'Tajawal', 'Amiri', 'Noto Sans Arabic', sans-serif"
                        }}
                      >
                        <div className="items-center justify-between mb-3">
                          <h4
                            className={`text-lg md:text-2xl font-bold text-white ${
                              isEven ? "" : "order-2"
                            }`}
                            style={{ fontFamily: "'Tajawal', 'Amiri', 'Noto Sans Arabic', sans-serif" }}
                          >
                            {product.name}
                          </h4>
                          <span
                            className={`text-base md:text-xl font-bold text-amber-400 ${
                              isEven ? "" : "order-1 mr-4"
                            }`}
                          >
                            {product.price?.toFixed(0) ?? "N/A"} IQD
                          </span>
                        </div>
                 
                 
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-500 text-black p-4 rounded-full cursor-pointer z-50"
          aria-label="Scroll to top"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </section>
  );
};

export default MenuSection;
