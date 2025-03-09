
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { 
  ArrowDown, ArrowUp, Gift, Search, Calendar, Download, Filter,
  TrendingUp, TrendingDown, Package, RefreshCw, AlertTriangle
} from 'lucide-react';

type TransactionType = 'received' | 'spent' | 'pending' | 'expired' | 'refund' | 'transfer';
type FilterType = 'all' | TransactionType;

interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  isPoints: boolean;
  date: string;
  description: string;
  partner?: string;
}

// Mock data for transactions
const transactions: Transaction[] = [
  {
    id: '1',
    type: 'received',
    amount: 45.90,
    isPoints: false,
    date: '2023-06-08T10:23:15',
    description: 'Compra Supermercado Extra',
    partner: 'Supermercado Extra',
  },
  {
    id: '2',
    type: 'spent',
    amount: 89.90,
    isPoints: false,
    date: '2023-06-05T14:10:30',
    description: 'Power Bank 10000mAh',
  },
  {
    id: '3',
    type: 'received',
    amount: 1200,
    isPoints: true,
    date: '2023-06-04T09:45:12',
    description: 'Abastecimento',
    partner: 'Posto Shell',
  },
  {
    id: '4',
    type: 'pending',
    amount: 35.20,
    isPoints: false,
    date: '2023-06-03T16:30:45',
    description: 'Compra Farmácia',
    partner: 'Farmácia Drogasil',
  },
  {
    id: '5',
    type: 'expired',
    amount: 12.60,
    isPoints: false,
    date: '2023-05-15T11:25:30',
    description: 'Cashback expirado',
  },
  {
    id: '6',
    type: 'spent',
    amount: 750,
    isPoints: true,
    date: '2023-05-12T15:40:22',
    description: 'Voucher Cinema',
  },
  {
    id: '7',
    type: 'transfer',
    amount: 50.00,
    isPoints: false,
    date: '2023-05-10T13:22:18',
    description: 'Transferência para parceiro',
    partner: 'Uber',
  },
  {
    id: '8',
    type: 'refund',
    amount: 29.90,
    isPoints: false,
    date: '2023-05-08T09:15:40',
    description: 'Estorno de compra cancelada',
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const getTransactionIcon = (type: TransactionType) => {
  switch (type) {
    case 'received':
      return <ArrowDown className="w-5 h-5 text-green-600" />;
    case 'spent':
      return <ArrowUp className="w-5 h-5 text-red-600" />;
    case 'pending':
      return <Clock className="w-5 h-5 text-blue-600" />;
    case 'expired':
      return <AlertTriangle className="w-5 h-5 text-amber-600" />;
    case 'refund':
      return <RefreshCw className="w-5 h-5 text-purple-600" />;
    case 'transfer':
      return <TrendingUp className="w-5 h-5 text-indigo-600" />;
    default:
      return <ArrowDown className="w-5 h-5 text-gray-600" />;
  }
};

const Clock = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const getTransactionColor = (type: TransactionType) => {
  switch (type) {
    case 'received':
      return 'text-green-600';
    case 'spent':
      return 'text-red-600';
    case 'pending':
      return 'text-blue-600';
    case 'expired':
      return 'text-amber-600';
    case 'refund':
      return 'text-purple-600';
    case 'transfer':
      return 'text-indigo-600';
    default:
      return 'text-gray-600';
  }
};

const Transactions: React.FC = () => {
  const [activeType, setActiveType] = useState<'cashback' | 'points'>('cashback');
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTransactions = transactions.filter(transaction => {
    // Filter by type (cashback/points)
    if (activeType === 'cashback' && transaction.isPoints) return false;
    if (activeType === 'points' && !transaction.isPoints) return false;
    
    // Filter by transaction type
    if (filter !== 'all' && transaction.type !== filter) return false;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        transaction.description.toLowerCase().includes(query) ||
        (transaction.partner && transaction.partner.toLowerCase().includes(query))
      );
    }
    
    return true;
  });
  
  // Group transactions by date
  const groupedTransactions: Record<string, Transaction[]> = {};
  
  filteredTransactions.forEach(transaction => {
    const date = formatDate(transaction.date);
    if (!groupedTransactions[date]) {
      groupedTransactions[date] = [];
    }
    groupedTransactions[date].push(transaction);
  });

  return (
    <>
      <Header />
      <main className="page-container">
        <h1 className="text-2xl font-semibold mb-4">Extrato</h1>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 animate-fade-in">
          <div className="grid grid-cols-2">
            <button 
              onClick={() => setActiveType('cashback')}
              className={`py-3 text-center font-medium ${
                activeType === 'cashback' 
                  ? 'bg-brand-green-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Cashback
            </button>
            <button 
              onClick={() => setActiveType('points')}
              className={`py-3 text-center font-medium ${
                activeType === 'points' 
                  ? 'bg-brand-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Pontos
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Buscar no extrato..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            <button 
              onClick={() => setFilter('all')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-brand-green-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            
            <button 
              onClick={() => setFilter('received')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                filter === 'received' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ArrowDown className="w-4 h-4 mr-1" />
              Recebidos
            </button>
            
            <button 
              onClick={() => setFilter('spent')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                filter === 'spent' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Gastos
            </button>
            
            <button 
              onClick={() => setFilter('pending')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                filter === 'pending' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Clock className="w-4 h-4 mr-1" />
              Pendentes
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors">
            <Calendar className="w-4 h-4 mr-1" />
            Filtrar por período
          </button>
          
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors">
            <Download className="w-4 h-4 mr-1" />
            Exportar
          </button>
        </div>
        
        {Object.keys(groupedTransactions).length > 0 ? (
          <div className="space-y-6">
            {Object.entries(groupedTransactions).map(([date, dayTransactions]) => (
              <div key={date} className="animate-fade-in">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <h3 className="text-sm font-medium text-gray-500">{date}</h3>
                </div>
                
                <div className="space-y-3">
                  {dayTransactions.map((transaction) => (
                    <div 
                      key={transaction.id}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          {getTransactionIcon(transaction.type)}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-sm font-medium text-gray-800">{transaction.description}</h4>
                              {transaction.partner && (
                                <span className="text-xs text-gray-500">{transaction.partner}</span>
                              )}
                              <div className="text-xs text-gray-400 mt-1">
                                {formatTime(transaction.date)}
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                                {transaction.type === 'received' || transaction.type === 'refund' ? '+' : 
                                  transaction.type === 'pending' ? '' : '-'}
                                {transaction.isPoints 
                                  ? `${transaction.amount.toLocaleString()} pts` 
                                  : `R$ ${transaction.amount.toFixed(2)}`}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {transaction.type === 'received' && 'Recebido'}
                                {transaction.type === 'spent' && 'Gasto'}
                                {transaction.type === 'pending' && 'Pendente'}
                                {transaction.type === 'expired' && 'Expirado'}
                                {transaction.type === 'refund' && 'Estornado'}
                                {transaction.type === 'transfer' && 'Transferido'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Nenhuma transação encontrada</h3>
            <p className="text-sm text-gray-500 mt-1">
              {searchQuery ? "Tente ajustar sua pesquisa" : "Não há transações para os filtros selecionados"}
            </p>
          </div>
        )}
      </main>
      <BottomNavigation />
    </>
  );
};

export default Transactions;
