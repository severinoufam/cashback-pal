
import React from 'react';
import Header from '../components/layout/Header';
import UserBanner from '../components/home/UserBanner';
import WalletCard from '../components/home/WalletCard';
import PromotionCarousel from '../components/home/PromotionCarousel';
import StorePreview from '../components/home/StorePreview';
import PartnersPreview from '../components/home/PartnersPreview';
import BottomNavigation from '../components/layout/BottomNavigation';
import QuickActions from '../components/home/QuickActions';

const Index: React.FC = () => {
  // Mock data
  const userData = {
    username: 'Ana Silva',
    cashback: 256.78,
    points: 3450,
  };

  return (
    <>
      <Header />
      <main className="app-container px-4">
        <UserBanner username={userData.username} />
        <div className="mt-1">
          <WalletCard 
            cashbackAmount={userData.cashback} 
            pointsAmount={userData.points} 
          />
        </div>
        <PromotionCarousel />
        <div className="mt-2">
          <QuickActions />
        </div>
        <StorePreview />
        <PartnersPreview />
      </main>
      <BottomNavigation />
    </>
  );
};

export default Index;
