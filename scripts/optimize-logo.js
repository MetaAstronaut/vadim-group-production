const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

/**
 * Optimize logo for header display
 * Target: 96x96 (for 48x48 display with 2x retina)
 */
async function optimizeLogo() {
  const inputPath = path.join(__dirname, '../public/assets/VG_logo_main2.png');
  const outputPath = path.join(__dirname, '../public/assets/VG_logo_main2-header.webp');

  // Check if input exists
  if (!fs.existsSync(inputPath)) {
    console.error('❌ Error: Input logo not found:', inputPath);
    console.log('\nTrying alternative logo source...');
    
    const altInputPath = path.join(__dirname, '../public/assets/VG_logo_main2-optimized.webp');
    if (!fs.existsSync(altInputPath)) {
      console.error('❌ Error: Alternative logo not found either:', altInputPath);
      process.exit(1);
    }
    
    // Use alternative source
    await sharp(altInputPath)
      .resize(96, 96, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ quality: 90, effort: 6 })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log('✅ Logo optimized successfully!');
    console.log(`   Input: ${altInputPath}`);
    console.log(`   Output: ${outputPath}`);
    console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`   Dimensions: 96x96 (for 48x48 display @ 2x)`);
    return;
  }

  // Process logo
  await sharp(inputPath)
    .resize(96, 96, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .webp({ quality: 90, effort: 6 })
    .toFile(outputPath);

  const stats = fs.statSync(outputPath);
  console.log('✅ Logo optimized successfully!');
  console.log(`   Input: ${inputPath}`);
  console.log(`   Output: ${outputPath}`);
  console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log(`   Dimensions: 96x96 (for 48x48 display @ 2x)`);
}

// Optimize vadim portrait for smaller display
async function optimizePortrait() {
  const inputPath = path.join(__dirname, '../public/assets/vadim-portrait.jpg');
  const outputPath = path.join(__dirname, '../public/assets/vadim-portrait-small.webp');

  if (!fs.existsSync(inputPath)) {
    console.log('⚠️  Portrait already optimized, skipping...');
    return;
  }

  await sharp(inputPath)
    .resize(128, 128, {
      fit: 'cover',
      position: 'center'
    })
    .webp({ quality: 85, effort: 6 })
    .toFile(outputPath);

  const stats = fs.statSync(outputPath);
  console.log('✅ Portrait optimized successfully!');
  console.log(`   Output: ${outputPath}`);
  console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log(`   Dimensions: 128x128 (for 64x64 display @ 2x)`);
}

async function main() {
  console.log('🔧 Starting image optimization for Google PageSpeed...\n');
  
  try {
    await optimizeLogo();
    console.log();
    await optimizePortrait();
    console.log('\n✨ All optimizations complete!');
  } catch (error) {
    console.error('❌ Error during optimization:', error.message);
    process.exit(1);
  }
}

main();

