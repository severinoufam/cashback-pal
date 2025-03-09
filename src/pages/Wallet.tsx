
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';
import { CreditCard, Gift, ArrowUp, ArrowDown, TrendingUp, BarChart2, Clock, Activity } from 'lucide-react';

interface WalletData {
  cashback: {
    balance: number;
    lastUpdate: string;
    history: {
      pending: number;
      available: number;
      used: number;
      expired: number;
    };
  };
  points: {
    balance: number;
    lastUpdate: string;
    expiringPoints: number;
    expirationDate: string;
    history: {
      earned: number;
      spent: number;
      expired: number;
    };
  };
}

// Mock data for the wallet
const walletData: WalletData = {
  cashback: {
    balance: 256.78,
    lastUpdate: '2023-06-10T14:30:45',
    history: {
      pending: 45.20,
      available: 256.78,
      used: 189.40,
      expired: 12.60,
    },
  },
  points: {
    balance: 3450,
    lastUpdate: '2023-06-09T10:15:30',
    expiringPoints: 500,
    expirationDate: '2023-07-15',
    history: {
      earned: 4200,
      spent: 750,
      expired: 0,
    },
  },
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const Wallet: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cashback' | 'points'>('cashback');

  return (
    <>
      <Header />
      <main className="page-container">
        <h1 className="text-2xl font-semibold mb-4">Minha Carteira</h1>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 animate-fade-in">
          <div className="grid grid-cols-2">
            <button 
              onClick={() => setActiveTab('cashback')}
              className={`py-3 text-center font-medium ${
                activeTab === 'cashback' 
                  ? 'bg-brand-green-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Cashback
            </button>
            <button 
              onClick={() => setActiveTab('points')}
              className={`py-3 text-center font-medium ${
                activeTab === 'points' 
                  ? 'bg-brand-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Pontos
            </button>
          </div>
          
          <div className="p-5">
            {activeTab === 'cashback' ? (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-brand-green-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-500">Cashback Disponível</h3>
                      <p className="text-2xl font-bold text-gray-900">R$ {walletData.cashback.balance.toFixed(2)}</p>
                    </div>
                  </div>
                  <Link 
                    to="/transactions" 
                    className="px-4 py-2 rounded-lg bg-brand-green-500 text-white text-sm font-medium hover:bg-brand-green-600 transition-colors"
                  >
                    Ver Extrato
                  </Link>
                </div>
                
                <div className="text-xs text-gray-500 mb-4">
                  Atualizado em: {formatDate(walletData.cashback.lastUpdate)}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <ArrowDown className="w-4 h-4 text-brand-green-600 mr-1" />
                      <span className="text-sm font-medium text-gray-700">A Receber</span>
                    </div>
                    <p className="text-lg font-semibold text-brand-green-600">
                      R$ {walletData.cashback.history.pending.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <ArrowUp className="w-4 h-4 text-brand-orange-600 mr-1" />
                      <span className="text-sm font-medium text-gray-700">Utilizado</span>
                    </div>
                    <p className="text-lg font-semibold text-brand-orange-600">
                      R$ {walletData.cashback.history.used.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-brand-orange-100 flex items-center justify-center">
                      <Gift className="w-5 h-5 text-brand-orange-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-500">Pontos Disponíveis</h3>
                      <p className="text-2xl font-bold text-gray-900">{walletData.points.balance.toLocaleString()}</p>
                    </div>
                  </div>
                  <Link 
                    to="/transactions" 
                    className="px-4 py-2 rounded-lg bg-brand-orange-500 text-white text-sm font-medium hover:bg-brand-orange-600 transition-colors"
                  >
                    Ver Extrato
                  </Link>
                </div>
                
                <div className="text-xs text-gray-500 mb-4">
                  Atualizado em: {formatDate(walletData.points.lastUpdate)}
                </div>
                
                <div className="bg-brand-orange-50 border border-brand-orange-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-1">
                    <Clock className="w-4 h-4 text-brand-orange-600 mr-1" />
                    <span className="text-sm font-medium text-brand-orange-800">Pontos a expirar</span>
                  </div>
                  <p className="text-sm text-brand-orange-800">
                    {walletData.points.expiringPoints.toLocaleString()} pontos expiram em {new Date(walletData.points.expirationDate).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                      <span className="text-xs font-medium text-gray-700">Ganhos</span>
                    </div>
                    <p className="text-sm font-semibold text-green-600">
                      {walletData.points.history.earned.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <BarChart2 className="w-4 h-4 text-blue-600 mr-1" />
                      <span className="text-xs font-medium text-gray-700">Gastos</span>
                    </div>
                    <p className="text-sm font-semibold text-blue-600">
                      {walletData.points.history.spent.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <Activity className="w-4 h-4 text-red-600 mr-1" />
                      <span className="text-xs font-medium text-gray-700">Expirados</span>
                    </div>
                    <p className="text-sm font-semibold text-red-600">
                      {walletData.points.history.expired.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-medium text-gray-800">Ações Rápidas</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Link to="/partners" className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-brand-green-100 flex items-center justify-center mb-2">
                <ArrowUp className="w-6 h-6 text-brand-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">Transferir para Parceiros</span>
            </Link>
            
            <Link to="/store" className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-brand-orange-100 flex items-center justify-center mb-2">
                <Gift className="w-6 h-6 text-brand-orange-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">Trocar Pontos por Produtos</span>
            </Link>
          </div>
        </section>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Wallet;
