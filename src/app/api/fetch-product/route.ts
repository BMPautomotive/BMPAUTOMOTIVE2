export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
// @ts-ignore
const cheerio = require('cheerio')

export async function POST(request: Request) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      )
    }

    // Fetch the webpage content
    const response = await fetch(url)
    const html = await response.text()
    const $ = cheerio.load(html)

    // Extract product information
    // Note: These selectors need to be adjusted based on the target website structure
    const name = $('h1').first().text().trim()
    const description = $('meta[name="description"]').attr('content') || ''
    const priceText = $('.price').first().text().trim()
    const price = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 0
    const images = $('img.product-image').map((_, el) => $(el).attr('src')).get()

    // Calculate profit (example: 30% markup)
    const profit = price * 0.3

    return NextResponse.json({
      name,
      description,
      price,
      supplier: 'External Supplier',
      stock: 10, // Default stock
      category: 'lights', // Default category
      shippingTime: '3-5 days', // Default shipping time
      profit,
      images: images.map(img => img.startsWith('http') ? img : new URL(img, url).toString())
    })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product information' },
      { status: 500 }
    )
  }
} 