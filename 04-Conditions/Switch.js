// SECTION - Switch case is also same as in different language

var userType = "Demo"

switch(userType){
    case "BasicUser":
            console.log("User Identified as Basic User,Granting Read Access!")
        break;

    case "IntermediateUser":
        console.log("User Identified as Intermediate User,Granting Read Write Access!")
        break;
    
    case "AdvanceUser":
        console.log("User Identified as Advance User,Granting Read Write Execute Access!")
        break;

    default:
        console.log("User Identified as Demo User,Revoking All Access!")
        break;
}