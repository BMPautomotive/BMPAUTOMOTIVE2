'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/i18n/LanguageContext'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  inStock: boolean
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'BMW M Performance Alcantara Steering Wheel',
    description: 'Premium Alcantara steering wheel with M Performance stitching',
    price: 899.99,
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Alcantara+Wheel',
    inStock: true
  },
  {
    id: '2',
    name: 'BMW M4 Competition Carbon Fiber Wheel',
    description: 'Carbon fiber steering wheel with LED display',
    price: 2499.99,
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Carbon+Wheel',
    inStock: true
  },
  {
    id: '3',
    name: 'BMW M Performance Flat Bottom Wheel',
    description: 'Sport flat bottom steering wheel with paddle shifters',
    price: 1299.99,
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Flat+Bottom+Wheel',
    inStock: true
  },
  {
    id: '4',
    name: 'BMW M3 CS Steering Wheel',
    description: 'OEM M3 CS steering wheel with Alcantara grips',
    price: 1799.99,
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=M3+CS+Wheel',
    inStock: true
  }
]

export default function SteeringPage() {
  const { t } = useLanguage()
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name')

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-m-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Steering Wheel Solutions</h1>
          <p className="text-gray-300">Premium steering wheel upgrades for your BMW</p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search */}
          <div className="w-full md:w-96">
            <input
              type="text"
              placeholder="Search steering wheels..."
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-m-red"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Sort */}
          <div className="flex gap-4">
            <select
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-m-red"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'name')}
            >
              <option value="name" className="bg-m-dark">Sort by Name</option>
              <option value="price-asc" className="bg-m-dark">Price: Low to High</option>
              <option value="price-desc" className="bg-m-dark">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
                  <button
                    className="px-4 py-2 bg-m-red text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                    onClick={() => {/* Add to cart logic */}}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">No products found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
} 