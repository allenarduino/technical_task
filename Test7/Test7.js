/*
Write a function that, when called, returns an array for which each element is a letter of the
alphabet, from "A" to "Z" (exactly once, in order and upper case). Your code cannot contain the
character ' (quote), " (double quote) or ` (backquote).
 */

function handleAlphabet() {
  let alphabetArray = [];
  for (let i = 0; i < 26; i++) {
    alphabetArray.push(String.fromCharCode(65 + i).toLocaleUpperCase());
  }
  return alphabetArray;
}

console.log(handleAlphabet());
