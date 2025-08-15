// 1. Say Hello
function sayHello() {
    console.log('Hello, World!'); // prints "Hello, World"
}
sayHello(); // invokiing function


// 2. Get your favorite Color 
function getFavoriteColor() {
    let favoriteColor = "green";
    return favoriteColor; // returning favorite color
}
console.log(getFavoriteColor()); // printing / logging function 



// 3. Make a Pizza
function makePizza(topping) {
    // topping = ['mushrooms', 'bacon', 'salami', 'pepperoni', 'cheese']; just a list to chooe from
    return `Here's your pizza with ${topping}!`; // string to return 
}
console.log(makePizza('mushrooms')); // printing function
makePizza('salami'); // the rest return toppings but do not print them on the screen
makePizza('bacon'); 
makePizza('pepperoi'); 
makePizza('cheese'); 


// 4. Add Two Numbers
function add(x, y) {
    let sum = x + y; // sum of two numbers
    return sum; // returns sum of two numbers
}
add(4, 5); // calling funtion 
console.log(add(4, 5)); // printing result


// 5. Greet a User
function greetUser(name) { 
    return `Hello, ${name}!`; // returns name
}
console.log(greetUser('Cynthia')); // prints function

// 6. Get a Grade Message
function gradeMessage(score) {
    if (score >= 90) { // checking if score is equal or greater than 90
        return "Great Job!";
    } else if (score >= 70 && score <= 89){ // checking if score is equal or graeter than 70 and less than or equal to 89
        return "Nice effort!";
    } else { // if above conditions are not met
        return "Keep trying!"
    }
}
console.log(gradeMessage(92));
console.log(gradeMessage(87));
console.log(gradeMessage(45));


// 7. Describe a Pet
function describePet(type, name) {
    return `My pet ${type} is named ${name}.` // returns statement pet type and pet name
}
console.log(describePet('cat', 'Garfield')); // when arguments are passed correctly in respect to the parameters
console.log(describePet('Odie', 'Dog')); // weird output when positions of values are changed from position of parameter


// 8. Double the Number
function double(n) {
    return n * 2; // returns the number mupltiplied by 2
}
result = double(6); //variable to store function result
console.log(result); // printing result
