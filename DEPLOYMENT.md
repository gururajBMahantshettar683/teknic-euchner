# Deployment Instructions — Vercel

## Option 1: Vercel Dashboard (Easiest)

1. **Push to GitHub** — Already done ✓
2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Select **"Import Git Repository"**
4. Choose `gururajBMahantshettar683/teknic-euchner`
5. Click **Install** & **Authorize**
6. In the import settings, leave defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: `dist`
7. Click **Deploy**
8. Vercel will give you a live URL like `https://teknic-euchner.vercel.app`

## Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel --prod

# First time, follow the prompts:
# - Set project name: teknic-euchner
# - Set directory: .
# - Overwrite settings? No
# - Link to existing project? No

# Deploy preview for branch changes
vercel
```

## Option 3: GitHub Integration (Best for CI/CD)

1. Go to [https://vercel.com/import](https://vercel.com/import)
2. Click **"Import Git Repository"**
3. Select `teknic-euchner` under your account
4. Vercel auto-detects Vite + React
5. Click **Deploy**
6. Enable **GitHub Sync** for automatic deploys on every push

## Environment Variables

If you need to add environment variables (for contact forms, analytics, etc.):

- Vercel Dashboard → Project → Settings → Environment Variables
- Or: `vercel env add NODE_ENV production`

## Custom Domain

To add your own domain:

1. Vercel Dashboard → Project → Settings → Domains
2. Add your domain (e.g., `www.tekniceuchner.com`)
3. Update DNS records as prompted
4. Vercel auto-provisions SSL

## Build Output

```
dist/
├── index.html
└── assets/
    ├── index-*.css
    └── index-*.js
```

## Local Development

```bash
npm run dev
# Opens at http://localhost:5173
```

## Adding Figma Images

1. Export images from Figma at required resolutions
2. Save as PNG files to `public/assets/`
3. Refer to `ASSETS.md` for exact filenames
4. Restart dev server if images don't appear (Vite caches)
