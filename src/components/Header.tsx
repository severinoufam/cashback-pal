
import React from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-100 animate-fade-in">
      <div className="max-w-screen-lg mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-brand-green-500 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">MR</span>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green-400 to-brand-green-600 opacity-80"></div>
          </div>
          <span className="font-semibold text-xl tracking-tight text-gray-900">Jomar Vantagens</span>
        </Link>
        
        <div className="flex items-center">
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-orange-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
