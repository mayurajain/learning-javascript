// SECTION - Task to find discount percentage or discounted price

// ANCHOR - Find Discount Percentage

var listedPrice=15000;
var discountedPrice=7200;
var listingPriceMinusDiscountedPrice=listedPrice-discountedPrice;
var discountPercentage=(100*listingPriceMinusDiscountedPrice)/listedPrice;
console.log(Math.round(discountPercentage));

var discountPercentageApproved=52;
var newPrice=listedPrice-((listedPrice*discountPercentageApproved)/100);
console.log(newPrice);
