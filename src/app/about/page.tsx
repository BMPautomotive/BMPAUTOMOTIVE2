'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BookingForm from '@/components/BookingForm'

export default function AboutPage() {
  return (
    <div className="bg-m-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-m-dark to-black">
        <div className="absolute inset-0">
          <Image
            src="/images/shop photo.png"
            alt="About BMP Automotive"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ABOUT BMP AUTOMOTIVE
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in BMW performance and maintenance
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6">
                BMP Automotive provides professional services for BMW maintenance and tuning. Our team of experienced specialists guarantees the highest quality of work and individual approach to each client.
              </p>
              <p className="text-gray-300 mb-6">
                We specialize in:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Professional tuning and chip tuning</li>
                <li>Comprehensive maintenance service</li>
                <li>Mechanical and electrical repairs</li>
                <li>Advanced computer diagnostics</li>
                <li>Additional equipment installation</li>
                <li>Exhaust system modifications</li>
                <li>Suspension and brake system tuning</li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/shop photo.png"
                alt="Our Workshop"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our certified technicians have years of experience working with BMW vehicles
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quality Service</h3>
              <p className="text-gray-300">
                We use only genuine parts and the latest diagnostic equipment
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Customer Focus</h3>
              <p className="text-gray-300">
                Your satisfaction is our priority - we provide transparent pricing and clear communication
              </p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <BookingForm serviceType="general" />
      </div>
    </div>
  )
} 