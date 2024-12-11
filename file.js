// This section i learned how to readfile in node.js.
// There are three different thing that you can see inside the fs.readFile which are: 
// The first one is which file that you wanna read. The second one is how you want to read that file. and the last one is function if there will happen any error, it will throw back the error
// const fs = require('fs');
// fs.readFile('app.js', 'utf-8', (err, data) => {
//     if(data){
//          return console.log(data);

//     }
//     console.eroor(err)
// })

// This secition is to write the file. 
// From this you can learn how to create new file just by creating new file inside the fs.writeFile() section and the file will appear inside your folder in left hand side.

// I found this one little bit odd when you try to write some code and include that code in existing file. 
// Coz this will remove the previous code that exist in the existing code. That's wired.


// const fs = require('fs');
// fs.writeFile('writefile.js', 'console.log("Hello, Node.js")', function(err, data){
//     if(err){
//         return  console.error(err)
//     }
//     console.log(`File Created Sucessfully.`)
// }  )

// This section we learn how to append a code inside the existing file. In other word, how to include some code in the existing file which already has some code. 

// const fs = require('fs');
// fs.appendFile('writefile1.js', 'console.log("This is Yubraj and I am almost done with the fs module.")', function(err, data){
//     if(err){
//         console.error(`Error Happens`)
//         return
//     }

//    console.log(`Data update successfully. `)
// } )


// This section i will be learning about how to delete unnecessary file. 
// After executing this file, this will 


// const fs = require('fs');
// fs.unlink('deleting.js', function(err, data){
//     if(err){
//         console.error('Error happening while deleting the file. Try again later.')
//         return;
//     }
//     console.log('Unnecessary file deleted successfully.')
// })

// This section is to access the existing file and checking whether it's working fine or not. 

// const fs = require('fs');
// fs.access('inde.js', fs.constants.F_OK, function(err, data){
//     if(err){
//         console.error('Error happening. The file doesnt exist.')
//         return;
//     }
//     console.log('File checked successsfully and exist in the system.')
// } )