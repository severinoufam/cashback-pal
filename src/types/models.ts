
// User related types
export interface User {
  id: string;
  username: string;
  email?: string;
  phoneNumber?: string;
  cashback: number;
  points: number;
}

// Wallet related types
export interface WalletTransaction {
  id: string;
  date: Date;
  amount: number;
  type: 'cashback' | 'points';
  category: 'received' | 'pending' | 'expired' | 'purchase' | 'refund' | 'transfer';
  description: string;
  reference?: string;
}

// Store related types
export interface StoreItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: {
    type: 'cash' | 'points';
    value: number;
  };
  category: string;
  inStock: boolean;
}

// Partners related types
export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  description?: string;
  cashbackPercentage?: number;
}

// Order related types
export interface Order {
  id: string;
  date: Date;
  items: OrderItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress?: string;
  trackingCode?: string;
  totalAmount: number;
  paymentMethod: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

// Promotion related types
export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  expirationDate?: Date;
}

// Quick action types
export interface QuickAction {
  id: string;
  name: string;
  icon: React.ElementType;
  path: string;
  color: string;
}
