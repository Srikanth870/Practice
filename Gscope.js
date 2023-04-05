// 'use strict'

// Global Declaration

let b=3;
const globalValue =()=>{
    console.log(b)  // b value is 3 because of global variable
}
console.log(b) // b value is 3 because of global variable
globalValue();
console.log(b) // b value is 3 because of global variable

// value of global variable can change inside function;
let a='hello';
const greet=()=>{
    a=3
}
console.log(a); // Before function calling a value is 'hello'
greet(); //function calling
console.log(a); // After function calling a value is 3. i.e, 'we can change value of global variable'.

const withoutDeclaration = ()=>{
    a='hello' // Without declaration of variable, The JS will treates a variable is Global.
}
console.log(a) // Throws an error
withoutDeclaration();
console.log(a) // 'hello', Because of Global variable, if we use Strict mode, it throws an error.