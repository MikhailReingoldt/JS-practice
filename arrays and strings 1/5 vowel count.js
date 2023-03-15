let str = "abracadabra";
let sum = 0;
function vowelCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i])) {
      sum++;
    }
  }
  return sum;
}
console.log(vowelCount(str));
