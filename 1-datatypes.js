/* 
Variables 
Variables are similar to buckets, we place things/data inside of them so we can access it or modify it later.
Variables can hold different type of data as well based on our needs.

There are two ways of declaring variables:
1- Using the "var" keyword
2- using the "let" keyword
Throughout this course, we will use let keyword exclusively.

Constants
Constants are almost identical to variables except that once we place something inside them, we cannot change its content.

The way to declare constants:
using the "const" keyword

Data Types
There are two main categories of data types:
1- Primitives: contains a single value only
    - Number
    - String
    - Boolean
    - null
    - undefined
    - BigInt
2- Objects: contains complex data
    - Object: mapping between key/value pairs
    - Array: ordered collection of other data types
    - Function: callable objects that can return other data types
*/


// Number (integer)
let age = 11;
console.log("Number, integer:", age);

// Number (decimal)
let money = 11.500;
console.log("Number, decimal:", money);

// BigInt
let largesNumber = Number.MAX_SAFE_INTEGER;
let bigIntNumber = 9007199254740991n + 1n;
console.log("BigInt:", bigIntNumber);

// String
let name = "First Last";
console.log("String:", name);

// Boolean
let isSubscribed = false;
console.log("Boolean:", isSubscribed);

// null
let noVal = null;
console.log("Null:", null);

// undefined
let unknown;
console.log("Undefined:", unknown);

// arithmetic operations 