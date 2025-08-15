// 4. Add a new property to an object
const product = { id: 123, name: "Mug" };
// Add a new property: inStock: true
const newProduct = {...product, inStock: true };
console.log(newProduct);

// 5. BONUS: Use a dynamic key
const key = "category";
const value = "kitchen";
// Add this key-value pair to the product object above
const product1 = { ...newProduct, [key]: value };
console.log(product1);