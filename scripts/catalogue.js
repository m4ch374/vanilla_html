import BookCard from "../components/book_card"
import data from '/database.json'

const book_catalogue = document.querySelector("#book-catalogue")

data.books.forEach(b => {
  book_catalogue.innerHTML += BookCard(b)
})
