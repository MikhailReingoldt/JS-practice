function Abbreviation(firstname, surname) {
  const trimmedName = firstname[0].toUpperCase();
  const trimmedSurname = surname[0].toUpperCase();

  return trimmedName + `. ` + trimmedSurname + `.`;
}
console.log(Abbreviation("mike", "holt"));
