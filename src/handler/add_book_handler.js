const { nanoid } = require('nanoid')
const books = require('../books')

const addBookHandler = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload

  const id = nanoid(16)
  const finished = Boolean(pageCount === readPage)
  const insertedAt = new Date().toISOString()
  const updatedAt = insertedAt

  const newBook = {
    name, year, author, summary, publisher, pageCount, readPage, reading, id, finished, insertedAt, updatedAt
  }

  books.push(newBook)

  const isIdInserted = books.filter((books) => books.id === id).length > 0
  const isTitleInserted = books.findIndex((book) => book.name === newBook.name)
  const isReadPageCorrect = readPage <= pageCount

  if (!isIdInserted) {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal ditambahkan, id buku tidak ditemukan'
    })
    response.code(400)
    return response
  }
  if (isTitleInserted) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku'
    })
    response.code(400)
    return response
  }
  if (!isReadPageCorrect) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    })
    response.code(400)
    return response
  }
  if (isIdInserted && !isTitleInserted && isReadPageCorrect) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
        bookName: name,
        bookYear: year,
        bookAuthor: author,
        bookSummary: summary,
        bookPublisher: publisher,
        bookPageCount: pageCount,
        bookReadPage: readPage,
        bookReading: reading
      }
    })
    response.code(201)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan'
  })
  response.code(500)
  return response
}

module.exports = addBookHandler
