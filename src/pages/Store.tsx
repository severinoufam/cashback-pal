
import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

interface StoreItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: { type: 'cash' | 'points', value: number };
  category: string;
}

const Store: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock data for store items
  const storeItems: StoreItem[] = [
    {
      id: '1',
      name: 'Fone de Ouvido Bluetooth',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Fone sem fio com cancelamento de ruído e bateria de longa duração.',
      price: { type: 'cash', value: 129.90 },
      category: 'electronics',
    },
    {
      id: '2',
      name: 'Smartwatch Fitness',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Relógio inteligente com monitoramento cardíaco e GPS integrado.',
      price: { type: 'points', value: 15000 },
      category: 'electronics',
    },
    {
      id: '3',
      name: 'Power Bank 10000mAh',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Carregador portátil de alta capacidade com múltiplas saídas USB.',
      price: { type: 'cash', value: 89.90 },
      category: 'electronics',
    },
    {
      id: '4',
      name: 'Mochila Resistente à Água',
      image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Mochila impermeável com compartimento para laptop e múltiplos bolsos.',
      price: { type: 'cash', value: 149.90 },
      category: 'accessories',
    },
    {
      id: '5',
      name: 'Câmera de Segurança Wi-Fi',
      image: 'https://images.unsplash.com/photo-1580745283059-4361334feb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Câmera HD com visão noturna e detecção de movimento.',
      price: { type: 'points', value: 25000 },
      category: 'home',
    },
    {
      id: '6',
      name: 'Caixa de Som Bluetooth',
      image: 'https://images.unsplash.com/photo-1589003511276-5a42b53a0175?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Caixa de som portátil com áudio de alta qualidade e resistente à água.',
      price: { type: 'cash', value: 199.90 },
      category: 'electronics',
    },
  ];
  
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
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <div className="text-sm font-medium">
                    {item.price.type === 'cash' ? (
                      <span className="text-brand-green-600">R$ {item.price.value.toFixed(2)}</span>
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
