// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on("Order Pizza" , () => {
//     console.log("the Pizza is ready to eat.Enjoy your meal Sir/Madam.")

// })

// emitter.emit('Order Pizza')


// let's try more examples. 


// const EventEmitter = require("events");
// const emitter = new EventEmitter;

// emitter.on("Water Please", ()=> {
//     console.log("Here you go Sir!. The Water that you just ordered.")
// })

// emitter.emit('Water Please')


// Let's build one real world example for the count down. 

// const EventEmitter = require('events');

// const timmer = new EventEmitter;

// console.log("CountDown Started!")
// setTimeout(() => {
//     console.log(5)
//  }, 1000)
//  setTimeout(() => {
//     console.log(4)
//  }, 2000)
//  setTimeout(() => {
//     console.log(3)
//  }, 3000)
//  setTimeout(() => {
//     console.log(2)
//  }, 4000)
//  setTimeout(() => {
//     console.log(1)
//  }, 5000)


// timmer.on('time Up', ()=>{
     
//     console.log("Your time is Up.")
// })



// setTimeout(() => {
//     timmer.emit('time Up');
    
// }, 6000);

// Let's work more on this module. 

// const EventEmitter = require('events');
// const Uploader = new EventEmitter;

// Uploader.on('UploadProgress', ()=> {
//     console.log(`Your file is ${percent} % complete.`)

// })

// Uploader.on('uploadComplete' , ()=> {
//     console.log("Upload Complete,  Hurray!")
// })




// let percent = 0;
// const interval = setInterval(() => {
//     percent +=20;
//     if(percent <100){
//         Uploader.emit('UploadProgress', )
//     }
//     else{
//         clearInterval(interval);
//         Uploader.emit('uploadComplete')
//     }
// }, 1000)