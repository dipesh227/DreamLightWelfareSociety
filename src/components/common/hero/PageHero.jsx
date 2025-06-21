import React from 'react';
import EnhancedHeroSection from './EnhancedHeroSection';
import { getHeroConfig, getOptimizedImageUrl } from './heroConfig';

/**
 * PageHero - A convenience wrapper component for implementing enhanced hero sections
 * across all website pages with consistent design and functionality.
 * 
 * Usage Examples:
 * 
 * // Basic usage with page type
 * <PageHero pageType="about" />
 * 
 * // With custom overrides
 * <PageHero 
 *   pageType="contact" 
 *   title="Custom Title"
 *   primaryCta={{ text: "Custom Action", href: "/custom" }}
 * />
 * 
 * // Fully custom configuration
 * <PageHero 
 *   title="Custom Hero"
 *   backgroundImage="https://example.com/image.jpg"
 *   enableParallax={false}
 * />
 */
const PageHero = ({ 
  pageType, 
  logoUrl = "/logo.png", // Default logo path
  ...customProps 
}) => {
  // Get base configuration for the page type
  const baseConfig = pageType ? getHeroConfig(pageType) : getHeroConfig('default');
  
  // Merge base config with custom props, giving priority to custom props
  const finalConfig = {
    ...baseConfig,
    ...customProps,
    logoUrl, // Always include logoUrl
  };

  // Optimize background image if provided
  if (finalConfig.backgroundImage) {
    finalConfig.backgroundImage = getOptimizedImageUrl(finalConfig.backgroundImage);
  }

  // Ensure scroll target ID exists for pages with main content
  if (!finalConfig.scrollTarget) {
    finalConfig.scrollTarget = "main-content";
  }

  return <EnhancedHeroSection {...finalConfig} />;
};

export default PageHero;