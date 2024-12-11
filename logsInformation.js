const os = require("os");
console.log("Welcome to the first Node.js program of mine.")

const time = new Date();
console.log(`Current time and data is: ${time}`)

console.log("System Information:")
console.log(os.type())

console.log(os.release())
console.log(os.cpus().length)