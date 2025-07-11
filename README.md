# Javier Hengda - Portfolio

> A modern, performance-optimized portfolio showcasing AI/ML engineering and full-stack development expertise.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚀 Live Demo

**[View Portfolio →](https://your-domain.com)**

## ✨ Features

- **🎨 Modern Design**: Clean, professional aesthetic with attention to detail
- **⚡ Performance Optimized**: Built with Astro for lightning-fast load times
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **♿ Accessible**: WCAG compliant with proper ARIA labels and semantic HTML
- **🔍 SEO Ready**: Optimized meta tags, structured data, and automatic sitemap
- **🎭 Interactive**: Smooth animations and hover effects for engaging UX

## 🛠️ Tech Stack

### Core Framework
- **[Astro](https://astro.build/)** - Static Site Generator with partial hydration
- **[React](https://reactjs.org/)** - UI component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons
- **Custom Design System** - Consistent spacing, typography, and colors

### Features & Integrations
- **Responsive Navigation** - Mobile hamburger menu with smooth transitions
- **Contact Form** - Integrated contact functionality
- **Social Links** - GitHub, LinkedIn, Twitter, and email integration
- **Project Showcase** - Interactive project cards with hover effects
- **Skills Display** - Organized technical competencies

## 🎯 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── header.tsx     # Navigation header
│   │   ├── hero.tsx       # Landing section
│   │   ├── skills.tsx     # Technical skills
│   │   ├── projects.tsx   # Project showcase
│   │   ├── experience.tsx # Work experience
│   │   ├── contact.tsx    # Contact form
│   │   └── footer.tsx     # Site footer
│   ├── layouts/
│   │   └── Layout.astro   # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── 404.astro      # Error page
│   │   └── style-guide.astro
│   └── styles/
│       └── globals.css    # Global styles & design system
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/javierhwulin/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Utilities
npm run astro        # Run Astro CLI commands
```

## 🎨 Customization

### Colors & Branding

The design system is defined in `src/styles/globals.css`:

```css
--color-primary: #1E3A5F;           /* Main brand color */
--color-primary-foreground: #F8F5E8; /* Text on primary */
--color-rice-paper: #F8F5E8;        /* Background color */
--color-deep-brown: #6F4E37;        /* Secondary text */
```

### Content Updates

1. **Personal Information**: Update `src/components/hero.tsx`
2. **Projects**: Modify the projects array in `src/components/projects.tsx`
3. **Skills**: Edit skills data in `src/components/skills.tsx`
4. **Experience**: Update work history in `src/components/experience.tsx`
5. **Contact Info**: Modify contact details in `src/components/contact.tsx`

### SEO Configuration

Update SEO settings in `src/layouts/Layout.astro`:
- Meta descriptions
- Open Graph images
- Structured data
- Social media links

## 📦 Deployment

### Quick Deploy Options

#### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload `dist/` folder to Netlify
```

#### GitHub Pages
```bash
npm run build
# Upload `dist/` folder to gh-pages branch
```

## 🔧 Development

### Code Quality

- **TypeScript**: Full type safety across all components
- **ESLint**: Code linting for consistency
- **Prettier**: Code formatting
- **Component Architecture**: Functional components with proper props typing

### Performance

- **Astro Islands**: Partial hydration for optimal performance
- **Image Optimization**: Responsive images with proper formats
- **Code Splitting**: Automatic bundle optimization
- **Minimal JavaScript**: Only load what's needed

## 📈 SEO & Analytics

### Built-in SEO Features

- ✅ Meta tags and Open Graph
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ XML Sitemap (auto-generated)
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Alt tags for all images

### Analytics Integration

Add your tracking code to `src/layouts/Layout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Javier Hengda Wu Lin**
- Portfolio: [https://your-domain.com](https://your-domain.com)
- GitHub: [@javierhwulin](https://github.com/javierhwulin)
- LinkedIn: [Javier Hengda Wu Lin](https://www.linkedin.com/in/javier-hengda-wu-lin-51a98a189/)
- Twitter: [@hengda_wu](https://x.com/hengda_wu)
- Email: javier.hwulin.devtech@gmail.com

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/) for exceptional performance
- Styled with [Tailwind CSS](https://tailwindcss.com/) for rapid development
- Icons by [Lucide](https://lucide.dev/) for consistent design
- Fonts from [Google Fonts](https://fonts.google.com/) (IBM Plex Sans, Noto Sans)

---

⭐ If you found this portfolio helpful, please consider giving it a star!
