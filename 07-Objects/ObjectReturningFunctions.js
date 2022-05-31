// SECTION - Method which accepts objects and return objects
// REVIEW - When you are passing object to a method,
//          you are actually passing the original object and not copy of the object

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

let salaryIncrementor=function(info,incrementPercentage){
    let incrementedSalaryPerAnnum;
    let incrementedSalaryPerMonth;

    incrementedSalaryPerAnnum=info.Salary["Per Annum"]+((info.Salary["Per Annum"]*incrementPercentage)/100);
    incrementedSalaryPerMonth=info.Salary["Per Month"]+((info.Salary["Per Month"]*incrementPercentage)/100);
    
    return {
        "incrementedSalaryPerAnnum":incrementedSalaryPerAnnum,
        "incrementedSalaryPerMonth":incrementedSalaryPerMonth
    }
}

let postIncrementData=salaryIncrementor(myUpdatedObj,10);
console.log(postIncrementData);


// ANCHOR - To update and return incoming object

let salaryIncrementorNew=function(info,incrementPercentage){
    let incrementedSalaryPerAnnum;
    let incrementedSalaryPerMonth;

    incrementedSalaryPerAnnum=info.Salary["Per Annum"]+((info.Salary["Per Annum"]*incrementPercentage)/100);
    incrementedSalaryPerMonth=info.Salary["Per Month"]+((info.Salary["Per Month"]*incrementPercentage)/100);
    
    info.Salary["Per Annum"]=incrementedSalaryPerAnnum;
    info.Salary["Per Month"]=incrementedSalaryPerMonth;

    return info;
}


let postIncrementDataNew=salaryIncrementorNew(myUpdatedObj,10);
console.log(postIncrementDataNew);
console.log(myUpdatedObj);
