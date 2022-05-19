// SECTION - Const Keyword
// ANCHOR - Const is used for const values which should not change
// ANCHOR - var is used for variable whose value keeps on changing
// ANCHOR - Declare now,Initialize later is not available for const

const firstConst="My First Const Value";
const secondConst="My Second Const Value";
console.log(secondConst);
firstConst="My Updated Const Value";//This will throw error if u try to console log this

