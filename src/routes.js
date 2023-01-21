const addBookHandler = require('./handler/add_book_handler')
const getAllBooksHandler = require('./handler/get_all_books_handler')
const getBookByIdHandler = require('./handler/get_book_by_id_handler')

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
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler
  }
]

module.exports = routes
