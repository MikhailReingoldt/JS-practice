result = 0;
function sum(number) {
  for (i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
      result = result + i;
    }
  }
  if (result == number) {
    return `${number} is perfect number`;
  } else {
    return `${number} is not perfect number`;
  }
}

console.log(sum(28));
