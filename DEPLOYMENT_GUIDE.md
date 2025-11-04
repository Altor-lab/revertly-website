# Revertly AI - Quick Deployment Guide

## 🚀 Deploy to GitHub Pages in 5 Minutes

### Step 1: Create GitHub Repository

```bash
# Navigate to the website directory
cd revertly-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Revertly AI website"

# Create repository on GitHub (replace YOUR-USERNAME)
# Then add remote
git remote add origin https://github.com/YOUR-USERNAME/revertly-website.git

# Push to GitHub
git push -u origin main
```

If you get an error about `main` branch, try:
```bash
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Under **Custom domain**:
   - Enter: `revertly.app`
   - Click **Save**
6. Wait for DNS check to complete
7. Enable **Enforce HTTPS** (after DNS propagates)

### Step 3: Configure DNS at Your Domain Registrar

You need to point `revertly.app` to GitHub Pages.

**Option A: Using CNAME (Recommended)**

Add this DNS record:
```
Type: CNAME
Name: @
Value: YOUR-USERNAME.github.io
TTL: 3600
```

**Option B: Using A Records**

Add these 4 A records:
```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### Step 4: Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours
- Usually takes 15-30 minutes
- Check status: https://www.whatsmydns.net/#CNAME/revertly.app

### Step 5: Verify Deployment

1. Wait 2-5 minutes after pushing to GitHub
2. Visit: https://YOUR-USERNAME.github.io/revertly-website
3. Once DNS propagates, visit: https://revertly.app
4. Check:
   - ✅ Website loads
   - ✅ All sections visible
   - ✅ Animations work
   - ✅ Navigation scrolls smoothly
   - ✅ HTTPS is enabled

## 🔄 Future Updates

After initial setup, use the deployment script:

```bash
# Make your changes to index.html, styles.css, etc.

# Deploy
chmod +x deploy.sh
./deploy.sh
```

The script will:
- ✅ Verify all files exist
- ✅ Check CNAME configuration
- ✅ Commit changes
- ✅ Push to GitHub
- ✅ Display deployment status

## 🎨 Customization

### Update Content

Edit `index.html`:
- Hero section: Update tagline, description
- Problem section: Modify pain points
- Solution section: Update features
- Contact email: Change `founders@revertly.app`

### Change Colors

Edit `styles.css` CSS variables:
```css
:root {
    --gradient-primary: linear-gradient(...);
    --gradient-hero: linear-gradient(...);
}
```

### Add Logo

Replace the text logo in `index.html`:
```html
<div class="nav-logo">
    <a href="/" class="logo-link">
        <img src="logo.svg" alt="Revertly AI" height="32">
    </a>
</div>
```

## 📊 Add Analytics

Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🐛 Troubleshooting

### Website Not Loading

1. Check GitHub Pages is enabled in Settings → Pages
2. Verify branch is set to `main`
3. Ensure CNAME file contains `revertly.app`
4. Wait 5-10 minutes after first deployment

### Custom Domain Not Working

1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check GitHub Pages settings show your domain
4. Try accessing via GitHub URL first: `https://YOUR-USERNAME.github.io/revertly-website`

### HTTPS Not Working

1. Wait for DNS to fully propagate (can take 24 hours)
2. In GitHub Pages settings, uncheck and re-check "Enforce HTTPS"
3. Clear browser cache
4. Try incognito/private browsing mode

### Changes Not Showing

1. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
2. Wait 2-5 minutes for GitHub Pages to rebuild
3. Check GitHub Actions tab for build status
4. Verify files were committed and pushed

## 📧 Support

Questions? Email: founders@revertly.app

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Enabled GitHub Pages
- [ ] Configured DNS records
- [ ] Verified website loads on GitHub URL
- [ ] Verified custom domain works
- [ ] HTTPS is enabled
- [ ] Updated content with your information
- [ ] Added analytics (optional)
- [ ] Tested on mobile devices
- [ ] Shared with team!

---

Built with ❤️ for AI safety

