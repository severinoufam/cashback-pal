
import React from 'react';
import { User } from 'lucide-react';

interface UserBannerProps {
  username: string;
}

const UserBanner: React.FC<UserBannerProps> = ({ username }) => {
  return (
    <div className="w-full py-2 animate-fade-in mt-16"> {/* Added margin top to fix overlap with header */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center">
          <User className="w-5 h-5 text-brand-green-700" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Olá,</span>
          <span className="font-semibold text-gray-900">{username}</span>
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
