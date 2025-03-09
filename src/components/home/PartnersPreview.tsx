
import React from 'react';
import { Building, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Supermercado Extra',
    logo: 'https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Supermercado',
  },
  {
    id: '2',
    name: 'Posto Shell',
    logo: 'https://images.unsplash.com/photo-1545459720-aac8509eb149?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Combustível',
  },
  {
    id: '3',
    name: 'Farmácia Drogasil',
    logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Farmácia',
  },
  {
    id: '4',
    name: 'Uber',
    logo: 'https://images.unsplash.com/photo-1549287790-00c99243127b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    category: 'Transporte',
  },
];

const PartnersPreview: React.FC = () => {
  return (
    <div className="mt-6 animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-medium text-gray-800">Parceiros</h2>
        <Link to="/partners" className="flex items-center text-sm text-brand-green-600 hover:text-brand-green-700 transition-colors">
          Ver todos
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {partners.slice(0, 4).map((partner) => (
          <Link key={partner.id} to={`/partners/${partner.id}`} className="group">
            <div className="flex items-center p-3 rounded-xl bg-white shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center mr-3">
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
              <div>
                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">{partner.name}</h3>
                <span className="text-xs text-gray-500">{partner.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PartnersPreview;
