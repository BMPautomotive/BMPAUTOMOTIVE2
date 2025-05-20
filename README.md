# Performance Parts & Services Website

A modern website for a performance parts and services business, built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Online store with product catalog
- Service information
- Contact information
- Social media integration

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Heroicons

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd performance-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
performance-site/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── store/
│   │   │   └── page.tsx       # Store page
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── Navbar.tsx         # Navigation component
│   │   └── Footer.tsx         # Footer component
│   └── styles/
│       └── globals.css        # Global styles
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
└── README.md
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 