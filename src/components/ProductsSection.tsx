import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { productsData } from '../data/data';

const ProductsSection: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Show only 4 products initially, or all if showAll is true
  const displayedProducts = showAll ? productsData : productsData.slice(0, 4);
  const hasMoreProducts = productsData.length > 4;

  const scrollLeft = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee and tea
          </p>
        </div>

        {/* Horizontal Scrollable Products Container */}
        <div className="relative">
          {/* Navigation Arrows - Desktop only */}
          {!showAll && (
            <>
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-amber-500 text-gray-900 hover:text-white p-3 rounded-full shadow-lg transition-all hidden md:block"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-amber-500 text-gray-900 hover:text-white p-3 rounded-full shadow-lg transition-all hidden md:block"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Mobile Navigation Arrow - Clickable arrow on the right */}
          {!showAll && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 md:hidden bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all active:scale-95 scroll-hint-arrow"
              aria-label="Scroll to next product"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}

          {/* Products Grid/Scroll Container */}
          <div
            ref={scrollContainerRef}
            className={`${
              showAll 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' 
                : 'flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide'
            } px-4 md:px-8`}
            style={!showAll ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
          >
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className={`${
                  showAll 
                    ? '' 
                    : 'flex-shrink-0 w-80 snap-center'
                } bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <span 
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      product.category === 'Coffee'
                        ? 'bg-amber-500 text-white'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    {product.category}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Hint Text */}
          {!showAll && (
            <div className="text-center mt-4 md:hidden">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <span>Swipe to explore more</span>
                <ChevronRight className="w-4 h-4 animate-pulse" />
              </p>
            </div>
          )}
        </div>

        {/* Show More/Less Button */}
        {hasMoreProducts && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              {showAll ? 'Show Less Products' : `View All Products (${productsData.length})`}
            </button>
          </div>
        )}
      </div>

      {/* Hide scrollbar and add animations */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Animated scroll hint arrow */
        .scroll-hint-arrow {
          animation: scrollHint 2s ease-in-out infinite;
        }
        
        @keyframes scrollHint {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.9;
          }
          50% {
            transform: translateX(8px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;