/*
Write a function that takes a list of strings and returns the sum of the list items that represent an
integer (skipping the other items).
Example:
Input: [‘1’, ‘a’, ‘25’, ‘13.1’].
Output: 26.
 */

function sumFilter(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let parsedItem = parseFloat(arr[i]);
    if (!isNaN(parsedItem) && Number.isInteger(parsedItem)) {
      sum = sum + parsedItem;
    }
  }
  return sum;
}

console.log(sumFilter(['1', 'a', '25', '13.1']));
