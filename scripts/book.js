import BookDetail from "../components/book_detail"
import { bookSelected, selectElemHandler } from "./shopping_cart_hook"
import data from "/database.json"
import '../styles/book_detail.css'

const searcher = new URLSearchParams(window.location.search)

const bookId = searcher.get("book")
const meta_data = data.books.filter(x => parseInt(x.id) === parseInt(bookId))[0]

const changeBtnStyle = () => {
  const btn = document.querySelector(".select-item")

  if (!bookSelected(bookId)) {
    btn.textContent = "Add to cart"
    btn.classList.add("add-item")
    btn.classList.remove("remove-item")
  } else {
    btn.textContent = "Remove from cart"
    btn.classList.add("remove-item")
    btn.classList.remove("add-item")
  }
}

document.getElementById("book-content").innerHTML = BookDetail(meta_data)
document.querySelector(".select-item").addEventListener("click", () => {
  selectElemHandler(bookId)
  changeBtnStyle()
})

changeBtnStyle()
