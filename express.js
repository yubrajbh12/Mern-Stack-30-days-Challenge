// const express = require('express');
// const app = express();

// app.use(express.json());


// const users = [
//     {
//         id:1, 
//         name: "yubraj"
//     },
//     {id:2, name: 'Bishnu'},
//     {id:3, name: 'Monik'},
// ]


// // look how efficeint it is to use express.js to create the route. 
// // if we used the http module you would have to do a lots of code only to creat that route. 

// app.get('/', (req, res) => {
//     res.send('hello World')

// })
// app.get('/alien', (req, res) => {
//     res.json(users);

//     // This is the use of query instead of params to extract the id
//     // That's how it looks like http://localhost:9000/alien?id=20
//     // this is a browser way. For example when you go to google you will be finding same url like the one that we have mentioned above. 

//     // const idd = req.query.id
//     // res.send(`Alien ${idd}`)
//     // res.send("This is the Welcome ")
   

    
    

    
   
    


// })
// app.get('/alien/:id', (req, res) => {

//     // This extract the 'id' from the URL. 
//     // http://localhost:9000/alien/20 That's how it looks like when you use the actual id 
//     // this is basically use for the restful api. 
//     id = parseInt(req.params.id);
//     user = users.find(u => u.id === id)
//     if(user){
        
//         res.send(`The Alien  is ${user.name} and the id of this alien is ${user.id}`)
//     }
//     else{
//         res.status(404).send("Error found")
//     }
   

    
   
     

//   })

//   app.post('/alien', (req,res)=> {
//     const newuser = {
//         id: users.length + 1, 
//         name: req.body.name,
//     };
//     users.push(newuser);
//     res.status(201).json(newuser);
//   })

// app.listen(9001, ()=> {
//     console.log('The server is running smoothly.')
// })



// const express = require('express');
// const app = express();

// app.get('/', (req, res)=> {
//     res.status(200).send("Welcome to the Yubraj's World")

// })

// app.get('/user', (req, res)=> {
//     res.status(201).send('Hello User')

// })

// app.get('/user/:id', (req, res)=> {
//      idd = req.params.id
   
//     res.send(`The User's id: ${idd}`)
    

// })




// app.listen(5000, ()=> {
//     console.log("The Server is running Smoothly.")
// })


// const express = require('express');
// const app = express();

// const customers = [
//     {id:1, name : "Yubraj Bhandari"}, 
//     {id:2, name: "Bishnu Bhandari"}, 
//     {id:3, name: "Baburam Bhandari"}, 
//     {id:4, name : "Lalita Bhandari"}, 
//     {id:5, name: "Sagarika Bhandari"}, 
//     {id:6, name: "Manisha Bhandari"},
// ]


// app.get("/", (req, res)=> {
//     res.send(" <h1>Welcome to the Portal. </h1>")
// })
// app.get('/customers' , (req, res)=> {
//     res.send(JSON.stringify(customers));
// })

// app.get('/customers/:id', (req, res)=> {
//     idd = parseInt(req.params.id) 
    
//     user = customers.find((u) => u.id === idd)

//     if(user){
//        res.send(`The id that you have searched is: ${user.name}`) 
//     }
//     else{
//         res.status(404).send("Error 404 Found")
//     }
    
// })

// app.listen(5004, ()=> {
//     console.log("The Server is running Perfectly. ")
// })


// const express = require('express')
// const app = express();

// app.get("/" , (req, res) => {
//     console.log("Here")
//     res.send("Hi")
// })
// app.get("/about", (req, res) => {
//     console.log("about")
//     res.send("This page is about my description.")
// })

// app.get('/about:id', (req, res) => {
//     console.log("id")
//     res.send(Kcah)
// })

// app.listen(5000, ()=> {
//     console.log('The server has started.')
// })


// const express = require('express');
// const app = express();

// app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     console.log("Home")
   

//     res.render('index')
// })

// const userRouter = require('/users')
// app.use('/users', userRouter)


// app.listen(5000, () => {
//     console.log("The server has started successfully.")
// })



// This was the basic example for routing and using local storage as a database.
// const express = require('express')
// const app = express();

//  const customers = [
//     {id: 0, name :"yubraj"}, 
//     {id:1, name : "Bablu"}, 
//     {id:2, name: "Kalu"}, 
//     {id:3, name: "Balu"}
//  ]

// app.get('/', (req, res) => {
//     console.log('Takin to the home')
//     res.send("This is a home page.")
// })


// app.get('/profile', (req, res) => {
//     console.log(" profile page.")
//     res.send(("Welcome to the profile page."))
// })

// app.get("/profile/:id", (req, res)=> {
//     console.log("Specific user Finding page.");
//     idd = parseInt(req.params.id);

//     user = customers.find((u) => u.id === idd);

//     if(user) {
//         res.send(`The person that you are looking for is : ${user.name}`)
//     }
//     else{
//         error.send("Error found while running the server.")
//     }

    





   




//  app.listen(3000, ()=> {
//     console.log("The server is running properly.")
//  })

// })

// Now i will be learning much more about the  GET, POST, DELETE AND PUT method in Express.js

// const express = require('express')
// const app = express();


// app.get('/', (req, res)=> {
//     console.log('main page')
//     res.send("Hello, World")
// })

// app.post("/submit" , (req, res) => {
//     console.log('submittion fomr page')
//     res.send("Form Submitted")

// })

// app.put('/update', (req, res) => {
//     console.log('update page.')
//     res.send("Resources update!")
// })

// app.delete('/delete', (req, res)=> {
//     console.log("Delete page.")
//     res.send('Resources deleted!')
// })







// app.listen(4000, ()=> {
//     console.log("Theh server has started successfully.")
// })



// 

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    console.log('Home Page');
    res.send("Home Page")
})

app.post('/new', (req, res)=> {
    console.log('New User');
    res.send('New User Added')
})

app.put('/update', (req, res)=> {
    console.log('Updated Page');
    res.send('User Updated.')
})
app.delete('/delete', (req, res)=> {
    console.log("User Deleted"), 
    res.send('User Deleted')
})


app.listen(4000, ()=> {
    console.log("The server is running perfectly.")
})