import '../styles/cart_item.css'

const CartItem = (metaData) => {
  return `
    <div class="shoping-cart-item-wrapper" id="book-${metaData.id}">
      <div class="shopping-cart-item-banner">
        <img alt="cover" src="${metaData.cover}">
        <div>
          <h1>${metaData.title}</h1>
          <span>by ${metaData.author}</span>
        </div>
      </div>
      <div>
        <h1>$${metaData.price}</h1>
        <button class="cart-remove" id="cart-${metaData.id}">x</button>
      </div>
    </div>
  `
}

export default CartItem
