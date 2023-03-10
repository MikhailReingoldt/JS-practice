function removeFirstAndLastChar(str) {
  if (str.length <= 2) {
    return "";
  }
  let strBetweenFirstAndLastChar = str.substring(1, str.length - 1);
  return strBetweenFirstAndLastChar;
}
console.log(removeFirstAndLastChar("123456789"));
