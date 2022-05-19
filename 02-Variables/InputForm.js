// SECTION - Input form from JS
// ANCHOR - Remember JS is not designed in any way to get user inputs like console app
// ANCHOR - But there is a possible way to do it

// NOTE - Just for reference
// TODO - See why this is not working
// var userInput=prompt("Enter Your Input");
// console.log("You Entered"+userInput);


// SECTION - Imagine we have all inputs from user by some other way,
// lets try to display them on console

var userName = "Mayur Jain";
var userAge = 24;
var userPhoneNumber = 7353989392;
var userMailId = "mayur.jain@mindtree.com"

console.log("----User Details----");
console.log("Name:"+userName);
console.log("Age:"+userAge);
console.log("Phone Number:"+userPhoneNumber);
console.log("Mail:"+userMailId);
console.log("---------------------")

// Or

// NOTE - Space Matters in this method
console.log(`
Name:${userName}
Age:${userAge}
Phone:${userPhoneNumber}
    Mail:${userMailId}
`);