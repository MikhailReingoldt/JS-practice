let str = "CodEWaRs";
let array = str.split("");
let newArray = [];
function findCapitals(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      newArray.push(array.indexOf(str[i]));
    }
  }
  return newArray;
}

console.log(findCapitals(str));
