let number = 454793;
let string = number.toString();
let result = string[0];
function insertDashes() {
  for (i = 1; i < string.length; i++) {
    if (string[i - 1] % 2 !== 0 && string[i] % 2 !== 0) {
      result = result + "-" + string[i];
    } else {
      result = result + string[i];
    }
  }
  return result;
}
console.log(insertDashes(number));
