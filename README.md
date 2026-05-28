# S7AR Documentation

A modern documentation site built with Next.js 15, React 19, and Tailwind CSS, inspired by Nextra 3.

## Features

- 🚀 Built with Next.js 15 and React 19
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support with next-themes
- 📱 Fully responsive design
- 🔍 SEO optimized
- ⚡ Optimized for performance
- 🎯 Vercel ready for deployment

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── docs/
│       ├── page.tsx
│       ├── installation/
│       ├── quick-start/
│       ├── api/
│       └── ...
├── components/
│   ├── navbar.tsx
│   ├── sidebar.tsx
│   └── theme-provider.tsx
└── ...
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and configure the build
5. Click Deploy

That's it! Your documentation site will be live at your Vercel URL.

## Customization

### Colors

Edit `tailwind.config.js` to change the primary color and accent colors.

### Navigation

Edit the `navItems` in `src/components/sidebar.tsx` to update the documentation structure.

### Content

Create new pages in `src/app/docs/` directory following the existing structure.

## Technologies

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Theme**: next-themes
- **Icons**: lucide-react

## License

MIT