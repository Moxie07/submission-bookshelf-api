const books = require('../books')

const getAllBooksHandler = (request, h) => {
  const booksArray = books.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher
  }))
  const response = h.response({
    status: 'success',
    data: {
      books: booksArray
    }
  })
  response.code(200)

  return response
}

module.exports = getAllBooksHandler
