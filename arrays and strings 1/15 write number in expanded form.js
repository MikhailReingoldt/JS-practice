let num = 1234567;

function expandedForm(num) {
  let digits = String(num).split("");
  let length = digits.length;
  let expanded = [];
  for (let i = 0; i < length; i++) {
    if (i !== "0") {
      expanded.push(digits[i] + "0".repeat(length - i - 1));
    }
  }
  return expanded.join(" + ");
}

console.log(expandedForm(num));
