/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { Order } from "./Order.Types";

export const orders: Order[] = [
    {
      id: 'ord_1234567890',
      orderNumber: 'ORD-25042501',
      date: '2025-04-25T09:58:29Z', // ISO format for better date handling
      total: 12500.00, // Amount in BDT
      status: 'pending',
      paymentMethod: 'bkash',
      items: 3
    },
    {
      id: 'ord_1234567891',
      orderNumber: 'ORD-25042502',
      date: '2025-04-25T08:30:00Z',
      total: 8999.99,
      status: 'processing',
      paymentMethod: 'nagad',
      items: 2
    },
    {
      id: 'ord_1234567892',
      orderNumber: 'ORD-25042503',
      date: '2025-04-25T07:15:00Z',
      total: 3450.00,
      status: 'completed',
      paymentMethod: 'rocket',
      items: 1
    },
    {
      id: 'ord_1234567893',
      orderNumber: 'ORD-25042504',
      date: '2025-04-25T06:45:00Z',
      total: 15999.99,
      status: 'pending',
      paymentMethod: 'cod',
      items: 4
    },
    {
      id: 'ord_1234567894',
      orderNumber: 'ORD-25042505',
      date: '2025-04-24T23:20:00Z',
      total: 6789.00,
      status: 'processing',
      paymentMethod: 'bkash',
      items: 2
    }
  ];