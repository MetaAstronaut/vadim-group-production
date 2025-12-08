'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string; // Path without extension (e.g., "/assets/hero-bg")
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  quality?: number;
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * OptimizedImage Component
 * 
 * Automatically serves WebP images with fallback to original format.
 * Uses Next.js Image component for additional optimization.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <OptimizedImage 
 *   src="/assets/hero-bg" 
 *   alt="Hero Background" 
 *   width={1920} 
 *   height={1080}
 * />
 * 
 * // With priority (above-the-fold)
 * <OptimizedImage 
 *   src="/assets/home-hero" 
 *   alt="Home Hero" 
 *   width={800} 
 *   height={600}
 *   priority
 * />
 * 
 * // Responsive fill
 * <OptimizedImage 
 *   src="/assets/blog/seasonal-maintenance" 
 *   alt="Seasonal Maintenance" 
 *   fill
 *   style={{ objectFit: 'cover' }}
 * />
 * ```
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  quality = 90,
  sizes,
  style,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(`${src}.webp`);
  const [hasError, setHasError] = useState(false);

  // Handle image load error - fallback to original format
  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      
      // Detect original format
      const formats = ['.jpg', '.jpeg', '.png'];
      for (const format of formats) {
        const fallbackSrc = `${src}${format}`;
        setImgSrc(fallbackSrc);
        break;
      }
      
      onError?.();
    }
  };

  const handleLoad = () => {
    onLoad?.();
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      priority={priority}
      className={className}
      quality={quality}
      sizes={sizes}
      style={style}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}

/**
 * Get optimized image path
 * Helper function to get the WebP path with fallback
 */
export function getOptimizedImagePath(basePath: string): string {
  return `${basePath}.webp`;
}

/**
 * Preload optimized image
 * Useful for critical images
 */
export function preloadOptimizedImage(basePath: string) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = `${basePath}.webp`;
    link.type = 'image/webp';
    document.head.appendChild(link);
  }
}

