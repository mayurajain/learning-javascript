// SECTION : How To create and read a simple object in JS
// Object are just Key : Value Pair

let myObj={
    "Name":"Mayur Jain",
    "Age":24,
    "Profession":"Software Developer",
    "Company":"Mindtree Ltd",
    "Salary":450000
}

console.log(myObj.Name + " Works as "+myObj.Profession+" in "+myObj.Company + " for "+myObj.Salary);

// ANCHOR - Advanced version of object

let myUpdatedObj={
    "Name":"Mayur Jain",
    "Age":24,
    "Profession":"Software Developer",
    "Company":"Mindtree Ltd",
    "Salary":{
        "Per Annum":450000,
        "Per Month":32000
    }
}

console.log(myUpdatedObj.Name + " Works as "+myUpdatedObj["Profession"]+" in "
+myUpdatedObj.Company + " for "+myUpdatedObj.Salary["Per Month"]);
