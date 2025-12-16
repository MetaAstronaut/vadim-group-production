/**
 * Critical Image Optimization Script
 * Specifically optimizes Vadim portrait and logo for Lighthouse performance
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Target images with specific optimizations
const OPTIMIZATIONS = [
  {
    name: 'Vadim Portrait',
    input: path.join(__dirname, '../public/assets/vadim-portrait.jpg'),
    outputs: [
      {
        path: path.join(__dirname, '../public/assets/vadim-portrait-optimized.webp'),
        width: 500,
        height: 500,
        format: 'webp',
        quality: 85,
      },
      {
        path: path.join(__dirname, '../public/assets/vadim-portrait-optimized.jpg'),
        width: 500,
        height: 500,
        format: 'jpeg',
        quality: 85,
      }
    ]
  },
  {
    name: 'Header Logo',
    input: path.join(__dirname, '../public/assets/VG_logo_main2.png'),
    outputs: [
      {
        path: path.join(__dirname, '../public/assets/VG_logo_main2-optimized.webp'),
        width: 140,
        height: 140,
        format: 'webp',
        quality: 90,
      },
      {
        path: path.join(__dirname, '../public/assets/VG_logo_main2-optimized.png'),
        width: 140,
        height: 140,
        format: 'png',
        quality: 90,
      }
    ]
  }
];

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch (error) {
    return 0;
  }
}

async function optimizeImage(config) {
  console.log(`\n📸 Optimizing: ${config.name}`);
  console.log(`   Input: ${path.basename(config.input)}`);
  
  // Check if input exists
  if (!fs.existsSync(config.input)) {
    console.error(`   ❌ Input file not found: ${config.input}`);
    return;
  }
  
  const originalSize = getFileSize(config.input);
  console.log(`   Original size: ${formatBytes(originalSize)}`);
  
  let totalSaved = 0;
  
  // Process each output variant
  for (const output of config.outputs) {
    try {
      let pipeline = sharp(config.input)
        .resize(output.width, output.height, {
          fit: 'cover',
          position: 'center',
        });
      
      // Apply format-specific optimizations
      if (output.format === 'webp') {
        pipeline = pipeline.webp({ 
          quality: output.quality, 
          effort: 6 
        });
      } else if (output.format === 'jpeg') {
        pipeline = pipeline.jpeg({ 
          quality: output.quality, 
          progressive: true, 
          mozjpeg: true 
        });
      } else if (output.format === 'png') {
        pipeline = pipeline.png({ 
          quality: output.quality, 
          compressionLevel: 9,
          palette: true 
        });
      }
      
      await pipeline.toFile(output.path);
      
      const outputSize = getFileSize(output.path);
      const saved = originalSize - outputSize;
      totalSaved = Math.max(totalSaved, saved);
      
      console.log(`   ✅ Created: ${path.basename(output.path)}`);
      console.log(`      Size: ${formatBytes(outputSize)} (${output.width}x${output.height})`);
      console.log(`      Saved: ${formatBytes(saved)} (${((saved / originalSize) * 100).toFixed(1)}% reduction)`);
      
    } catch (error) {
      console.error(`   ❌ Failed to create ${output.format.toUpperCase()}: ${error.message}`);
    }
  }
  
  console.log(`   💰 Best savings: ${formatBytes(totalSaved)}`);
  
  return totalSaved;
}

async function main() {
  console.log('🚀 Critical Image Optimization for Lighthouse');
  console.log('==============================================\n');
  console.log('This script creates optimized versions of critical images:');
  console.log('1. Vadim Portrait: 500x500 WebP + JPEG');
  console.log('2. Header Logo: 140x140 WebP + PNG\n');
  
  let totalSavings = 0;
  const startTime = Date.now();
  
  for (const config of OPTIMIZATIONS) {
    const saved = await optimizeImage(config);
    if (saved) totalSavings += saved;
  }
  
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  
  console.log('\n==============================================');
  console.log('✅ Optimization Complete!');
  console.log('==============================================\n');
  console.log(`📊 Statistics:`);
  console.log(`   Images optimized: ${OPTIMIZATIONS.length}`);
  console.log(`   Total space saved: ${formatBytes(totalSavings)}`);
  console.log(`   Duration: ${duration}s\n`);
  
  console.log('📝 Next Steps:');
  console.log('   1. Update image paths in your components to use optimized versions');
  console.log('   2. Test the optimized images in your application');
  console.log('   3. Run Lighthouse audit to verify improvements\n');
  
  console.log('💡 Recommended Updates:');
  console.log('   • app/page.tsx: Change vadim-portrait.jpg → vadim-portrait-optimized.webp');
  console.log('   • app/about/page.tsx: Change vadim-portrait.jpg → vadim-portrait-optimized.webp');
  console.log('   • components/layout/Header.tsx: Change VG_logo_main2.png → VG_logo_main2-optimized.webp\n');
  
  console.log('🎉 All done!');
}

main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});

