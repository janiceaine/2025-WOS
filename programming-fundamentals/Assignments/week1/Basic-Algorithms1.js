/* 
    1. Print Numbers 5 to 50
    Write a function print5to50() that logs all numbers from 5 to 50. 
*/
function print5to50() {
    for (i = 5; i <= 50; i++) { // iterating through numbers 5 to 50
        console.log(i); // print numbers
        
    }
};
print5to50();

/* 
    2. Print All Even Numbers from 10 to 40
    Write a function printEvens10to40() that logs all even numbers between 10 and 40. 
*/
function printEvens10to40() {
    for (i = 10; i <= 40; i++) { // iterating through numbers 10 to 40
        if (i % 2 === 0) { // if number is divisible by 2
            console.log(i); // print number
            
        }
    }
};
printEvens10to40();


/* 
    3. Print Multiples of 5 up to 100
    Write a function printMultiplesOf5() that logs all numbers from 5 to 100 that are divisible by 5. 
*/
function printMultiplesOf5() {
    for (let i = 5; i <= 100; i++) { // iterating through numbers 5 to 100
        if (i % 5 === 0) { // if number is divisible by 5
            console.log(i); 
        }             
    }
};
printMultiplesOf5();


/* 
    4. Print Numbers in Reverse
    Write a function printReverse20to1() that logs numbers from 20 down to 1. 
*/
 function printReverse20t01() {
    for(let i = 20; i >= 1; i--) { // iterating through numbers 1 to 20 in reverse
        console.log(i);   // print number
    }
 };
 printReverse20t01();


/* 
    5. Sum All Numbers from 1 to 100
    Write a function sum1to100() that returns the total sum from 1 to 100. 
*/
function sum1to100() {
    sum = 0; // staring the sum at 0
    for(let i = 1; i <= 100; i++) { // iterating through numbers 1 to 100 
        sum += i; // adding the sum to the next number
    }
    console.log(sum); // print sum
    
};
sum1to100();


/* 
    6. Create an Array from 10 to 30
    Write a function createArray10to30() that returns an array containing the numbers from 10 to 30. 
*/
function createArray10to30() {
    array10To30 = [];
    for(i = 10; i <= 30; i++) { // iterating through the loop to get numbers 10 to 30
        array10To30.push(i); // adding the numbers to array
    }
    console.log(array10To30); // print array
};
createArray10to30(); // invoke / calling array


/* 
    7. Print All Items in an Array
    Write a function printArrayItems(arr) that logs each item in the given array. 
*/
function printArrayItems(arr){
    for (let num of arr) { //iteratin through the items in array
        console.log(num);  // printing items
    }
};
// test
items = ["cat", "dog", "goat", "lama", "pony"];
printArrayItems(items);


/* 
    8. Count Positive Numbers
    Write a function countPositives(arr) that returns the number of elements in the array that are greater than zero. 
*/


function countPositives(arr) {
    let count = 0;
    for (num of arr) { // iterating through each number in the array
        if (num > 0) { // if  the number is greater than 0 (positive number not negative)
            count++; // will increase count by 1
        }
    }
    return count;
};
// Test
arr1 = [-8, 8, 6, -20, 0.1, -4, 33];
console.log(countPositives(arr1));


/* 
    9. Print Squares of Numbers 1 to 20
    Write a function printSquares1to20() that logs the square of each number from 1 to 20. 
*/
function printSquares1to20() {
    squaresArr = [];
    for (let i = 1; i <= 20; i++) {
        square = i * i;
        squaresArr.push(square);
    }
    return squaresArr;
};
// Test
squares1to20 = printSquares1to20();
console.log(squares1to20);



/* 
    10. alculate Average of an Array
        Write a function averageArray(arr) that returns the average (mean) value of all numbers in the given array. 
*/
function averageArray(arr) {
    if (arr.length === 0) { // if there are no items in the array
        return 0;
    } else {
        let totalArr = 0;
        for (num of arr) { // iterating through each number 
            totalArr += num; // getting the sum of all numbers in the array
        }
        let totalAvr = totalArr / arr.length; //variable for average
        return totalAvr;
    }
}
// Test
let arr = [5, 9, 13, 7, 3];
console.log(averageArray(arr));

