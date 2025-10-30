export function randomLetters(length = 6) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return result;
}
export function getTimeStamp() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const year = String(now.getFullYear()).slice(-2);
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${day}${month}${year}_${hours}${minutes}${seconds}`;
}

export function randomNumberGenerator(length = 7) {
  if (length <= 0) return "";

  let number = "";
  for (let i = 0; i < length; i++) {
    const digit =
      i === 0
        ? Math.floor(Math.random() * 9) + 1
        : Math.floor(Math.random() * 10);
    number += digit;
  }
  return number;
}
