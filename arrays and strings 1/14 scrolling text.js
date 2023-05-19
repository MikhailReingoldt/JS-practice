let text = "CODEWARS";

function scrollingText() {
  let rotations = [];
  for (i = 0; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }
  return rotations;
}
console.log(scrollingText(text));
