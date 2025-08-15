function shout (fn) {
    console.log ("AND NOW...");
}
function cheer() {
    console.log('Woooohoooo!');
}
shout(cheer());


// COIN CHALLENGE
function makeChange(cents) {
    let change = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };
    change.quarters = Math.floor(cents / 25); // finding number of quarters
    cents %= 25; // from remaining cents
    change.dimes = Math.floor(cents / 10); // finding number of dimes
    cents %= 10; // from remaining cents
    change.nickles = Math.floor(cents / 5); // finding number of nickles
    cents %= 5; // from remaining cents
    change.pennies = cents; // finding number of pennies
    return change; // return change
};
console.log(makeChange(94));


// DICE ROLLER
function rollDice() {
    randomNumber = Math.floor(Math.random() * 6) + 1; // getting a random number between 1 - 6 (inclusive) when a dice is rolled.
    return randomNumber; // return random number
};
console.log(rollDice());

function totalDice() {
    dice1 = Math.floor(Math.random() * 20) + 1; // random number between 1 - 20 (inclusive) when dice1 is rolled
    dice2 = Math.floor(Math.random() * 10) + 1; // random number between 1 - 10 (inclusive) when dice2 is rolled
    total = dice1 + dice2; // getting sum result of dice1 and dice2
    return total; // return sum
};
console.log(totalDice());
