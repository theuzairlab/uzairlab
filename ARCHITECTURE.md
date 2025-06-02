# The Uzair's Lab - Architecture Documentation

## Project Structure

```
theuzairlab/
├── app/                      # Next.js 14 app directory
│   ├── (rootRoutes)/        # Root route group
│   ├── layout.tsx           # Root layout component
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── mainCompo/          # Main page components
│   │   ├── About.tsx       # About section component
│   │   ├── Experience.tsx  # Experience section component
│   │   ├── HeroSection.tsx # Hero section component
│   │   ├── Projects.tsx    # Projects section component
│   │   ├── Services.tsx    # Services section component
│   │   └── Skills.tsx      # Skills section component
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx      # Button component
│   │   └── dialog.tsx      # Dialog component
│   ├── MovingLines.tsx     # Background animation component
│   ├── Navbar.tsx          # Navigation component
│   └── ParticleBackground.tsx # Particle animation component
├── lib/                    # Utility functions
│   └── utils.ts           # Common utility functions
├── public/                 # Static assets
└── config files           # Configuration files
    ├── next.config.mjs    # Next.js configuration
    ├── tailwind.config.ts # Tailwind CSS configuration
    ├── postcss.config.js  # PostCSS configuration
    └── tsconfig.json      # TypeScript configuration
```

## Technology Stack

- **Framework**: Next.js 14.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI
- **Animations**: Framer Motion, React-tsParticles
- **Icons**: Lucide React, React Icons

## Component Architecture

### Main Components

1. **Layout Component** (`app/layout.tsx`)
   - Root layout with font configuration
   - Meta tags and SEO setup

2. **Hero Section** (`components/mainCompo/HeroSection.tsx`)
   - Animated introduction
   - Rotating text animation
   - Floating image animation
   - Call-to-action buttons

3. **About Section** (`components/mainCompo/About.tsx`)
   - Personal information display
   - Education history
   - Social media links
   - Animated transitions

4. **Experience Section** (`components/mainCompo/Experience.tsx`)
   - Work experience details
   - Project showcases
   - Modal dialog for detailed view

5. **Services Section** (`components/mainCompo/Services.tsx`)
   - Service offerings
   - Background animations

### UI Components

1. **Navigation** (`components/Navbar.tsx`)
   - Responsive menu
   - Animated logo
   - Navigation links

2. **Animation Components**
   - `MovingLines.tsx`: Background line animations
   - `ParticleBackground.tsx`: Interactive particle system

3. **Dialog** (`components/ui/dialog.tsx`)
   - Modal dialog implementation
   - Based on Radix UI primitives

## Styling System

### Global Styles (`app/globals.css`)

1. **Custom Properties**
   - Color scheme variables
   - Animation keyframes
   - Responsive breakpoints

2. **Logo Animation**
   - Text gradient effect
   - Cursor animation
   - Transition effects

3. **Hero Image Styling**
   - Floating animation
   - Rotating text effect
   - Responsive adjustments

### Tailwind Configuration

Custom configuration includes:
- Extended color palette
- Custom animations
- Responsive breakpoints
- Dark mode support

## Animations

1. **Text Animations**
   ```css
   @keyframes moveText
   @keyframes moveCursorText
   ```

2. **Image Animations**
   ```css
   @keyframes floatImage
   @keyframes rotateText
   ```

3. **Background Animations**
   - Particle system configuration
   - Moving lines animation

## Responsive Design

Breakpoints:
- Mobile: < 390px
- Small tablets: < 550px
- Tablets: < 766px
- Small desktop: < 1100px
- Large desktop: < 1270px

## Performance Optimizations

1. **Image Optimization**
   - Next.js Image component usage
   - Remote pattern configuration
   - Responsive image sizing

2. **Font Loading**
   - System fonts usage
   - Font subsetting
   - Preloading strategies

## Development Guidelines

1. **Component Creation**
   - Use TypeScript for type safety
   - Implement responsive design
   - Add proper animations
   - Include proper documentation

2. **Styling Guidelines**
   - Use Tailwind CSS classes
   - Follow BEM methodology for custom CSS
   - Maintain dark mode compatibility

3. **Code Organization**
   - Group related components
   - Maintain utility functions
   - Keep configurations separate

## Future Improvements

1. **Planned Features**
   - Blog integration
   - Portfolio expansion
   - Contact form implementation
   - Authentication system

2. **Technical Debt**
   - Component optimization
   - Test coverage
   - Accessibility improvements
   - SEO enhancements 