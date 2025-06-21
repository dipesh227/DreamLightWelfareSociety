import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for implementing lazy loading with Intersection Observer
 * Optimizes image loading and provides loading states
 */
export const useLazyLoading = (options = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const elementRef = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if Intersection Observer is supported
    if (!window.IntersectionObserver) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  return {
    elementRef,
    isLoaded,
    isInView,
    hasError,
    handleLoad,
    handleError,
  };
};

/**
 * Hook for optimizing image URLs based on device capabilities
 */
export const useOptimizedImage = (src, options = {}) => {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [isWebPSupported, setIsWebPSupported] = useState(false);

  const {
    width,
    quality = 80,
    format,
  } = options;

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    setIsWebPSupported(checkWebPSupport());
  }, []);

  useEffect(() => {
    if (!src) return;

    let newSrc = src;

    // Handle Unsplash URLs
    if (src.includes('unsplash.com')) {
      const params = new URLSearchParams();
      
      if (width) params.set('w', width.toString());
      params.set('q', quality.toString());
      params.set('auto', 'format');
      
      if (isWebPSupported && !format) {
        params.set('fm', 'webp');
      } else if (format) {
        params.set('fm', format);
      }

      newSrc = `${src}&${params.toString()}`;
    }

    setOptimizedSrc(newSrc);
  }, [src, width, quality, format, isWebPSupported]);

  return optimizedSrc;
};

/**
 * Hook for preloading critical images
 */
export const useImagePreloader = (imageSources = []) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());

  useEffect(() => {
    if (!imageSources.length) return;

    const preloadPromises = imageSources.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(src));
          resolve(src);
        };
        
        img.onerror = () => {
          setFailedImages(prev => new Set(prev).add(src));
          reject(src);
        };
        
        img.src = src;
      });
    });

    Promise.allSettled(preloadPromises);
  }, [imageSources]);

  return {
    loadedImages,
    failedImages,
    isAllLoaded: loadedImages.size === imageSources.length,
    loadedCount: loadedImages.size,
    totalCount: imageSources.length,
  };
};

export default useLazyLoading;