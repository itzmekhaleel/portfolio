# Deployment Guide for Your Portfolio

Follow these steps to deploy your portfolio to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to https://github.com and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "portfolio" or "shaik-mohammad-khaleel-portfolio")
4. Set the repository to "Public"
5. DO NOT initialize with a README, .gitignore, or license
6. Click "Create repository"

## Step 2: Connect Your Local Repository to GitHub

1. In your terminal, run the following commands (replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPOSITORY` with your repository name):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy with GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions" from the dropdown
5. GitHub will automatically suggest a workflow for deploying a Vite site
6. Click "Configure" next to the Vite workflow
7. Commit the workflow file with the default settings

## Step 4: Wait for Deployment

1. GitHub will automatically run the deployment workflow
2. Once complete, your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/

## Alternative: Manual GitHub Pages Setup

If you prefer to use the traditional GitHub Pages approach:

1. In your repository Settings > Pages
2. Under "Source", select "Deploy from a branch"
3. Select "main" branch and "/docs" folder (if you build to docs) or "/" root
4. Since Vite builds to "dist" by default, you may need to:
   - Change the build output directory in vite.config.js to "docs"
   - Or use a custom workflow to deploy the dist folder

## Updating Your Portfolio

To update your portfolio after making changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Your GitHub Pages site will automatically update with each push to the main branch.