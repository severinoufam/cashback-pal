
import React from 'react';
import { FileText, Receipt, Phone, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickAction {
  id: string;
  name: string;
  icon: React.ElementType;
  path: string;
  color: string;
}

const quickActions: QuickAction[] = [
  {
    id: '1',
    name: 'Segunda via',
    icon: Receipt,
    path: '/second-invoice',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: '2',
    name: 'Desconto fatura',
    icon: FileText,
    path: '/invoice-discount',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: '3',
    name: 'Contato',
    icon: Phone,
    path: '/contact',
    color: 'from-pink-400 to-pink-600',
  },
  {
    id: '4',
    name: 'Regulamento',
    icon: FileCode,
    path: '/rules',
    color: 'from-amber-400 to-amber-600',
  },
];

const QuickActions: React.FC = () => {
  return (
    <div className="mt-4 animate-fade-in">
      <h2 className="text-lg font-medium text-gray-800 mb-3">Ações rápidas</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {quickActions.map((action) => (
          <Link key={action.id} to={action.path} className="group">
            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02] h-full">
              <div className={`p-3 flex flex-col items-center justify-center text-white bg-gradient-to-br ${action.color}`}>
                <action.icon className="w-6 h-6 mb-1" />
                <span className="text-sm font-medium text-center">{action.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
