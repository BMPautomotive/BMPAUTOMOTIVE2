'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  images: string[]
  inStock: boolean
}

const categories = [
  { value: 'lights', label: 'Lighting Solutions' },
  { value: 'engine', label: 'Engine Tuning' },
  { value: 'body', label: 'Body Tuning' },
  { value: 'steering', label: 'Steering Wheels' },
  { value: 'multimedia', label: 'Multimedia and Sound' },
]

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('products')
      return stored ? JSON.parse(stored) : []
    }
    return []
  })
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    category: '',
    images: [],
    inStock: true
  })
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const files = Array.from(e.target.files)
    setImageFiles(files)
    const previews = files.map(file => URL.createObjectURL(file))
    setImagePreviews(previews)
    setNewProduct({ ...newProduct, images: previews })
  }

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.category || imagePreviews.length === 0) {
      alert('Please fill in all required fields and upload at least one image')
      return
    }

    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name!,
      description: newProduct.description!,
      price: Number(newProduct.price),
      category: newProduct.category!,
      images: imagePreviews,
      inStock: newProduct.inStock ?? true
    }

    const updatedProducts = [...products, product]
    setProducts(updatedProducts)
    localStorage.setItem('products', JSON.stringify(updatedProducts))
    setNewProduct({
      name: '',
      description: '',
      price: 0,
      category: '',
      images: [],
      inStock: true
    })
    setImageFiles([])
    setImagePreviews([])
  }

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter(product => product.id !== id)
    setProducts(updatedProducts)
    localStorage.setItem('products', JSON.stringify(updatedProducts))
  }

  return (
    <div className="min-h-screen bg-m-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Product Management</h1>

        {/* Add New Product Form */}
        <div className="bg-white/5 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Add New Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Product Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Category</label>
              <select
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                value={newProduct.category}
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
              >
                <option value="">Select category</option>
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Price</label>
              <input
                type="number"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Product Images</label>
              <input
                type="file"
                multiple
                accept="image/*"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                onChange={handleImageChange}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {imagePreviews.map((src, idx) => (
                  <div key={idx} className="relative w-16 h-16">
                    <Image src={src} alt={`Preview ${idx+1}`} fill className="object-cover rounded" />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                rows={3}
                value={newProduct.description}
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
              />
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={newProduct.inStock}
                  onChange={(e) => setNewProduct({...newProduct, inStock: e.target.checked})}
                />
                In Stock
              </label>
            </div>
            <div className="md:col-span-2">
              <button
                className="px-6 py-2 bg-m-red text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>

        {/* Products List */}
        <div className="bg-white/5 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Current Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-300">
                  <th className="p-4">Image</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Stock</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="border-t border-white/10">
                    <td className="p-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    </td>
                    <td className="p-4 text-white">{product.name}</td>
                    <td className="p-4 text-white">{product.category}</td>
                    <td className="p-4 text-white">${product.price.toFixed(2)}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded ${product.inStock ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="p-4">
                      <button
                        className="px-4 py-2 bg-red-500/20 text-red-300 rounded hover:bg-red-500/30 transition-colors duration-300"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 