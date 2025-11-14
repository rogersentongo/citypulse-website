# CityPulse NYC - Marketing Website

Official marketing website for CityPulse NYC - AI-powered discovery for fashion, landmarks, and culture in New York City.

## About CityPulse

CityPulse uses cutting-edge multimodal vision AI to help people experience NYC in new ways:

- **Fashion Trends**: Discover emerging street style trends across all five boroughs
- **Sightseeing**: Experience iconic landmarks through fresh perspectives
- **News & Events**: Stay ahead of what's happening in the city

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## Features

- Responsive single-page design
- Dark glassy skeumorphic aesthetic matching the mobile app
- Animated hero carousel showcasing key features
- Comprehensive sections highlighting multimodal AI capabilities
- SEO optimized with Open Graph and Twitter Card metadata

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
citypulse-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and design system
├── components/
│   ├── Hero.tsx            # Hero section with carousel
│   ├── ValueProposition.tsx
│   ├── PrimaryUseCases.tsx # Fashion, Sightseeing, News
│   ├── Technology.tsx      # Multimodal AI section
│   ├── HowItWorks.tsx
│   ├── About.tsx
│   └── Footer.tsx
└── public/
    └── screenshots/        # App screenshots
```

## Design System

- **Colors**:
  - Black (#000000) background
  - Accent red (#FF1744)
  - White text with gray variations
- **Effects**: Glass morphism with blur and transparency
- **Typography**: SF Pro Display / Inter-style fonts
- **Spacing**: 8px base unit system

## Company

Built by **Contrivance Inc.**
Based in New York City
Applying to Collaborative Fund AIR Program

## Contact

For inquiries: rogersentongo@gmail.com

## License

© 2025 Contrivance Inc. All rights reserved.
