/* 
Globals are objects/functions that are accessible from any file in the program without explicit reference
examples:
__dirname: variable that contains the current directory
__filename: variable that contains the current file
process: variable that contains info about the environment where the program is being executed in
*/

console.log(__dirname);
console.log(__filename);

console.log(process.env.USER); 
// . is an access symbol that lets us peek into and use the "methods/variables" that exist inside the object

console.log(process.argv.slice(2));
// slice is an array method that returns a copy of the current array without the first two elements 
// console.log(process.argv);

setTimeout(()=>{
    console.log(process.uptime());
    // uptime is a function that exist in the process global variable
}, 1000);