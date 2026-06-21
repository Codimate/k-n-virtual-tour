const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'panoramas');
const outputDir = path.join(__dirname, 'public', 'panoramas');

const optimizeImages = async () => {
  try {
    const files = fs.readdirSync(inputDir);
    for (const file of files) {
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
        const inputPath = path.join(inputDir, file);
        const outputFilename = file.substring(0, file.lastIndexOf('.')) + '.webp';
        const outputPath = path.join(outputDir, outputFilename);
        
        console.log(`Converting ${file} to WebP...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 }) // 80% quality is a good balance between size and visual quality
          .toFile(outputPath);
          
        console.log(`Successfully converted to ${outputFilename}`);
      }
    }
    console.log('All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
};

optimizeImages();
