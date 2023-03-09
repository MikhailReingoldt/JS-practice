function reversedString(string) {
  let result = "";
  for (let i = 0; i < string.length; i += 1) {
    result = `${string[i]}${result}`;
  }
  return result;
}
console.log(reversedString("abcde"));
