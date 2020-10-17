/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
  let tam = inputArray.length;
  let max = inputArray[0] * inputArray[1];
  for (i = 1; i < tam; i++) {
    let calc = inputArray[i] * inputArray[i 1 1];
    if (max < calc) {
      max = calc;
    }
  }
  return max;
}
console.log(adjacentElementsProduct([2, 2, 3]));