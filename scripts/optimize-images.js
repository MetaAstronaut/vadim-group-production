/**
 * Image Optimization Script
 * Converts images to WebP and optimizes JPG/PNG files
 * Uses sharp for high-quality image processing
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '../public/assets'),
  quality: {
    webp: 85,      // WebP quality (0-100)
    jpeg: 85,      // JPEG quality (0-100)
    png: 90,       // PNG quality (0-100)
  },
  generateWebP: true,
  compressOriginals: true,
  skipIfExists: false, // Skip if optimized version already exists
};

// Statistics
const stats = {
  processed: 0,
  webpCreated: 0,
  originalCompressed: 0,
  bytesSaved: 0,
  errors: 0,
};

/**
 * Get file size in bytes
 */
function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch (error) {
    return 0;
  }
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Convert image to WebP
 */
async function convertToWebP(inputPath, outputPath) {
  try {
    const originalSize = getFileSize(inputPath);
    
    await sharp(inputPath)
      .webp({ quality: CONFIG.quality.webp, effort: 6 })
      .toFile(outputPath);
    
    const webpSize = getFileSize(outputPath);
    const saved = originalSize - webpSize;
    
    stats.webpCreated++;
    stats.bytesSaved += saved;
    
    console.log(`  ✅ WebP created: ${path.basename(outputPath)}`);
    console.log(`     Original: ${formatBytes(originalSize)} → WebP: ${formatBytes(webpSize)} (saved ${formatBytes(saved)})`);
    
    return true;
  } catch (error) {
    console.error(`  ❌ WebP conversion failed: ${error.message}`);
    stats.errors++;
    return false;
  }
}

/**
 * Compress JPEG image
 */
async function compressJPEG(filePath) {
  try {
    const originalSize = getFileSize(filePath);
    const tempPath = filePath + '.tmp';
    
    await sharp(filePath)
      .jpeg({ quality: CONFIG.quality.jpeg, progressive: true, mozjpeg: true })
      .toFile(tempPath);
    
    const compressedSize = getFileSize(tempPath);
    
    // Only replace if compression saved space
    if (compressedSize < originalSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const saved = originalSize - compressedSize;
      stats.originalCompressed++;
      stats.bytesSaved += saved;
      
      console.log(`  ✅ JPEG compressed: ${path.basename(filePath)}`);
      console.log(`     Before: ${formatBytes(originalSize)} → After: ${formatBytes(compressedSize)} (saved ${formatBytes(saved)})`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`  ℹ️  JPEG already optimal: ${path.basename(filePath)}`);
    }
    
    return true;
  } catch (error) {
    console.error(`  ❌ JPEG compression failed: ${error.message}`);
    stats.errors++;
    return false;
  }
}

/**
 * Compress PNG image
 */
async function compressPNG(filePath) {
  try {
    const originalSize = getFileSize(filePath);
    const tempPath = filePath + '.tmp';
    
    await sharp(filePath)
      .png({ quality: CONFIG.quality.png, compressionLevel: 9, palette: true })
      .toFile(tempPath);
    
    const compressedSize = getFileSize(tempPath);
    
    // Only replace if compression saved space
    if (compressedSize < originalSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const saved = originalSize - compressedSize;
      stats.originalCompressed++;
      stats.bytesSaved += saved;
      
      console.log(`  ✅ PNG compressed: ${path.basename(filePath)}`);
      console.log(`     Before: ${formatBytes(originalSize)} → After: ${formatBytes(compressedSize)} (saved ${formatBytes(saved)})`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`  ℹ️  PNG already optimal: ${path.basename(filePath)}`);
    }
    
    return true;
  } catch (error) {
    console.error(`  ❌ PNG compression failed: ${error.message}`);
    stats.errors++;
    return false;
  }
}

/**
 * Process a single image file
 */
async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  
  console.log(`\n📸 Processing: ${path.basename(filePath)}`);
  stats.processed++;
  
  // Generate WebP version
  if (CONFIG.generateWebP && ['.jpg', '.jpeg', '.png'].includes(ext)) {
    const webpPath = path.join(dir, fileName + '.webp');
    
    if (!CONFIG.skipIfExists || !fs.existsSync(webpPath)) {
      await convertToWebP(filePath, webpPath);
    } else {
      console.log(`  ⏭️  WebP already exists: ${path.basename(webpPath)}`);
    }
  }
  
  // Compress original
  if (CONFIG.compressOriginals) {
    if (ext === '.jpg' || ext === '.jpeg') {
      await compressJPEG(filePath);
    } else if (ext === '.png') {
      await compressPNG(filePath);
    } else if (ext === '.ico') {
      console.log(`  ⏭️  Skipping ICO file (already optimized format)`);
    }
  }
}

/**
 * Recursively find all image files
 */
function findImages(dir, images = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findImages(filePath, images);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.ico'].includes(ext)) {
        images.push(filePath);
      }
    }
  }
  
  return images;
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Image Optimization Script');
  console.log('=====================================\n');
  console.log(`📂 Input directory: ${CONFIG.inputDir}`);
  console.log(`⚙️  WebP quality: ${CONFIG.quality.webp}`);
  console.log(`⚙️  JPEG quality: ${CONFIG.quality.jpeg}`);
  console.log(`⚙️  PNG quality: ${CONFIG.quality.png}`);
  console.log(`⚙️  Generate WebP: ${CONFIG.generateWebP ? 'Yes' : 'No'}`);
  console.log(`⚙️  Compress originals: ${CONFIG.compressOriginals ? 'Yes' : 'No'}`);
  
  // Check if input directory exists
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`\n❌ Error: Input directory not found: ${CONFIG.inputDir}`);
    process.exit(1);
  }
  
  // Find all images
  const images = findImages(CONFIG.inputDir);
  console.log(`\n📋 Found ${images.length} images to process\n`);
  
  if (images.length === 0) {
    console.log('⚠️  No images found to optimize');
    process.exit(0);
  }
  
  // Process each image
  const startTime = Date.now();
  
  for (const imagePath of images) {
    await processImage(imagePath);
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  // Print summary
  console.log('\n=====================================');
  console.log('✅ Optimization Complete!');
  console.log('=====================================\n');
  console.log(`📊 Statistics:`);
  console.log(`   Images processed: ${stats.processed}`);
  console.log(`   WebP files created: ${stats.webpCreated}`);
  console.log(`   Originals compressed: ${stats.originalCompressed}`);
  console.log(`   Total space saved: ${formatBytes(stats.bytesSaved)}`);
  console.log(`   Errors: ${stats.errors}`);
  console.log(`   Duration: ${duration}s`);
  
  if (stats.bytesSaved > 0) {
    const percentage = ((stats.bytesSaved / getTotalOriginalSize()) * 100).toFixed(2);
    console.log(`   Space reduction: ~${percentage}%`);
  }
  
  console.log('\n🎉 All done!');
}

/**
 * Get total size of original images
 */
function getTotalOriginalSize() {
  const images = findImages(CONFIG.inputDir);
  let total = 0;
  
  for (const image of images) {
    total += getFileSize(image);
  }
  
  return total;
}

// Run the script
main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});

