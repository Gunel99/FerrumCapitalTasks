// Question 7:  What is strict mode?

// we don't use from "use strict"
// x = 5; // it works, there is not any error.

"use strict";
// 1
// x = 5; // x is not defined
// If we use "strict mode", at firstly, x must be determined

let x;
x = 5; // it works normally
// or
// let x = 5; // it also works normally

// 2
let number = 02345; // Octal literals are not allowed in strict mode.

// 3
// let arguments = 3.14; // it is error

// 4
// let Infinity = 5; // throws a TypeError, it has already been declared

// 5
// function sum(a, a, c) { // Duplicate parameter name not allowed in this context
//   return a + a + c; 
// }

// 6
let z;
// delete z; // Delete of an unqualified identifier in strict mode.

