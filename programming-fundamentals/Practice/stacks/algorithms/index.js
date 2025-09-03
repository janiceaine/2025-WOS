import { NotImplementedError } from '../classes/not-implemented-error';
import { ArrayStack } from '../classes/array-stack';

/**
 * Reverses a string using a stack.
 * @param {string} str - The input string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  const stack = new ArrayStack();
  for(let char of str){
    stack.push(char)
  }
  let returnStr = "";
  while(!stack.isEmpty()) {
    returnStr += stack.pop()
  }
  return returnStr;
}

/**
 * Checks if a string is a palindrome using a stack.
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  const stack = new ArrayStack();
  for(let char of str){
    stack.push(char)
  }
  let reverseStr = "";
  while(!stack.isEmpty()) {
    reverseStr += stack.pop()
  }
  return str === reverseStr;

  // for(let char of str){
  //   if(char !== stack.pop()){
  //     return false;
  //   }
  // }
  // return true;

}

/**
 * Checks whether a string has balanced parentheses using a stack.
 * Only `(` and `)` characters are considered; all others are ignored.
 * @param {string} str - The input string containing parentheses.
 * @returns {boolean} True if every opening parenthesis has a matching closing parenthesis
 * in the correct order, false otherwise.
 */
function parensValid(str) {
  const stack = new ArrayStack();

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) return false; // no matching (
      stack.pop();
    }
  }

  return stack.isEmpty(); // valid only if all were matched
}

/**
 * Finds the next greater element to the right for each element in the array.
 * For each element, the function returns the first greater element to its right;
 * if none exists, -1 is returned for that element.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} An array where each element is the next greater element to
 * the right of the corresponding input element.
 */
function nextGreaterRight(arr) {
  throw NotImplementedError('Method stub only');
}

export { reverseString, isPalindrome, parensValid, nextGreaterRight };