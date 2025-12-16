import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static site generation (SSG)
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    // Configure allowed quality values for next/image
    qualities: [75, 85, 90, 100],
  },
  
  // Configure trailing slashes for better static hosting
  trailingSlash: true,
  
  // Optional: Configure base path if deploying to subdirectory
  // basePath: '',
  
  // Optional: Configure asset prefix for CDN
  // assetPrefix: '',
  
  // Webpack configuration
  webpack: (config) => {
    // Support raw markdown imports
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });
    
    return config;
  },
  
  // Experimental features for better performance
  experimental: {
    // Note: lucide-react optimization can cause issues with some icons
    // Only optimize swiper for now
    optimizePackageImports: ['swiper'],
  },
};

export default nextConfig;
