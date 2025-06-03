'use client'

import { useState } from 'react'
import { Package, Truck, CheckCircle, AlertCircle, Clock } from 'lucide-react'

interface Order {
  id: string
  customer: string
  products: {
    name: string
    quantity: number
    price: number
  }[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  supplier: string
  orderDate: string
  estimatedDelivery: string
  trackingNumber?: string
}

const initialOrders: Order[] = [
  {
    id: 'ORD001',
    customer: 'John Doe',
    products: [
      { name: 'BMW LED Headlight Kit', quantity: 1, price: 299.99 },
      { name: 'Performance Air Filter', quantity: 2, price: 89.99 }
    ],
    total: 479.97,
    status: 'processing',
    supplier: 'BMW Performance Parts',
    orderDate: '2024-03-15',
    estimatedDelivery: '2024-03-20',
    trackingNumber: 'TRK123456789'
  },
  {
    id: 'ORD002',
    customer: 'Jane Smith',
    products: [
      { name: 'Steering Wheel Upgrade', quantity: 1, price: 399.99 }
    ],
    total: 399.99,
    status: 'shipped',
    supplier: 'BMW Interior Parts',
    orderDate: '2024-03-14',
    estimatedDelivery: '2024-03-18',
    trackingNumber: 'TRK987654321'
  }
]

export default function OrderManagementPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-400'
      case 'processing':
        return 'text-blue-400'
      case 'shipped':
        return 'text-purple-400'
      case 'delivered':
        return 'text-green-400'
      case 'cancelled':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5" />
      case 'processing':
        return <Package className="w-5 h-5" />
      case 'shipped':
        return <Truck className="w-5 h-5" />
      case 'delivered':
        return <CheckCircle className="w-5 h-5" />
      case 'cancelled':
        return <AlertCircle className="w-5 h-5" />
      default:
        return <Clock className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-m-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Order Management</h1>
          <div className="flex space-x-4">
            <select className="px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-m-red">
              <option value="all">All Orders</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <input
              type="text"
              placeholder="Search orders..."
              className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
            />
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white/5 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Tracking
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-white/5 cursor-pointer"
                  onClick={() => setSelectedOrder(order)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">{order.id}</div>
                    <div className="text-sm text-gray-400">{order.orderDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{order.customer}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300">
                      {order.products.map((product, index) => (
                        <div key={index}>
                          {product.quantity}x {product.name}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">${order.total.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-2 capitalize">{order.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{order.supplier}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.trackingNumber ? (
                      <div className="text-sm text-gray-300">{order.trackingNumber}</div>
                    ) : (
                      <div className="text-sm text-gray-400">Not available</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-m-dark p-8 rounded-lg w-full max-w-2xl">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">Order Details</h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Order Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Order ID</div>
                      <div className="text-white">{selectedOrder.id}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Order Date</div>
                      <div className="text-white">{selectedOrder.orderDate}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Customer</div>
                      <div className="text-white">{selectedOrder.customer}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Status</div>
                      <div className={`flex items-center ${getStatusColor(selectedOrder.status)}`}>
                        {getStatusIcon(selectedOrder.status)}
                        <span className="ml-2 capitalize">{selectedOrder.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Products</h3>
                  <div className="space-y-2">
                    {selectedOrder.products.map((product, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <div className="text-gray-300">
                          {product.quantity}x {product.name}
                        </div>
                        <div className="text-white">${(product.price * product.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                    <div className="border-t border-gray-700 pt-2 mt-2">
                      <div className="flex justify-between text-sm font-semibold">
                        <div className="text-gray-300">Total</div>
                        <div className="text-white">${selectedOrder.total.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Shipping Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Supplier</div>
                      <div className="text-white">{selectedOrder.supplier}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Estimated Delivery</div>
                      <div className="text-white">{selectedOrder.estimatedDelivery}</div>
                    </div>
                    {selectedOrder.trackingNumber && (
                      <div className="col-span-2">
                        <div className="text-gray-400">Tracking Number</div>
                        <div className="text-white">{selectedOrder.trackingNumber}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="px-4 py-2 text-gray-300 hover:text-white"
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-2 bg-m-red text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 