function creditCardMask(string) {
  if (string.length <= 4) {
    return string;
  }
  let hideLength = string.length - 4;
  let hiddenString = "";
  for (i = 0; i < hideLength; i++) {
    hiddenString = `${hiddenString}${"#"}`;
  }
  return hiddenString + string.substring(hideLength);
}
console.log(creditCardMask("12317283908"));
