/*
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const strA = 'This is a test';
const expectedA = 'test a is This';

const strB = 'hello';
const expectedB = 'hello';

const strC = '   This  is a   test  ';
const expectedC = 'test a is This';

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
  // your code here
  let begin = wordsStr.length - 1;
  let end = wordsStr.length - 1;
  let final = '';
  wordsStr = wordsStr.trim();

  for (let i = wordsStr.length - 1; i >= 0; i--) {

    if (wordsStr[i] !== ' ') {
      begin--;
    } else {
      final += wordsStr.slice(begin, end);
      if (i !== 0) {
        final += ' ';
      }
      end = i - 1;
      begin = end;
    }
  }
  return final;
}

console.log(`${reverseWordOrder(strA)} should equal ${expectedA}`);
console.log(`${reverseWordOrder(strB)} should equal ${expectedB}`);
console.log(`${reverseWordOrder(strC)} should equal ${expectedC}`);