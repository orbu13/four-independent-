// Interface Logic
let form = document.querySelector("form")
let priceELement = document.querySelector("#price")

form.addEventListener("submit", event => {
  event.preventDefault() // prevent refresh

  // get the size of piza
  let size = document.getElementById("size").value

  // select all toppings
  let toppingEls = document.querySelectorAll(".toppings")
  let toppings = []

  // loop through and get checked topping
  for (let i = 0; i < toppingEls.length; i++) {
    const topping = toppingEls[i];
    if (topping.checked) {
      toppings.push(topping.name)
    }
  }

  let pizza = new Pizza(toppings, size)
  console.log(pizza)
  let price = pizza.calculateCost()
  priceELement.innerHTML = "total price is: " + price;
})

// Business Logic
class Pizza {
  constructor(toppings, size) {
    this.toppings = toppings
    this.size = size
  }
  calculateCost() {
    let total = 1;
    for (let i = 0; i < this.toppings.length; i++) {
      let topping = this.toppings[i]

      if (topping == "onion") {
        total += 2

      } else if (topping == "garlic") {
        total += 5
      } else if (topping == "pineapple") {
        total += 4
      } else {
        total += 1
      }
    }

    total = total * this.size
    console.log("total price for your pizza is " + total)
    return total
  }
}