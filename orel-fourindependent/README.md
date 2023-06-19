#TEST

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["garlic", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["garlic", "pineapple"], size: "2" }

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["mushrooms", "susage"], "X-Large");
Expected Output: Pizza { toppings: ["mushrooms", "susage"], size: "4" }

Describe: calculateCost()

Test: "It should return the price of the total order"
Code: const myPizza = new Pizza(["onion", "pineapple"], "medium");
Expected Output: 14