'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ChipTuningWidget from '@/components/ChipTuningWidget'
import MotorsportNews from '@/components/MotorsportNews'
import BookingForm from '@/components/BookingForm'

const bmwModels = [
  {
    category: 'M Series',
    models: [
      { name: 'BMW M3 (G80)', years: '2020-2024' },
      { name: 'BMW M4 (G82)', years: '2020-2024' },
      { name: 'BMW M5 (F90)', years: '2017-2024' },
      { name: 'BMW M8 (F91/F92)', years: '2019-2024' },
    ]
  },
  {
    category: 'X Series',
    models: [
      { name: 'BMW X3M (F97)', years: '2019-2024' },
      { name: 'BMW X4M (F98)', years: '2019-2024' },
      { name: 'BMW X5M (F95)', years: '2019-2024' },
      { name: 'BMW X6M (F96)', years: '2019-2024' },
    ]
  },
  {
    category: 'Regular Series',
    models: [
      { name: 'BMW 3 Series (G20)', years: '2018-2024' },
      { name: 'BMW 4 Series (G22)', years: '2020-2024' },
      { name: 'BMW 5 Series (G30)', years: '2016-2024' },
      { name: 'BMW 7 Series (G70)', years: '2022-2024' },
    ]
  }
]

export default function TuningPage() {
  const [selectedEngine, setSelectedEngine] = useState('s55');

  return (
    <div className="bg-m-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-m-dark to-black">
        <div className="absolute inset-0">
          <Image
            src="/tuning.png"
            alt="Tuning Services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              TUNING SERVICES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock your BMW's full potential with our professional tuning services
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Chip Tuning</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>ECU remapping</li>
              <li>Performance optimization</li>
              <li>Fuel efficiency improvements</li>
              <li>Custom tuning profiles</li>
              <li>Dyno testing and verification</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Performance Upgrades</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Exhaust system modifications</li>
              <li>Intake system upgrades</li>
              <li>Suspension enhancements</li>
              <li>Brake system improvements</li>
              <li>Turbo upgrades</li>
            </ul>
          </div>
        </div>

        {/* Flash Tuning Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Flash Tuning</h2>
          
          {/* Engine Selection Tabs */}
          <div className="flex space-x-4 mb-8 border-b border-white/10">
            <button
              onClick={() => setSelectedEngine('s55')}
              className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                selectedEngine === 's55'
                  ? 'text-white border-b-2 border-m-red'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              S55 (M3/M4)
            </button>
            <button
              onClick={() => setSelectedEngine('n55-ewg')}
              className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                selectedEngine === 'n55-ewg'
                  ? 'text-white border-b-2 border-m-red'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              N55 EWG
            </button>
            <button
              onClick={() => setSelectedEngine('n55-pwg')}
              className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                selectedEngine === 'n55-pwg'
                  ? 'text-white border-b-2 border-m-red'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              N55 PWG
            </button>
          </div>

          {/* Engine Content */}
          <div className="space-y-8">
            {selectedEngine === 's55' && (
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Stage 1</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Power: 450-480 HP</li>
                    <li>Torque: 550-580 Nm</li>
                    <li>0-100 km/h: 3.8-4.0s</li>
                    <li>Stock hardware compatible</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Stage 2</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Power: 500-530 HP</li>
                    <li>Torque: 600-630 Nm</li>
                    <li>0-100 km/h: 3.5-3.7s</li>
                    <li>Requires downpipe upgrade</li>
                  </ul>
                </div>
              </div>
            )}

            {selectedEngine === 'n55-ewg' && (
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Stage 1</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Power: up to 360HP/540NM</li>
                    <li>Available for 91oct/95ron, 93oct/98ron, 95oct/102ron</li>
                    <li>Stock hardware compatible</li>
                    <li>Not available for M2 and X4 M40i</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Stage 2</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Power: up to 390HP/580NM</li>
                    <li>Requires upgraded intercooler or high-flow downpipe</li>
                    <li>Available for 91oct/95ron, 93oct/98ron, 95oct/102ron</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Stage 2+</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Power: up to 430HP/630NM</li>
                    <li>Requires upgraded intercooler and high-flow downpipe</li>
                    <li>Available for 91oct/95ron, 93oct/98ron, 95oct/102ron</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Stage 2+HPFP</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Power: up to 450HP/650NM</li>
                    <li>Requires upgraded intercooler, high-flow downpipe and upgraded HPFP</li>
                    <li>Available for 93oct/98ron, 95oct/102ron</li>
                  </ul>
                </div>
              </div>
            )}

            {selectedEngine === 'n55-pwg' && (
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Stage 1</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Power: up to 340HP/540NM</li>
                    <li>Available for 91oct/95ron, 93oct/98ron, 95oct/102ron</li>
                    <li>Stock hardware compatible</li>
                    <li>Not available for M2 and X4 M40i</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Stage 2</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Power: up to 370HP/580NM</li>
                    <li>Requires upgraded intercooler or high-flow downpipe</li>
                    <li>Available for 91oct/95ron, 93oct/98ron, 95oct/102ron</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Stage 2+</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Power: up to 400HP/630NM</li>
                    <li>Requires upgraded intercooler and high-flow downpipe</li>
                    <li>Available for 91oct/95ron, 93oct/98ron, 95oct/102ron</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Features Section */}
          <div className="mt-8 bg-white/10 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">Features Included</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Custom dyno testing and verification</li>
              <li>Cold start optimization</li>
              <li>Launch control optimization</li>
              <li>Burble/overrun sound enhancement</li>
              <li>Speed limiter removal</li>
              <li>Warranty on software</li>
              <li>On-the-fly map switching (4 slots)</li>
              <li>Antilag system</li>
              <li>Advanced monitoring system</li>
              <li>FlexFuel support (optional)</li>
            </ul>
          </div>

          {/* Supported Vehicles Section */}
          <div className="mt-6 bg-white/10 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">Supported Vehicles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-white font-medium mb-2">F-Series</h5>
                <ul className="list-disc list-inside text-gray-300">
                  <li>M135i F2x (2012-2016)</li>
                  <li>M235i F2x (2013-2016)</li>
                  <li>M2 F87 (2015-2018)</li>
                  <li>335i/GT F3x (2011-2015)</li>
                  <li>435i F3x (2013-2016)</li>
                  <li>535i/GT Fxx (2010-2017)</li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-medium mb-2">X-Series</h5>
                <ul className="list-disc list-inside text-gray-300">
                  <li>X3 35i F25 (2010-2017)</li>
                  <li>X4 35i/M40i F26 (2014-2018)</li>
                  <li>X5 35i/40i F15 (2013-2018)</li>
                  <li>X6 35i/40i F16 (2014-2018)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white/5 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-gray-300 italic">"The chip tuning service transformed my BMW M3. The power increase is incredible, and the car drives smoother than ever!"</p>
              <p className="text-white font-semibold mt-2">- Michael R.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-gray-300 italic">"Professional service and amazing results. The team at BMP Automotive knows exactly how to maximize BMW performance."</p>
              <p className="text-white font-semibold mt-2">- David K.</p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <BookingForm serviceType="tuning" />
      </div>
    </div>
  )
} 