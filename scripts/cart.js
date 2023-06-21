import CartItem from "../components/cart_item";
import { getCartMetaData, selectElemHandler } from "./shopping_cart_hook";

let metaDatum = getCartMetaData()

metaDatum.forEach(x => {
  document.querySelector("#cart-items").innerHTML += CartItem(x)
})

const removeCartItem = (bookId) => {
  const cartItem = document.querySelector(`#book-${bookId}`)
  document.querySelector("#cart-items").removeChild(cartItem)
}

const clearCart = () => {
  if (localStorage.getItem("cart")) {
    localStorage.removeItem("cart")
    document.querySelector("#cart-items").remove()
    metaDatum = []
    document.querySelector("#cart-subtotal").textContent = "$0.00"
  }
}

const updateSubtotal = () => {
  const subtotal = metaDatum.reduce((acc, x) => {
    return acc + parseFloat(x.price)
  }, 0)

  document.querySelector("#cart-subtotal").textContent = `$${subtotal.toFixed(2)}`
}

document.querySelectorAll(".cart-remove").forEach(x => {
  const bookId = x.id.split("-")[1]
  x.addEventListener("click", () => {
    selectElemHandler(bookId)
    removeCartItem(bookId)
    metaDatum = metaDatum.filter(x => x.id.toString() !== bookId)
    updateSubtotal()
  })
})

document.querySelector("#clear-cart").addEventListener("click", clearCart)

document.querySelector("#buy-button").addEventListener("click", () => {
  clearCart()
  alert("You bought some books")
})

updateSubtotal()
