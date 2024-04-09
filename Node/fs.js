const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });
// console.log('Reading file...');
//reading file is print before the file content because it is asynchronous means it will not wait for the file to read and print the content. It will print the content whenever it is ready.
const a = fs.readFileSync('file.txt', 'utf8' );
console.log(a);
console.log('Reading file...');
//same with fs.writefile and fs.appendfile