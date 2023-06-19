import BookCard from "../components/book_card"
import data from '/database.json'
import { bookSelected, selectElemHandler } from "./shopping_cart_hook"

const book_catalogue = document.querySelector("#book-catalogue")

data.books.forEach(b => {
  book_catalogue.innerHTML += BookCard(b)
})

const changeBtn = (btn) => {
  const btnId = btn.id
  const bookId = btnId.split("-")[1]

  if (!bookSelected(bookId)) {
    btn.textContent = "+"
    btn.classList.add("book-card-add")
    btn.classList.remove("book-card-remove")
  } else {
    btn.textContent = "-"
    btn.classList.add("book-card-remove")
    btn.classList.remove("book-card-add")
  }
}

document.querySelectorAll(".book-card-select").forEach(x => {
  x.addEventListener("click", () => {
    const bookId = x.id.split("-")[1]
    selectElemHandler(bookId)
    changeBtn(x)
  })

  changeBtn(x)
})
