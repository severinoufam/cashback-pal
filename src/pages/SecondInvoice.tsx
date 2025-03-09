import React from 'react';
import { Receipt, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';

const SecondInvoice: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-container">
        <Link to="/" className="flex items-center text-brand-green-600 mb-4">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Voltar
        </Link>
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <Receipt className="mr-2 text-brand-green-600" /> 
            Segunda Via
          </h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <p className="text-gray-600 mb-4">
            Consulte e emita a segunda via dos seus pagamentos de forma rápida e prática.
          </p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CPF ou CNPJ
              </label>
              <input
                type="text"
                placeholder="Digite seu CPF ou CNPJ"
                className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-green-400 focus:ring-2 focus:ring-brand-green-200 focus:outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mês de referência
              </label>
              <select className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-green-400 focus:ring-2 focus:ring-brand-green-200 focus:outline-none transition-all">
                <option value="">Selecione o mês</option>
                <option value="11-2023">Novembro 2023</option>
                <option value="10-2023">Outubro 2023</option>
                <option value="09-2023">Setembro 2023</option>
                <option value="08-2023">Agosto 2023</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-brand-green-500 text-white rounded-xl font-medium hover:bg-brand-green-600 transition-colors"
            >
              Consultar
            </button>
          </form>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Faturas Recentes</h2>
          
          <div className="space-y-3">
            <div className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium">Novembro 2023</span>
                  <p className="text-xs text-gray-500">Vencimento: 10/11/2023</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-brand-green-600">R$ 120,50</span>
                  <p className="text-xs text-green-600">Pago</p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium">Outubro 2023</span>
                  <p className="text-xs text-gray-500">Vencimento: 10/10/2023</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-brand-green-600">R$ 115,20</span>
                  <p className="text-xs text-green-600">Pago</p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium">Setembro 2023</span>
                  <p className="text-xs text-gray-500">Vencimento: 10/09/2023</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-brand-green-600">R$ 118,75</span>
                  <p className="text-xs text-green-600">Pago</p>
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

export default SecondInvoice;
