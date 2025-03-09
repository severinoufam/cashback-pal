
import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StoreItem {
  id: string;
  name: string;
  image: string;
  price: { type: 'cash' | 'points', value: number };
}

const storeItems: StoreItem[] = [
  {
    id: '1',
    name: 'Fone de Ouvido Bluetooth',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: { type: 'cash', value: 129.90 },
  },
  {
    id: '2',
    name: 'Smartwatch Fitness',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: { type: 'points', value: 15000 },
  },
  {
    id: '3',
    name: 'Power Bank 10000mAh',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: { type: 'cash', value: 89.90 },
  },
];

const StorePreview: React.FC = () => {
  return (
    <div className="mt-6 animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <ShoppingBag className="w-5 h-5 mr-2 text-brand-green-600" />
          Loja
        </h2>
        <Link to="/store" className="flex items-center text-sm text-brand-green-600 hover:text-brand-green-700 transition-colors font-medium">
          Ver todos
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {storeItems.map((item) => (
          <Link key={item.id} to={`/store/${item.id}`} className="group">
            <div className="rounded-xl overflow-hidden bg-white shadow-md border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.03]">
              <div className="h-32 bg-gray-100 relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {item.price.type === 'points' && (
                  <div className="absolute top-2 right-2 bg-brand-orange-500 text-white text-xs font-bold py-0.5 px-2 rounded-full">PONTOS</div>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">{item.name}</h3>
                <div className="mt-1 font-medium">
                  {item.price.type === 'cash' ? (
                    <span className="text-brand-green-600 text-sm">R$ {item.price.value.toFixed(2)}</span>
                  ) : (
                    <span className="text-brand-orange-600 text-sm">{item.price.value.toLocaleString()} pts</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StorePreview;
