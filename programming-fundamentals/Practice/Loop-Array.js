// 1. Print Each Item

let colors = ["red", "green", "blue"];

for(let color of colors) { // Using for...of loop to iterate through colors
    console.log(color);
}


// 2. Print Each Item with Its Index

for (let color in colors) { // Using for...in loop to iterate through indices of colors
    console.log(color + ": " + colors[color]);
}


// 3. Count the Number of Even Numbers

let numbers = [2, 7, 4, 9, 12, 5];
function countEvenNumbers(numbers) {
    let count = 0;
    for (let number of numbers) {
        if (number % 2 === 0) { // Check if the number is even
            count++; // Increment the count
        }
    }
    return count; // Return the total count of even numbers
}
console.log(countEvenNumbers(numbers)); // Call the function and print the result


// 4. Find the Total Sum

let points = [10, 15, 20, 5];
function totalSum(points) {
    let sum = 0;
    for (let point of points) {
        sum += point; // Adding each point to the sum
    } 
    return sum; // Returning the total sum
}
console.log(totalSum(points)); 

    

// 5. Print Only the Vowels

let letters = ["a", "b", "c", "e", "o", "x"]; // Array of letters
let vowels = ['a', 'e', 'i', 'o', 'u']; // Array of vowels
let result = []; // Array to store vowels found
for (let letter of letters) { // iterating through each letter
    if (vowels.includes(letter)) { // checking if each letter i a vowel
        result.push(letter); // if the letter is found to be a vowel, it is added to the result array
    }
}
console.log(result); 


// 6. Find the Longest Word
let words = ["apple", "banana", "cherry", "date"];
let longestWord = "";
for (word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord);


// 7. Reverse the Drawer
function reverseString(string) {  // Function to reverse a string
    let reversedString = ""; // An empty string to hold the reversed result

    for (let i = string.length - 1; i >= 0; i--) { // starting from the end of the string going to the beginning 
        reversedString += string[i];
    }
    return reversedString;
}

console.log(reverseString("Drawer")); // Call the function and print the reversed string


// 8. Print Items Longer than 3 Letters

let pets = ["cat", "dog", "parrot", "fish"]; // Array of pet names
let items = [];
for (let pet of pets) { // Iterating through each pet
    if (pet.length > 3) { // Checking if the pet's name is longer than 3 letters
        items.push(pet); // Printing the pet if its name is longer than 3 letters
    }

}
