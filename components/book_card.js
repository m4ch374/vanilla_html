import '../styles/book_card.css'

const BookCard = (meta_data) => {
  return `
    <div class="book-card" id="book-${meta_data.id}">
      <button class="book-card-select" id="select-${meta_data.id}">+</button>
      <a href="../pages/book.html?book=${meta_data.id}">
        <div class="img-wrapper">
          <img alt="cover" src="${meta_data.cover}" />
        </div>
        <div class="book-meta">
          <label>${meta_data.title}</label>
          <p>${meta_data.description}</p>
        </div>
      </a>
    </div>
  `
}

export default BookCard
