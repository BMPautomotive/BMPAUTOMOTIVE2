import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - BMP Automotive USA | Professional BMW Repair & Tuning in Miami',
  description: 'Professional BMW maintenance, repair, chip tuning, and performance upgrades in Miami, USA. Official warranty on all work. Specializing in BMW M, Mercedes-AMG, and Porsche. Best tuning shop in America.',
  keywords: 'BMW repair Miami, BMW service USA, BMW chip tuning America, performance upgrades, BMW M Miami, Mercedes-AMG USA, Porsche tuning America, warranty USA, Russian speaking BMW specialist Miami',
  openGraph: {
    title: 'About Us - BMP Automotive USA | Professional BMW Repair & Tuning in Miami',
    description: 'Professional BMW maintenance, repair, chip tuning, and performance upgrades in Miami, USA. Official warranty on all work. Best tuning shop in America.',
    images: ['/bmw-m-main.png'],
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 