
import React, { useState } from 'react';
import { Wallet as WalletIcon, ChevronRight, CreditCard, Gift, Clock, Calendar, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

interface Transaction {
  id: string;
  date: string;
  description: string;
  value: number;
  type: 'cashback' | 'points';
  category: 'received' | 'spent' | 'pending' | 'expired' | 'refund' | 'transfer';
}

const Wallet: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions'>('overview');
  const [transactionFilter, setTransactionFilter] = useState<'all' | 'cashback' | 'points'>('all');
  const [categoryFilter, setcategoryFilter] = useState<'all' | 'received' | 'spent' | 'pending' | 'expired' | 'refund' | 'transfer'>('all');
  
  // Mock data
  const walletData = {
    cashback: 256.78,
    pendingCashback: 45.20,
    points: 3450,
    pendingPoints: 650,
    expiringPoints: 200,
    expirationDate: '27/12/2023',
  };
  
  const transactions: Transaction[] = [
    {
      id: '1',
      date: '10/11/2023',
      description: 'Compra no Supermercado Extra',
      value: 25.50,
      type: 'cashback',
      category: 'received',
    },
    {
      id: '2',
      date: '05/11/2023',
      description: 'Abastecimento Posto Shell',
      value: 15.75,
      type: 'cashback',
      category: 'received',
    },
    {
      id: '3',
      date: '01/11/2023',
      description: 'Compra Farmácia Drogasil',
      value: 8.30,
      type: 'cashback',
      category: 'received',
    },
    {
      id: '4',
      date: '25/10/2023',
      description: 'Resgate para produto na loja',
      value: 120.00,
      type: 'cashback',
      category: 'spent',
    },
    {
      id: '5',
      date: '15/10/2023',
      description: 'Bônus aniversário',
      value: 1000,
      type: 'points',
      category: 'received',
    },
    {
      id: '6',
      date: '10/10/2023',
      description: 'Resgate para Smartwatch',
      value: 1500,
      type: 'points',
      category: 'spent',
    },
    {
      id: '7',
      date: '05/10/2023',
      description: 'Estorno - Produto devolvido',
      value: 500,
      type: 'points',
      category: 'refund',
    },
    {
      id: '8',
      date: '01/10/2023',
      description: 'Pagamento pendente',
      value: 45.20,
      type: 'cashback',
      category: 'pending',
    },
    {
      id: '9',
      date: '28/09/2023',
      description: 'Transferência para amigo',
      value: 10.00,
      type: 'cashback',
      category: 'transfer',
    },
    {
      id: '10',
      date: '20/09/2023',
      description: 'Pontos não utilizados',
      value: 200,
      type: 'points',
      category: 'expired',
    },
  ];
  
  // Filter transactions based on selected filters
  const filteredTransactions = transactions.filter(transaction => 
    (transactionFilter === 'all' || transaction.type === transactionFilter) &&
    (categoryFilter === 'all' || transaction.category === categoryFilter)
  );
  
  const renderTransactionIcon = (transaction: Transaction) => {
    switch (transaction.category) {
      case 'received':
        return <ArrowDownRight className="w-4 h-4 text-brand-green-500" />;
      case 'spent':
        return <ArrowUpRight className="w-4 h-4 text-brand-orange-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-amber-500" />;
      case 'expired':
        return <Calendar className="w-4 h-4 text-red-500" />;
      case 'refund':
        return <ArrowDownRight className="w-4 h-4 text-blue-500" />;
      case 'transfer':
        return <ArrowUpRight className="w-4 h-4 text-purple-500" />;
      default:
        return null;
    }
  };
  
  return (
    <>
      <Header />
      <main className="page-container pb-28">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <WalletIcon className="mr-2 text-brand-green-600" /> 
            Carteira
          </h1>
        </div>
        
        <div className="mb-4 flex">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 text-center ${activeTab === 'overview' 
              ? 'border-b-2 border-brand-green-500 text-brand-green-700 font-medium' 
              : 'text-gray-500 border-b border-gray-200'}`}
          >
            Resumo
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`flex-1 py-2 text-center ${activeTab === 'transactions' 
              ? 'border-b-2 border-brand-green-500 text-brand-green-700 font-medium' 
              : 'text-gray-500 border-b border-gray-200'}`}
          >
            Extrato
          </button>
        </div>
        
        {activeTab === 'overview' ? (
          <div className="space-y-4 animate-fade-in">
            {/* Cashback Card */}
            <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-brand-green-600 mr-2" />
                  <h2 className="text-lg font-medium text-gray-800">Cashback</h2>
                </div>
                <button className="text-sm text-brand-green-600 flex items-center" onClick={() => setActiveTab('transactions')}>
                  Ver extrato
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-brand-green-50 to-white p-4 rounded-lg">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Saldo disponível</span>
                  <div className="text-3xl font-bold text-brand-green-700">
                    R$ {walletData.cashback.toFixed(2)}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Cashback pendente</span>
                    <span className="font-medium text-amber-600">R$ {walletData.pendingCashback.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Points Card */}
            <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Gift className="w-5 h-5 text-brand-orange-600 mr-2" />
                  <h2 className="text-lg font-medium text-gray-800">Pontos</h2>
                </div>
                <button className="text-sm text-brand-orange-600 flex items-center" onClick={() => setActiveTab('transactions')}>
                  Ver extrato
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-brand-orange-50 to-white p-4 rounded-lg">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Saldo disponível</span>
                  <div className="text-3xl font-bold text-brand-orange-700">
                    {walletData.points.toLocaleString()} pts
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Pontos pendentes</span>
                    <span className="font-medium text-amber-600">{walletData.pendingPoints.toLocaleString()} pts</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Expiram em {walletData.expirationDate}</span>
                    <span className="font-medium text-red-600">{walletData.expiringPoints.toLocaleString()} pts</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 bg-brand-green-500 text-white rounded-xl font-medium hover:bg-brand-green-600 transition-colors">
                Transferir
              </button>
              <button className="py-3 bg-white border border-brand-green-500 text-brand-green-700 rounded-xl font-medium hover:bg-brand-green-50 transition-colors">
                Resgatar
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            {/* Filters */}
            <div className="mb-4">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <button
                  onClick={() => setTransactionFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    transactionFilter === 'all'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setTransactionFilter('cashback')}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    transactionFilter === 'cashback'
                      ? 'bg-brand-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Cashback
                </button>
                <button
                  onClick={() => setTransactionFilter('points')}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    transactionFilter === 'points'
                      ? 'bg-brand-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Pontos
                </button>
              </div>
              
              <div className="flex space-x-2 overflow-x-auto pb-2 mt-2">
                <button
                  onClick={() => setcategoryFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    categoryFilter === 'all'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setcategoryFilter('received')}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    categoryFilter === 'received'
                      ? 'bg-brand-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Recebidos
                </button>
                <button
                  onClick={() => setcategoryFilter('spent')}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    categoryFilter === 'spent'
                      ? 'bg-brand-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Gastos
                </button>
                <button
                  onClick={() => setcategoryFilter('pending')}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    categoryFilter === 'pending'
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Pendentes
                </button>
                <button
                  onClick={() => setcategoryFilter('expired')}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    categoryFilter === 'expired'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Expirados
                </button>
              </div>
            </div>
            
            {/* Transactions list */}
            <div className="space-y-3">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map(transaction => (
                  <div key={transaction.id} className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                            {renderTransactionIcon(transaction)}
                          </div>
                          <span className="text-sm font-medium line-clamp-1">{transaction.description}</span>
                        </div>
                        <span className="text-xs text-gray-500">{transaction.date}</span>
                      </div>
                      <div className="text-right flex flex-col justify-center">
                        <span className={`font-medium ${
                          transaction.category === 'spent' || transaction.category === 'transfer' || transaction.category === 'expired'
                            ? 'text-red-600'
                            : transaction.category === 'pending'
                            ? 'text-amber-600'
                            : 'text-brand-green-600'
                        }`}>
                          {transaction.category === 'spent' || transaction.category === 'transfer' || transaction.category === 'expired' ? '-' : '+'}
                          {transaction.type === 'cashback' 
                            ? `R$ ${transaction.value.toFixed(2)}` 
                            : `${transaction.value.toLocaleString()} pts`}
                        </span>
                        <span className="text-xs text-gray-500 capitalize">
                          {transaction.category === 'received' ? 'Recebido' : 
                           transaction.category === 'spent' ? 'Gasto' : 
                           transaction.category === 'pending' ? 'Pendente' : 
                           transaction.category === 'expired' ? 'Expirado' : 
                           transaction.category === 'refund' ? 'Estorno' : 'Transferência'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-gray-500">
                  Nenhuma transação encontrada para os filtros selecionados.
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <BottomNavigation />
    </>
  );
};

export default Wallet;
