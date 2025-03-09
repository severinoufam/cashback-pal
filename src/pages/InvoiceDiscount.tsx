
import React from 'react';
import { FileText, ArrowLeft, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import { getMockUser } from '../services/mockDataService';
import { formatCurrency } from '../utils/formatters';

const InvoiceDiscount: React.FC = () => {
  const userData = getMockUser();
  
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
            <Percent className="mr-2 text-brand-green-600" /> 
            Desconto na Fatura
          </h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <p className="text-gray-600 mb-4">
            Utilize seu cashback acumulado para obter desconto em sua próxima fatura.
          </p>
          
          <div className="bg-brand-green-50 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-600">Cashback disponível:</span>
              <span className="text-lg font-semibold text-brand-green-600">
                {formatCurrency(userData.cashback)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Próxima fatura:</span>
              <span className="text-lg font-semibold text-gray-800">R$ 120,50</span>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Valor a utilizar como desconto
              </label>
              <input
                type="number"
                placeholder="Digite o valor"
                className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-green-400 focus:ring-2 focus:ring-brand-green-200 focus:outline-none transition-all"
              />
              <p className="text-xs text-gray-500 mt-1">Valor máximo: R$ 120,50</p>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-brand-green-500 text-white rounded-xl font-medium hover:bg-brand-green-600 transition-colors"
            >
              Aplicar Desconto
            </button>
          </form>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Histórico de Descontos</h2>
          
          <div className="space-y-3">
            <div className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium">Outubro 2023</span>
                  <p className="text-xs text-gray-500">Aplicado em: 05/10/2023</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-brand-green-600">R$ 75,00</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium">Setembro 2023</span>
                  <p className="text-xs text-gray-500">Aplicado em: 05/09/2023</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-brand-green-600">R$ 50,00</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium">Agosto 2023</span>
                  <p className="text-xs text-gray-500">Aplicado em: 05/08/2023</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-brand-green-600">R$ 60,00</span>
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

export default InvoiceDiscount;
