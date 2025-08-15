// 1. Given the following book object:
const book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  year: 1979,
  genre: "Science Fiction"
};
// Task:
// Destructure the title and author properties into separate variables.
const { title, author } = book;

// Verify:
console.log(title, author); // both title and author to ensure they hold the correct values.


// 2. Given the following userProfile object:
const userProfile = {
  username: "codergal",
  email: "codergal@example.com",
  // bio property is missing
};
// Task:
// Destructure the username, email, and bio properties. If bio is not present, provide a default value of "No bio available.".
const { username, email, bio = "No bio available." } = userProfile;
// Verify:
console.log(username, email, bio); //all three variables.


// 3. Given the following developer object:
const developer = {
  name: "Alice",
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Python"]
  },
  experience: 5
};
// Task:
// Destructure the name property and the frontend array from the nested skills object.
const {
    name,
    skills: { frontend },
} = developer;
//Verify:
console.log(name, frontend) // name and the frontend array.


// 4. Apply object destructuring directly in function parameters.

// Task:
// Create a function called printProductDetails that takes an object as an argument.

// Inside the function:
// Use destructuring in the function parameters to access the productName, price, and stock properties.

// Test with this object:
const product = {
  productName: "Laptop",
  price: 1200,
  stock: 50
};
function printProductDetails({ productName, price, stock }) {
    console.log({ productName, price, stock });
};
printProductDetails(product);



// 5. Given the following rgbColors array:
const rgbColors = [255, 0, 128];
// Task:
// Destructure into red, green, and blue variables.
const { red, green, blue } = rgbColors;
// Verify:
console.log(rgbColors) // each variable to confirm the values.



// 6. Given the following data array:
const data = ["apple", "banana", "cherry", "date"];
// Task:
// Destructure to get only the first ("apple") and third ("cherry") elements.
const [first, , third] = data; 

// Verify:
console.log(`${first}, ${third}`) // the variables holding "apple" and "cherry".


// 7. Given the following variables:
let a = 10;
let b = 5;
// Task:
// Use array destructuring to swap the values without a temporary variable.
[a, b] = [b, a]
// Verify:
console.log([a, b]) // a and b after the swap.


// 8. Given the following restaurant object:
const restaurant = {
  name1: "Taste of Italy",
  location: "123 Main St",
  menu: {
    appetizers: ["Garlic Bread", "Calamari"],
    mainCourses: ["Pasta Carbonara", "Pizza Margherita", "Steak"],
    desserts: ["Tiramisu", "Panna Cotta"]
  },
  rating: 4.5
};
// Task:
// Destructure the name property from restaurant.
// Destructure the mainCourses array from the menu object.
// Destructure the first two main courses into dish1 and dish2.
const { name1, menu: { mainCourses: [dish1, dish2]} } = restaurant;

// Verify:
console.log(`${name1}, ${dish1}, ${dish2}`) // name, dish1, and dish2.
