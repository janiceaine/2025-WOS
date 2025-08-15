/*
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3, 4, 5];
const expectedA = [5, 4, 3, 2, 1];

const arr2 = ['a', 'b'];
const expectedB = ['b', 'a'];

const arr3 = ['a'];
const expectedC = ['a'];

const arr4 = [];
const expectedD = [];

/**
 * Reverses the given arr in place without built in methods.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
  // code here
  if (items.length === 0) return [];

  for (let i = 0; i < Math.floor(items.length / 2); i++) {
    let element = items[i];
    items[i] = items[items.length - 1 - i];
    items[items.length - 1 - i] = element;
  }
  return items;
}

// Tests
const resultA = reverseArr(arr1);
console.log(resultA, 'should be', expectedA);

const resultB = reverseArr(arr2);
console.log(resultB, 'should be', expectedB);

const resultC = reverseArr(arr3);
console.log(resultC, 'should be', expectedC);

const resultD = reverseArr(arr4);
console.log(resultD, 'should be', expectedD);