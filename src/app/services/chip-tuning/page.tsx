'use client'

import React from 'react'
import Image from 'next/image'
import ChipTuningWidget from '@/components/ChipTuningWidget'

export default function ChipTuningPage() {
  return (
    <div className="bg-m-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-m-dark to-black">
        <div className="absolute inset-0">
          <Image
            src="/chip-tuning.jpg"
            alt="Chip Tuning"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CHIP TUNING
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional BMW tuning that'll make your ride go from basic to beast mode
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">ABOUT CHIP TUNING</h2>
                <p className="text-gray-300 mb-4">
                  We're rocking with Reborn Technologies - the real deal in the tuning game. These guys are straight-up wizards, with a crew of programmers from Russia (Moscow), Germany, and Belgium. They've been dropping fire tunes for years, making cars go from zero to hero.
                </p>
                <p className="text-gray-300">
                  Here's the real talk: European dealers can spot if you've been messing with the software, and they might void your warranty. Even if you flash back to stock, they can still see you've been in there. But hey, if nothing's broken, most dealers turn a blind eye to a little tuning action.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">BENEFITS</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Увеличение мощности двигателя до 30%</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Улучшение отзывчивости педали газа</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Оптимизация расхода топлива</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Снятие ограничителя скорости</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Улучшение динамики разгона</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Оптимизация работы коробки передач</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Улучшение работы системы впрыска</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Гарантия на все работы</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">TUNING RESULTS</h2>
                <ChipTuningWidget />
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">PROCESS</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-m-red rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Diagnostics</h3>
                      <p className="text-gray-300">Complete vehicle check and software reading</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-m-red rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Development</h3>
                      <p className="text-gray-300">Custom software development for your BMW</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-m-red rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Installation</h3>
                      <p className="text-gray-300">Professional installation of the new software</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-m-red rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Testing</h3>
                      <p className="text-gray-300">Comprehensive testing and quality assurance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 