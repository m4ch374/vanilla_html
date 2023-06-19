import BookDetail from "../components/book_detail"
import data from "/database.json"

const searcher = new URLSearchParams(window.location.search)

const bookId = searcher.get("book")
const meta_data = data.books.filter(x => parseInt(x.id) === parseInt(bookId))[0]

document.getElementById("book-content").innerHTML = BookDetail(meta_data)
