function countSheep(number) {
  let result = "";
  for (i = 1; i <= number; i++) {
    result = `${result}${i}${" sheep... "}`;
  }
  return result;
}
console.log(countSheep(123));
