
import React from 'react';
import { CreditCard, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WalletCardProps {
  cashbackAmount: number;
  pointsAmount: number;
}

const WalletCard: React.FC<WalletCardProps> = ({ cashbackAmount, pointsAmount }) => {
  return (
    <div className="mt-4 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-green-50 to-white shadow-glass border border-brand-green-100 animate-scale-in hover:shadow-glass-md transition-shadow duration-300">
      <div className="p-5">
        <h2 className="text-sm font-medium text-brand-green-800 mb-4">Sua Carteira</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <Link to="/wallet" className="flex flex-col items-start p-4 rounded-xl bg-gradient-to-br from-brand-green-400 to-brand-green-600 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-center justify-center mb-1">
              <CreditCard className="w-5 h-5 mr-2" />
              <span className="text-xs font-medium">Cashback</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              R$ {cashbackAmount.toFixed(2)}
            </span>
          </Link>
          
          <Link to="/wallet" className="flex flex-col items-start p-4 rounded-xl bg-gradient-to-br from-brand-orange-400 to-brand-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-center justify-center mb-1">
              <Gift className="w-5 h-5 mr-2" />
              <span className="text-xs font-medium">Pontos</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              {pointsAmount.toLocaleString()}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
