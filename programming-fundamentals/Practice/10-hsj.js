/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ', ';
const expected1 = '1, 2, 3';

const arr2 = [1, 2, 3];
const separator2 = '-';
const expected2 = '1-2-3';

const arr3 = [1, 2, 3];
const separator3 = ' - ';
const expected3 = '1 - 2 - 3';

const arr4 = [1];
const separator4 = ', ';
const expected4 = '1';

const arr5 = [];
const separator5 = ', ';
const expected5 = '';

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator = ', ') {
  //your code here
  let temp = '';

  if (arr.length === 0) {
    return temp;
  }

  for (let i = 0; i < arr.length; i++) {
    const isLast = i === arr.length - 1;
    if (isLast) {
        temp += arr[i];
        break;
    }

    temp += arr[i] + separator;
  }
  return temp;
}
console.log({ arr1, separator1, join: join(arr1, separator1), expected1 });
console.log({ arr2, separator2, join: join(arr2, separator2), expected2 });
console.log({ arr3, separator3, join: join(arr3, separator3), expected3 });
console.log({ arr4, separator4, join: join(arr4, separator4), expected4 });
console.log({ arr5, separator5, join: join(arr5, separator5), expected5 });