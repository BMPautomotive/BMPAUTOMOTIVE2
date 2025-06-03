'use client'

import { useState } from 'react'
import { Building2, Globe, Phone, Mail, Star, Plus, Edit, Trash } from 'lucide-react'

interface Supplier {
  id: string
  name: string
  contact: {
    email: string
    phone: string
    website: string
  }
  rating: number
  products: number
  shippingTime: string
  paymentTerms: string
  status: 'active' | 'inactive' | 'pending'
}

const initialSuppliers: Supplier[] = [
  {
    id: 'SUP001',
    name: 'BMW Performance Parts',
    contact: {
      email: 'contact@bmwperformance.com',
      phone: '+1 (555) 123-4567',
      website: 'www.bmwperformance.com'
    },
    rating: 4.8,
    products: 150,
    shippingTime: '2-4 days',
    paymentTerms: 'Net 30',
    status: 'active'
  },
  {
    id: 'SUP002',
    name: 'BMW Tuning Experts',
    contact: {
      email: 'sales@bmwtuning.com',
      phone: '+1 (555) 987-6543',
      website: 'www.bmwtuning.com'
    },
    rating: 4.6,
    products: 200,
    shippingTime: '3-5 days',
    paymentTerms: 'Net 15',
    status: 'active'
  }
]

export default function SupplierManagementPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers)
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null)
  const [isAddingSupplier, setIsAddingSupplier] = useState(false)

  const getStatusColor = (status: Supplier['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-400'
      case 'inactive':
        return 'text-red-400'
      case 'pending':
        return 'text-yellow-400'
      default:
        return 'text-gray-400'
    }
  }

  const handleAddSupplier = () => {
    setIsAddingSupplier(true)
    setSelectedSupplier(null)
  }

  const handleEditSupplier = (supplier: Supplier) => {
    setSelectedSupplier(supplier)
    setIsAddingSupplier(false)
  }

  const handleDeleteSupplier = (supplierId: string) => {
    setSuppliers(suppliers.filter(s => s.id !== supplierId))
  }

  return (
    <div className="min-h-screen bg-m-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Supplier Management</h1>
          <button
            onClick={handleAddSupplier}
            className="flex items-center px-4 py-2 bg-m-red text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Supplier
          </button>
        </div>

        {/* Suppliers List */}
        <div className="bg-white/5 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Shipping
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {suppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Building2 className="w-5 h-5 text-m-red mr-3" />
                      <div>
                        <div className="text-sm font-medium text-white">{supplier.name}</div>
                        <div className="text-sm text-gray-400">{supplier.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300">
                      <div className="flex items-center mb-1">
                        <Mail className="w-4 h-4 mr-2" />
                        {supplier.contact.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {supplier.contact.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1">{supplier.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{supplier.products}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{supplier.shippingTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center ${getStatusColor(supplier.status)}`}>
                      <span className="capitalize">{supplier.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleEditSupplier(supplier)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteSupplier(supplier.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Supplier Modal */}
        {(isAddingSupplier || selectedSupplier) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-m-dark p-8 rounded-lg w-full max-w-2xl">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {isAddingSupplier ? 'Add New Supplier' : 'Edit Supplier'}
                </h2>
                <button
                  onClick={() => {
                    setIsAddingSupplier(false)
                    setSelectedSupplier(null)
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Supplier Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                    defaultValue={selectedSupplier?.name}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedSupplier?.contact.email}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedSupplier?.contact.phone}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                    defaultValue={selectedSupplier?.contact.website}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Shipping Time
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedSupplier?.shippingTime}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Payment Terms
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedSupplier?.paymentTerms}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingSupplier(false)
                      setSelectedSupplier(null)
                    }}
                    className="px-4 py-2 text-gray-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-m-red text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    {isAddingSupplier ? 'Add Supplier' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 