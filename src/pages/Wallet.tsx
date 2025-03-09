import React, { useState } from 'react';
import { Wallet as WalletIcon, ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';

const Wallet: React.FC = () => {
  const [balance, setBalance] = useState(1500.50);
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <>
      <Header />
      <main className="page-container">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <WalletIcon className="mr-2 text-brand-green-600" />
            Carteira
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500">Saldo disponível</p>
              <p className="text-2xl font-medium text-gray-800">
                {showBalance ? `R$ ${balance.toFixed(2)}` : 'R$ *****'}
              </p>
            </div>
            <button
              onClick={toggleBalanceVisibility}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              {showBalance ? 'Ocultar' : 'Ver saldo'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 px-4 bg-brand-green-500 text-white rounded-xl font-medium hover:bg-brand-green-600 transition-colors">
              Adicionar saldo
            </button>
            <button className="py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              Retirar saldo
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Transações recentes</h2>

          <div className="space-y-3">
            <div className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium">Compra no Supermercado X</span>
                  <p className="text-xs text-gray-500">15/11/2023</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-red-600">- R$ 85,50</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium">Crédito de cashback</span>
                  <p className="text-xs text-gray-500">14/11/2023</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-green-600">+ R$ 12,30</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium">Transferência recebida</span>
                  <p className="text-xs text-gray-500">10/11/2023</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-green-600">+ R$ 50,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Wallet;
