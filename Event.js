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


// const EventEmitter = require('events');
// const Orderreceiver = new EventEmitter;



// console.log("The Order bell just rang so the order is on it's way to here on the system.")

// Orderreceiver.on("OrderProcessing", () => {
//     console.log(`The order is ${percent} % downloaded`)
// })
// Orderreceiver.on("OrderProcessed", () => {
//     console.log("We Order has been arrived and has started preparing. ")
// })
// setTimeout(()=> {
//     console.log("The order is ready. ")
// }, 22000)


// let percent = 0;
// const Interval = setInterval(() =>{
//     percent += 20;
//     if(percent <100){
//         Orderreceiver.emit("OrderProcessing")
//     }
//     else{
//         clearInterval(Interval)
//         Orderreceiver.emit("OrderProcessed")
        
//     }
// }, 2000)



// This Section we will be talking about the Readable and Writable Stream in Event Module. 

// At frist, the reaable Stream is used to write data to a destination in chunks rather than loading the entire data into memory. 
// Key Features are 
// 1) REadable events which emits events liek data(when a chunk of data is available) and end(when the stream ends)
// 2) Flowing Mode which automatically reads data as it becomes availabe and emit data events. 
//  3) Paused Mode where you can manually call .read() to fetch chunks of data. 

// const fs = require("fs");

// const readableStream = fs.createReadStream('path.js', 'utf-8');

// setTimeout(() => {
//     readableStream.on('data', (chunk) => {
//     console.log("Chunk Data received.", chunk);
// })
// }, 2000);
// readableStream.on('end', ()=> {
//     console.log('No more data to read.')
// })


// const fs = require('fs');

// const readableStream = fs.createReadStream('Testing.js', 'utf-8');

// readableStream.on('data', (chunk)=> {
//     console.log( chunk)
// })
// readableStream.on('end' , ()=> {
//     console.log('all the data has been read already.')
// })







// This section is for the Writable Stream where we can write and add a new file inside the folder. 
// const fs = require("fs");

// const writableStream = fs.createWriteStream("Testing.js");

// writableStream.write('console.log("Hello World ")\n');
// writableStream.write('console.log("This is the first code for the Writable Stream.")\n');

// writableStream.end('console.log("Done Writting.")\n');

// writableStream.on('finish', ()=> {
//     console.log("All data has been written. ")
// })



// const fs = require('fs');
// const writableStream = fs.createWriteStream('Testing1.js');

// writableStream.write('console.log("Hello World")\n');
// writableStream.write('console.log("This is a second code for the writable Strem.")\n');

// writableStream.end('console.log("This is a end.")\n');
// writableStream.on('finish', ()=> {
//     console.log("all data has been written.")
// })





