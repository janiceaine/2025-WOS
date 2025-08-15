/* 
  Given one array,
  return a new array that contains all of the original items duplicated twice
*/

const arr1 = ['a', 'b', 'c'];
const expectedA = ['a', 'b', 'c', 'a', 'b', 'c'];

const arr2 = ['a'];
const expectedB = ['a', 'a'];

const arr3 = [];
const expectedC = [];

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The resulting concatenation of the given arr with
 *    itself.
 */
function concatArrWithSelf(items) {
  // code here
  temp = []; // starting with an empty array
  for (let item of items) { // iterating through each item in items array
    temp.push(item) // adding each item to the temp
  }

  for (let item of items) { // creating a new for loop to iterate through the items again
    temp.push(item) // adding each item to the temp array again
  }

  return temp; 
}

// Tests
const result1 = concatArrWithSelf(arr1);
console.log(result1, 'should be', expectedA);

const result2 = concatArrWithSelf(arr2);
console.log(result2, 'should be', expectedB);

const result3 = concatArrWithSelf(arr3);
console.log(result3, 'should be', expectedC);