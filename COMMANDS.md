# Quick Command Reference - Vadim Group Next.js

## 🚀 Development Commands

### Start Development Server
```bash
npm run dev
```
- Opens: http://localhost:3000
- Hot reload enabled
- Shows real-time errors

### Build for Production
```bash
npm run build
```
- Generates static site in `/out` directory
- Optimizes all assets
- Validates routes and links

### Preview Production Build
```bash
npm run preview
```
- Serves the `/out` directory locally
- Test before deploying

### Run Linter
```bash
npm run lint
```
- Checks code quality
- Shows TypeScript errors
- Validates component structure

---

## 📦 Package Management

### Install Dependencies
```bash
npm install
```

### Add New Package
```bash
npm install [package-name]
npm install -D [dev-package]  # Dev dependency
```

### Update Packages
```bash
npm update
npm outdated  # Check for outdated packages
```

---

## 🎨 shadcn/ui Components

### Install Components
```bash
# Install individual components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add accordion
npx shadcn@latest add carousel
npx shadcn@latest add input
npx shadcn@latest add tooltip
npx shadcn@latest add toast

# Install multiple at once
npx shadcn@latest add button card badge accordion
```

### Available Components
- button, card, badge, accordion
- carousel, input, tooltip, toast
- dialog, dropdown-menu, tabs
- sheet, popover, select
- And many more...

**Full list**: https://ui.shadcn.com/docs/components

---

## 🔧 Utility Commands

### Clear Cache
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules (PowerShell)
Remove-Item -Recurse -Force node_modules
npm install
```

### TypeScript Type Check
```bash
npx tsc --noEmit
```

### Format Code (if Prettier installed)
```bash
npx prettier --write .
```

---

## 📄 Content Operations

### Create New Page
```bash
# 1. Create route directory
mkdir app/new-page

# 2. Create page.tsx
# Add content to app/new-page/page.tsx

# 3. Create markdown content (optional)
# Add content to content/pages/new-page.md
```

### Copy Content from Source
```bash
# PowerShell
Copy-Item "..\vadim-craftsmanship-showcase\src\content\pages\*" -Destination "content\pages\" -Recurse

# Or manually copy individual files
```

---

## 🖼️ Asset Management

### Copy Images from Source
```bash
# PowerShell
Copy-Item "..\vadim-craftsmanship-showcase\src\assets\*" -Destination "public\assets\" -Recurse
```

### Optimize Images
```bash
# Convert to WebP and compress all images
npm run optimize-images
```
- Converts JPG/PNG to WebP (85% quality)
- Compresses original files
- Saves ~42% file size
- Creates fallback versions
- Shows detailed statistics

### Add New Asset
```bash
# 1. Place file in public/assets/
# 2. Optimize it
npm run optimize-images

# 3. Use in code with OptimizedImage component:
<OptimizedImage src="/assets/image" alt="Description" width={800} height={600} />
```

---

## 🚢 Deployment Commands

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Build for Static Hosting
```bash
# Build static site
npm run build

# Upload /out directory to:
# - Netlify
# - GitHub Pages
# - AWS S3
# - Any static host
```

---

## 🔍 Debugging

### Check Port Usage
```bash
# If port 3000 is busy
netstat -ano | findstr :3000

# Kill process (PowerShell, run as admin)
Stop-Process -Id [PID] -Force
```

### View Build Info
```bash
npm run build -- --debug
```

### Check Environment
```bash
node --version     # Should be 18+
npm --version      # Should be 9+
```

---

## 📊 Project Info

### View Installed Packages
```bash
npm list --depth=0
```

### Check Bundle Size
```bash
npm run build
# Check /out directory size
```

### Dependency Audit
```bash
npm audit
npm audit fix  # Auto-fix vulnerabilities
```

---

## 🧹 Maintenance

### Clean Project
```bash
# Remove build artifacts
Remove-Item -Recurse -Force .next, out

# Remove dependencies
Remove-Item -Recurse -Force node_modules

# Fresh install
npm install
```

### Update Next.js
```bash
npm install next@latest react@latest react-dom@latest
```

---

## 📝 Git Commands

### Common Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "feat: description"

# Push
git push origin main
```

### Branch Management
```bash
# Create branch
git checkout -b feature/name

# Switch branch
git checkout main

# Merge branch
git merge feature/name
```

---

## 🎯 Migration-Specific Commands

### Initialize Migration
```bash
# Already completed! Project is set up.
```

### Copy Specific Files
```bash
# Copy markdown content
Copy-Item "..\vadim-craftsmanship-showcase\src\content\pages\home.md" -Destination "content\pages\"

# Copy components
Copy-Item "..\vadim-craftsmanship-showcase\src\components\home\*" -Destination "components\home\" -Recurse

# Copy assets
Copy-Item "..\vadim-craftsmanship-showcase\src\assets\logo.png" -Destination "public\assets\"
```

### Verify Migration
```bash
# Check build works
npm run build

# Preview locally
npm run preview
```

---

## 💡 Tips

### Speed Up Development
```bash
# Use Turbopack (faster dev server)
# Already enabled by default in Next.js 15
npm run dev  # Uses Turbopack automatically
```

### Parallel Commands
```bash
# Run dev server and watch another process
npm run dev & npm run watch-content
```

### Environment Variables
```bash
# Create .env.local for local development
# Add variables:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 🆘 Troubleshooting

### "Module not found"
```bash
npm install
```

### "Port already in use"
```bash
# Use different port
npm run dev -- -p 3001
```

### Build fails
```bash
# Clear cache and rebuild
Remove-Item -Recurse -Force .next
npm run build
```

### TypeScript errors
```bash
# Check configuration
npx tsc --showConfig

# Restart TypeScript server (VS Code)
# Ctrl+Shift+P > "TypeScript: Restart TS Server"
```

---

## 📚 Quick Links

- **Project Root**: `D:\Vadim website\vadim-group-nextjs`
- **Source Project**: `D:\Vadim website\vadim-craftsmanship-showcase`
- **Dev Server**: http://localhost:3000
- **Docs**: [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)

---

**Last Updated**: December 5, 2025

