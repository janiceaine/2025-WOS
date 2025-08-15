// 8. Given the following restaurant object:
const restaurant = {
  name: "Taste of Italy",
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
const { name, menu: { mainCourses: [dish1, dish2]} } = restaurant;

// Verify:
console.log(`${name}, ${dish1}, ${dish2}`) // name, dish1, and dish2.
