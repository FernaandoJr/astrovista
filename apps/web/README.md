<div align="center">

# 🌌 AstroVista Web App

_Modern frontend for exploring NASA's Astronomy Picture of the Day_

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[**🚀 Live Demo**](https://astrovista.vercel.app/) • [**📖 About**](https://astrovista.vercel.app/about) • [**🐛 Report Bug**](https://github.com/FernaandoJr/AstroVista/issues)

</div>

---

## ✨ About

The **AstroVista Web App** is a modern, responsive frontend application built with Next.js 15 and React 19. It provides an intuitive interface for exploring NASA's complete Astronomy Picture of the Day archive, featuring advanced search capabilities, beautiful animations, and a seamless user experience across all devices.

---

## 🎯 Key Features

### 🌠 **Complete APOD Gallery**

- Browse through thousands of astronomical images and videos
- High-resolution image viewing with zoom capabilities
- Detailed scientific explanations for each APOD

### 🔍 **Advanced Search & Filtering**

- Search by keywords, dates, and media types
- Date range filtering with calendar interface
- Sort by date (ascending/descending)
- Pagination for efficient browsing

### 📱 **Responsive Design**

- Mobile-first approach with perfect tablet and desktop scaling
- Dark/light mode support with system preference detection
- Smooth animations and transitions using Framer Motion
- Accessible design following WCAG guidelines

### 🎨 **Modern UI Components**

- Custom component library with shadcn/ui
- Animated cards and interactive elements
- Loading skeletons and error states
- Beautiful gradient backgrounds and effects

### ⚡ **Performance Optimized**

- Server-side rendering (SSR) for fast initial loads
- Image optimization with Next.js Image component
- Efficient state management with React Context
- Optimized bundle splitting and lazy loading

---

## 🛠️ Technology Stack

### **Core Technologies**

- **Next.js 15.3.4** - React framework with App Router
- **React 19.0.0** - Latest React with concurrent features
- **TypeScript 5.9.2** - Type-safe development
- **Tailwind CSS 4.1.10** - Utility-first CSS framework

### **UI & Animation**

- **Framer Motion 12.18.1** - Smooth animations and transitions
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icon library
- **Radix UI** - Accessible component primitives

### **State Management & Data**

- **React Query** - Server state management and caching
- **React Context** - Global state management
- **Custom Hooks** - Reusable logic and API integration

### **Development Tools**

- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

---

## 🚀 Quick Start

### **Prerequisites**

- Node.js 18+
- pnpm 9.0.0+

### **Installation**

1. **Clone and navigate to the web app**

   ```bash
   git clone https://github.com/FernaandoJr/AstroVista.git
   cd AstroVista/apps/web
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment setup**

   Create `.env.local` in `apps/web/`:

   ```bash
   NEXT_PUBLIC_API_URL="http://localhost:3001"
   ```

4. **Start development server**

   ```bash
   pnpm dev
   ```

5. **Access the application**
   - 🌐 **Frontend**: http://localhost:3000

---

## 📁 Project Structure

```
apps/web/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── apod/           # APOD detail page
│   │   ├── favorites/      # User favorites
│   │   ├── gallery/        # Gallery with search
│   │   ├── login/          # Authentication
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── blocks/         # Page-specific components
│   │   ├── templates/      # Layout templates
│   │   └── ui/             # Base UI components
│   ├── contexts/           # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   ├── providers/          # App providers
│   └── utils/              # Helper functions
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

---

## 🎨 Component Architecture

### **UI Components (`/components/ui/`)**

- `button.tsx` - Customizable button component
- `card.tsx` - Card layout component
- `input.tsx` - Form input component
- `skeleton.tsx` - Loading skeleton component
- `theme-provider.tsx` - Dark/light mode provider

### **Page Components (`/components/blocks/`)**

- `gallery-card.tsx` - APOD card display
- `gallery-inputs.tsx` - Search and filter controls
- `navbar.tsx` - Navigation header
- `pagination.tsx` - Pagination controls

### **Templates (`/components/templates/`)**

- `apod-gallery.tsx` - Gallery page layout
- `apod-info.tsx` - APOD detail layout
- `home-hero.tsx` - Home page hero section

---

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm type-check       # Run TypeScript checks

# Utilities
pnpm clean            # Clean build artifacts
```

---

## 🌐 Pages & Routes

### **Main Pages**

- `/` - Home page with featured APODs
- `/gallery` - Complete APOD gallery with search
- `/gallery/[date]` - Individual APOD detail page
- `/about` - Project information and features
- `/favorites` - User's favorite APODs (requires auth)
- `/login` - User authentication

### **API Integration**

- All pages consume the AstroVista API (`apps/server`)
- Real-time data fetching with React Query
- Optimistic updates and error handling
- Automatic retry logic for failed requests

---

## 🎨 Styling & Theming

### **Design System**

- **Colors**: Custom color palette with dark/light variants
- **Typography**: Inter font family with proper hierarchy
- **Spacing**: Consistent spacing scale using Tailwind
- **Animations**: Smooth transitions with Framer Motion

### **Theme Support**

- System preference detection
- Manual theme toggle
- Persistent theme selection
- Smooth theme transitions

---

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### **Mobile Features**

- Touch-friendly interactions
- Swipe gestures for navigation
- Optimized image loading
- Reduced motion support

---

## ⚡ Performance Features

### **Optimization Strategies**

- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components and images loaded on demand
- **Caching**: Aggressive caching with React Query
- **Bundle Analysis**: Regular bundle size monitoring

### **Core Web Vitals**

- **LCP**: Optimized for < 2.5s
- **FID**: Smooth interactions < 100ms
- **CLS**: Stable layout with no shifts

---

## 🔒 Security Features

- **CSP Headers**: Content Security Policy implementation
- **XSS Protection**: Input sanitization and validation
- **HTTPS**: Enforced secure connections
- **Environment Variables**: Secure API key management

---

## 🧪 Testing Strategy

### **Testing Tools**

- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Cypress** - End-to-end testing
- **Storybook** - Component documentation

### **Test Coverage**

- Component unit tests
- Integration tests for API calls
- Accessibility testing
- Visual regression testing

---

## 🚀 Deployment

### **Vercel Deployment**

```bash
# Deploy to Vercel
vercel --prod

# Environment variables in Vercel dashboard:
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

### **Build Optimization**

- Automatic static optimization
- Edge runtime for API routes
- CDN distribution worldwide
- Automatic HTTPS

---

## 🤝 Contributing

### **Development Workflow**

1. Create feature branch from `main`
2. Make changes following the style guide
3. Test thoroughly across devices
4. Submit pull request with description

### **Code Standards**

- Follow ESLint configuration
- Use TypeScript for all new code
- Write meaningful commit messages
- Update documentation as needed

---

## 📊 Performance Metrics

- **Bundle Size**: ~200KB gzipped
- **First Load**: < 2s on 3G
- **Lighthouse Score**: 95+ across all metrics
- **Accessibility**: WCAG 2.1 AA compliant

---

## 🔮 Future Enhancements

- **PWA Support**: Offline functionality and app-like experience
- **Advanced Search**: AI-powered content recommendations
- **Social Features**: Sharing and commenting system
- **Mobile App**: React Native companion app
- **Internationalization**: Multi-language support

---

<div align="center">

### **Made with ❤️ by [FernaandoJr](https://github.com/FernaandoJr)**

_Exploring the universe through beautiful interfaces_ 🌌

</div>
