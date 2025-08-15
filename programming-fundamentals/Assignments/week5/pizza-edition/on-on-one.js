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

// 9. Generate a Summary of Each Order
// Return a new array where each item looks like:
const allToppings = orders.flatMap(order => order.toppings);

const toppingCounts = {};
for (const topping of allToppings) {
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

