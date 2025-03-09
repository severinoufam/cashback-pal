
import React, { useState } from 'react';
import { ClipboardList, Search, Package, Check, Clock, Truck, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  estimatedDelivery?: string;
  totalPrice: number;
}

const Orders: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'>('all');
  
  const toggleOrderExpand = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };
  
  // Mock data for orders
  const orders: Order[] = [
    {
      id: 'ORD-2023-11-001',
      date: '15/11/2023',
      items: [
        {
          id: 'ITEM001',
          name: 'Fone de Ouvido Bluetooth',
          price: 129.90,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        }
      ],
      status: 'delivered',
      trackingNumber: 'BR4329878233BR',
      estimatedDelivery: '20/11/2023',
      totalPrice: 129.90,
    },
    {
      id: 'ORD-2023-10-002',
      date: '20/10/2023',
      items: [
        {
          id: 'ITEM002',
          name: 'Power Bank 10000mAh',
          price: 89.90,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        },
        {
          id: 'ITEM003',
          name: 'Cabo USB-C 2m',
          price: 29.90,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        }
      ],
      status: 'shipped',
      trackingNumber: 'BR4329878234BR',
      estimatedDelivery: '25/11/2023',
      totalPrice: 149.70,
    },
    {
      id: 'ORD-2023-11-003',
      date: '10/11/2023',
      items: [
        {
          id: 'ITEM004',
          name: 'Smartwatch Fitness',
          price: 199.90,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        }
      ],
      status: 'processing',
      estimatedDelivery: '25/11/2023',
      totalPrice: 199.90,
    },
    {
      id: 'ORD-2023-11-004',
      date: '05/11/2023',
      items: [
        {
          id: 'ITEM005',
          name: 'Caixa de Som Bluetooth',
          price: 199.90,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1589003511276-5a42b53a0175?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        }
      ],
      status: 'pending',
      totalPrice: 199.90,
    },
    {
      id: 'ORD-2023-10-005',
      date: '28/10/2023',
      items: [
        {
          id: 'ITEM006',
          name: 'Mouse sem fio',
          price: 49.90,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        }
      ],
      status: 'cancelled',
      totalPrice: 49.90,
    }
  ];
  
  // Filter orders based on search query and status filter
  const filteredOrders = orders.filter(order => 
    (order.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
     order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    (statusFilter === 'all' || order.status === statusFilter)
  );
  
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-amber-100 text-amber-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
    }
  };
  
  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'processing': return <Package className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'delivered': return <Check className="w-4 h-4" />;
      case 'cancelled': return <AlertCircle className="w-4 h-4" />;
    }
  };
  
  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'Aguardando pagamento';
      case 'processing': return 'Em processamento';
      case 'shipped': return 'Enviado';
      case 'delivered': return 'Entregue';
      case 'cancelled': return 'Cancelado';
    }
  };
  
  return (
    <>
      <Header />
      <main className="page-container">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <ClipboardList className="mr-2 text-brand-green-600" /> 
            Meus Pedidos
          </h1>
        </div>
        
        <div className="mb-4 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar pedidos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 rounded-xl border border-gray-200 focus:border-brand-green-400 focus:ring-2 focus:ring-brand-green-200 focus:outline-none transition-all"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        
        <div className="mb-4 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                statusFilter === 'all'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setStatusFilter('pending')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                statusFilter === 'pending'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Aguardando
            </button>
            <button
              onClick={() => setStatusFilter('processing')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                statusFilter === 'processing'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Processando
            </button>
            <button
              onClick={() => setStatusFilter('shipped')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                statusFilter === 'shipped'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Enviado
            </button>
            <button
              onClick={() => setStatusFilter('delivered')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                statusFilter === 'delivered'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Entregue
            </button>
          </div>
        </div>
        
        {filteredOrders.length > 0 ? (
          <div className="space-y-4">
            {filteredOrders.map(order => (
              <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-sm text-gray-500">Pedido #{order.id}</span>
                      <p className="text-xs text-gray-500">Realizado em {order.date}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1">{getStatusText(order.status)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-3">
                    <div className="flex -space-x-2 mr-3">
                      {order.items.map((item, index) => (
                        <div 
                          key={item.id} 
                          className="w-10 h-10 rounded-md overflow-hidden border-2 border-white"
                          style={{ zIndex: order.items.length - index }}
                        >
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        {order.items.length === 1 
                          ? order.items[0].name 
                          : `${order.items[0].name} e mais ${order.items.length - 1} item(s)`}
                      </p>
                      <p className="text-sm font-medium text-brand-green-600">
                        R$ {order.totalPrice.toFixed(2)}
                      </p>
                    </div>
                    <button 
                      onClick={() => toggleOrderExpand(order.id)}
                      className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      {expandedOrder === order.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                  </div>
                  
                  {expandedOrder === order.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                      <h4 className="text-sm font-medium mb-2">Detalhes do pedido</h4>
                      {order.items.map(item => (
                        <div key={item.id} className="flex items-center mb-3">
                          <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 mr-3">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm line-clamp-1">{item.name}</p>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">Qtd: {item.quantity}</span>
                              <span className="text-sm font-medium">R$ {(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {order.status !== 'pending' && order.status !== 'cancelled' && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <h4 className="text-sm font-medium mb-2">Informações de entrega</h4>
                          {order.trackingNumber && (
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-500">Código de rastreio:</span>
                              <span className="font-mono">{order.trackingNumber}</span>
                            </div>
                          )}
                          {order.estimatedDelivery && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Previsão de entrega:</span>
                              <span>{order.estimatedDelivery}</span>
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="mt-4 flex justify-end space-x-2">
                        <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                          Ajuda
                        </button>
                        {order.status === 'delivered' && (
                          <button className="px-4 py-2 text-sm bg-brand-green-500 text-white rounded-lg hover:bg-brand-green-600 transition-colors">
                            Comprar novamente
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <ClipboardList className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-700 mb-1">Nenhum pedido encontrado</h3>
            <p className="text-gray-500 text-sm">
              {searchQuery 
                ? 'Tente ajustar sua busca ou filtros' 
                : 'Você ainda não fez nenhum pedido'}
            </p>
          </div>
        )}
      </main>
      <BottomNavigation />
    </>
  );
};

export default Orders;
