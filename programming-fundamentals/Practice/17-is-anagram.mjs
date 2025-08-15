import { buildCharFrequency } from './16-build-char-frequency.mjs'

/**
 * Determines whether two strings are anagrams of each other without using built-in split/sort/join.
 * - Time: O(n)
 * - Space: O(n)
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function isAnagram(s1, s2) {
  // your code here
  const s1Char = buildCharFrequency(s1);
  const s2Char = buildCharFrequency(s2);

  // with built-in methods
  // if (Object.keys(s1Char).length !== Object.keys(s2Char).length){
  //   return false;
  // }

  let count = 0;

  for (let key in s1Char) {
    count++;
  }


  let count2 = 0;

  for (let key in s2Char) {
    count2++;
  }
  
  
  if (count !== count2) {
    return false;
  }
  

  for (let key in s1Char) {
    if (s1Char[key] !== s2Char[key]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('listen', 'silent'), '=> true');
console.log(isAnagram('hello', 'world'), '=> false');
console.log(isAnagram('rail safety', 'fairy tales'), '=> true');
console.log(isAnagram('aabbcc', 'baccab'), '=> true');