/*
  Parens Valid

  Given a string that may contain parentheses, determine whether
  all the parentheses are properly matched and correctly ordered.

  A string is considered valid if:
  - Every opening parenthesis '(' has a corresponding closing
    parenthesis ')'.
  - Parentheses are closed in the correct order (i.e., no closing
    parenthesis comes before its matching opening parenthesis).
*/

const str1 = 'Y(3(p)p(3)r)s'; // ( () () )
const expected1 = true;

const str2 = 'N(0(p)3'; // ( ( )
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = 'N(0)t ) 0(k'; // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

/**
 * Determines whether the parentheses in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.

 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
  // Your code here
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
        stack.push('(');
    } else if (str[i] === ')' && stack.length > 0) {
        stack.pop();
    } else if (str[i] === ')' && stack.length === 0) {
        return false;
    } 
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`${parensValid(str1)} should equal ${expected1}`);
console.log(`${parensValid(str2)} should equal ${expected2}`);
console.log(`${parensValid(str3)} should equal ${expected3}`);