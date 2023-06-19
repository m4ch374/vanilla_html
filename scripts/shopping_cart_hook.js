import data from '/database.json'

const selectElemHandler = (bookId) => {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify(['0']))
  }

  let cart = JSON.parse(localStorage.getItem("cart"))
  const key = bookId
  if (cart.includes(key)) {
    cart = cart.filter(x => x !== key)
  } else {
    cart.push(key)
  }

  localStorage.setItem("cart", JSON.stringify(cart))
}

const bookSelected = (bookId) => {
  if (!localStorage.getItem("cart")) {
    return false
  }

  if (localStorage.getItem("cart").includes(bookId)) {
    return true
  }

  return false
}

const getCartMetaData = () => {
  if (!localStorage.getItem("cart")) {
    return []
  }

  const cart = JSON.parse(localStorage.getItem("cart"))

  return data.books.filter(x => cart.includes(x.id.toString()))
}

export {
  selectElemHandler,
  bookSelected,
  getCartMetaData
}
