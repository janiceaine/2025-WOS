/**
 * Returns the maximum water area between two vertical lines.
 * @param {number[]} heights - non-negative integers
 * @returns {number}
 */
function maxArea(heights) {
  // TODO: Implement two-pointer approach
  // 1) Initialize left = 0, right = heights.length - 1, best = 0
  let left = 0;
  let right = heights.length - 1;
  let best = 0;

  // 2) While left < right:
  while (left < right) {
    //    a) width = right - left
    let width = right - left;
    //    b) h = Math.min(heights[left], heights[right])
    let height = Math.min(heights[left], heights[right]);
    //    c) best = Math.max(best, h * width)
    best = Math.max(best, height * width);
    //    d) If heights[left] < heights[right], left++ else right--
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  // 3) Return best
  return best;
}

export { maxArea };
