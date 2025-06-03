'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/i18n/LanguageContext'

const stages = [
  {
    title: 'Stage 1',
    description: 'Basic chip tuning without hardware mods. Gives your ride that extra kick and smooths out the engine like butter.',
    power: 'up to +30-40%',
    requirements: 'Stock hardware',
    features: [
      'Fuel injection optimization',
      'Throttle response boost',
      'Smooth gear shifts',
      'Speed limiter delete'
    ]
  },
  {
    title: 'Stage 2',
    description: 'Next-level tuning with minimal mods. You\'ll need a sport cat or resonator delete to unlock this beast.',
    power: 'up to +40-50%',
    requirements: 'Sport cat/resonator delete',
    features: [
      'All Stage 1 perks',
      'Turbo optimization',
      'Custom tune for sport cat',
      'Power gains that\'ll make your jaw drop'
    ]
  },
  {
    title: 'Stage 3',
    description: 'Maximum power with serious hardware upgrades. This is where things get wild - you\'ll need some serious mods.',
    power: 'up to +50-70%',
    requirements: 'Upgraded intercooler, sport cat, injectors, HPFP',
    features: [
      'All Stage 2 goodies',
      'Intercooler optimization',
      'Custom injector setup',
      'Maximum power that\'ll blow minds'
    ]
  }
]

const faq = [
  {
    question: 'Who\'s behind your tunes?',
    answer: 'We\'re rocking with Reborn Technologies - the real deal in the tuning game. These guys are straight-up wizards, with a crew of programmers from Russia (Moscow), Germany, and Belgium. They\'ve been dropping fire tunes for years, making cars go from zero to hero.'
  },
  {
    question: 'Will this mess with my warranty?',
    answer: 'Here\'s the real talk: European dealers can spot if you\'ve been messing with the software, and they might void your warranty. Even if you flash back to stock, they can still see you\'ve been in there. But hey, if nothing\'s broken, most dealers turn a blind eye to a little tuning action.'
  },
  {
    question: 'What\'s the damage to my wallet?',
    answer: 'Here\'s the breakdown: Tune cost + Software flash + Testing and diagnostics. No hidden fees or surprises - we keep it real with our pricing.'
  },
  {
    question: 'Is this gonna wreck my engine?',
    answer: 'Let\'s keep it 100: messing with the factory tune always comes with some risk. More power means more stress on your engine parts. But here\'s the deal - stay on top of your oil changes and don\'t push it too hard for too long, and you\'ll be golden. We\'ve seen engines last longer with proper maintenance after tuning.'
  }
]

export default function TuningPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-m-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-m-dark to-black">
        <div className="absolute inset-0">
          <Image
            src="/tuning.png"
            alt="Chip Tuning Services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              BMW CHIP TUNING
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional BMW tuning that\'ll make your ride go from basic to beast mode
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stages Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stages.map((stage, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">{stage.title}</h3>
              <p className="text-gray-300 mb-4">{stage.description}</p>
              <div className="mb-4">
                <span className="text-m-red font-bold text-xl">{stage.power}</span>
                <p className="text-gray-400 text-sm mt-1">Power Gains</p>
              </div>
              <div className="mb-4">
                <p className="text-white font-medium">Requirements:</p>
                <p className="text-gray-300">{stage.requirements}</p>
              </div>
              <div>
                <p className="text-white font-medium mb-2">What You Get:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {stage.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Level Up Your Ride?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Hit us up and our tuning experts will hook you up with the perfect setup for your BMW
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-m text-white font-bold py-4 px-10 rounded-md hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-m-red/20"
          >
            Let\'s Talk
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 