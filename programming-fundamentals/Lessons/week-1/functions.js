/*
    Functions
    A reusable block of code.
    A series of steps to solve a problem.
    A 'black box' of sorts.
*/

function greet() { // This function is defined to print a greeting message
    console.log('Hello, world!');   // This function prints a greeting message to the console
}
greet(); // Call the function to execute it

/* when declaring functions we call the inputs parameters */
function greet2(name) {
    console.log(`Hello, ${name}`);
    console.log('Hello, ' + name);
    
}
/* when invoking functions we call the inputs arguments */
greet2('Lancelot');


function greet3(name, timeOfDay) {
    console.log(`Good ${timeOfDay}, ${name}!`);
}
greet3('Jenna', 'morning');
// supply the arguments in the same order as the parameters



/* RETURN KEYORD */
function add(num1, num2) {
    return num1 + num2;
}
let Result = add(2, 2);
console.log(Result);

/* 
    var keyword has global or function scope
*/

var fruit = "banana";
function smoothie(){
    var cup = [fruit, 'oat milk'];
    return cup;
}
console.log(fruit); // will access the fruit variable outside the scope of the function

console.log(smoothie);

/* let keyword has block scope */
for (let i = 0; i < 5; i++) {
    console.log(i);
    
}

/* const keyword has block scope and can't be reassigned */

const number = 23;
// number = 3; - cannot reassign a cont varriable
console.log(number);

const nums = [1, 2, 3, 4, 5];
nums[0] = 6;
// nums = [6, 7, 8, 9]; - this is a reassignment

console.log(nums);


