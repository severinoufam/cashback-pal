
import React from 'react';
import Header from '../components/Header';
import UserBanner from '../components/UserBanner';
import WalletCard from '../components/WalletCard';
import PromotionCarousel from '../components/PromotionCarousel';
import StorePreview from '../components/StorePreview';
import PartnersPreview from '../components/PartnersPreview';
import BottomNavigation from '../components/BottomNavigation';

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
      <main className="app-container">
        <UserBanner username={userData.username} />
        <WalletCard 
          cashbackAmount={userData.cashback} 
          pointsAmount={userData.points} 
        />
        <PromotionCarousel />
        <StorePreview />
        <PartnersPreview />
      </main>
      <BottomNavigation />
    </>
  );
};

export default Index;
