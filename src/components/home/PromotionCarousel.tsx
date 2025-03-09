
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

const promotions: Promotion[] = [
  {
    id: '1',
    title: 'Pacote Internet 20GB',
    description: 'Receba 20% cashback na compra',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: '2',
    title: 'Plano Premium 50GB',
    description: '30% de cashback imediato',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: '3',
    title: 'Internet Ilimitada',
    description: 'Ganhe 10.000 pontos ao adquirir',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    color: 'from-brand-green-400 to-brand-green-600',
  },
];

const PromotionCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-4 overflow-hidden rounded-2xl shadow-md animate-fade-in transform hover:scale-[1.01] transition-all duration-300">
      <div className="flex h-56 transition-transform ease-out duration-500" 
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {promotions.map((promo) => (
          <div 
            key={promo.id}
            className={`relative flex-shrink-0 w-full h-full bg-gradient-to-r ${promo.color}`}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 flex flex-col justify-end h-full p-5 text-white">
              <h3 className="text-2xl font-bold mb-1">{promo.title}</h3>
              <p className="text-sm mb-3">{promo.description}</p>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-1.5 rounded-full text-sm font-medium w-fit transition-all duration-300">
                Ver oferta
              </button>
            </div>
            <div className="absolute top-0 right-0 w-48 h-full opacity-20">
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${promo.image})` }}></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-40'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-40 transition-colors"
        onClick={goToPrev}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-40 transition-colors"
        onClick={goToNext}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PromotionCarousel;
