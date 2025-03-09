
import React from 'react';
import { CreditCard, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WalletCardProps {
  cashbackAmount: number;
  pointsAmount: number;
}

const WalletCard: React.FC<WalletCardProps> = ({ cashbackAmount, pointsAmount }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-gradient-to-br from-brand-green-50 to-white shadow-glass border border-brand-green-100 animate-scale-in hover:shadow-glass-md transition-shadow duration-300">
      <div className="p-2"> {/* Further reduced padding */}
        <h2 className="text-xs font-medium text-brand-green-800 mb-1">Sua Carteira</h2> {/* Smaller text and reduced margin */}
        
        <div className="grid grid-cols-2 gap-2"> {/* Further reduced gap */}
          <Link to="/wallet" className="flex flex-col items-start p-2 rounded-xl bg-gradient-to-br from-brand-green-400 to-brand-green-600 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-center justify-center mb-0.5">
              <CreditCard className="w-3.5 h-3.5 mr-1" /> {/* Smaller icon */}
              <span className="text-xs font-medium">Cashback</span>
            </div>
            <span className="text-lg font-bold tracking-tight"> {/* Smaller text */}
              R$ {cashbackAmount.toFixed(2)}
            </span>
          </Link>
          
          <Link to="/wallet" className="flex flex-col items-start p-2 rounded-xl bg-gradient-to-br from-brand-orange-400 to-brand-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-center justify-center mb-0.5">
              <Gift className="w-3.5 h-3.5 mr-1" /> {/* Smaller icon */}
              <span className="text-xs font-medium">Pontos</span>
            </div>
            <span className="text-lg font-bold tracking-tight"> {/* Smaller text */}
              {pointsAmount.toLocaleString()}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
