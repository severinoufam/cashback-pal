import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';

const Transactions: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-container">
        <Link to="/" className="flex items-center text-brand-green-600 mb-4">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Voltar
        </Link>

        <h1>Transações</h1>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Transactions;
