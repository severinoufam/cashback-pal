
import React, { useState } from 'react';
import { Users, Search, MapPin, Phone, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  address: string;
  phone: string;
  cashbackPercentage: number;
}

const Partners: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock data for partners
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Supermercado Extra',
      logo: 'https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'supermercado',
      address: 'Av. Paulista, 1578 - Bela Vista, São Paulo - SP',
      phone: '(11) 3456-7890',
      cashbackPercentage: 3,
    },
    {
      id: '2',
      name: 'Posto Shell',
      logo: 'https://images.unsplash.com/photo-1545459720-aac8509eb149?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'combustivel',
      address: 'Rua Augusta, 1200 - Consolação, São Paulo - SP',
      phone: '(11) 3456-7891',
      cashbackPercentage: 5,
    },
    {
      id: '3',
      name: 'Farmácia Drogasil',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'farmacia',
      address: 'Av. Brigadeiro Faria Lima, 2232 - Jardim Paulistano, São Paulo - SP',
      phone: '(11) 3456-7892',
      cashbackPercentage: 4,
    },
    {
      id: '4',
      name: 'Uber',
      logo: 'https://images.unsplash.com/photo-1549287790-00c99243127b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'transporte',
      address: 'Serviço online',
      phone: '(11) 3456-7893',
      cashbackPercentage: 2,
    },
    {
      id: '5',
      name: 'Restaurante Outback',
      logo: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'restaurante',
      address: 'Shopping Ibirapuera, Av. Ibirapuera, 3103 - São Paulo - SP',
      phone: '(11) 3456-7894',
      cashbackPercentage: 8,
    },
    {
      id: '6',
      name: 'Cinema Cinemark',
      logo: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'lazer',
      address: 'Shopping Eldorado, Av. Rebouças, 3970 - São Paulo - SP',
      phone: '(11) 3456-7895',
      cashbackPercentage: 10,
    },
  ];
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'supermercado', name: 'Supermercados' },
    { id: 'combustivel', name: 'Combustível' },
    { id: 'farmacia', name: 'Farmácias' },
    { id: 'restaurante', name: 'Restaurantes' },
    { id: 'lazer', name: 'Lazer' },
    { id: 'transporte', name: 'Transporte' },
  ];
  
  const filteredPartners = partners.filter(partner => 
    (selectedCategory === 'all' || partner.category === selectedCategory) &&
    (partner.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     partner.address.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <>
      <Header />
      <main className="page-container">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <Users className="mr-2 text-brand-green-600" /> 
            Parceiros
          </h1>
        </div>
        
        <div className="mb-4 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar parceiros..."
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
        
        {filteredPartners.map(partner => (
          <div key={partner.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 mb-4">
            <div className="p-4">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
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
                    <h3 className="text-lg font-semibold text-gray-800">{partner.name}</h3>
                    <span className="bg-brand-green-100 text-brand-green-700 text-xs px-2 py-1 rounded-full font-medium">
                      {partner.cashbackPercentage}% cashback
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 block mt-1">{partner.category}</span>
                  
                  <div className="mt-3 flex flex-col space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-gray-400" />
                      <span className="line-clamp-1">{partner.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-gray-400" />
                      <span>{partner.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 bg-brand-green-500 text-white rounded-lg hover:bg-brand-green-600 transition-colors flex items-center">
                  Usar Cashback
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      <BottomNavigation />
    </>
  );
};

export default Partners;
