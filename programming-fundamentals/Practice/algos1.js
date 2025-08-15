/*
    Swap First and Last
    swapFirstAndLast(arr): swaps the first and last elements of the array.
    Modify the original array and return it.
*/

// PSUEDOCODE IT
// 1. create array
// 2. create function that accepts an array
// 3. inside function
// 4. temp var
// 5. perform the swap
// 6. return the array

let colors = ['red', 'yellow', 'blue', 'green'];

/**
 * JS Doc
 * @param {Array} arr 
 * @returns {Array / number}
 */
function swapFirstAndLast(arr) {
    if (!Array.isArrray(arr)) {
        console.log('Input invalid');
        return -1;
    }
    if (arr.length > 2) {
        console.log('Input invalid');
        return -1;
    }
    let temp  = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
 }

 let result = swapFirstAndLast(colors);
 console.log(result);
 
 