let array = [50, 60, 70, 80, 90, 100, 20, 10]; /* 230, 240 */
let resultOne = 0;
let resultTwo = 0;
function rowWeights() {
  if (array.length % 2 !== 0) {
    resultOne = array[array.length - 1];
  }
  for (let i = 1; i < array.length; i = i + 2) {
    resultOne = resultOne + array[i - 1];
    resultTwo = resultTwo + array[i];
  }
  return `${resultOne}, ${resultTwo}`;
}
console.log(rowWeights());
