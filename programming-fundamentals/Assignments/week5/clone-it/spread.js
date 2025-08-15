// 1. Add to the end of an array
const fruits = ["apple", "banana"];
// Add "cherry" to the end (without using .push)
const moreFruit = [...fruits, "cherry"];
console.log(moreFruit);


// 2. Remove the first item in an array
const queue = ["first", "second", "third"];
// Remove "first" (without using .shift)
const [, ...shortQueue] = queue;
console.log(shortQueue);


// 3. Update an object property
const user = { name: "Ada", loggedIn: false };
// Change loggedIn to true (without mutation)
const newUser = { ...user, loggedIn: true };
console.log(newUser);


// 4. Add a new property to an object
const product = { id: 123, name: "Mug" };
// Add a new property: inStock: true
const newProduct = { ...product, inStock: true };
console.log(newProduct);


// 5. BONUS: Use a dynamic key
const key = "category";
const value = "kitchen";
// Add this key-value pair to the product object above
const product1 = { ...newProduct, [key]: value };
console.log(product1);