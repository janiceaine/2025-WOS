/*
  Balance Index

  A balance index is an index where the sum of the elements to the left is equal
  to the sum of the elements to the right—excluding the value at the index itself.

  Return the index if such a point exists, otherwise return -1.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [9, 6, 2, 3];
const expected3 = -1;

const nums4 = [3, 6, 0, 3];
const expected4 = 1;

const nums5 = [0, 1, 9, 0, 2];
const expected5 = -1;

/**
 * Finds the index in the array where the sum of all elements to the left
 * equals the sum of all elements to the right, excluding the value at the index.
 *
 * - Time: O(?).
 * - Space: O(?).
 *
 * @param {Array<number>} nums - The input array of numbers.
 * @returns {number} The balance index, or -1 if none exists.
 */
function balanceIndex(nums) {
  // your code here
  if (nums.length <= 2) return -1;

  const sumValues = (values) => 
    values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    let leftSide = 0;
    let rightSide = sumValues(nums);
    for (let i = 0; i < nums.length; i++) {
        rightSide -= nums[i];     
        if (leftSide === rightSide) return i;
        leftSide += nums[i];       
    }

    return -1;
}

console.log(`${balanceIndex(nums1)} should equal ${expected1}`);
// console.log(`${balanceIndex(nums2)} should equal ${expected2}`);
// console.log(`${balanceIndex(nums3)} should equal ${expected3}`);
// console.log(`${balanceIndex(nums4)} should equal ${expected4}`);
// console.log(`${balanceIndex(nums5)} should equal ${expected5}`);