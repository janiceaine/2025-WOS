/**
 * Returns the number of distinct ways to climb to the top of a staircase of n steps,
 * given you can climb 1 or 2 steps at a time.
 * @param {number} n
 * @returns {number}
 */
function climbStairs(n) {
  // TODO: Implement DP solution (iterative)
  // 1) Handle base cases for n=1 and n=2
  if(n === 1) return 1;
  if(n === 2) return 2;
  
  // 2) Initialize two variables for previous two results
  let prev1 = 2;
  let prev2 = 1;
  // 3) Loop from 3 to n:
  //    - Compute current = prev1 + prev2
  //    - Shift prev variables
  for (let i = 3; i <= n ; i++) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
    
  }
  // 4) Return the result
  return prev1;
}

export { climbStairs };