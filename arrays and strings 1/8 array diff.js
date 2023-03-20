let arrayOne = [1, 2, 2, 3, 4];
let arrayTwo = [2];

let newArray = [];
function arrayDiff(arrayOne, arrayTwo) {
  for (i = 0; i < arrayOne.length; i++) {
    if (!arrayTwo.includes(arrayOne[i])) {
      /* знак ! говорит нам о противоположности в методе includes. Т.е. arrayTwo не содержит arrayOne[i] */
      newArray.push(arrayOne[i]);
    }
  }

  return newArray;
}
console.log(arrayDiff(arrayOne, arrayTwo));
