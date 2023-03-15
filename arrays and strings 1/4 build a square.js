let number = 5;
let result = "";
function buildSquare(number) {
  for (i = 0; i < number; i++) {
    for (k = 0; k < number; k++) {
      result = result + "+";
    }
    result = result + "\n";
  }
  return result.trim(); /* методом trim убираем пустую строку после последней строчки */
}
console.log(buildSquare(number));
