// Question 5: What is Scope in JavaScript?

// Block scope: if else, switch, for ..
let number = 4;

if (number > 0) {
  let x = 2;

  number += x;
}
// console.log(x); // x is not defined
// Because 'x' is a block scope element and it is assigned 'let' keyword.
// When variable is assigned with 'let' keyword in scope, so, the variable only defines in the scope


{
  var y = 3;
}
console.log(y);
// Because, it is assigned 'var' keyword
// When variable is assigned with 'var' keyword in scope, the variable defines both in the scope and
// out the scope


function myFunc() {
  let name = "Gunel"; // 'name' is a local scope for 'myFunc()'
  // we can use name here
}
// we can't use name here


function myFunction() {
  const name = "Gunel"; // it is also function scope
}


let surname = "Memmedova"; // it is a global scope for 'myFunc1()'
// we can use surname here

function myFunc1() {
  // we can also use surname here
}
// we can also use surname here