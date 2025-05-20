'use client'

import React from 'react'
import Image from 'next/image'
import BookingForm from '@/components/BookingForm'

export default function MaintenancePage() {
  return (
    <div className="bg-m-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-m-dark to-black">
        <div className="absolute inset-0">
          <Image
            src="/maintenance.png"
            alt="Maintenance Services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MAINTENANCE SERVICES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional maintenance and repair services for your BMW
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Regular Maintenance</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Oil changes and filter replacements</li>
              <li>Brake system inspection and service</li>
              <li>Fluid level checks and top-ups</li>
              <li>Tire rotation and alignment</li>
              <li>Battery testing and replacement</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Diagnostic Services</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Engine diagnostics</li>
              <li>Transmission diagnostics</li>
              <li>Electrical system diagnostics</li>
              <li>Performance testing</li>
              <li>Emissions testing</li>
            </ul>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white/5 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-gray-300 italic">"The service at BMP Automotive is outstanding. They diagnosed and fixed my BMW quickly and efficiently. Highly recommend!"</p>
              <p className="text-white font-semibold mt-2">- John D.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-gray-300 italic">"I've been bringing my BMW here for years. The team is professional and always goes the extra mile to ensure my car is in top condition."</p>
              <p className="text-white font-semibold mt-2">- Sarah M.</p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <BookingForm serviceType="maintenance" />
      </div>
    </div>
  )
} 