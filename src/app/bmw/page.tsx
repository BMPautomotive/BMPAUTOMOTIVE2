'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const bmwModels = [
  {
    name: 'BMW 4 Series F3X 420d',
    engine: '1995 cc',
    stockPower: '190 HP',
    stockTorque: '400 Nm',
    tunedPower: '230 HP',
    tunedTorque: '450 Nm',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'BMW 5 Series G30 520d',
    engine: '1995 cc',
    stockPower: '190 HP',
    stockTorque: '400 Nm',
    tunedPower: '230 HP',
    tunedTorque: '450 Nm',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'BMW X6 E71 40d',
    engine: '2993 cc',
    stockPower: '306 HP',
    stockTorque: '600 Nm',
    tunedPower: '370 HP',
    tunedTorque: '700 Nm',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'BMW X4M F98',
    engine: '2993 cc',
    stockPower: '480 HP',
    stockTorque: '600 Nm',
    tunedPower: '550 HP',
    tunedTorque: '700 Nm',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'BMW 3 Series F3X 320i',
    engine: '1598 cc',
    stockPower: '170 HP',
    stockTorque: '250 Nm',
    tunedPower: '210 HP',
    tunedTorque: '300 Nm',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'BMW X4 G02 25d',
    engine: '1995 cc',
    stockPower: '231 HP',
    stockTorque: '500 Nm',
    tunedPower: '280 HP',
    tunedTorque: '580 Nm',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80'
  }
]

const bmwSeries = [
  '1 Series', '2 Series', '3 Series', '4 Series', '5 Series',
  '6 Series', '7 Series', '8 Series', 'i8', '1M', 'M2', 'M3',
  'M4', 'M5', 'M6', 'M8', 'X1', 'X2', 'X3', 'X3M', 'X4', 'X4M',
  'X5', 'X5M', 'X6', 'X6M', 'XM', 'X7', 'Z4', 'Z4M'
]

export default function BMWPage() {
  const [selectedSeries, setSelectedSeries] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1920&q=80"
            alt="BMW Performance"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            BMW Chip Tuning
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Professional ECU remapping for all BMW models. Increase power and torque while maintaining reliability.
          </p>
        </div>
      </div>

      {/* Model Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your BMW Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Series</label>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md"
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
              >
                <option value="">Select Series</option>
                {bmwSeries.map((series) => (
                  <option key={series} value={series}>{series}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Year</label>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {Array.from({length: 25}, (_, i) => 2024 - i).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Modifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular BMW Modifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bmwModels.map((model) => (
            <div key={model.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{model.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Engine</p>
                    <p className="text-base font-medium text-gray-900">{model.engine}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Stock Power</p>
                    <p className="text-base font-medium text-gray-900">{model.stockPower}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Stock Torque</p>
                    <p className="text-base font-medium text-gray-900">{model.stockTorque}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tuned Power</p>
                    <p className="text-base font-medium text-gray-900">{model.tunedPower}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tuned Torque</p>
                    <p className="text-base font-medium text-gray-900">{model.tunedTorque}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-opacity-90"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our BMW Tuning Services?
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Professional Tuning</h3>
                <p className="mt-2 text-base text-gray-600">
                  Expert ECU remapping for all BMW models
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Warranty Protection</h3>
                <p className="mt-2 text-base text-gray-600">
                  All tuning services come with warranty
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Quick Service</h3>
                <p className="mt-2 text-base text-gray-600">
                  Most tuning services completed within 2-3 hours
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Dyno Testing</h3>
                <p className="mt-2 text-base text-gray-600">
                  Before and after power measurements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Can't Find Your BMW Model?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Contact us, and we'll find the perfect tuning solution for your BMW
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-opacity-90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 