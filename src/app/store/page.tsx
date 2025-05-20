'use client'

import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    id: 'lights',
    name: 'Lighting Solutions',
    description: 'Premium LED upgrades for your BMW',
    image: '/store/categories/lights.jpg',
    link: '/store/lights'
  },
  {
    id: 'engine',
    name: 'Engine Tuning',
    description: 'Performance upgrades for maximum power',
    image: '/store/categories/engine.jpg',
    link: '/store/engine'
  },
  {
    id: 'body',
    name: 'Body Tuning',
    description: 'Aerodynamic and exterior upgrades',
    image: '/store/categories/body.jpg',
    link: '/store/body'
  },
  {
    id: 'steering',
    name: 'Steering Wheels',
    description: 'Premium steering wheel upgrades',
    image: '/store/categories/steering.jpg',
    link: '/store/steering'
  },
  {
    id: 'multimedia',
    name: 'Multimedia and Sound',
    description: 'Audio and entertainment systems',
    image: '/store/categories/multimedia.jpg',
    link: '/store/multimedia'
  }
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-m-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">BMW Performance Store</h1>
          <p className="text-gray-300">Premium parts and upgrades for your BMW</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link
              key={category.id}
              href={category.link}
              className="group"
            >
              <div className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 