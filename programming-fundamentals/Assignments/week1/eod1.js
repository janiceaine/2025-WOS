/* Whats the type */
let name = "Ada";
let age = "123"; // Assinged as string instead of number which changes the type of from number
let isStudent = true;
let backpack;
let notebook = null;

console.log(typeof name); 
console.log(typeof age); // This will print 'string' because age is assigned as a string


/* Compare Two Numbers */
let a = 7;
let b = 12;

if (a > b) {
    console.log('a is greater than b'); // This will print if a is greater than b
} else if (a < b) {
    console.log('a is less than b'); // This will print if a is less than b
} else {
    console.log('a is equal to b'); // This will print if a is equal to b
};



/* Movie Night Eligibility */
let AGE = 15;

if (AGE >= 13) {
    console.log('You can watch PG-13 OR R-rated movie.'); // This will print if age is 13 or older
} else if (AGE < 13 && AGE > 5) {
    console.log('You can only watch G or PG-rated movies.'); // This will print if age is between 6 and 12
} else {
    console.log('You are too young for movies.'); // This will print if age is 5 or younger
}



/* Traffic Light Logic */
let light = "green";

if (light === "green") { // checking if light is green
    console.log("Go");
} else if (light === "yellow") { // checking if light is yellow
    console.log("Slow down");
} else if (light === "red") { // checking if light is red
    console.log("Stop");
} else {
    console.log("Invalid traffic light color"); // if light is not green, yellow, or red
}

/* Boolean Practice */
let isRaining = false;
let hasUmbrella = true;

if (isRaining && hasUmbrella) { // if it is not raining and you have an umbrella
    console.log('Go to the park.');
    } else if (isRaining && !hasUmbrella) { // if it is not raining and you do not have an umbrella
        console.log('Go to the park.');
    } else if (!isRaining && hasUmbrella) { // if it is raining and you have an umbrella
        console.log('Go to the park, and use the umbrella.');
    } else { // if it is raining and you do not have an umbrella
        console.log('Stay home.');
    }
    