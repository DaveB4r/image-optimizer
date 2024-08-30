const sharp = require('sharp');
const fs = require('fs');

const files = fs.readdirSync('./images');

files.forEach((file, i) => {
  sharp(`images/${file}`)
    // .resize(600,500)
    .webp({quality: 80})
    .toFile(`optimized/${i+371}.webp`, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log(info);
      }
    });
});