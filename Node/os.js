const os = require('os');
console.log(os.freemem()); // Gives the free memory in bytes
console.log(os.homedir()); // Gives the home directory of the user
console.log(os.hostname()); // Gives the hostname of the OS
console.log(os.platform()); // Gives the platform of the OS
console.log(os.tmpdir()); // Gives the temporary directory of the OS
console.log(os.release()); // Gives the release of the OS