function centuryFromYear(year) {
  const century = Math.ceil(year / 100);
  return century;
}
console.log(centuryFromYear(101));
