import '../styles/book_detail.css'

const BookDetail = (meta_data) => {
  return `
    <div id="${meta_data.id}" class="details">
      <div class="details-banner">
        <img alt="cover" src="${meta_data.cover}" />
        <div class="details-banner-text">
          <h1>${meta_data.title}</h1>
          <div>by some random dude</div>
          <button class="add-item">Add to cart</button>
        </div>
      </div>

      <h1>Plot</h1>
      <hr class="seperator" />
      <p>
        ${meta_data.description}
      </p>
    </div>
  `
}

export default BookDetail
