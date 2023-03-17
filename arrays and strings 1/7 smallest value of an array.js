let array = [8, 3, 4, 5, 6, 7, 1];

function smallest(array, param) {
  let minimal = Math.min(...array);
  let position = array.indexOf(minimal);
  if (param === "value") {
    return minimal;
  }
  if ((param = "index")) {
    return position;
  }
}

console.log(smallest(array, "index"));
