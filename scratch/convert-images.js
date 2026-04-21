const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './public/images';

fs.readdirSync(directory).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    const filePath = path.join(directory, file);
    const fileName = path.parse(file).name;
    const outputFile = path.join(directory, `${fileName}.webp`);

    console.log(`Converting ${file} to WebP...`);
    sharp(filePath)
      .webp({ quality: 80 }) // 80 is a good balance for compression and quality
      .toFile(outputFile)
      .then(() => {
        console.log(`Successfully converted ${file} to ${fileName}.webp`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  }
});
