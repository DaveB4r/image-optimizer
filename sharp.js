const sharp = require('sharp');
const fs = require('fs');

const files = fs.readdirSync('./images');

files.forEach((file, i) => {
  const fileName = `${String(file).replace(/(.png|.jpg|.jpeg)/, '')}`;
  sharp(`images/${file}`)
    // .resize(600,500)
    .webp({quality: 80})
    .toFile(`optimized/${fileName}.webp`, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log(info);
      }
    });
});