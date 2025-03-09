
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Users, Wallet, ClipboardList } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { path: '/', icon: Home, label: 'Início' },
    { path: '/store', icon: ShoppingBag, label: 'Loja' },
    { path: '/partners', icon: Users, label: 'Parceiros' },
    { path: '/wallet', icon: Wallet, label: 'Carteira' },
    { path: '/orders', icon: ClipboardList, label: 'Pedidos' },
  ];
  
  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-lg border-t border-gray-200 z-50 animate-slide-in-bottom">
      <div className="max-w-screen-lg mx-auto px-2">
        <div className="flex justify-between">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive(item.path) 
                  ? 'text-brand-green-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <item.icon className={`w-6 h-6 ${isActive(item.path) ? 'animate-pulse-subtle' : ''}`} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
