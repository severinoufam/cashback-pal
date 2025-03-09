
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Search, Filter, Tag } from 'lucide-react';

interface StoreItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: { type: 'cash' | 'points', value: number };
  category: string;
}

const storeItems: StoreItem[] = [
  {
    id: '1',
    name: 'Fone de Ouvido Bluetooth',
    description: 'Fone sem fio com cancelamento de ruído',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: { type: 'cash', value: 129.90 },
    category: 'Eletrônicos',
  },
  {
    id: '2',
    name: 'Smartwatch Fitness',
    description: 'Relógio inteligente com monitor cardíaco',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: { type: 'points', value: 15000 },
    category: 'Eletrônicos',
  },
  {
    id: '3',
    name: 'Power Bank 10000mAh',
    description: 'Carregador portátil de alta capacidade',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: { type: 'cash', value: 89.90 },
    category: 'Eletrônicos',
  },
  {
    id: '4',
    name: 'Mochila Impermeável',
    description: 'Mochila resistente à água com compartimento para laptop',
    image: 'https://images.unsplash.com/photo-1548771395-ca82a0b64a24?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: { type: 'cash', value: 149.90 },
    category: 'Acessórios',
  },
  {
    id: '5',
    name: 'Caixa de Som Bluetooth',
    description: 'Speaker portátil à prova d\'água',
    image: 'https://images.unsplash.com/photo-1589003457321-53479e3d0dea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: { type: 'points', value: 20000 },
    category: 'Eletrônicos',
  },
  {
    id: '6',
    name: 'Voucher Cinema',
    description: 'Ingresso para qualquer filme em cartaz',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: { type: 'points', value: 5000 },
    category: 'Entretenimento',
  },
];

const categories = [...new Set(storeItems.map(item => item.category))];

const Store: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCashItems, setShowCashItems] = useState(true);
  const [showPointsItems, setShowPointsItems] = useState(true);

  const filteredItems = storeItems.filter(item => {
    // Filter by search query
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category                     
    const matchesCategory = selectedCategory === null || item.category === selectedCategory;
    
    // Filter by price type
    const matchesPriceType = (item.price.type === 'cash' && showCashItems) || 
                            (item.price.type === 'points' && showPointsItems);
    
    return matchesSearch && matchesCategory && matchesPriceType;
  });

  return (
    <>
      <Header />
      <main className="page-container">
        <h1 className="text-2xl font-semibold mb-4">Loja</h1>
        
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Pesquisar produtos..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null 
                  ? 'bg-brand-green-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-green-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4 flex space-x-2">
          <button 
            onClick={() => setShowCashItems(!showCashItems)}
            className={`flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              showCashItems 
                ? 'bg-brand-green-100 text-brand-green-700' 
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            <Tag className="w-4 h-4 mr-1" />
            Cashback
          </button>
          
          <button 
            onClick={() => setShowPointsItems(!showPointsItems)}
            className={`flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              showPointsItems 
                ? 'bg-brand-orange-100 text-brand-orange-700' 
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            <Tag className="w-4 h-4 mr-1" />
            Pontos
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="animate-fade-in">
              <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="h-36 bg-gray-100 relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.price.type === 'cash' 
                        ? 'bg-brand-green-100 text-brand-green-800' 
                        : 'bg-brand-orange-100 text-brand-orange-800'
                    }`}>
                      {item.price.type === 'cash' ? 'Cashback' : 'Pontos'}
                    </span>
                  </div>
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
                    <button className={`px-3 py-1 rounded-lg text-xs font-medium text-white ${
                      item.price.type === 'cash' 
                        ? 'bg-brand-green-500 hover:bg-brand-green-600' 
                        : 'bg-brand-orange-500 hover:bg-brand-orange-600'
                    } transition-colors`}>
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Nenhum item encontrado</h3>
            <p className="text-sm text-gray-500 mt-1">Tente ajustar seus filtros de busca</p>
          </div>
        )}
      </main>
      <BottomNavigation />
    </>
  );
};

export default Store;
