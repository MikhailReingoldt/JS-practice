let phoneNumber = [9, 5, 1, 6, 8, 8, 6, 8, 8, 9];
function createPhoneNumber(phoneNumber) {
  let areaCode = phoneNumber.slice(0, 3).join("");
  /* .join используется для того, чтобы массив преобразовать в строку */
  let prefix = phoneNumber.slice(3, 6).join("");
  let lineNumber = phoneNumber.slice(6, 9).join("");
  return `(${areaCode}) ${prefix}-${lineNumber}`;
}
console.log(createPhoneNumber(phoneNumber));
