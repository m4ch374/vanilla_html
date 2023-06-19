import CartItem from "../components/cart_item";
import { getCartMetaData, selectElemHandler } from "./shopping_cart_hook";

const metaDatum = getCartMetaData()

metaDatum.forEach(x => {
  document.querySelector("#cart-items").innerHTML += CartItem(x)
})

const removeCartItem = (bookId) => {
  const cartItem = document.querySelector(`#book-${bookId}`)
  document.querySelector("#cart-items").removeChild(cartItem)
}

document.querySelectorAll(".cart-remove").forEach(x => {
  const bookId = x.id.split("-")[1]
  x.addEventListener("click", () => {
    selectElemHandler(bookId)
    removeCartItem(bookId)
  })
})

document.querySelector("#clear-cart").addEventListener("click", () => {
  if (localStorage.getItem("cart")) {
    localStorage.removeItem("cart")
    document.querySelector("#cart-items").remove()
  }
})
