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
  
  // Optimize CSS loading and JavaScript compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Target modern browsers to reduce polyfills
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['swiper', 'lucide-react'],
    // Optimize CSS loading
    optimizeCss: true,
  },
  
  // Configure SWC for modern browsers (no legacy polyfills)
  // This will use the browserslist config from .browserslistrc
  reactStrictMode: true,
  
  // Optional: Configure base path if deploying to subdirectory
  // basePath: '',
  
  // Optional: Configure asset prefix for CDN
  // assetPrefix: '',
  
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Support raw markdown imports
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });
    
    // Optimize CSS in production
    if (!dev && !isServer) {
      // Enable CSS minification
      config.optimization = {
        ...config.optimization,
        minimize: true,
      };
    }
    
    return config;
  },
};

export default nextConfig;
