// SECTION - Function with default parameters

let updatedFunction=function(name,age){
    console.log(`${name} is ${age} years old`);
}
updatedFunction();// ANCHOR - This will not throw error

// NOTE - Better Version of above method would be 


let betterFunction=function(name='Guest',age=35){
    console.log(`${name} is ${age} years old`);
}
betterFunction();// ANCHOR - This will not throw error