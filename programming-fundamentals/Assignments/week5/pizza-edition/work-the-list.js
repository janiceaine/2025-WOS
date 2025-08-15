const orders = [
  { id: 1, toppings: ["mushroom", "cheese"], size: "large", isDelivered: false },
  { id: 2, toppings: ["pineapple", "sausage", "veggie"], size: "small", isDelivered: true },
  { id: 3, toppings: ["cheese", "veggie", "olive"], size: "small", isDelivered: false },
  { id: 4, toppings: ["onion"], size: "medium", isDelivered: false },
  { id: 5, toppings: ["cheese", "pineapple", "olive"], size: "medium", isDelivered: false },
  { id: 6, toppings: ["pepperoni", "sausage", "pineapple"], size: "large", isDelivered: false },
  { id: 7, toppings: ["cheese"], size: "large", isDelivered: true },
  { id: 8, toppings: ["bacon", "pepperoni", "olive"], size: "small", isDelivered: false },
  { id: 9, toppings: ["pepperoni"], size: "small", isDelivered: true },
  { id: 10, toppings: ["olive", "veggie"], size: "medium", isDelivered: true },
  { id: 11, toppings: ["bacon", "onion", "olive"], size: "medium", isDelivered: false },
  { id: 12, toppings: ["green pepper"], size: "medium", isDelivered: true },
  { id: 13, toppings: ["veggie", "cheese", "onion"], size: "large", isDelivered: false },
  { id: 14, toppings: ["mushroom", "onion", "sausage"], size: "large", isDelivered: true },
  { id: 15, toppings: ["pineapple", "green pepper", "sausage"], size: "large", isDelivered: false },
  { id: 16, toppings: ["sausage", "pineapple", "mushroom"], size: "large", isDelivered: false },
  { id: 17, toppings: ["green pepper", "pepperoni"], size: "medium", isDelivered: false },
  { id: 18, toppings: ["green pepper"], size: "medium", isDelivered: true },
  { id: 19, toppings: ["pepperoni", "mushroom", "cheese"], size: "medium", isDelivered: false },
  { id: 20, toppings: ["olive", "green pepper", "onion"], size: "large", isDelivered: true }
];

// 1. Get Undelivered Orders
// Return an array of all orders where isDelivered is false.
const undelivered = orders.filter(order => order.isDelivered === false);
console.log(undelivered);

// 2. List All Toppings
// Return a single array of all toppings, including duplicates.
const allToppings = orders.map(order=> order.toppings).flat();
console.log(allToppings);

// Hint: Use .map() to get toppings arrays, then .flat().

// 3. IDs of Large Pizzas
// Return an array of IDs where the size is "large".
const id = orders
    .filter(order => order.size === "large")
    .map(order => order.id);
console.log(id);


// 4. Undelivered Pizza Sizes
// Return an array of the sizes of pizzas that haven’t been delivered.
const undeliveredId = orders
    .filter(order => order.isDelivered === false)
    .map(order => order.size);
console.log(undeliveredId);


// 5. Filter Orders That Include Pepperoni
// Return all orders that include "pepperoni" in the toppings array.
const toppingsArr = orders.filter(order => order.toppings.includes("pepperoni") );
console.log(toppingsArr);

// 6. Count the Number of Medium Pizzas
// Return the total number of pizzas with size "medium".
const medPizza = orders.filter(order => order.size === "medium").length;
console.log(medPizza);


// 7. Get a List of Unique Toppings
// Return an array of all toppings without duplicates.
const mostToppings = orders
  .map(order => order.toppings).flat()
  .filter((topping, index, arr) => arr.indexOf(topping) === index);
console.log(mostToppings);


// Hint: Use .flat() and new Set().

// 8. Toppings of Delivered Large Pizzas
// Return only the toppings arrays of pizzas that are both "large" and delivered.
const deliveredLarge = orders
  .filter(order => order.size === "large" && order.isDelivered === true)
  .map(order => order.toppings);
console.log(deliveredLarge);

// 9. Generate a Summary of Each Order
// Return a new array where each item looks like:

// { id: 1, summary: "large pizza with mushroom, cheese (not delivered)" }
const summaries = orders.map(order => {
  let deliveryStatus = "not delivered";

  if (order.isDelivered === true) {
    deliveryStatus = "delivered";
  }

  return {
    id: order.id,
    summary: `${order.size} pizza with ${order.toppings.join(", ")} (${deliveryStatus})`
  };
});

console.log(summaries);



// 10. BONUS: Most Common Topping
// Return the topping that appears most frequently across all orders.
const theToppings = orders.map(order => order.toppings).flat();

const toppingCounts = {};
for (const topping of theToppings) {
  if (toppingCounts[topping]) {
    toppingCounts[topping] += 1;
  } else {
    toppingCounts[topping] = 1;
  }
}

let mostCommonTopping = null;
let maxCount = 0;

for (const topping in toppingCounts) {
  if (toppingCounts[topping] > maxCount) {
    maxCount = toppingCounts[topping];
    mostCommonTopping = topping;
  }
}

console.log(`Most common topping: ${mostCommonTopping} (appears ${maxCount} times)`);

