'use client'

import React from 'react'
import Image from 'next/image'

interface NewsItem {
  id: number
  title: string
  description: string
  date: string
  image: string
  category: string
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'BMW M Team RLL Wins at Daytona',
    description: 'BMW M Team RLL secured an impressive victory at the 24 Hours of Daytona, showcasing the superiority of the BMW M4 GT3.',
    date: '28.01.2024',
    image: '/bmw-m-main.jpg',
    category: 'Racing'
  },
  {
    id: 2,
    title: 'New BMW M4 GT3 to Debut in DTM',
    description: 'The updated BMW M4 GT3 is preparing for its DTM championship debut with improved aerodynamics and powertrain.',
    date: '25.01.2024',
    image: '/bmw-m-main.jpg',
    category: 'Technology'
  },
  {
    id: 3,
    title: 'BMW Motorsport Launches Young Driver Program',
    description: 'BMW Motorsport announced the launch of a new young driver support program to help them develop in motorsport.',
    date: '22.01.2024',
    image: '/bmw-m-main.jpg',
    category: 'Development'
  }
]

export default function MotorsportNews() {
  return (
    <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2 tracking-widest">MOTORSPORT NEWS</h2>
        <p className="text-gray-400 text-sm">Latest updates from the world of racing and motorsport</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300">
            <div className="relative h-48">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-m-red text-white text-xs px-2 py-1 rounded">
                {news.category}
              </div>
            </div>
            <div className="p-4">
              <div className="text-gray-400 text-sm mb-2">{news.date}</div>
              <h3 className="text-white text-lg font-light mb-2">{news.title}</h3>
              <p className="text-gray-300 text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 