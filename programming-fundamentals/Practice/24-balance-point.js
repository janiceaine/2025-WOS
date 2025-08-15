/*
  Balance Point

  A balance point occurs BETWEEN two indices if the sum of the values to the
  left equals the sum of the values to the right.

  Return true if such a point exists in the array, otherwise return false.
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: Balance point is between indices 3 and 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

/**
 * Determines whether a balance point exists BETWEEN any two indices in the array,
 * where the sum of elements to the left equals the sum of elements to the right.
 *
 * - Time: O(?).
 * - Space: O(?).
 *
 * @param {Array<number>} nums - The input array of numbers.
 * @returns {boolean} True if a balance point exists, otherwise false.
 */
function balancePoint(nums) {
  // your code here
  const sumValues = (values) => values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    let leftSide = 0;
    let rightSide = sumValues(nums);
    for (let i = 0; i < nums.length; i++) {
        leftSide += nums[i];
        rightSide -= nums[i];
        if (leftSide === rightSide) return true;
    }

    return false;
}

console.log(`${balancePoint(nums1)} should equal ${expected1}`);
console.log(`${balancePoint(nums2)} should equal ${expected2}`);