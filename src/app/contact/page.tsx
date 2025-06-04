'use client'

import React from 'react'
import Image from 'next/image'

const contactInfo = {
  address: '2023 Grant St, Hollywood, FL 33020',
  phone: '(754) 925-9881',
  email: 'bimmermotorsportperformance@gmail.com',
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed'
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61551401512456',
    instagram: 'https://www.instagram.com/bmpautomotive',
    youtube: 'https://www.youtube.com/@bmpautomotive'
  }
}

export default function ContactPage() {
  return (
    <div className="bg-m-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-m-dark to-black">
        <div className="absolute inset-0">
          <Image
            src="/contact.png"
            alt="Contact Us"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CONTACT US
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team of BMW specialists
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">CONTACT INFORMATION</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-m-red/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Address</h3>
                      <p className="text-gray-300">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-m-red/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-m-red/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-m-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                      <p className="text-gray-300">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">BUSINESS HOURS</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Weekdays</span>
                    <span className="text-white">{contactInfo.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white">{contactInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white">{contactInfo.hours.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">FOLLOW US</h2>
                <div className="flex space-x-4">
                  <a
                    href={contactInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-m-red/20 rounded-full flex items-center justify-center hover:bg-m-red/30 transition"
                  >
                    <svg className="w-6 h-6 text-m-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-m-red/20 rounded-full flex items-center justify-center hover:bg-m-red/30 transition"
                  >
                    <svg className="w-6 h-6 text-m-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                    </svg>
                  </a>
                  <a
                    href={contactInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-m-red/20 rounded-full flex items-center justify-center hover:bg-m-red/30 transition"
                  >
                    <svg className="w-6 h-6 text-m-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">LOCATION</h2>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9012415991547!2d-80.1494!3d25.9872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad3b4e5d7a5f%3A0x9c7c5c7c5c7c5c7c!2s2023%20Grant%20St%2C%20Hollywood%2C%20FL%2033302!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BMP Automotive Location"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">SEND US A MESSAGE</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-md text-white focus:outline-none focus:border-m-red"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-md text-white focus:outline-none focus:border-m-red"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-md text-white focus:outline-none focus:border-m-red"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-m text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 