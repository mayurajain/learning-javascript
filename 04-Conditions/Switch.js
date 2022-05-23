// SECTION - Switch case is also same as in different language
// TODO - Situation to use switch case to find out what access to grant for a particular user
var userType = "AdvanceUser"

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