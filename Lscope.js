let a=2;
let sum=()=>{
    let b=3;
    console.log(a+b)    // 5 'a' is 2 i.e it is global we can access inside a function
                        // b is 3 it is local 
}
sum()            // function calling
console.log(a)   // 2 'a' is Global so we can access throught the Program.
//console.log(a+b) // Throws error. Because b is local, so we access inside function only. 

// Difference b/w 'null' & 'undefined'
a=null;
console.log(a)          //null
console.log(typeof(a))  //object    
let b;
console.log(b)          //undefined
console.log(typeof(b))  //undefined
