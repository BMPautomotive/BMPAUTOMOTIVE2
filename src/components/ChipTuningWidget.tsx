'use client'

import React from 'react'

interface TuningParameters {
  model: string
  stock: {
    power: number
    torque: number
  }
  tuned: {
    power: number
    torque: number
  }
}

const tuningData: TuningParameters[] = [
  {
    model: 'BMW M3 Competition (G80)',
    stock: {
      power: 510,
      torque: 650
    },
    tuned: {
      power: 650,
      torque: 750
    }
  },
  {
    model: 'BMW M4 Competition (G82)',
    stock: {
      power: 510,
      torque: 650
    },
    tuned: {
      power: 650,
      torque: 750
    }
  },
  {
    model: 'BMW M5 Competition (F90)',
    stock: {
      power: 625,
      torque: 750
    },
    tuned: {
      power: 750,
      torque: 850
    }
  },
  {
    model: 'BMW M8 Competition',
    stock: {
      power: 625,
      torque: 750
    },
    tuned: {
      power: 750,
      torque: 850
    }
  },
  {
    model: 'BMW X3M Competition',
    stock: {
      power: 510,
      torque: 600
    },
    tuned: {
      power: 650,
      torque: 700
    }
  },
  {
    model: 'BMW X5M Competition',
    stock: {
      power: 625,
      torque: 750
    },
    tuned: {
      power: 750,
      torque: 850
    }
  }
]

export default function ChipTuningWidget() {
  return (
    <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2 tracking-widest">CHIP TUNING RESULTS</h2>
        <p className="text-gray-400 text-sm">Professional software for power enhancement</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tuningData.map((car) => (
          <div key={car.model} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
            <h3 className="text-white text-lg mb-4 font-light">{car.model}</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Stock</span>
                  <span>Tuned</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-white">
                    <div className="text-2xl font-light">{car.stock.power}</div>
                    <div className="text-xs text-gray-400">HP</div>
                  </div>
                  <div className="text-m-light-blue">
                    <div className="text-2xl font-light">{car.tuned.power}</div>
                    <div className="text-xs text-gray-400">HP</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Stock</span>
                  <span>Tuned</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-white">
                    <div className="text-2xl font-light">{car.stock.torque}</div>
                    <div className="text-xs text-gray-400">Nm</div>
                  </div>
                  <div className="text-m-light-blue">
                    <div className="text-2xl font-light">{car.tuned.torque}</div>
                    <div className="text-xs text-gray-400">Nm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 