// Interface Logic
let form = document.querySelector("form")
let priceELement = document.querySelector("#price")

form.addEventListener("submit", event => {
  event.preventDefault() // prevent refresh