# 🚀 Deployment Guide - Family Cook

## Static Build Configuration

Your site is now configured for **static export** - it will generate pure HTML/CSS/JS files that can be hosted anywhere!

---

## 📦 Building the Site

### 1. Build for Production

```bash
npm run build
```

This will create an `out/` folder with all static files.

### 2. Test Locally

```bash
npm run serve
```

Then open: http://localhost:3000

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

#### Via Netlify UI:
1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click "Deploy site"

#### Via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

**Custom Domain:**
- Go to Site settings → Domain management
- Add custom domain: `family-cook.ru`
- Follow DNS instructions

---

### Option 2: Vercel (Also Easy)

1. Go to https://vercel.com
2. Import your GitHub repository
3. Vercel auto-detects Next.js
4. Click "Deploy"

**Custom Domain:**
- Go to Settings → Domains
- Add `family-cook.ru`
- Update DNS records

---

### Option 3: GitHub Pages (Free)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. Enable GitHub Pages in repository settings
3. Source: `gh-pages` branch

---

### Option 4: Traditional Hosting (cPanel, etc.)

1. Build the site:
   ```bash
   npm run build
   ```

2. Upload the `out/` folder contents to your web server via FTP

3. Point your domain to the folder

---

## 📁 Output Structure

After `npm run build`, the `out/` folder contains:

```
out/
├── index.html              # Home page
├── about/
│   └── index.html         # About page
├── recipes/
│   ├── index.html         # Recipes list
│   ├── flyurnik/
│   │   └── index.html     # Recipe detail
│   ├── morkovnyy-tort/
│   │   └── index.html
│   └── ...                # All 31 recipes
├── contacts/
│   └── index.html         # Contacts page
├── _next/                 # Next.js assets
├── og-image.jpg           # Open Graph images
├── og-about.jpg
├── og-recipes.jpg
└── og-contacts.jpg
```

---

## 🔧 Environment Variables

If you need environment variables (API keys, etc.):

### For Netlify:
1. Site settings → Environment variables
2. Add variables
3. Redeploy

### For Vercel:
1. Project settings → Environment Variables
2. Add variables
3. Redeploy

### For local `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://family-cook.ru
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## ⚡ Performance Optimizations

Your static build includes:

✅ **Pre-rendered pages** - All pages generated at build time  
✅ **Optimized images** - Automatic image optimization  
✅ **Code splitting** - Smaller bundle sizes  
✅ **SEO ready** - All metadata included  
✅ **Fast loading** - No server-side rendering needed  

---

## 🔍 SEO Checklist

Before deploying:

- [ ] Add Open Graph images to `/public/`
- [ ] Update `family-cook.ru` URLs in metadata
- [ ] Add `robots.txt` to `/public/`
- [ ] Add `sitemap.xml` to `/public/`
- [ ] Test Open Graph with Facebook Debugger
- [ ] Set up Google Analytics (optional)
- [ ] Set up Google Search Console

---

## 📊 Analytics (Optional)

### Google Analytics:

1. Get tracking ID from https://analytics.google.com
2. Add to `layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## 🐛 Troubleshooting

### Build fails?
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### Images not loading?
- Check that images are in `/public/`
- Verify image URLs in `recipes.ts`
- Ensure `unoptimized: true` in `next.config.ts`

### 404 errors on deployment?
- Check `trailingSlash: true` in `next.config.ts`
- Verify all routes have `index.html`

---

## 📝 Deployment Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Test production build locally
npm run serve

# Deploy to Netlify
netlify deploy --prod --dir=out

# Deploy to Vercel
vercel --prod
```

---

## 🎯 Next Steps

1. **Build the site:** `npm run build`
2. **Test locally:** `npm run serve`
3. **Choose hosting:** Netlify, Vercel, or GitHub Pages
4. **Deploy!**
5. **Add custom domain:** `family-cook.ru`
6. **Set up SSL:** (automatic on Netlify/Vercel)

---

## 💡 Tips

- **Netlify** is easiest for beginners
- **Vercel** is best for Next.js projects
- **GitHub Pages** is free but requires more setup
- All options support custom domains
- All provide free SSL certificates

---

## 📞 Support

If you encounter issues:
1. Check the build logs
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+
4. Clear cache and rebuild

**Your site is ready to deploy!** 🎉
