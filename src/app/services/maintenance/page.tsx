'use client'

import React from 'react'
import Image from 'next/image'

const maintenanceServices = [
  {
    title: 'Regular Maintenance',
    description: 'Oil changes, filter replacements, and fluid checks to keep your BMW running smoothly.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Brake Service',
    description: 'Complete brake system inspection, pad replacement, and rotor resurfacing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    title: 'Suspension Work',
    description: 'Shock absorber replacement, spring maintenance, and alignment services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics to identify and resolve engine issues.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  }
]

export default function MaintenancePage() {
  return (
    <div className="bg-m-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-m-dark to-black">
        <div className="absolute inset-0">
          <Image
            src="/maintenance.jpg"
            alt="Maintenance"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MAINTENANCE
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional maintenance services to keep your BMW in perfect condition
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-lg">
                <div className="w-12 h-12 bg-m-red/20 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-m-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">WHY CHOOSE US</h2>
            <div className="h-1 w-24 bg-gradient-m mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-m-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Certified Technicians</h3>
              <p className="text-gray-300">Our team consists of BMW-certified technicians with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-m-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Genuine Parts</h3>
              <p className="text-gray-300">We use only genuine BMW parts for all maintenance and repairs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-m-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quick Service</h3>
              <p className="text-gray-300">Efficient maintenance and repair services with minimal downtime</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">SCHEDULE YOUR MAINTENANCE</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to schedule your BMW maintenance service
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-m text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 