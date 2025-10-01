/**
 * Groups an array of strings into arrays of anagrams.
 *
 * @param {string[]} strs - The input array of strings.
 * @returns {string[][]} An array of groups, where each group contains words that are anagrams of each other.
 */
function groupAnagrams(strs) {
  // TODO: Implement groupAnagrams using a hash map
  // 1. Initialize a Map to hold key → group of words
  const map = new Map();
  // 2. For each word in strs:
  for (let word of strs) {
    //    a. Convert the word into a canonical key (e.g., sort its letters)
    let key = word.split("").sort().join("");
    console.log(key);
    
    //    b. Insert the word into the Map under that key
    let prev = map.get(key);
    if (prev) {
      prev.push(word);
    } else {
      prev = [word];
    }
    // 3. Collect all the values from the Map
    map.set(key, prev);
  }
  // 4. Return them as an array of arrays
  return Array.from(map.values());
}

export { groupAnagrams };
