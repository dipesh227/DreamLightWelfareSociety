# Enhanced Hero Section System

This enhanced hero section system provides a comprehensive, reusable solution for creating engaging hero sections across all website pages with consistent design, performance optimization, and accessibility features.

## Features

✅ **Standardized Visual Hierarchy** - Consistent typography scaling and layout structure  
✅ **Responsive Background Media** - Support for images and videos with optimization  
✅ **Compelling CTAs** - Animated buttons with hover effects and accessibility  
✅ **Consistent Branding** - Unified color scheme and visual elements  
✅ **Dynamic Content** - Page-specific content that adapts while maintaining structure  
✅ **Performance Optimized** - Lazy loading, compressed assets, and GPU acceleration  
✅ **Micro-interactions** - Subtle animations and parallax effects  
✅ **Accessibility Compliant** - Proper alt text, keyboard navigation, and screen reader support  
✅ **Mobile-First Design** - Touch-friendly elements and responsive breakpoints  
✅ **Grid System** - Consistent spacing and alignment across all devices  

## Components

### 1. EnhancedHeroSection.jsx
The main hero section component with all features and customization options.

### 2. heroConfig.js
Configuration file containing page-specific hero content and settings.

### 3. PageHero.jsx
Convenience wrapper component for easy implementation.

## Usage Examples

### Basic Implementation
```jsx
import PageHero from '@/components/common/hero/PageHero';

// Use predefined page configuration
<PageHero pageType="about" />
```

### Custom Overrides
```jsx
<PageHero 
  pageType="contact" 
  title="Custom Title"
  subtitle="Custom subtitle"
  primaryCta={{ text: "Custom Action", href: "/custom" }}
/>
```

### Fully Custom Hero
```jsx
<PageHero 
  title="Custom Hero Section"
  subtitle="Your custom subtitle"
  description="Detailed description text"
  backgroundImage="https://example.com/image.jpg"
  enableParallax={true}
  height="min-h-[80vh]"
  stats={[
    { value: "100+", label: "Custom Stat", icon: StarIcon }
  ]}
  primaryCta={{
    text: "Get Started",
    href: "/start",
    icon: ArrowRightIcon
  }}
  secondaryCta={{
    text: "Learn More",
    href: "/learn"
  }}
/>
```

## Configuration

### Page Types Available
- `home` - Homepage with logo and comprehensive stats
- `about` - About page with story focus
- `programs` - Programs showcase
- `contact` - Contact information focus
- `donate` - Donation-focused messaging
- `events` - Events and activities
- `gallery` - Visual content showcase
- `team` - Team member focus
- `impact` - Impact metrics and stories
- `volunteer-portal` - Volunteer dashboard
- `default` - Fallback configuration

### Customization Options

#### Content Props
- `title` - Main heading text
- `subtitle` - Secondary heading text
- `description` - Detailed description paragraph
- `primaryCta` - Primary call-to-action button
- `secondaryCta` - Secondary call-to-action button

#### Visual Props
- `backgroundImage` - Hero background image URL
- `backgroundVideo` - Hero background video URL
- `overlayColor` - Color overlay for background
- `gradientOverlay` - Gradient overlay for background

#### Layout Props
- `height` - Section height (default: "min-h-screen")
- `textAlign` - Text alignment ("center", "left", "right")
- `contentPosition` - Content positioning
- `showLogo` - Display logo in hero section
- `logoUrl` - Logo image URL

#### Interactive Elements
- `stats` - Array of statistics to display
- `showScrollIndicator` - Show scroll down indicator
- `scrollTarget` - Target element ID for scroll indicator

#### Animation Props
- `enableParallax` - Enable parallax background effect
- `animationDelay` - Delay before animations start

#### Accessibility Props
- `ariaLabel` - Accessible label for the section

## Adding New Page Configurations

To add a new page configuration, edit `heroConfig.js`:

```js
export const heroConfigs = {
  // ... existing configurations
  
  'new-page': {
    pageType: "new-page",
    title: "New Page Title",
    subtitle: "New Page Subtitle",
    description: "Detailed description for the new page",
    backgroundImage: backgroundImages.newPageImage,
    height: "min-h-[70vh]",
    enableParallax: true,
    overlayColor: "bg-dream-purple/70",
    stats: [
      { value: "New", label: "Stat", icon: IconComponent }
    ],
    primaryCta: {
      text: "Primary Action",
      href: "/primary",
      icon: IconComponent
    },
    secondaryCta: {
      text: "Secondary Action",
      href: "/secondary",
      icon: IconComponent
    },
    ariaLabel: "New page hero section"
  }
};
```

## Performance Optimization

### Image Optimization
- Uses optimized Unsplash URLs with proper sizing and quality parameters
- Supports WebP format when available
- Implements lazy loading for background images
- Preloads critical images for better user experience

### Animation Performance
- Uses GPU-accelerated transforms
- Implements `will-change` properties appropriately
- Respects `prefers-reduced-motion` setting
- Optimizes animation frame rates

### Loading Strategies
- Lazy loads background videos
- Implements intersection observer for performance
- Uses efficient CSS transforms
- Minimizes layout shifts

## Accessibility Features

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Proper focus management and indicators
- Skip links for screen readers

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy
- Alternative text for all images
- ARIA labels and descriptions

### Visual Accessibility
- High contrast mode support
- Respects user motion preferences
- Scalable text and touch targets
- Color contrast compliance

## Browser Support

- **Modern Browsers**: Full feature support
- **Legacy Browsers**: Graceful degradation
- **Mobile Browsers**: Optimized experience
- **Screen Readers**: Full compatibility

## Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## Performance Metrics

The enhanced hero section system is optimized for:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FID (First Input Delay)**: < 100ms

## Contributing

When adding new features or modifying existing ones:

1. Maintain backward compatibility
2. Follow accessibility guidelines
3. Test across multiple devices and browsers
4. Update documentation
5. Consider performance implications

## Troubleshooting

### Common Issues

**Hero section not displaying correctly:**
- Check that the pageType exists in heroConfig.js
- Verify image URLs are accessible
- Ensure proper CSS classes are applied

**Animations not working:**
- Check if user has reduced motion preference
- Verify Framer Motion is properly installed
- Ensure GPU acceleration is supported

**Performance issues:**
- Optimize image sizes and formats
- Check for memory leaks in animations
- Verify lazy loading is working correctly

### Debug Mode

To enable debug mode, add the following to your component:

```jsx
<PageHero 
  pageType="about" 
  debug={true} // Shows configuration in console
/>
```

## Migration Guide

### From Legacy PageHeader
```jsx
// Before
<PageHeader
  title="Page Title"
  subtitle="Page subtitle"
  icon={IconComponent}
/>

// After
<PageHero 
  pageType="pageName" // Uses predefined config
  // or custom props for one-off customization
/>
```

This system provides a future-proof, maintainable solution for hero sections that scales with your website's growth while maintaining consistency and performance.