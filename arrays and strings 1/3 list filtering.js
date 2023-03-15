let array = [1, 4, "dsf", 4, "t", 6];
let filteredArray = array.filter((item) => typeof item !== "string");

console.log(filteredArray);
