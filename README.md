# FIND Real Estate Landing Page

A modern, high-performance real estate landing page built with React, GSAP, Lenis, and Tailwind CSS. This project clones the design and animations from [findrealestate.com](https://findrealestate.com/).

## 🎯 Features

- **Smooth Scroll**: Lenis integration for buttery-smooth scrolling with GSAP ScrollTrigger synchronization
- **Advanced Animations**: GSAP-powered parallax effects, scroll-triggered reveals, and smooth transitions
- **Responsive Design**: Mobile-first approach using Tailwind CSS for all screen sizes
- **Performance Optimized**: Lazy loading, image optimization with WebP format, and priority hints
- **Modern UI**: Clean, minimalist design with elegant typography and spacing
- **Carousel**: Swiper integration for testimonials with smooth swiping
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 19.2.4 |
| **Vite** | Build Tool & Dev Server | 8.0.4 |
| **GSAP** | Animation Library | 3.14.2 |
| **Lenis** | Smooth Scroll | 1.3.23 |
| **Swiper** | Carousel/Slider | 12.1.3 |
| **Tailwind CSS** | Styling Framework | 4.2.4 |
| **Framer Motion** | React Animation | 12.38.0 |
| **Goober** | CSS-in-JS | 2.1.18 |

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🚀 Project Structure

```
src/
├── App.jsx                 # Root component with Lenis initialization
├── Hero.jsx               # Hero section with GSAP parallax animations
├── Navbar.jsx             # Navigation with scroll-aware styling
├── WhySection.jsx         # Why FIND section with video
├── ServicesSection.jsx    # Services cards with hover effects
├── Testimonials.jsx       # Testimonials carousel using Swiper
├── Footer.jsx             # Footer with newsletter signup
├── hooks/
│   └── useLenis.js        # Custom hook for Lenis smooth scroll
├── index.css              # Global styles with Tailwind directives
└── main.jsx               # React entry point
```

## 🎨 Key Components

### Hero Section
- Full-screen parallax background with Ken-Burns effect
- Staggered text animations using Framer Motion
- Smooth scroll parallax using GSAP ScrollTrigger
- Search bar with property type tabs
- Quick filter chips for popular cities

### Why Section
- Auto-playing video with overlay
- Two-column grid layout
- Scroll-triggered reveal animations
- Call-to-action button

### Services Section
- Three service cards with image overlays
- Hover effects with image zoom
- Responsive grid layout
- Learn More links with arrow animations

### Testimonials
- Swiper carousel with autoplay
- 5-star ratings
- Author avatars with initials
- Responsive slides per view

### Footer
- Four-column grid layout
- Newsletter signup form
- Social media links
- Legal links and copyright

## ⚙️ Configuration

### Lenis Smooth Scroll
Configured in `src/hooks/useLenis.js`:
- Duration: 1.2 seconds (scroll inertia)
- Easing: Exponential ease-out
- Smooth wheel scrolling enabled
- Touch multiplier: 1.5x for mobile

### GSAP ScrollTrigger
- Synchronized with Lenis scroll position
- Scrub animations for parallax effects
- Once-triggered reveals for performance

### Tailwind CSS
- Extended theme in `tailwind.config.js`
- Custom colors and fonts
- Responsive breakpoints
- Utility-first approach

## 🎬 Animation Highlights

1. **Hero Parallax**: Multi-layer background moves at different speeds
2. **Text Reveal**: Word-by-word stagger animation on page load
3. **Scroll Fade**: Content fades out as you scroll
4. **Card Hover**: Service cards scale and lift on hover
5. **Carousel Auto-play**: Testimonials rotate automatically

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components are fully responsive with Tailwind's responsive utilities.

## 🔍 Performance Optimizations

- **Image Lazy Loading**: `loading="lazy"` on non-critical images
- **Priority Hints**: `fetchPriority="high"` on hero images
- **WebP Format**: Modern image format for faster loading
- **CSS Minification**: Tailwind purges unused styles in production
- **Code Splitting**: Vite automatically chunks code for optimal loading
- **Will-change**: Applied to animated elements for GPU acceleration

## 🚀 Deployment

### Build for Production
```bash
pnpm run build
```

The optimized build is generated in the `dist/` directory.

### Deploy to Vercel
```bash
vercel
```

### Deploy to Netlify
```bash
netlify deploy --prod --dir=dist
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using React, GSAP, Lenis, and Tailwind CSS**
