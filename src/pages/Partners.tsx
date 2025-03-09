
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Search, ArrowRight, ChevronRight } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  cashbackPercentage: number;
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Supermercado Extra',
    logo: 'https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Supermercado',
    description: 'Rede de supermercados com mais de 100 lojas pelo Brasil.',
    cashbackPercentage: 3,
  },
  {
    id: '2',
    name: 'Posto Shell',
    logo: 'https://images.unsplash.com/photo-1545459720-aac8509eb149?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Combustível',
    description: 'Postos de combustível com presença em todo o país.',
    cashbackPercentage: 2,
  },
  {
    id: '3',
    name: 'Farmácia Drogasil',
    logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Farmácia',
    description: 'Rede de farmácias com mais de 2.000 unidades.',
    cashbackPercentage: 4,
  },
  {
    id: '4',
    name: 'Uber',
    logo: 'https://images.unsplash.com/photo-1549287790-00c99243127b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Transporte',
    description: 'Serviço de transporte por aplicativo.',
    cashbackPercentage: 5,
  },
  {
    id: '5',
    name: 'Netflix',
    logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Entretenimento',
    description: 'Serviço de streaming de filmes e séries.',
    cashbackPercentage: 8,
  },
  {
    id: '6',
    name: 'Booking.com',
    logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Hospedagem',
    description: 'Plataforma de reserva de hotéis e acomodações.',
    cashbackPercentage: 6,
  },
  {
    id: '7',
    name: 'iFood',
    logo: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Alimentação',
    description: 'Serviço de delivery de comida.',
    cashbackPercentage: 5,
  },
  {
    id: '8',
    name: 'Magazine Luiza',
    logo: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Varejo',
    description: 'Loja de departamentos e e-commerce.',
    cashbackPercentage: 2.5,
  },
];

const categories = [...new Set(partners.map(partner => partner.category))];

const Partners: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showDetailsId, setShowDetailsId] = useState<string | null>(null);

  const filteredPartners = partners.filter(partner => {
    // Filter by search query
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category                     
    const matchesCategory = selectedCategory === null || partner.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className="page-container">
        <h1 className="text-2xl font-semibold mb-4">Parceiros</h1>
        
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Buscar parceiros..."
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
        
        <div className="space-y-4">
          {filteredPartners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md animate-fade-in"
            >
              <div 
                className="flex items-center p-4 cursor-pointer"
                onClick={() => setShowDetailsId(showDetailsId === partner.id ? null : partner.id)}
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center mr-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23CBD5E0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='7' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cpath d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'%3E%3C/path%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-medium text-gray-800">{partner.name}</h3>
                      <span className="text-xs text-gray-500">{partner.category}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-brand-green-600 font-medium">Cashback</span>
                      <span className="text-lg font-semibold text-brand-green-600">{partner.cashbackPercentage}%</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className={`ml-2 w-5 h-5 text-gray-400 transition-transform ${
                  showDetailsId === partner.id ? 'rotate-90' : ''
                }`} />
              </div>
              
              {showDetailsId === partner.id && (
                <div className="px-4 pb-4 border-t border-gray-100 pt-3 animate-fade-in">
                  <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                  <button className="w-full py-3 rounded-lg bg-brand-green-500 text-white font-medium text-sm hover:bg-brand-green-600 transition-colors flex items-center justify-center">
                    Transferir cashback
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {filteredPartners.length === 0 && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Nenhum parceiro encontrado</h3>
            <p className="text-sm text-gray-500 mt-1">Tente ajustar seus filtros de busca</p>
          </div>
        )}
      </main>
      <BottomNavigation />
    </>
  );
};

export default Partners;
