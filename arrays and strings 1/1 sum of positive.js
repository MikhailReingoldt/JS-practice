array = [1, -2, 5, -4, 7];
let sum = 0;
function sumOfPositive(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}

console.log(sumOfPositive(array));
