# CityPulse NYC Website - Deployment Guide

## Quick Start

Your CityPulse NYC marketing website is complete and ready to deploy! Here's what has been done and what's next.

## ✅ Completed

1. **Website Built**
   - Next.js 15 with TypeScript
   - Fully responsive design
   - 7 major sections (Hero, Value Prop, Use Cases, Technology, How It Works, About, Footer)
   - Dark glassy aesthetic matching mobile app
   - All 18 screenshots integrated

2. **GitHub Repository Created**
   - Repository: https://github.com/rogersentongo/citypulse-website
   - All code pushed and committed
   - Separate from CityPulseBackend repo

3. **Local Development**
   - Running at: http://localhost:3000
   - Test the website now before deploying!

## 🚀 Deploy to Vercel (Next Steps)

### Option 1: Deploy via Vercel Dashboard (Recommended - Easiest)

1. Visit https://vercel.com/new
2. Click "Import Git Repository"
3. Authorize Vercel to access your GitHub account
4. Select the `citypulse-website` repository
5. Vercel will auto-detect Next.js settings (no config needed!)
6. Click "Deploy"
7. Wait 2-3 minutes for deployment
8. Get your URL: `citypulse-website.vercel.app`

### Option 2: Deploy via CLI

```bash
# Login to Vercel (opens browser)
vercel login

# Deploy to production
cd /Users/rogersentongo/Dev/citypulse-website
vercel --prod
```

## 🌐 Custom Domain Setup (www.pulse-nyc.com)

After deploying to Vercel:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add domain: `pulse-nyc.com` and `www.pulse-nyc.com`
4. Follow Vercel's instructions to update your DNS records:
   - For `pulse-nyc.com`: Add A record pointing to `76.76.21.21`
   - For `www.pulse-nyc.com`: Add CNAME record pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (5-60 minutes)
6. SSL certificate will be automatically issued

## 📊 Post-Deployment

### SEO Setup
- Submit sitemap to Google Search Console: `https://www.pulse-nyc.com/sitemap.xml`
- Add Google Analytics (if needed)

### Monitoring
- Check Vercel Analytics dashboard
- Monitor Core Web Vitals

### Updates
To update the website:
```bash
cd /Users/rogersentongo/Dev/citypulse-website
# Make your changes
git add .
git commit -m "Your update message"
git push
# Vercel will auto-deploy!
```

## 🎯 Product Overview

**Website URL**: `https://www.pulse-nyc.com` (or `https://citypulse-website.vercel.app` before custom domain setup)

**Key Features**:
1. **Multimodal Vision AI** - Computer vision that understands fashion, architecture, culture
2. **Depth over Scale** - NYC-specific, hyperlocal video discovery
3. **Three Core Feeds** - Pulse Feed (citywide), Friends Feed (social), Ask NYC (AI search)
4. **Video-Only Platform** - Endless use cases from festivals to fashion, block parties to hidden gems
5. **Technical Moat** - Self-hosted AI stack, semantic embeddings, 2-second query responses

## 📁 Project Structure

```
/Users/rogersentongo/Dev/
├── citypulse-website/     ← Marketing website (THIS)
└── CityPulseBackend/      ← Mobile app backend
```

These are separate repositories with different purposes:
- **citypulse-website**: Public marketing site
- **CityPulseBackend**: Mobile app backend (private)

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production (test before deploying)
npm run build

# Preview production build locally
npm start

# Check TypeScript errors
npm run type-check

# Lint code
npm run lint
```

## 💡 Tips

- **Test locally first**: Visit http://localhost:3000 and test all sections
- **Mobile responsive**: Test on phone before deploying
- **Performance**: Run Lighthouse audit after deployment
- **Updates**: Any push to main branch auto-deploys to Vercel

## 🎨 Design Tokens

If you need to adjust colors/styling:
- Global styles: `app/globals.css`
- Colors: Black (#000000), Accent Red (#FF1744), White (#FFFFFF)
- Glass effects: `backdrop-filter: blur(10px)`

## 📧 Support

Questions? Contact: rogersentongo@gmail.com

---

**Built by Contrivance Inc. | © 2025**
