# Revertly AI Website

**Git for AI Agents** - The undo button for enterprise AI operations.

A modern, beautiful static website for Revertly.app, inspired by Scalekit's design system.

## 🚀 About Revertly AI

Revertly allows businesses to "undo" changes made by AI agents across apps and workflows. Cross-system, dependency-aware rollback with a single click (restore Salesforce records + revert CPQ tiers + close PR + revert wiki edits).

Built by second-time founders from Rubrik, Microsoft, Zevi, and Cube HQ who've experienced this problem firsthand.

## 🎨 Design Features

- **Dark Theme** with gradient backgrounds inspired by Scalekit
- **Animated Gradients** on headings and CTAs
- **Smooth Scroll** animations
- **Interactive Cards** with hover effects and 3D tilt
- **Responsive Design** for all devices
- **Performance Optimized** - Pure HTML/CSS/JS, no frameworks

## 📁 Project Structure

```
revertly-website/
├── index.html          # Main HTML file
├── styles.css          # All styles with CSS variables
├── script.js           # Interactive features
├── CNAME              # Custom domain configuration
├── deploy.sh          # Deployment script
└── README.md          # This file
```

## 🚀 Quick Start

### Local Development

1. **Open the website locally:**
   ```bash
   cd revertly-website
   open index.html
   # Or use a local server:
   python3 -m http.server 8000
   # Then visit: http://localhost:8000
   ```

2. **Make changes:**
   - Edit `index.html` for content
   - Edit `styles.css` for styling
   - Edit `script.js` for interactions

3. **Preview changes:**
   - Refresh your browser to see updates

## 🌐 Deployment to GitHub Pages

### Prerequisites

- GitHub account
- Git installed
- Domain configured (revertly.app)

### Step 1: Create GitHub Repository

```bash
# Navigate to the website directory
cd revertly-website

# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/revertly-website.git

# Add all files
git add .

# Commit
git commit -m "Initial commit: Revertly website"

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. Click **Save**

### Step 3: Configure Custom Domain

**In GitHub:**
1. In Pages settings, enter `revertly.app` in the **Custom domain** field
2. Enable **Enforce HTTPS** (after DNS propagates)

**In Your Domain Registrar:**

Add one of these DNS configurations:

**Option A: CNAME Record (Recommended)**
```
Type: CNAME
Name: @
Value: YOUR-USERNAME.github.io
```

**Option B: A Records**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### Step 4: Deploy Using Script

```bash
# Make the deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

The script will:
- ✅ Verify all required files
- ✅ Check CNAME configuration
- ✅ Commit changes
- ✅ Push to GitHub
- ✅ Display deployment status

### Step 5: Verify Deployment

1. Wait 2-5 minutes for GitHub Pages to build
2. Visit https://revertly.app
3. Check that:
   - ✅ Website loads correctly
   - ✅ All styles are applied
   - ✅ Animations work
   - ✅ Navigation scrolls smoothly
   - ✅ HTTPS is enabled

## 🎨 Customization Guide

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    /* Update these gradients */
    --gradient-primary: linear-gradient(269deg, #1D8BA9 3.05%, #6ABBD1 26.64%, #FF8E40 50.22%, #FF594F 97.4%);
    --gradient-hero: linear-gradient(180deg, #0C0D0F 40.76%, #0D2B5C 269.85%, #30399C 327.12%);
}
```

### Update Content

Edit `index.html`:

- **Hero Section**: Update title, description, and stats
- **Features**: Modify feature cards
- **Platform**: Change platform benefits
- **Footer**: Update links and information

### Add New Sections

1. Add HTML in `index.html`:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <!-- Your content -->
    </div>
</section>
```

2. Add styles in `styles.css`:
```css
.new-section {
    padding: var(--spacing-3xl) 0;
    background: var(--color-bg-primary);
}
```

3. Add to navigation in `index.html`:
```html
<a href="#new-section" class="nav-link">New Section</a>
```

### Modify Animations

Edit `script.js` to customize:
- Scroll animations
- Hover effects
- Parallax speed
- Card tilt sensitivity

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Mobile**: ≤ 768px

Customize in `styles.css` under `@media` queries.

## 🔧 Troubleshooting

### Website Not Loading

1. Check GitHub Pages is enabled
2. Verify branch is set to `main` or `master`
3. Ensure CNAME file contains `revertly.app`
4. Wait 5-10 minutes after first deployment

### Custom Domain Not Working

1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check GitHub Pages settings show your domain
4. Try accessing via `https://YOUR-USERNAME.github.io/revertly-website` first

### Styles Not Loading

1. Check file paths in `index.html`
2. Verify `styles.css` is in the same directory
3. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
4. Check browser console for errors

### Animations Not Working

1. Verify `script.js` is loaded
2. Check browser console for JavaScript errors
3. Ensure browser supports modern JavaScript features

## 🚀 Performance Tips

- ✅ All assets are optimized
- ✅ No external dependencies (except Google Fonts)
- ✅ Minimal JavaScript
- ✅ CSS is minified in production
- ✅ Images should be optimized (add when needed)

## 📊 Adding Analytics

Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security

- ✅ HTTPS enforced via GitHub Pages
- ✅ No sensitive data in code
- ✅ No external scripts (except fonts)
- ✅ Content Security Policy ready

## 📝 License

Copyright © 2025 Revertly. All rights reserved.

## 🤝 Support

For issues or questions:
- Create an issue in the GitHub repository
- Email: support@revertly.app

## 🎯 Next Steps

1. **Add Content**: Replace placeholder text with real content
2. **Add Logo**: Create and add your logo
3. **Add Images**: Add product screenshots or graphics
4. **SEO**: Add meta tags, sitemap.xml, robots.txt
5. **Analytics**: Set up Google Analytics or similar
6. **Social**: Add Open Graph images for social sharing

---

Built with ❤️ for developers

