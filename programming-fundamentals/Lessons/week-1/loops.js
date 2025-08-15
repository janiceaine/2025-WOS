/* Loops */

for (let i = 0; i <12; i++) {
    console.log('Hello'); 
}

/*
 4 components of a for loop
 
 1. Minion (i)
 2. Starting value of our minion (initialization)
 3. When the minion stops (condition)
 4. How the minion changes (iteration)
*/

/*
    while loops

    Deconstructed while loop.
*/
// i is our minion, it starts at 0
// it will continue to run as long as the condition is true
// it will increment by 1 each time it runs
// it will stop when i is no longer less than 12
let i = 0; // initialization
while (i < 12) { // condition
    // code to be executed
    console.log('Hello');
    i++; // increment i by 1    
}

/* for...of loop */
let colors = ['red', ' blue', 'yellow', 'green', 'purple'];

for (let color of colors) { // for each color in the colors array
    console.log(color);
}
 
// A while loop is used when you don't know how many times you need to loop,
// or when you want to loop until a certain condition is met.
// A for loop is used when you know how many times you need to loop, or when
// you want to loop through a specific range of values.
// A for...of loop is used to iterate over iterable objects like arrays, strings, or sets,
// allowing you to access each element directly without needing an index.

// A for...in loop is used to iterate over the keys of an object.
let person = { name: 'Alice', age: 25, city: 'New York' };
for (let key in person) {
    console.log(key + ': ' + person[key]);
}

/* Do...while loop */
let j = 1;
do {
    console.log(j);
    j++;
} while (false);
// do...while loops will always execute at least once, even if the condition is false.
