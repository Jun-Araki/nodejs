// console.log('hello, node.js');

const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '..', 'end','test.txt')
console.log(distPath)
fs.writeFileSync(distPath, 'hello')
