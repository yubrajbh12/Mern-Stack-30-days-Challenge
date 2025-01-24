1// Asynchronous basic in Node.js

// SetTimeout will be the first option to do that. 

// setTimeout(()=> {
//     console.log("I waited for 2 second. ")
// }, 2000)


2// Error handling. 


// const fs = require('fs');

// fs.readFile('./app.js', {encoding: 'utf-8'}, (err, data) => {
//     if(err){
//         console.error("error")
//     }
//     else{
//         console.log(data)
//     }
    
// })


// 3 Create a Promise. 
// const myPromise = new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random( ) *2);
//     if(rand === 0){
//         resolve();
//     }
//     else{
//         reject();
//     }
// })
// myPromise.then(() => {
//     console.log('Success')
// }).catch(() => {
//     console.log("Error happened while processing. ")
// })


// fs readfile with promises. 


// load file with async/await. 
// const fs = require('fs')

// const LoadFile = async() => {
//     try{
//         const data = await fs.promises.readFile('./app.js', {encoding: 'utf-8'});
//         console.log(data) 
//     }
//     catch(error) {
//         console.error(error);
//     }
    
// };
// LoadFile();


// const fs = require('fs');
// const LoadFile = async() => {
//     try{
//         const data = await fs.promises.readFile('./app.js', 'utf-8')
//         console.log(data);
//     }
//     catch(error){
//         console.error("Error triggered while processing the data.")
//     }

// }
// LoadFile();

// Let's mess with some API

const fetchpokemon = async(id) => {


    // Over here, the reason for using try and catch instead of using inside the filereading function is that 
    // Sometimes we have lots of asynchronous function and handling many asynchronous function is really hard that's the reason we use try and catch.

    try{
        // In this example the data that we are fetching  from below line of code is in a strange form so, node.js won't accept that. 
        const res = await  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // Thats the reason that we are using the below code to change that strange data into json which node.js will understand. 
        const data = await res.json();
        // Once we convert that data, then we can console that data. 
        console.log((data))
       
    
}
// if there is something problem with the data this will help us simply by throwing the error message in the UI. 

catch(error){
    console.error("Caught Error while processing the data. ")
}
};
fetchpokemon(100);
















