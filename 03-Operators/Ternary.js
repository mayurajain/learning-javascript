// SECTION - Ternary Operators
//Syntax
// xyz?true:false;

var boolVariable=true;
boolVariable?console.log("Bool Var was set as true"):console.log("Bool Var was set as false");

// SECTION - "Falsy"
// Will below code throw error?
var boolVariable;
boolVariable?console.log("Bool Var was set as true"):console.log("Bool Var was set as false");
// Answer is No,But Why?
// Falsy values
// undefined,null,0,'',Nan are all considered as false

// Then what true Values?
// Everything except Falsy as true.

// SECTION - How do you find out type of a variable?
var boolVar=true;
var undefinedVariable;
var numericVariable=4.5;
console.log(typeof boolVar);
console.log(typeof undefinedVariable);
console.log(typeof numericVariable);

// SECTION Coercion
// What is Coercion?
// Javascript is intelligent,it assumes lot. That can we called as Coercion
var two=2;
var twoVariable="2"
var comparisonResult=two==twoVariable;
console.log(comparisonResult);//Returns true

// This returns true because we never mentioned to javascript that both vales should be of same data type as well
// So it assumed data type can be anything,
// When you are specific about data type also the use === instead of ==
var two=2;
var twoVariable="2"
var comparisonResult=two===twoVariable;
console.log(comparisonResult);//Returns true

