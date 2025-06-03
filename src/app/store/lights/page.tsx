'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

// Типы для товаров
interface Product {
  id: string
  name: string
  description: string
  price: number
  supplier: string
  stock: number
  category: string
  shippingTime: string
  profit: number
  images: string[]
}

export default function LightsPage() {
  const { t } = useLanguage()
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load products from localStorage
    const loadProducts = () => {
      const storedProducts = localStorage.getItem('products')
      if (storedProducts) {
        const allProducts = JSON.parse(storedProducts)
        // Filter only products from lights category
        const lightsProducts = allProducts.filter(
          (product: Product) => product.category === 'lights'
        )
        setProducts(lightsProducts)
      }
      setIsLoading(false)
    }

    loadProducts()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-m-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white text-center">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-m-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">BMW Lighting Solutions</h1>
          <p className="text-gray-300">Premium lighting upgrades for your BMW</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No products available in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="relative h-48">
                  {product.images[0] && (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-m-red font-bold">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="text-gray-400 text-sm">
                      Shipping: {product.shippingTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center px-4 py-2 bg-m-red text-white rounded-lg hover:bg-red-700 transition-colors">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 