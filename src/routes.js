const addBookHandler = require('./handler/add_book_handler')
const getAllBooksHandler = require('./handler/get_all_books_handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  }
]

module.exports = routes
