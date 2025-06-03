'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus, Edit, Trash, Package, DollarSign, Truck, Upload, X, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'

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
  externalLink: string
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'BMW LED Headlight Kit',
    description: 'Premium LED headlight upgrade kit',
    price: 299.99,
    supplier: 'BMW Performance Parts',
    stock: 50,
    category: 'lights',
    shippingTime: '2-4 days',
    profit: 89.99,
    images: ['/store/products/headlight-1.jpg', '/store/products/headlight-2.jpg'],
    externalLink: ''
  },
  {
    id: '2',
    name: 'Performance Air Filter',
    description: 'High-flow air filter for improved performance',
    price: 89.99,
    supplier: 'BMW Tuning Experts',
    stock: 100,
    category: 'engine',
    shippingTime: '3-5 days',
    profit: 29.99,
    images: ['/store/products/filter-1.jpg'],
    externalLink: ''
  }
]

const categories = [
  { id: 'lights', name: 'Lighting Solutions' },
  { id: 'engine', name: 'Engine Tuning' },
  { id: 'body', name: 'Body Tuning' },
  { id: 'steering', name: 'Steering Wheels' },
  { id: 'multimedia', name: 'Multimedia and Sound' }
]

export default function ProductManagementPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)
  const [externalLink, setExternalLink] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load initial products from localStorage
  useEffect(() => {
    if (isClient) {
      const storedProducts = localStorage.getItem('products')
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts))
      } else {
        setProducts(initialProducts)
        localStorage.setItem('products', JSON.stringify(initialProducts))
      }
    }
  }, [isClient])

  const handleAddProduct = () => {
    setIsAddingProduct(true)
    setSelectedProduct(null)
    setUploadedImages([])
    setExternalLink('')
  }

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product)
    setIsAddingProduct(false)
    setUploadedImages(product.images)
    setExternalLink(product.externalLink)
  }

  const handleDeleteProduct = (productId: string) => {
    setProducts(prevProducts => {
      const updatedProducts = prevProducts.filter(p => p.id !== productId)
      // Save to localStorage
      localStorage.setItem('products', JSON.stringify(updatedProducts))
      return updatedProducts
    })
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file))
      setUploadedImages(prev => [...prev, ...newImages])
    }
  }

  const handleRemoveImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
  }

  const fetchProductInfo = async (url: string) => {
    setIsLoading(true)
    try {
      // Здесь будет логика получения информации о товаре
      // Это пример, который нужно заменить на реальную логику
      const response = await fetch('/api/fetch-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch product info')
      }

      const data = await response.json()
      
      // Обновляем форму с полученными данными
      setSelectedProduct({
        id: `PROD${Date.now()}`,
        name: data.name || '',
        description: data.description || '',
        price: data.price || 0,
        supplier: data.supplier || '',
        stock: data.stock || 0,
        category: data.category || 'lights',
        shippingTime: data.shippingTime || '3-5 days',
        profit: data.profit || 0,
        images: data.images || [],
        externalLink: url
      })
      
      setUploadedImages(data.images || [])
    } catch (error) {
      console.error('Error fetching product info:', error)
      alert('Failed to fetch product information. Please fill in the details manually.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    
    const newProduct: Product = {
      id: selectedProduct?.id || `PROD${Date.now()}`,
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: Number(formData.get('price')),
      supplier: formData.get('supplier') as string,
      stock: Number(formData.get('stock')),
      category: formData.get('category') as string,
      shippingTime: formData.get('shippingTime') as string,
      profit: Number(formData.get('profit')),
      images: uploadedImages,
      externalLink: externalLink
    }

    if (isAddingProduct) {
      setProducts(prevProducts => {
        const updatedProducts = [...prevProducts, newProduct]
        // Save to localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts))
        return updatedProducts
      })
    } else {
      setProducts(prevProducts => {
        const updatedProducts = prevProducts.map(p => p.id === newProduct.id ? newProduct : p)
        // Save to localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts))
        return updatedProducts
      })
    }

    setIsAddingProduct(false)
    setSelectedProduct(null)
    setUploadedImages([])
    setExternalLink('')
  }

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-m-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Product Management</h1>
          <button
            onClick={handleAddProduct}
            className="flex items-center px-4 py-2 bg-m-red text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Product
          </button>
        </div>

        {/* Product List */}
        <div className="bg-white/5 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Profit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {product.images[0] && (
                        <div className="relative w-12 h-12 mr-3">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-medium text-white">{product.name}</div>
                        <div className="text-sm text-gray-400">{product.description}</div>
                        {product.externalLink && (
                          <a
                            href={product.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-400 hover:text-blue-300 flex items-center mt-1"
                          >
                            <LinkIcon className="w-4 h-4 mr-1" />
                            View Original
                          </a>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{product.supplier}</div>
                    <div className="text-sm text-gray-400">{product.shippingTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-300">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {product.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-green-400">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {product.profit}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
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

        {/* Add/Edit Product Modal */}
        {(isAddingProduct || selectedProduct) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-m-dark p-8 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {isAddingProduct ? 'Add New Product' : 'Edit Product'}
                </h2>
                <button
                  onClick={() => {
                    setIsAddingProduct(false)
                    setSelectedProduct(null)
                    setUploadedImages([])
                    setExternalLink('')
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </button>
              </div>

              {/* External Link Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  External Product Link
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={externalLink}
                    onChange={(e) => setExternalLink(e.target.value)}
                    placeholder="https://example.com/product"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                  />
                  <button
                    onClick={() => fetchProductInfo(externalLink)}
                    disabled={isLoading || !externalLink}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Loading...' : 'Fetch Info'}
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Product Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedProduct?.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Category
                    </label>
                    <select
                      name="category"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedProduct?.category}
                    >
                      <option value="">Select Category</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                    defaultValue={selectedProduct?.description}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Price
                    </label>
                    <input
                      name="price"
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedProduct?.price}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Profit
                    </label>
                    <input
                      name="profit"
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedProduct?.profit}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Supplier
                    </label>
                    <input
                      name="supplier"
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedProduct?.supplier}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Shipping Time
                    </label>
                    <input
                      name="shippingTime"
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                      defaultValue={selectedProduct?.shippingTime}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Stock
                  </label>
                  <input
                    name="stock"
                    type="number"
                    required
                    min="0"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-m-red"
                    defaultValue={selectedProduct?.stock}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Product Images
                  </label>
                  <div className="mt-2">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <div className="relative w-full h-32">
                            <Image
                              src={image}
                              alt={`Product image ${index + 1}`}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-2 right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full h-32 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
                      >
                        <Upload className="w-8 h-8" />
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingProduct(false)
                      setSelectedProduct(null)
                      setUploadedImages([])
                      setExternalLink('')
                    }}
                    className="px-4 py-2 text-gray-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-m-red text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    {isAddingProduct ? 'Add Product' : 'Save Changes'}
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