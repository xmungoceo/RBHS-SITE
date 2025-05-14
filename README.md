# Riverbend Imaging Website

This is the official website for Riverbend Imaging, built with Next.js 14, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)
- Git

## Local Development

1. Clone the repository:
```bash
git clone <your-repository-url>
cd riverbend-imaging
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Contains the main application pages and layouts
- `/src/components` - Reusable React components
- `/public` - Static assets like images
- `/src/styles` - Global styles and Tailwind CSS configuration

## Deployment to GitHub Pages

1. Create a new repository on GitHub

2. Initialize git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "GitHub Actions" as the source
   - Choose the Next.js workflow

4. The site will be automatically deployed when you push to the main branch.

## Adding Content

- Images: Add new images to `/public/images/`
- Pages: Create new pages in `/src/app/`
- Components: Add reusable components in `/src/components/`

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is private and confidential. All rights reserved.
