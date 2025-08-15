/*
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the
  array contains that value.

  Do not iterate the array sequentially. Instead, use a
  divide-and-conquer strategy that takes advantage of the
  array's sorted order.

  Bonus (interview-style): First complete the standard
  version. If time permits, add a feature that returns
  how many times the given number appears.
*/

const numbers1 = [1, 3, 5, 6];
const searchNumber1 = 4;
const expected1 = false;

const numbers2 = [4, 5, 6, 8, 12];
const searchNumber2 = 5;
const expected2 = true;

const numbers3 = [3, 4, 6, 8, 12];
const searchNumber3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const numbers4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNumber4 = 2;
const expected4 = 4;

/**
 * Efficiently determines whether the given number exists
 * in the sorted array using binary search.
 * - Time: O(log n).
 * - Space: O(1).
 * @param {Array<number>} sortedNumbers
 * @param {number} searchNum
 * @returns {boolean} Whether the number exists in the array.
 */
function binarySearch(sortedNumbers, searchNum) {
  // your code here
  let left = 0;
  let right = sortedNumbers.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (sortedNumbers[mid] === searchNum) {
      break;
    } else if (sortedNumbers[mid] > searchNum) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  let count = 0;
  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] === searchNum) {
      count++;
    }
  }
    if (count === 1) {
      return true;
    } else if (count > 1) {
      return count;
    } else {
      return false;
    }
}

console.log(
  `${binarySearch(numbers1, searchNumber1)} should equal ${expected1}`
);
console.log(
  `${binarySearch(numbers2, searchNumber2)} should equal ${expected2}`
);
console.log(
  `${binarySearch(numbers3, searchNumber3)} should equal ${expected3}`
);
console.log(
  `${binarySearch(numbers4, searchNumber4)} should equal ${expected4}`
);
