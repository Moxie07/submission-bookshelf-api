const addBookHandler = require('./handler/add_book_handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  }
]

module.exports = routes
