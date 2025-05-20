import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BMP Automotive USA - Professional BMW Repair, Chip Tuning & Performance Upgrades in Miami',
  description: 'Professional BMW maintenance, repair, chip tuning, and engine performance upgrades in Miami, USA. Official warranty on all work. Specializing in BMW M, Mercedes-AMG, and Porsche. Best tuning shop in America.',
  metadataBase: new URL('https://bmp-automotive.com'),
  keywords: [
    'BMW repair Miami',
    'BMW service USA',
    'BMW chip tuning America',
    'BMW performance upgrades USA',
    'BMW tuning Miami',
    'BMW M tuning USA',
    'Mercedes-AMG tuning America',
    'Porsche tuning USA',
    'engine chip tuning Miami',
    'Stage 1 USA',
    'Stage 2 America',
    'BMW ECU tuning Miami',
    'BMW diagnostics USA',
    'BMW engine repair America',
    'tuning shop Miami',
    'sports cars USA',
    'BMW performance Miami',
    'BMW tuning America',
    'BMW maintenance USA',
    'BMW repair Miami',
    'BMW specialist USA',
    'European car tuning America',
    'German car service Miami',
    'Luxury car tuning USA',
    'ремонт BMW в Америке',
    'обслуживание BMW USA',
    'чип тюнинг BMW в США'
  ].join(', '),
  openGraph: {
    title: 'BMP Automotive USA - Professional BMW Repair & Tuning in Miami',
    description: 'Professional BMW maintenance, repair, chip tuning, and engine performance upgrades in Miami, USA. Official warranty on all work. Specializing in BMW M, Mercedes-AMG, and Porsche.',
    images: ['/bmw-m-main.jpg'],
    type: 'website',
    locale: 'en_US',
    siteName: 'BMP Automotive USA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMP Automotive USA - Professional BMW Repair & Tuning in Miami',
    description: 'Professional BMW maintenance, repair, chip tuning, and engine performance upgrades in Miami, USA. Official warranty on all work.',
    images: ['/bmw-m-main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ru-RU': '/ru',
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
  other: {
    'geo.placename': 'Miami, Florida, USA',
    'geo.region': 'US-FL',
    'geo.position': '25.7617;-80.1918',
    'ICBM': '25.7617, -80.1918'
  }
} 