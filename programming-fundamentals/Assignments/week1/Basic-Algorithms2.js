/* 
    1. Double If Even
    doubleIfEven(arr): Doubles every even number in the array, in-place.
    Modify the original array and return it.
*/
function doubleIfEven(arr1) {
    for (let i = 0; i < arr1.length; i++) { // iteraring through every number in the array
        if (arr1[i] % 2 === 0) { // checking if the number is divisible by 2
            arr1[i] *= 2; // double the number
        }
    }
    return arr1; // returning modified array
};
// Test
nums1 = [5, 8, 12, 6, 7, 44, 31];
console.log(doubleIfEven(nums1));



/* 
    2. Replace Negatives with Zero
    zeroNegatives(arr): Replaces all negative values in the array with 0.
    Modify the original array and return it.
*/
function zeroNegatives(arr2) {
    for (i = 0; i < arr2.length; i++) { // iteraring through every number in the array
        if (arr2[i] < 0) { // checking if number is less than 0
            arr2[i] = 0; // assign the number to 0 if it is found to be less than 0
        }
    }
    return arr2; // returning modified array
};
// Test
nums2 = [8, -9, 4, -2, 66 , 32, -100];
console.log(zeroNegatives(nums2));

/* 
    3. Count Below Threshold
    countBelowThreshold(arr, threshold): Returns the number of values in the array that are less than the threshold.
*/
function countBelowThreshold(arr3, threshold){
    count = 0; // starting count at 0
    for (let num of arr3) { // iteratiing through each number in the array
        if (num < threshold) { // checking if the number's value is greater than the threshold number
            count++; // counting numbers with values less than the threshold
        }
    }
    return count; // return count value
};
// Test
nums3 = [6, 4, 77, 8, 99, 3, 31, 16];
aim = 15;
console.log(countBelowThreshold(nums3, aim));



/* 
    4. Swap First and Last
    swapFirstAndLast(arr): Swaps the first and last elements of the array.
    Modify the original array and return it.
*/
function swapFirstAndLast(arr4) {

    if (arr4.length >= 2){ // checking if the number of elements is the array is more than 1
        temp = arr4[0]; //assigning a temporay variable with first element in array
        arr4[0] = arr4[arr4.length - 1]; // assigning the first element with the last element
        arr4[arr4.length - 1] = temp; // assigning the last element with the element stored in the temp varible
    }
    return arr4; // return modified array
};
// Test
nums4 = [5, 6, 7, 8, 9, 13];
console.log(swapFirstAndLast(nums4));

/* 
    5. Sum of All Evens
    sumEvens(arr): Returns the sum of all even numbers in the array.
*/
function sumEvens(arr5) {
    sum = 0; // starting at 0
    for (nums5 of arr5) { // iterating through items in the array
        if (nums5 % 2 === 0){ // checking if numbers are even
            sum += nums5; // add the even number to sum 
        }
    }
    return sum; // return sum
};
// Test
checkEvens = [44, 73, 85, 96, 32, 66, 21];
console.log(sumEvens(checkEvens));


/*
    6. Print Index and Value
    printIndexAndValue(arr): Logs each index and the corresponding value in the array.
*/
function printIndexAndValue(arr6) {
    for (let i = 0; i < arr6.length; i++) { // iterating through items in the array
        console.log(`${i}: ${arr6[i]}`); // printing index to corresponding index value in array
    }
};
// Test
fruit = ["apples", "oranges", "grapes", "melons", "mangoes"];
printIndexAndValue(fruit);

/*
    7. Get Max
    getMax(arr): Returns the largest number in the array.
*/
function getMax(arr7) {
    let max = arr7[0]; //assigning the largest number (max) with the first value
    for (let nums7 of arr7) { // iterating through array
        if (nums7 > max) { // checking if max is greater than the next number
            max = nums7; // if greater assign max with number
        }
    }
    return max; // return max
};
// Test
checkMax = [3, 7, 9, 16, 28, 2, 5];
console.log(getMax(checkMax));

/* 
    8. Count the Odds
    countOdds(arr): Returns the number of odd numbers in the array.
*/
function countOdds(arr8) {
    counter = 0; // starting count at 0
    for (let nums8 of arr8) { // iterating through each value in array
        if (nums8 % 2 !== 0) { // if the number is not divisible by 2
            counter++; // we count the number
        }
    }
    return counter; // return count
};
// Test
forms = [7, 16, 5, 19, 9, 3, 22, 94, 72, 18];
console.log(countOdds(forms));



/* 
    9. All Positive?
    allPositive(arr): Returns true if all numbers are positive; otherwise, false.
*/
function allPositive(arr9) {
    for (let i = 0; i < arr9.length; i++) { // iterating through numbers in the array
        if (arr9[i] <= 0) { // checking if the number is less than or equal to 0
            return false; // if array includes numbers less than or equal to 0 return false
        }
    }
    return true; // if array has no numbers less than or equal to 0 return true
};
// Test
gains1 = [3, -1, 0, 9, 11, -7];
console.log(allPositive(gains1));
gains2 = [87, 5, 4, 9, 2, 1];
console.log(allPositive(gains2));


/* 
    10. Multiply by Index
    multiplyByIndex(arr): Multiplies each number by its index.
*/
function multiplyByIndex(arr0) {
    for (let i = 0; i < arr0.length; i++) { // iterating through each number in the array 
        arr0[i] *= i; // multiplying each number by its index
    }
    return arr0; // return array
};
// Test
area = [1, 9, 3, 7, 8, 2];
console.log(multiplyByIndex(area));

