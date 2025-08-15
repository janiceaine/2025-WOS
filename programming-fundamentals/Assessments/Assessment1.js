/*
    1. Print in Reverse: 40 to 10
    Create a function printReverse40to10() that prints the numbers from 40 down to 10.
*/
function printReverse40to10() {
    for(let i = 40; i >= 10; i--) { // iterating through numbers 10 to 40 in reverse
        console.log(i);   // print number
    }
 };
 printReverse40to10();


/* 
    2. Print All Odd Numbers 1–21
    Create a function printOdds1to21() that prints every odd number between 1 and 21 (inclusive).
*/
function printOdds1to21() {
    for(let i = 1; i <= 21; i++) { // iterating through numbers 1 to 21 inclusive
        if (i % 2 !== 0){ // if the number is not divisible by 2  
            console.log(i); // print number
        }
    }
};
printOdds1to21(); // corrected: not calling function because it doesn't return anything

/*
    3. Sum of Numbers 50–100
    Create a function sum50to100() that returns the sum of all numbers from 50 to 100 (inclusive).
*/
function sum50to100() {
    let sum = 0; // starting at 0
    for (let i = 50; i <= 100; i++) { // iterating through numbers 50 to 100
        sum += i; // adding numbers to sum
    }
    return sum; // print sum
    
};
console.log(sum50to100()); // corrected: callling function because it returns sum 

/*
    4. Create Array from 5 to 15
    Create a function makeArray5to15() that returns a new array containing the numbers 5 through 15.
*/
function makeArray5to15() {
    numbers5to15 = []; // declaring new array
    for (i = 5; i <= 15; i++) { // iterating through numbers 5 to 15 inclusive
        numbers5to15.push(i); // adding each number to new array
    }
    console.log(`New Array: [${numbers5to15}]`); // print new array
};
makeArray5to15();


/*
    5. Print All Items in This Array
    Create a function printItems(arr) that prints each item in a given array.
*/
function printItems(arr5) {
    for (num of arr5) { // iteratiing throughh each item in the array
        console.log(num); // print items
    }
};
// Test
drinks = ["soda", "coffee", "tea", "water", "milk"];
printItems(drinks);

/*
    6. Print Index + Value for Each Item
    Create a function printIndexAndValue(arr) that prints the index and value for each item in a given array.

    Example output:
    Index 0: dog
    Index 1: cat
    Index 2: snake
*/
function printIndexAndValue(arr6) {
    for (let i = 0; i < arr6.length; i++) { // iterating through items in the array
        console.log(`Index ${i}: ${arr6[i]}`); // printing index to corresponding index value in array
    }
};
// Test
wildAnimals = ["lions", "zebras", "monkeys", "pandas", "kangaroos", "racoons"];
printIndexAndValue(wildAnimals);

/*
    7. Count All Vowels in a String
    Create a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in the given string. Count both uppercase and lowercase vowels.
*/
function countVowels(str) {
    let words = str.toLowerCase(); // ensuring that the input is lowe case letters
    let counter = 0; // starting coubnt at 0
    let vowels = ["a", "e", "i", "o", "u"]; // an array of vowel letters to compare to
    for (let vowelLetter of words) { // iterating through each character in the string
        if (vowels.includes(vowelLetter)){ // checking for vowel letters
            counter++; // counting each vowel letter found in string
        }
    }
    return counter; //return count
};
// Test
numOfVowels = "Ainembabazi";
console.log(countVowels(numOfVowels));


/*
    8. Triple All Even Numbers
    Create a function tripleEvens(arr) that modifies each even number in the array by tripling its value. Return the modified array.
    Note: Perform the modification(s) in-place. Do not create a new array.
*/
function tripleEvens(arr8) {
    for(let i = 0; i < arr8.length; i++) { // iterating through the numbers in the array
        if (arr8[i] % 2 === 0) { // checkint to see if numbers are even 
            arr8[i] *= 3; // if even triple number
        }
    }
    return arr8; // return modified array 
};
// Test
checkEvens = [8, 9, 23, 82,  7, 90, 41, 18];
console.log(tripleEvens(checkEvens));



