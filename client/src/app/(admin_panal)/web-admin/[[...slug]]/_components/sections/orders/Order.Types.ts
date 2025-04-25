/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'on_delivery'
  | 'delivered'
  | 'completed'
  | 'cancelled';

export type PaymentMethod = 'bkash' | 'nagad' | 'rocket' | 'cod';

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
  variant?: {
    color?: string;
    size?: string;
  };
  subtotal: number;
}

export interface CustomerInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  address: string;
  area: string;
  city: string;
  postalCode: string;
  division: string;
}

export interface PaymentDetails {
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
  paidAmount: number;
  paidAt?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customer: CustomerInfo;
  items: OrderItem[];
  shipping: ShippingAddress;
  payment: PaymentDetails;
  status: OrderStatus;
  subtotal: number;
  shippingCost: number;
  discount?: number;
  total: number;
  note?: string;
  createdAt: string;
  updatedAt: string;
  statusHistory: {
    status: OrderStatus;
    timestamp: string;
    note?: string;
  }[];
}