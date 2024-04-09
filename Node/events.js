const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('an event occurred!');
    setTimeout(() => {
  console.log('an event occurred!');
    }, 2000);
});
console.log('Script Start');
myEmitter.emit('event');
// {
//   "name": "Akshat",
//   "version": "1.0.0",
//   "description": "Its an amazing package
//   "main": "index.js",
//   ▷ Debug
//   "scripts": {
//   "test": "echo "Error: no test specified\" && exit 1"
//   },
//   "author": "Harry",
//   "license": "ISC",
//   "dependencies": {
//   "express": "^4.17.1"
//   },
//   "devDependencies": {}
//   }