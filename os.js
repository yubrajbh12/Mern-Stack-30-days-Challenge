// This is an another module that i am going to deep dive into. 
// OS Moudle (Operating System Module)
// This module is powerful for interacting with the opearting system. It will help us to access different data from the computer. 


const os = require('os');

// this section is to access the type of OS.
console.log(os.type())

// This section is to access the platform that i am using in my computer.
console.log(os.platform())

// this section is to access the version of the operating system. 

console.log(os.release())


// this section is to access the CPU Architecture of your computer. 
console.log(os.arch())


// this section is to accesst the details about your CPU core(model, speed bla bla bla)
console.log(os.cpus())