/*
    9. Set All Negatives to 1
    Create a function setAllNegativesTo1(arr) that modifies each negative value in a given array to 1. Return the modified array.
    Note: Perform the modification(s) in-place. Do not create a new array.
*/
function setAllNegativesTo1(arr9) {
    for (i = 0; i < arr9.length; i++) { // iteraring through every number in the array
        if (arr9[i] < 0) { // checking if number is less than 0
            arr9[i] = 1; // assign the number to 1 if it is found to be less than 0
        }
    }
    return arr9; // returning modified array
};
// Test
checkNegative = [12, -7, -33, -78642, 8, 52, -34, 71, 99, 1, -4];
console.log(setAllNegativesTo1(checkNegative));


/*
    10. Count Items Greater Than a Target
    Create a function countGreaterThan(arr, target) that returns how many values in the array are greater than the target number.
*/
function countGreaterThan(arr0, target) {
    count = 0; // starting count at 0
    for (let num of arr0) { // iteratiing through each number in the array
        if (num > target) { // checking if the number's value is greater than the target number
            count++; // counting numbers with values greater than the threshold
        }
    }
    return count; // return count value
};
// Test
given = [69, 70, 686, 4, 9, 163, 3, 195, 101];
greaterThan = 100;
console.log(countGreaterThan(given, greaterThan));



/*
    11. Find the Smallest Value in an Array
    Create a function findMin(arr) that returns the smallest number in a given array.
*/
function findMin(arr11) {
    let min = arr11[0]; //assigning the least value number (min) with the first value
    for (let nums11 of arr11) { // iterating through array
        if (nums11 < min) { // checking if min is less than the next number
            min = nums11; // if less than assign min with number
        }
    }
    return min; // return max
};
// Test
checkingMin = [-764, 3, 645, 88, 9, 0, 2];
console.log(findMin(checkingMin));


/*
    12. Double the Value of All Odd Indexes
    Create a function doubleOddIndexes(arr) that doubles the value at every odd index of the array.
    Note: Perform the modification(s) in-place. Return the modified array.
*/
function doubleOddIndexes(arr12) {
    for (let i = 0; i < arr12.length; i++) { // iteraring through every number in the array
        if (i % 2 !== 0) { // checking if the index of number is not divisible by 2
            arr12[i] *= 2; // if not divisible by 2 double the number
        }
    }
    return arr12; // returning modified array
};
// Test
doubleOdds = [9, 2, 27, 41, 14, 17, 84];
console.log(doubleOddIndexes(doubleOdds));
// corrected: to double values at odd indexes not doubling values with odd values 


/*
    13. Print All Even Indexed Items
    Create a function printEvenIndexedItems(arr) that prints the items at even-numbered indexes only.
*/
function printEvenIndexedItems(arry) {
    for (let i = 0; i < arry.length; i++) { // iterating through items of array
        if (i % 2 === 0) { // checking if index of item in array is an even number
            console.log(arry[i]); // print item if index is even
        }
    }
};
// Test
evenIndexed = [6, 5, 4, 8, 7, 9, 2, 3];
printEvenIndexedItems(evenIndexed);



/*
    14. Check If All Values Are Positive
    Create a function allPositive(arr) that returns true if all numbers in the array are greater than zero. Otherwise, return false.
*/
function allPositive(arr14) {
    for (let i = 0; i < arr14.length; i++) { // iterating through numbers in the array
        if (arr14[i] <= 0) { // checking if the number is less than or equal to 0
            return false; // if array includes numbers less than or equal to 0 return false
        }
    }
    return true; // if array has no numbers less than or equal to 0 return true
};
// Test
checkNeg = [3, -1, 0, 9, 11, -7];
console.log(allPositive(checkNeg));
checkPos = [87, 5, 4, 9, 2, 1];
console.log(allPositive(checkPos));

/*
    15. Find How Many Times a Value Appears
    Create a function countOccurrences(arr, target) that returns how many times the target value appears in the array.
*/
function countOccurrences(arr05, target) {
    let count = 0;
    for (let num05 of arr05) { // iterating through items in the array 
        if (num05 === target) { // checking if item is same as target
            count++; // increasing count if item is same as target
        }
    }
    return count; // return count
};
// Test
repeat = [2, 0, 7, 2, 5, 4, 2, 0, 2, 4, 6, 2];
targeting = 2;
console.log(countOccurrences(repeat, targeting));

