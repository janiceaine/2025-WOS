/**
 * Finds the length of the longest substring without repeating characters.
 *
 * This uses a sliding window approach with a hash map that tracks the last
 * seen index of each character. When a duplicate character is encountered
 * within the current window, the left pointer jumps past the previous index
 * of that character.
 *
 * @param {string} s - The input string.
 * @returns {number} The length of the longest substring of `s` that contains no repeating characters.
 *
 * Note: This is the classic "Longest Substring Without Repeating Characters"
 * problem (LeetCode #3). It is different from "Minimum Window Substring."
 *
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
function lengthOfLongestSubstring(s) {
  // TODO: Implement sliding window with a hash map of last seen indices
  // 1) Initialize best = 0, left = 0, and an empty Map for last seen positions
  let best = 0;
  let left = 0;
  const map = new Map();

  // 2) Loop right from 0..s.length-1:
  for (let right = 0; right <= s.length - 1; right++) {
  //    a) ch = s[right]
    let ch = s[right];
  //    b) If ch was seen at index >= left, move left to that index + 1
    if(map.has(ch) && map.get(ch) >= left){
      left = map.get(ch) + 1;
    }
  //    c) Update last seen position of ch to right
    map.set(ch, right);
  //    d) Update best with current window size (right - left + 1)
    best = Math.max(best, right - left + 1);
  }
  // 3) Return best
  return best;
}

export { lengthOfLongestSubstring };