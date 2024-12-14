// This section is to build the http server using the http module.

// const http = require('http');
// const fs = require('fs');




// const myserver = http.createServer((req , res)=> {

//     const log =`${Date.now()} : ${req.url} New Request Received\n.`;
//     fs.appendFile('info.js', log, (err, data)=> {
//         switch(req.url){
//             case '/' : res.end("HomePage")
//             break
//             case '/about': res.end("I am Yubraj Bhandari")
//             break
//             default : res.end("404 Not Found")

//         }
//     })

// })

// myserver.listen(3007, () => {
//     console.log('Server is running fine.')
// })


// const http = require('http');
// const fs = require('fs');
// const myserver = http.createServer((req, res) => {
//     const log = `${Date.now()}: ${req.url} Request Received\n`
//     fs.appendFile('test.js', log,  (data, err) => {

        
//              switch(req.url){
//             case '/': res.end('Home Page')
//             break
//             case '/about' : res.end('This is Yubraj Bhandari.')
//             break
//             default:  res.end("404 Error Found")
//         }
        
        

//     })
    
// })
// myserver.listen(5000, ()=> {
//     console.log("The server is running perfectly")
// })



// const http = require('http');

// const myserver = http.createServer((req, res)=> {
//     console.log('Request Received.')
//     res.end("New Connection...")
// })



// myserver.listen(4000, ()=> {
//     console.log("The server is running successfully.")
// })



// const http = require('http');


// const myserver = http.createServer((req, res) => {

//     console.log('Request Received.')

//     if(req.url === '/'){
//         res.write("This is Home Page.")
//         res.end()
//     }

//     if(req.url === '/about'){
//         res.write("Hello, my name is Yubraj Bhandari. ")
//         res.end()
//     }

// })

// myserver.listen(4001, ()=> {
//     console.log("The Server is running very perfectly. ")
// })



const http = require('http');
const fs = require('fs');

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} Request Recived.`
    fs.appendFile('test.js', log, () => {
        switch(req.url){
            case '/': res.write("Home Page.")
            res.end();
            break
            case '/about': res.write("This is a Profile Page.")
            res.end();
            break
            default:  res.write("404 Error Found."
            )
            res.end()
        }
    })


})

myserver.listen(3000, () => 
{
    console.log("The server is running smoothly.")
})





