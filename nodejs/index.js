// // (function(exports, require, module, __filename, __dirname){
//     const lovish = require("./second");

//     console.log("Hello world", lovish)
    
// harry = {
//     name: "Akshat",
//     favNum: 36,
//     developer: true
// }
// // console.log(exports, require, module, __filename, __dirname)
// module.exports = harry;
    
// // })
// import {simple, simple2} from "./modulesecond.mjs"
// import * as a2 from "./modulesecond.mjs"
// const simple2 = require("./modulesecond.mjs");

// simple23()
// console.log(a2.simple())
// const os = require('os');

// console.log(os.freemem())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.type())

import url from 'url';


const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)
console.log(myURL.href)