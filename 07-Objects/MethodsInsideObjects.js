// SECTION - You can have methods inside object just like other key value pair
// but remember these methods needs 'this' to control other keys in same object

let myDetails={
    Name: 'Mayur Jain',
    Age: 24,
    Profession: 'Software Developer',
    Company: 'Mindtree Ltd',
    Salary: { 'Per Annum': 495000, 'Per Month': 35200 },
    IncreaseAge : function(years){
        console.log(`Previous Age : ${this.Age}`)
        this.Age=this.Age+years;
        console.log(`New Age : ${this.Age}`)
    },
    DeductTax:function(taxPercentage){
        console.log(`Previous Per Annum Salary : ${this.Salary["Per Annum"]}`)
        console.log(`Previous Per Annum Salary : ${this.Salary["Per Month"]}`)
        this.Salary["Per Annum"]= this.Salary["Per Annum"]-(( this.Salary["Per Annum"]*taxPercentage)/100);
        this.Salary["Per Month"]= this.Salary["Per Month"]-(( this.Salary["Per Month"]*taxPercentage)/100);
        console.log(`New Per Annum Salary : ${this.Salary["Per Annum"]}`)
        console.log(`New Per Annum Salary : ${this.Salary["Per Month"]}`)
    }
  }

  myDetails.IncreaseAge(5);
  myDetails.DeductTax(8);