let string = "short string for test fds f";
let array = string.split(" ");
let wordsLength = array.map((item) => item.length);
let shortestWord = Math.min(...wordsLength);

console.log(shortestWord);
