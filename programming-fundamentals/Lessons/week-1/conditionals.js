/* 
    Conditional Statements
    if, else if, else


*/

/*
    == 2 equal signs only value
    === 3 equal signs value and type
*/

let isSweltering = false;
let isMelting = false;

if(isSweltering === true) {
    console.log('Dont\'t wear a parka, you fool');
} else if (isMelting) {
    console.log('Drink plenty of water');
} else {
    console.log('be comfy');
}

/* 
    FizzBuzz 
    Print numbers 1 t0 100
    if the current number is divisible by 3 print "fizz"
    if the current number is divisible by 5 print "buzz"
    if the current number is divisible by both 3 and 5 print "fizzbuzz" instead of the number
*/

// psuedocode
// for loop starting at 1 ending at 100
// in loop, if statement condition i % 3 == 0
// most strict condition goes on top

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // most strict condition checking if number is divisible by 3 and 5
        console.log('fizzbuzz');
    }
    else if (i % 3 === 0) { // checks if number is divisible by 3
        console.log('fizz');
    } 
    else if (i % 5 === 0) { // checks if number is divisible by 5
        console.log('buzz');
        
    } else {
        console.log(i);
        
    }

}
