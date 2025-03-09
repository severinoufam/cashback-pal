
import { User, WalletTransaction, StoreItem, Partner, Order, Promotion } from '../types/models';

// Mock user data
export const getMockUser = (): User => {
  return {
    id: '1',
    username: 'Ana Silva',
    email: 'ana.silva@example.com',
    phoneNumber: '(11) 98765-4321',
    cashback: 256.78,
    points: 3450,
  };
};

// Mock wallet transactions
export const getMockTransactions = (): WalletTransaction[] => {
  return [
    {
      id: '1',
      date: new Date(2023, 9, 15),
      amount: 25.50,
      type: 'cashback',
      category: 'received',
      description: 'Cashback da compra na Farmácia Drogasil',
    },
    {
      id: '2',
      date: new Date(2023, 9, 10),
      amount: 500,
      type: 'points',
      category: 'received',
      description: 'Pontos por recarga de celular',
    },
    {
      id: '3',
      date: new Date(2023, 9, 5),
      amount: 89.90,
      type: 'cashback',
      category: 'purchase',
      description: 'Compra de Power Bank na loja',
    },
    {
      id: '4',
      date: new Date(2023, 8, 28),
      amount: 1000,
      type: 'points',
      category: 'expired',
      description: 'Pontos expirados',
    },
    {
      id: '5',
      date: new Date(2023, 8, 20),
      amount: 35.00,
      type: 'cashback',
      category: 'transfer',
      description: 'Transferência para conta bancária',
    },
  ];
};

// Mock store items
export const getMockStoreItems = (): StoreItem[] => {
  return [
    {
      id: '1',
      name: 'Fone de Ouvido Bluetooth',
      description: 'Fone sem fio com cancelamento de ruído e bateria de longa duração.',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      price: { type: 'cash', value: 129.90 },
      category: 'electronics',
      inStock: true,
    },
    {
      id: '2',
      name: 'Smartwatch Fitness',
      description: 'Relógio inteligente com monitoramento cardíaco e GPS integrado.',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      price: { type: 'points', value: 15000 },
      category: 'electronics',
      inStock: true,
    },
    {
      id: '3',
      name: 'Power Bank 10000mAh',
      description: 'Carregador portátil de alta capacidade com múltiplas saídas USB.',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      price: { type: 'cash', value: 89.90 },
      category: 'electronics',
      inStock: true,
    },
    {
      id: '4',
      name: 'Mochila Resistente à Água',
      description: 'Mochila impermeável com compartimento para laptop e múltiplos bolsos.',
      image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      price: { type: 'cash', value: 149.90 },
      category: 'accessories',
      inStock: true,
    },
    {
      id: '5',
      name: 'Câmera de Segurança Wi-Fi',
      description: 'Câmera HD com visão noturna e detecção de movimento.',
      image: 'https://images.unsplash.com/photo-1580745283059-4361334feb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      price: { type: 'points', value: 25000 },
      category: 'home',
      inStock: false,
    },
    {
      id: '6',
      name: 'Caixa de Som Bluetooth',
      description: 'Caixa de som portátil com áudio de alta qualidade e resistente à água.',
      image: 'https://images.unsplash.com/photo-1589003511276-5a42b53a0175?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      price: { type: 'cash', value: 199.90 },
      category: 'electronics',
      inStock: true,
    },
  ];
};

// Mock partners
export const getMockPartners = (): Partner[] => {
  return [
    {
      id: '1',
      name: 'Supermercado Extra',
      logo: 'https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'Supermercado',
      cashbackPercentage: 2,
      description: 'Receba 2% de cashback em todas as compras no Supermercado Extra.',
    },
    {
      id: '2',
      name: 'Posto Shell',
      logo: 'https://images.unsplash.com/photo-1545459720-aac8509eb149?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'Combustível',
      cashbackPercentage: 3,
      description: 'Abasteça seu veículo e ganhe 3% de cashback em cada abastecimento.',
    },
    {
      id: '3',
      name: 'Farmácia Drogasil',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'Farmácia',
      cashbackPercentage: 5,
      description: 'Compre medicamentos e produtos de higiene com 5% de cashback.',
    },
    {
      id: '4',
      name: 'Uber',
      logo: 'https://images.unsplash.com/photo-1549287790-00c99243127b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'Transporte',
      cashbackPercentage: 4,
      description: 'Viagens de Uber com 4% de cashback em cada corrida.',
    },
    {
      id: '5',
      name: 'Netflix',
      logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'Entretenimento',
      cashbackPercentage: 8,
      description: 'Assine a Netflix e receba 8% de cashback mensalmente.',
    },
    {
      id: '6',
      name: 'Restaurante Outback',
      logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      category: 'Alimentação',
      cashbackPercentage: 7,
      description: 'Refeições no Outback com 7% de cashback.',
    },
  ];
};

// Mock orders
export const getMockOrders = (): Order[] => {
  return [
    {
      id: '1',
      date: new Date(2023, 9, 20),
      items: [
        {
          id: '1-1',
          productId: '1',
          name: 'Fone de Ouvido Bluetooth',
          quantity: 1,
          price: 129.90,
          image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        }
      ],
      status: 'shipped',
      shippingAddress: 'Rua das Flores, 123 - São Paulo, SP',
      trackingCode: 'BR123456789',
      totalAmount: 129.90,
      paymentMethod: 'Cashback',
    },
    {
      id: '2',
      date: new Date(2023, 9, 15),
      items: [
        {
          id: '2-1',
          productId: '3',
          name: 'Power Bank 10000mAh',
          quantity: 1,
          price: 89.90,
          image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        }
      ],
      status: 'delivered',
      shippingAddress: 'Av. Paulista, 1000 - São Paulo, SP',
      trackingCode: 'BR987654321',
      totalAmount: 89.90,
      paymentMethod: 'Cashback',
    },
    {
      id: '3',
      date: new Date(2023, 9, 5),
      items: [
        {
          id: '3-1',
          productId: '2',
          name: 'Smartwatch Fitness',
          quantity: 1,
          price: 15000,
          image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        }
      ],
      status: 'pending',
      totalAmount: 15000,
      paymentMethod: 'Pontos',
    },
  ];
};

// Mock promotions
export const getMockPromotions = (): Promotion[] => {
  return [
    {
      id: '1',
      title: 'Pacote Internet 20GB',
      description: 'Receba 20% cashback na compra',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      color: 'from-blue-400 to-blue-600',
      expirationDate: new Date(2023, 11, 31),
    },
    {
      id: '2',
      title: 'Plano Premium 50GB',
      description: '30% de cashback imediato',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      color: 'from-purple-400 to-purple-600',
      expirationDate: new Date(2023, 11, 15),
    },
    {
      id: '3',
      title: 'Internet Ilimitada',
      description: 'Ganhe 10.000 pontos ao adquirir',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      color: 'from-brand-green-400 to-brand-green-600',
      expirationDate: new Date(2023, 10, 30),
    },
  ];
};
