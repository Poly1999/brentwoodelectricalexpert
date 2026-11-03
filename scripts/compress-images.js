const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '..', 'src', 'assets');

const getAllImageFiles = dir => {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach(item => {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      results = results.concat(getAllImageFiles(fullPath));
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        results.push(fullPath);
      }
    }
  });

  return results;
};

const compressImage = filePath => {
  const sizeBefore = fs.statSync(filePath).size;
  const tempPath = filePath + '.temp';
  const ext = path.extname(filePath).toLowerCase();

  let pipeline = sharp(filePath).resize({
    width: 1920,
    withoutEnlargement: true,
  });

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 80 });
  } else if (ext === '.png') {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 80 });
  }

  return pipeline
    .toFile(tempPath)
    .then(() => {
      fs.renameSync(tempPath, filePath);
      const sizeAfter = fs.statSync(filePath).size;
      const savedPercent = (
        ((sizeBefore - sizeAfter) / sizeBefore) *
        100
      ).toFixed(1);
      console.log(
        `${path.basename(filePath)}: ${(sizeBefore / 1024).toFixed(0)}KB → ${(sizeAfter / 1024).toFixed(0)}KB (-${savedPercent}%)`,
      );
    })
    .catch(error => {
      console.error(`Error compressing ${filePath}:`, error.message);
    });
};

const run = async () => {
  const files = getAllImageFiles(assetsDir);
  console.log(`Found ${files.length} images. Starting compression...\n`);

  for (const file of files) {
    await compressImage(file);
  }

  console.log('\nDone!');
};

run();
