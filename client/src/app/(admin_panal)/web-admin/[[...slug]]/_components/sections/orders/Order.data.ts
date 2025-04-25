/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { Order } from "./Order.Types";

export const orders: Order[] = [
  {
    id: "ord_1234567890",
    orderNumber: "ORD-25042501",
    customerId: "cus_9876543210",
    customer: {
      id: "cus_9876543210",
      name: "Mehedi Hassan",
      email: "mehedi.hassan@example.com",
      phone: "+880 1712-345678",
      avatar: "https://ui-avatars.com/api/?name=Mehedi+Hassan",
    },
    items: [
      {
        id: "item_001",
        productId: "prod_001",
        name: "Premium Cotton T-Shirt",
        sku: "TSH-BLK-L",
        price: 1299.00,
        quantity: 2,
        image: "/images/products/tshirt-black.jpg",
        variant: {
          color: "Black",
          size: "L"
        },
        subtotal: 2598.00
      },
      {
        id: "item_002",
        productId: "prod_002",
        name: "Casual Denim Jeans",
        sku: "DNM-BLU-32",
        price: 2499.00,
        quantity: 1,
        image: "/images/products/jeans-blue.jpg",
        variant: {
          color: "Blue",
          size: "32"
        },
        subtotal: 2499.00
      }
    ],
    shipping: {
      fullName: "Mehedi Hassan",
      phone: "+880 1712-345678",
      address: "House 123, Road 4/A",
      area: "Dhanmondi",
      city: "Dhaka",
      postalCode: "1209",
      division: "Dhaka"
    },
    payment: {
      method: "bkash",
      status: "completed",
      transactionId: "BKS123456789",
      paidAmount: 5397.00,
      paidAt: "2025-04-25T10:05:00Z"
    },
    status: "processing",
    subtotal: 5097.00,
    shippingCost: 300.00,
    discount: 0,
    total: 5397.00,
    note: "Please handle with care",
    createdAt: "2025-04-25T09:58:29Z",
    updatedAt: "2025-04-25T10:05:00Z",
    statusHistory: [
      {
        status: "pending",
        timestamp: "2025-04-25T09:58:29Z"
      },
      {
        status: "confirmed",
        timestamp: "2025-04-25T10:00:00Z",
        note: "Order confirmed after payment verification"
      },
      {
        status: "processing",
        timestamp: "2025-04-25T10:05:00Z",
        note: "Order is being processed for shipping"
      }
    ]
  },
  {
    id: "ord_1234567891",
    orderNumber: "ORD-25042502",
    customerId: "cus_9876543211",
    customer: {
      id: "cus_9876543211",
      name: "Tasnim Rahman",
      email: "tasnim.rahman@example.com",
      phone: "+880 1811-223344",
      avatar: "https://ui-avatars.com/api/?name=Tasnim+Rahman",
    },
    items: [
      {
        id: "item_003",
        productId: "prod_003",
        name: "Smart Watch Pro",
        sku: "SWP-BLK",
        price: 12999.00,
        quantity: 1,
        image: "/images/products/smartwatch-black.jpg",
        subtotal: 12999.00
      }
    ],
    shipping: {
      fullName: "Tasnim Rahman",
      phone: "+880 1811-223344",
      address: "Apartment 5B, Building 27",
      area: "Gulshan 2",
      city: "Dhaka",
      postalCode: "1212",
      division: "Dhaka"
    },
    payment: {
      method: "nagad",
      status: "completed",
      transactionId: "NGD987654321",
      paidAmount: 13299.00,
      paidAt: "2025-04-25T08:35:00Z"
    },
    status: "confirmed",
    subtotal: 12999.00,
    shippingCost: 300.00,
    discount: 0,
    total: 13299.00,
    createdAt: "2025-04-25T08:30:00Z",
    updatedAt: "2025-04-25T08:35:00Z",
    statusHistory: [
      {
        status: "pending",
        timestamp: "2025-04-25T08:30:00Z"
      },
      {
        status: "confirmed",
        timestamp: "2025-04-25T08:35:00Z",
        note: "Payment received via Nagad"
      }
    ]
  },
  // Add more orders with similar detailed structure...
];