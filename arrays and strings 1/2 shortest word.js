let string = "short string for test fds f";
let array = string.split(" ");
let wordsLength = array.map((word) => word.length);
/* в данном случае мы word можем заменить на любое другое обозначение */
let shortestWord = Math.min(...wordsLength);
/* оператор ... распространяет массив wordsLength на отдельные значения, которые затем передаются в качестве аргументов функции Math.min. */

console.log(shortestWord);
