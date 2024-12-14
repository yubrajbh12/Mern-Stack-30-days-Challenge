// Web Services 
// This provides a common platform that allows multiple applications built on various programming languages to have the ability to communicate with each other.. 


// There are two types of Web Services. 
// 1) SOAP Web Services.    2) RESTful Web Services. 
// 

// REST - Representational State Transfer. (an architecture to create restful services.)
// POST - create a resources on the server. 
// GET - retrive the resources from the server. 
// PUT - update the resources on the server. 
// DELETE - Delete the resources from the server. 


// RESTFUL API - Deverloper who build any api using rest method is called RESTFUL API. 
// This will allow to talk front end and backend. 


// let's do some examples

// const http = require('http');

// let users = [
//     {id:1, name: 'Yubraj'}, 
//     {id:2 , name: 'Ashiya'},
// ]

// myserver = http.createServer((req, res) => {
//     if(req.method === 'GET' && req.url === '/users'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(users));
//     }
//     else if(req.method === 'POST' && req.url === '/users'){
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk;
//         });
//         req.on('end', ()=> {
//             const newUser = JSON.parse(body);
//             newUser.id = user.length +1;
//         users.push(newUser);
//     res.writeHead(201, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify (newUser));       })

    
//    }else{
//         res.writeHead(404, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({message : 'Not Found'}));

//     };
// });


// myserver.listen(4000, ()=> {
//     console.log('Server is running smoothly.')
// })

// const http = require('http');


// let users = [ 
//     {id: 1, name: "Yubraj"  , email: "yubrajbh12@gmail.com"},
//     {id: 2, name: "Bishnu" , email: 'bhandaribishnu409@gmail.com' },
//     {id: 3 , name: "Baburam", email: 'baburambhandari@gmail.com'},

// ]

// const myserver = http.createServer((req, res) => {

//     if(req.method === 'GET' && req.url === '/users'){


//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(users))
//     }
//     else{
//         res.writeHead(201, {"Content-Type" : 'application/json'});
//         res.end("404 User Not Found")
//     }
// })

// myserver.listen( 4001, () => {
//     console.log("The server is running smoothly.")
// })


// const http = require('http');

// // creating a port for running server. 

// const port = process.env.port || 5000;

// http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type" : "text/html"});
    


//     // Addind the Routing 

//     const url = req.url;

//     if(url === '/profile'){
//         res.write("<h1>This is a Profile Section. </h1>");
//         res.end();
//     }
//     else if(url === '/'){
//         res.write("<h1>This is a Home Page </h1>");
//         res.end();
//     }
//     else{
//         res.write("404 Error Found")
//         res.end()    }


//         // listening to the server.
   
// }).listen(port, ()=> {
//     console.log("The Server is running smoothly.")
// })