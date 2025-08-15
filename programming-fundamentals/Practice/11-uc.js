/*
Book Index

Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const numsA = [1, 13, 14, 15, 37, 38, 70];
const expectedA = '1, 13-15, 37-38, 70';

const numsB = [5, 6, 7, 8, 9];
const expectedB = '5-9';

const numsC = [1, 2, 3, 7, 9, 15, 16, 17];
const expectedC = '1-3, 7, 9, 15-17';

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
  //your code here
  let temp = '';
  let first = nums[0];
  let last = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (last === first + 1)

    
  }
  return temp;
}
console.log({ numsA, result: bookIndex(numsA), expectedA });
// console.log({ numsB, result: bookIndex(numsB), expectedB });
// console.log({ numsC, result: bookIndex(numsC), expectedC });
