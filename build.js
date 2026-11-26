// Script build sederhana: gabungkan src menjadi satu file dist/bundle.js
// (tanpa bundler eksternal — cukup untuk membuktikan langkah "build" pipeline).
const fs = require('node:fs');
const path = require('node:path');

const outDir = path.join(__dirname, 'dist');
fs.mkdirSync(outDir, { recursive: true });

const sumSrc = fs.readFileSync(path.join(__dirname, 'src', 'sum.js'), 'utf8');
const indexSrc = fs.readFileSync(path.join(__dirname, 'src', 'index.js'), 'utf8');

const bundle = [
  '// Bundle hasil build latihan-ci-cd (Lesson 55)',
  sumSrc.replace("module.exports = { sum };", ''),
  indexSrc.replace("const { sum } = require('./sum');", ''),
].join('\n');

fs.writeFileSync(path.join(outDir, 'bundle.js'), bundle);
console.log('Build selesai: dist/bundle.js');
