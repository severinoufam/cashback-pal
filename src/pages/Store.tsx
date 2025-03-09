
import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, ChevronRight } from 'lucide-react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import { getMockStoreItems } from '../services/mockDataService';
import { formatCurrency } from '../utils/formatters';
import { StoreItem } from '../types/models';

const Store: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Get mock store items
  const storeItems = getMockStoreItems();
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'electronics', name: 'Eletrônicos' },
    { id: 'accessories', name: 'Acessórios' },
    { id: 'home', name: 'Casa' },
  ];
  
  const filteredItems = storeItems.filter(item => 
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    (item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <>
      <Header />
      <main className="page-container">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <ShoppingBag className="mr-2 text-brand-green-600" /> 
            Loja
          </h1>
        </div>
        
        <div className="mb-4 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 rounded-xl border border-gray-200 focus:border-brand-green-400 focus:ring-2 focus:ring-brand-green-200 focus:outline-none transition-all"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        
        <div className="mb-4 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-brand-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
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
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-medium text-sm px-2 py-1 bg-gray-800 bg-opacity-75 rounded">Indisponível</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <div className="text-sm font-medium">
                    {item.price.type === 'cash' ? (
                      <span className="text-brand-green-600">{formatCurrency(item.price.value)}</span>
                    ) : (
                      <span className="text-brand-orange-600">{item.price.value.toLocaleString()} pts</span>
                    )}
                  </div>
                  <button className="p-1 rounded-full bg-brand-green-100 text-brand-green-600 hover:bg-brand-green-200 transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Store;
