#!/bin/bash

# Revertly Website Deployment Script
# Deploys static website to GitHub Pages with custom domain

echo ""
echo "========================================"
echo "  Revertly Website Deployment"
echo "========================================"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found!"
    echo "Please run this script from the revertly-website directory"
    exit 1
fi

# Step 1: Verify all files exist
echo "[1/4] Verifying files..."
required_files=("index.html" "styles.css" "script.js" "CNAME")
missing_files=()

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -ne 0 ]; then
    echo "❌ Missing required files:"
    printf '%s\n' "${missing_files[@]}"
    exit 1
fi

echo "✓ All required files present"
echo ""

# Step 2: Verify CNAME content
echo "[2/4] Verifying CNAME file..."
cname_content=$(cat CNAME)
if [ "$cname_content" != "revertly.app" ]; then
    echo "⚠️  CNAME content is: $cname_content"
    echo "Expected: revertly.app"
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    echo "✓ CNAME verified: revertly.app"
fi
echo ""

# Step 3: Git status check
echo "[3/4] Checking git status..."
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not a git repository!"
    echo "Please initialize git first:"
    echo "  git init"
    echo "  git remote add origin <your-repo-url>"
    exit 1
fi

echo "✓ Git repository detected"
echo ""

# Step 4: Commit and push
echo "[4/4] Deploying to GitHub Pages..."
git add .

# Check if there are changes to commit
if git diff-staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    git commit -m "Deploy Revertly website - $(date '+%Y-%m-%d %H:%M')"
    echo "✓ Changes committed"
fi

echo ""
echo "Pushing to GitHub..."
git push origin main || git push origin master

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "  ✅ Deployment Successful!"
    echo "========================================"
    echo ""
    echo "Your website will be live at:"
    echo "  https://revertly.app"
    echo ""
    echo "⏱️  Please wait 2-5 minutes for GitHub Pages to build"
    echo ""
    echo "Next steps:"
    echo "  1. Configure DNS for revertly.app:"
    echo "     - Add CNAME record pointing to: <username>.github.io"
    echo "     - Or add A records to GitHub Pages IPs"
    echo "  2. Enable HTTPS in GitHub Pages settings"
    echo "  3. Verify deployment at https://revertly.app"
    echo ""
else
    echo ""
    echo "❌ Push failed!"
    echo "Please check your git configuration and try again"
    exit 1
fi

