/**
 * String Decode
 *
 * Given a string that may contains sequences of characters
 * followed by an integer representing the number of times
 * that character is repeated, return a decoded string by
 * duplicating each character by that following integer.
 *
 * Integers may have more than one digit.
 */

const strA = 'a3b2c1d3';
const expectedA = 'aaabbcddd';

const strB = 'a3b2c12d10';
const expectedB = 'aaabbccccccccccccdddddddddd';

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function stringDecode(str) {
  // your code here
  let char = '';
  let result = '';
  let n = '';

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    i++;


    while (!isNaN(str[i])) {
      n += str[i];
      i++;
    }

    i = i - 1;
    let num = Number(n);
    n = '';

    for (let j = 0; j < num; j++) {
      result += char;
    }
  }
    return result
}

console.log(stringDecode(strA), expectedA);
console.log(stringDecode(strB), expectedB);

