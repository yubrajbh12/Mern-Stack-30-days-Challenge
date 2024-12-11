const path = require('path');
console.log(__filename)
console.log(__dirname)
// This section is to print out the basename which means last name of the file. 
console.log(path.basename(__filename))

console.log(path.basename(__dirname))

// this section is for the extension of the file. 

console.log(path.extname(__filename))

console.log(path.extname(__dirname))

// This section is to check whether the path of the file is true or not. 
console.log(path.isAbsolute(__dirname))
// This section will put all the information that belongs to file in object order.
console.log(path.parse(__filename))
// This section will format that object order into string method. 
console.log(path.format(path.parse(__filename)))

// this is a join section where you can join to different file path  together.
console.log(path.join('folder1', 'folder2', 'folder3'))
// In this section / has been added to the folder1 in output as well
console.log(path.join('/folder1', 'folder2', 'folder3'))
// In this section the second  foder 2 will be remove from the path and the output will be this =>\folder1\folder3
console.log(path.join('/folder1', '//folder2', '../folder3'))

console.log(path.join(__dirname, "data.json"))
console.log(path.join('app.js', 'calc.js'))

// This section is for the Resolve method. 
// The uses of resolve method is if the file is relative which means which hasn't start from the root, this will
// convert that into the absolute file which means will include that from the root. 
// Like the below example. 
// This will print out the whole thing from the beginning until end like this
// C:\Users\yubra\OneDrive\Desktop\node.js\folder1\folder2\folder3
console.log(path.resolve('folder1', 'folder2', 'folder3'))

